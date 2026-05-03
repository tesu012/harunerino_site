import { UTAU_VERSIONS } from "@/lib/sound_source_versions";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-5 m-6 md:m-10">
        <span className="text-3xl mt-2">全てのバージョン</span>
        <div className="flex flex-col mt-2 gap-8">
          {UTAU_VERSIONS.map((v) => (
            <div key={v.version} className="flex flex-col gap-3">
              <div className="text-xl mb-1">
                <span>v{v.version}</span>
                <span>（{v.date} リリース）</span>
              </div>
              <a href={`/api/download?version=${v.version}`} className="text-blue-500 hover:underline">
                <div className="mb-2 p-2 text-center bg-blue-500 text-white w-full md:w-50 rounded-sm">ダウンロード</div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center m-6">
          <Link href="/" className="text-blue-500 hover:underline text-xl">
            トップへ戻る
          </Link>
        </div>
      </div>
    </>
  );
}