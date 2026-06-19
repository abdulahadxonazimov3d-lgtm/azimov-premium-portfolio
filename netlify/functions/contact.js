const TELEGRAM_BOT_TOKEN = '8884668554:AAGAxX96y5Jd3W8cZFg1qgtjwnZJRlW9SSE';
const TELEGRAM_CHAT_ID = '1439273528';

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  try {
    const { name, phone, email, message } = JSON.parse(event.body || '{}');
    if (!name || !phone || !email || !message) return { statusCode: 400, body: JSON.stringify({ error: 'Barcha maydonlarni to‘ldiring.' }) };
    const text = `📩 Yangi xabar — Portfolio sayti\n\n👤 Ism: ${name}\n📞 Telefon: ${phone}\n📧 Email: ${email}\n\n💬 Xabar:\n${message}`;
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text })
    });
    if (!response.ok) return { statusCode: 500, body: JSON.stringify({ error: 'Telegramga yuborilmadi.' }) };
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Server xatosi.' }) };
  }
};
