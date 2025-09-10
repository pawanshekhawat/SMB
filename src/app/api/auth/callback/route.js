export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  console.log("Instagram login callback:", { code, state });

  // with a fetch to https://graph.facebook.com/v23.0/oauth/access_token

  return new Response("Instagram login successful. You can close this window.", { status: 200 });
}
