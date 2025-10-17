import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { z } from 'zod';

const router = Router();
const EmailSchema = z.object({ email: z.string().email() });
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';

router.post('/magic-link', async (req, res) => {
  const parsed = EmailSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: 'Invalid email' });
  const { email } = parsed.data;

  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '60m' });
  const link = `https://notify-now.co.uk/app.html?token=${encodeURIComponent(token)}`;
  console.log('🔗 Magic link for %s: %s', email, link);

  return res.json({ ok: true, message: 'Magic link generated', link });
});

router.get('/verify', (req, res) => {
  const token = (req.query.token as string) || '';
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return res.json({ ok: true, user: payload });
  } catch {
    return res.status(401).json({ ok: false, message: 'Invalid or expired token' });
  }
});

export default router;
