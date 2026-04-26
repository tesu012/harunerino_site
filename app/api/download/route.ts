import { UTAU_VERSION } from "@/lib/sound_source_version";

export async function GET(request: Request) {
  const url = new URL(`/sound_source/harunerino_utau_v${UTAU_VERSION}.zip`, request.url);
  return Response.redirect(url);
}