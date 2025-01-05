import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react'; // For getting the session of the logged-in user
import Resume from '@/models/Resume'; // Importing your Resume model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Get the session for the logged-in user
  const session = await getSession({ req });

  // Log the session for debugging
  console.log("Session:", session);

  // If the session is not available, return an error response
  if (!session || !session.user) {
    return res.status(401).json({ message: 'Unauthorized, please login first.' });
  }

  try {
    // Fetch all resumes that are associated with the logged-in user’s email (userId)
    const resumes = await Resume.find({ userId: session.user.email });

    if (resumes.length === 0) {
      return res.status(404).json({ message: 'No resumes found for this user.' });
    }

    // Return the resumes to the client
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ message: 'Error fetching resumes.' });
  }
}
