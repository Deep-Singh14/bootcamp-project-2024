import { NextApiRequest, NextApiResponse } from 'next';
import Blog from '@/database/blogSchema'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const { slug } = req.query;

  switch (method) {
    case 'POST':
      try {
        const { user, comment } = req.body;
        const blog = await Blog.findOne({ slug });

        if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
        }

        blog.comments.push({
          user,
          comment,
          time: new Date(),
        });

        await blog.save();
        res.status(200).json(blog);
      } catch (error) {
        res.status(500).json({ message: 'Failed to add comment' });
      }
      break;

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
  }
}
