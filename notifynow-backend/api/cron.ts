export const config = {
  runtime: 'nodejs20.x',
  schedule: '0 9 * * *' // 09:00 UTC daily
};

export default async function handler() {
  console.log('[cron] Daily reminder sweep running');
  return new Response('OK');
}
