import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/database/db'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query; 
  const { user, comment } = req.body; 

  if (req.method === 'POST') {
    if (!user || !comment) {
      return res.status(400).json({ message: 'User and comment are required' });
    }

    try {
      // Connect to MongoDB
      const { db } = await connectToDatabase();

      // Find the blog by slug
      const blog = await db.collection('blogs').findOne({ slug });

      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      // Create a new comment object
      const newComment = {
        user,
        comment,
 
      };

      // Update the blog by pushing the new comment to the comments array
      await db.collection('blogs').updateOne(
        { slug },
        { $push: newComment }
      );

      // Send success response
      return res.status(200).json({ message: 'Comment added successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error adding comment to database' });
    }
  } else {
    // Method not allowed
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
