import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <div className="h-screen w-screen bg-green-100">
        <div className="absolute left-[10vw] top-0 w-[50vw] h-screen">
          <div className="relative w-full h-screen">
            <Image
              src="/harunerino_illust.png"
              alt="春音リノ イラスト"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        <div className="absolute right-[20vw] top-[20vh] w-120">
          <div className="mb-30">
            <Image src="/harunerino_logo.png" alt="春音リノ ロゴ" width={800} height={400} />
            <span className="block mt-8 text-3xl font-bold">心に届く。美味しい歌声</span>
          </div>
          <span className="block mt-4 text-3xl">春音リノをダウンロード</span>
          <div className="mt-6 p-2 text-center bg-blue-500 text-white w-30 rounded-sm">UTAU版</div>
        </div>

        <div className="absolute bottom-0 w-full p-5 flex flex-col items-center gap-1.5 bg-linear-to-b from-transparent to-white">
          <span className="text-3xl">詳しく見る</span>
          <FontAwesomeIcon icon={faChevronDown} className="w-8" />
        </div>
      </div>
    </main>
  );
}
