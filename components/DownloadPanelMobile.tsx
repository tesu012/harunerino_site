"use client";

import React, { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function DownloadPanelMobile() {
  const [mounted] = useState<boolean>(() => typeof window !== "undefined");

  if (!mounted) return null;

  return createPortal(
    <>
      <div className="absolute inset-x-0 bottom-0 w-full p-4 z-9999 pointer-events-auto bg-linear-to-b from-transparent to-white">
        <div className="mx-auto max-w-3xl p-2 mb-6">
          <div className="mb-6">
            <div className="flex flex-col items-center gap-1">
              <div className="w-[80vw] relative flex justify-center">
                <Image src="/harunerino_logo.png" alt="春音リノ ロゴ" width={260} height={80} />
              </div>
              <span className="mt-2 text-lg font-bold">心に届く。美味しい歌声</span>
              <div className="mt-2 flex items-center gap-5">
                <a href="https://x.com/harunerino" target="_blank" rel="noopener noreferrer" aria-label="X（旧Twitter）を見る">
                  <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
                </a>
                <a href="https://www.youtube.com/channel/UCeQNt6VOcf4965Jg2yXO8QQ" target="_blank" rel="noopener noreferrer" aria-label="YouTubeチャンネルを見る">
                  <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <a href="#download" className="block text-center">
              <div className="p-3 bg-blue-500 text-white rounded-md">UTAU音源のダウンロード</div>
            </a>
          </div>
        </div>
        <a href="#details" className="w-full">
          <div className="md:absolute bottom-0 w-full flex flex-col items-center gap-1.5">
            <span className="text-2xl">詳しく見る</span>
            <FontAwesomeIcon icon={faChevronDown} className="w-8" />
          </div>
        </a>
      </div>
    </>,
    document.body
  );
}
