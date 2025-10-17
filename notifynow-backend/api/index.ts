import type { VercelRequest, VercelResponse } from '@vercel/node';
import serverless from 'serverless-http';
import { app } from '../src/app';

const handler = serverless(app);

export default async function(req: VercelRequest, res: VercelResponse) {
  // @ts-ignore
  return handler(req, res);
}
