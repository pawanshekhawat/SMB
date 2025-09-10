export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  console.log("Meta verification request:", { mode, token, challenge });

  const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "my_secret_token";

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  } else {
    return new Response("Verification failed", { status: 403 });
  }
}

export async function POST(req) {
  const body = await req.json();
  console.log("Webhook Event:", JSON.stringify(body, null, 2));

  // Always respond 200 so Meta knows we received it
  return new Response("Event received", { status: 200 });
}
