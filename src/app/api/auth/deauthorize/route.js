export async function POST(req) {
  const body = await req.text();
  console.log("Deauthorize webhook:", body);
  return new Response("OK", { status: 200 });
}
