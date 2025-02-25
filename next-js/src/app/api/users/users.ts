// import pool from '@/lib/db';
import connection from '../../lib/db';

export default async function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: (arg0: any) => void; }; }) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const conn = await connection();
    const [rows] = await conn.query('SELECT * FROM users');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
