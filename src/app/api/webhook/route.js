export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  } else {
    return new Response("Verification failed", { status: 403 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("Webhook event received:", JSON.stringify(body, null, 2));

    // Facebook requires a 200 response quickly
    return new Response("EVENT_RECEIVED", { status: 200 });
  } catch (err) {
    console.error("Error handling webhook POST:", err);
    return new Response("Error", { status: 500 });
  }
}
