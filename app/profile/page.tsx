import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-5 m-6 md:m-10">
        <span className="text-3xl mt-2">公式設定</span>
        <table className="bg-white border border-gray-300 border-collapse [&_th]:p-2 [&_td]:p-2 [&_th]:bg-gray-100 [&_th]:text-left">
          <tbody>
            <tr><th className="whitespace-nowrap">性別</th><td>女</td></tr>
            <tr><th className="whitespace-nowrap">性格</th><td>ドS</td></tr>
            <tr><th className="whitespace-nowrap">髪色</th><td>アバンギャルドメタリック</td></tr>
            <tr><th className="whitespace-nowrap">モチーフ</th><td>コッペパン</td></tr>
            <tr><th className="whitespace-nowrap">格好</th><td>軍服</td></tr>
            <tr><th className="whitespace-nowrap">小物</th><td>銃みたいなコッペパン</td></tr>
            <tr><th className="whitespace-nowrap">特徴</th><td>いつもは小さくて見えないちんこだが歌ってるときはギンギンに勃起する</td></tr>
            <tr><th className="whitespace-nowrap">好きなもの</th><td>おんJ民、ロシア</td></tr>
            <tr><th className="whitespace-nowrap">嫌いなもの</th><td>鉱物、玉ねぎ、露営米帝</td></tr>
            <tr><th className="whitespace-nowrap">得意なこと</th><td>ハムスターを呼び寄せる</td></tr>
            <tr><th className="whitespace-nowrap">苦手なこと</th><td>人と会話する</td></tr>
            <tr><th className="whitespace-nowrap">決めゼリフ</th><td>DIOを歌わせたければ金払え</td></tr>
            <tr><th className="whitespace-nowrap">一人称</th><td>DIO</td></tr>
            <tr><th className="whitespace-nowrap">好きな色</th><td>カーキ色</td></tr>
            <tr><th className="whitespace-nowrap">年齢</th><td>45歳</td></tr>
            <tr><th className="whitespace-nowrap">生まれた地</th><td>三重県伊勢市</td></tr>
            <tr><th className="whitespace-nowrap">スタンド</th><td>小野田寛郎</td></tr>
            <tr><th className="whitespace-nowrap">スタンドの能力</th><td>物を成長させる。<br />植物を成長させる。<br />人を全盛期にする（不可逆性）水晶を成長させてでかくする。<br />（全てに共通するが成長速度に応じて脆くさせたりする）</td></tr>
          </tbody>
        </table>
        <div className="flex justify-center m-6">
          <Link href="/" className="text-blue-500 hover:underline text-xl">
            トップへ戻る
          </Link>
        </div>
      </div>
    </>
  );
}