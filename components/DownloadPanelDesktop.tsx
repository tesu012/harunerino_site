"use client";

import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function DownloadPanelDesktop() {
  return (
    <>
      <div className="md:absolute md:right-[20vw] md:top-[20vh] md:w-120 w-full static p-6 md:p-0 z-9999">
        <div className="mb-6 md:mb-30">
          <div className="w-full md:w-auto flex justify-start md:block">
            <Image src="/harunerino_logo.png" alt="春音リノ ロゴ" width={800} height={400} />
          </div>
          <span className="block mt-4 md:mt-8 text-2xl md:text-3xl font-bold">心に届く。美味しい歌声</span>
        </div>
        <span className="block mt-4 text-xl md:text-3xl">春音リノをダウンロード</span>
        <a href="#download">
          <div className="mt-4 md:mt-6 p-2 text-center bg-blue-500 text-xl text-white w-fit md:w-70 rounded-sm">UTAU音源のダウンロード</div>
        </a>
      </div>
      <a href="#details" className="w-full">
        <div className="md:absolute bottom-0 w-full p-5 flex flex-col items-center gap-1.5 bg-linear-to-b from-transparent to-white">
          <span className="text-2xl">詳しく見る</span>
          <FontAwesomeIcon icon={faChevronDown} className="w-8" />
        </div>
      </a>
    </>
  );
}
