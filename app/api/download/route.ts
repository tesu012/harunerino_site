import { UTAU_VERSIONS } from "@/lib/sound_source_versions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const versionParam = searchParams.get("version");

  let target;

  if (versionParam) {
    // 指定バージョン
    target = UTAU_VERSIONS.find(v => v.version === versionParam);
  } else {
    // 最新バージョン
    target = UTAU_VERSIONS.find(v => v.latest) ?? UTAU_VERSIONS[0];
  }

  if (!target) {
    return new Response("Not Found", { status: 404 });
  }

  const url = new URL(`/sound_source/harunerino_utau_v${target.version}.zip`, request.url);
  return Response.redirect(url);
}