import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';
import itemsRoutes from './routes/items';

export const app = express();

app.use(cors({
  origin: [
    'https://notify-now.co.uk',
    'https://www.notify-now.co.uk',
    'https://notifynow-frontend.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.get('/', (_req, res) => res.json({ ok: true, name: 'notifynow-backend (Vercel)' }));

app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);
