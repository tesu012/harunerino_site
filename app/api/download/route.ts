export async function GET(request: Request) {
  const url = new URL("/sound_source/harunerino_utau_v1.1.0.zip", request.url);
  return Response.redirect(url);
}