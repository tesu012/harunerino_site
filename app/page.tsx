"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import DownloadPanel from "../components/DownloadPanel";
import { UTAU_VERSIONS } from "@/lib/sound_source_versions";

config.autoAddCss = false;

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playDemo = async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
    } catch (e) {
      console.error("Audio play failed:", e);
    }
  };

  return (
    <main className="relative min-h-screen bg-white">
      <audio ref={audioRef} src="/demo.wav" preload="auto" />
      <div className="h-svh w-screen bg-green-100 relative">
        <div className="relative w-full md:absolute md:left-[10vw] md:top-0 md:w-[50vw] h-screen">
          <div className="relative w-full h-svh">
            <Image
              src="/harunerino_illust.png"
              alt="春音リノ イラスト"
              fill
              sizes="50vw"
              quality={100}
              className="object-cover object-top pt-5 pl-16 md:pl-0"
            />
          </div>
        </div>

        <DownloadPanel />
      </div>
      <div id="details" className="m-6 md:m-10">
        <div className="flex flex-col gap-5">
          <span className="text-3xl">春音リノについて</span>
          <span>
            春音リノは、オープンにちゃんねるの何でも実況Jいたから作られた、ONJLOIDです。UTAUを使って歌わせることができます。
          </span>
          <span className="text-2xl mt-2">プロフィール</span>
          <table className="bg-white border border-gray-300 border-collapse [&_th]:p-2 [&_td]:p-2 [&_th]:bg-gray-100 [&_th]:text-left">
            <tbody>
              <tr><th className="whitespace-nowrap">名前</th><td>春音リノ（はるねりの）</td></tr>
              <tr><th className="whitespace-nowrap">性別</th><td>女</td></tr>
              <tr><th className="whitespace-nowrap">年齢</th><td>45歳</td></tr>
              <tr><th className="whitespace-nowrap">好きな色</th><td>カーキ色</td></tr>
              <tr><th className="whitespace-nowrap">生まれた地</th><td>三重県伊勢市</td></tr>
            </tbody>
          </table>
          <Link href="/profile" className="text-right text-blue-500 hover:underline">
            その他の設定を見る
          </Link>
        </div>
        <div id="download" className="mt-12 flex flex-col gap-5">
          <span className="text-3xl">春音リノをダウンロード</span>
          <span className="flex flex-col">
            春音リノはUTAU（飴屋／菖蒲氏による歌声合成ソフト）を使って歌わせることができます。
            <Link href="/all-versions" className="text-sm text-blue-600 underline mt-2">
              全てのバージョンを見る（最新バージョンの使用をおすすめします）
            </Link>
          </span>
          <div className="w-full md:w-auto flex flex-col">
            <a href="/api/download">
              <div className="mb-2 p-2 text-center text-xl bg-blue-500 text-white w-full md:w-65 rounded-sm">UTAU音源のダウンロード</div>
            </a>
            <span className="mb-3">バージョン {UTAU_VERSIONS[0].version} （最新版）</span>
            <a
              href="https://utau2008.xrea.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline"
            >
              UTAUのダウンロードはこちら
              <FontAwesomeIcon icon={faUpRightFromSquare} className="ml-1 w-2" />
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl font-bold">音源インストール手順</span>
            <span>
              1. ダウンロードしたファイルを<strong>解凍せずに</strong>、UTAUにドラックアンドドロップします。<br />
              2. インストールしますか？と表示された場合、「はい」を選択してください。
            </span>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5">
          <span className="text-3xl">デモ音声</span>
          <div
            className="flex items-center cursor-pointer w-fit"
            role="button"
            tabIndex={0}
            onClick={playDemo}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") playDemo();
            }}
            aria-label="デモ音声を再生"
          >
            <div className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-full">
              <FontAwesomeIcon icon={faPlay} className="w-4 text-white" />
            </div>
            <span className="ml-3 text-xl">デモ音声を聞く</span>
          </div>
        </div>
      </div>
    </main>
  );
}
