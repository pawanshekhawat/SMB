// app/api/webhook/route.js

// ✅ Handle GET (verification step)
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN || "my_secret_token"; // set in FB dashboard

  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    console.log("Webhook verified successfully ✅");
    return new Response(challenge, { status: 200 });
  } else {
    console.warn("Webhook verification failed ❌");
    return new Response("Verification failed", { status: 403 });
  }
}

// ✅ Handle POST (actual webhook events)
export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Webhook event received:", JSON.stringify(body, null, 2));

    const changes = body.entry?.[0]?.changes;
    if (changes && changes.length > 0) {
      const comment = changes[0].value;
      const commentId = comment.id;

      // Example auto-reply
      const reply = await fetch(
        `https://graph.facebook.com/v23.0/${commentId}/replies`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.LONG_LIVED_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: "Thanks for your comment! 🚀",
          }),
        }
      );

      const replyData = await reply.json();
      console.log("Auto-reply result:", replyData);
    }

    return new Response("EVENT_RECEIVED", { status: 200 });
  } catch (err) {
    console.error("Error handling webhook POST:", err);
    return new Response("Error", { status: 500 });
  }
}
