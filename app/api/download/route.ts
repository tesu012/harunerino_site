export async function GET(request: Request) {
  const url = new URL("/sound_source/harunerino_utau_v1.2.0.zip", request.url);
  return Response.redirect(url);
}