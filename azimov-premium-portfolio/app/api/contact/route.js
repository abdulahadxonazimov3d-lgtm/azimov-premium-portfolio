const TELEGRAM_BOT_TOKEN = '8884668554:AAGAxX96y5Jd3W8cZFg1qgtjwnZJRlW9SSE';
const TELEGRAM_CHAT_ID = '1439273528';

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json();
    if (!name || !phone || !email || !message) {
      return Response.json({ ok: false, error: 'Barcha maydonlarni to‘ldiring.' }, { status: 400 });
    }
    const text = `📩 Yangi xabar — Portfolio sayti

👤 Ism: ${name}
📞 Telefon: ${phone}
📧 Email: ${email}

💬 Xabar:
${message}`;
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text }),
    });
    if (!res.ok) return Response.json({ ok: false, error: 'Telegramga yuborilmadi.' }, { status: 500 });
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: 'Server xatosi.' }, { status: 500 });
  }
}
