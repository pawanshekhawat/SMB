export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  console.log("Instagram login callback:", { code, state });

  if (!code) {
    return new Response("No code provided", { status: 400 });
  }

  try {
    // Exchange code for short-lived access token
    const params = new URLSearchParams({
      client_id: process.env.INSTAGRAM_APP_ID,
      client_secret: process.env.INSTAGRAM_APP_SECRET,
      redirect_uri: "https://smb-taupe.vercel.app/api/auth/callback",
      code: code,
      grant_type: "authorization_code",
    });

    const tokenRes = await fetch(
      "https://api.instagram.com/oauth/access_token",
      {
        method: "POST",
        body: params,
      }
    );

    const data = await tokenRes.json();
    console.log("Token exchange result:", data);

    // Return token response to the browser for now
    return new Response(JSON.stringify(data, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Error exchanging code:", err);
    return new Response("Failed to exchange code", { status: 500 });
  }
}