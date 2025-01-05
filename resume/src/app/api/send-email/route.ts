import { MongoClient } from 'mongodb';
import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'A valid email is required' });
    }

    const client = new MongoClient(process.env.MONGODB_URL!);  // Use the correct MongoDB URI environment variable

    try {
      // Connect to MongoDB
      await client.connect();
      const db = client.db(); // Connect to the default database
      const collection = db.collection('subscriptions'); // MongoDB collection to store emails

      // Check if the email is already in the database
      const existingEmail = await collection.findOne({ email });
      if (existingEmail) {
        return res.status(400).json({ error: 'Email is already subscribed' });
      }

      // Save the email to the database
      await collection.insertOne({ email, subscribedAt: new Date() });

      // Set up Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Using Gmail as the email service
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your app password (not the regular Gmail password)
        },
      });

      // Send confirmation email
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Subscription Confirmation',
        text: 'Thank you for subscribing to our newsletter!',
      });

      return res.status(200).json({ message: 'Subscription successful, confirmation email sent' });
    } catch (error) {
      console.error('Error sending email or interacting with MongoDB:', error);
      return res.status(500).json({ error: 'An internal error occurred' });
    } finally {
      // Close the MongoDB connection
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
