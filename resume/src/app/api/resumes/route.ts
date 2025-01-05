import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react'; 
import Resume from '@/models/Resume';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const session = await getSession({ req });

  console.log("Session:", session);

  if (!session || !session.user) {
    return res.status(401).json({ message: 'Unauthorized, please login first.' });
  }

  try {
   
    const resumes = await Resume.find({ userId: session.user.email });

    if (resumes.length === 0) {
      return res.status(404).json({ message: 'No resumes found for this user.' });
    }

    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ message: 'Error fetching resumes.' });
  }
}
