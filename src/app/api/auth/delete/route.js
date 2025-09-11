export async function POST(req) {
  const body = await req.text();
  console.log("Data deletion request:", body);

  // return a status and a URL for confirmation
  return new Response(
    JSON.stringify({
      url: "https://smb-taupe.vercel.app/data-deletion-status",
      confirmation_code: "123456789"
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
