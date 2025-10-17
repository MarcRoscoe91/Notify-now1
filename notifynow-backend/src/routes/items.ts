import { Router } from 'express';

const router = Router();

type Item = { id: string; title: string; expiryDate: string; notes?: string };
const items: Item[] = [];

router.get('/', (_req, res) => {
  res.json(items);
});

router.post('/', (req, res) => {
  const { title, expiryDate, notes } = req.body || {};
  if (!title || !expiryDate) return res.status(400).json({ message: 'title and expiryDate are required' });
  const item: Item = { id: Math.random().toString(36).slice(2), title, expiryDate, notes };
  items.push(item);
  res.json({ ok: true, item });
});

export default router;
