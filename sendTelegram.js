
/**
 * Vercel Serverless Function - /api/sendTelegram
 *
 * Environment variables required:
 * TELEGRAM_BOT_TOKEN - your bot token (123456:ABC...)
 * TELEGRAM_CHAT_ID - your chat id (e.g. 123456789)
 *
 * This function receives POST requests with JSON body { name, phone, message }
 * and forwards a message to the Telegram chat via Bot API.
 */
export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, phone, message } = request.body || {};
    if (!name || !phone) {
      response.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      response.status(500).json({ error: 'Server not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.' });
      return;
    }

    const text = `📩 Новая заявка с сайта REGART-M:%0A👤 Имя: ${encodeURIComponent(name)}%0A📞 Телефон: ${encodeURIComponent(phone)}%0A💬 Сообщение: ${encodeURIComponent(message || '-')}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`;

    const fetchRes = await fetch(url, { method: 'GET' });
    const json = await fetchRes.json();
    if (!json.ok) {
      console.error('Telegram API error', json);
      response.status(502).json({ error: 'Telegram API error' });
      return;
    }

    response.status(200).json({ ok: true });
  } catch (err) {
    console.error('sendTelegram error', err);
    response.status(500).json({ error: 'Internal server error' });
  }
}
