import { ColoredMessage } from "./components/ColoredMessage";
import { useState } from "react";
import { useEffect } from "react";

export const App = () => {

    console.log("レンダリング");

    const [num , setNum] = useState(0);

    const onClickButton = () => {
        // alert();
        // 直前の内容を取得する。
        //こうしないとコンポーネントがレンダリングする前に変更があると期待した動作をしない。
        setNum((prev) => prev + 1)
    };

    // const [変数名, 変数を更新する関数] = useState(初期値);
    // ある値が変わった時に、ある動作をする。
    // 第二引数を[]と設定すると、最初の一回だけ実行される。APIなどの取得に使える。
    useEffect(() => {
        console.log("useEffect");
        // 2秒後に実行される
    }, [num]);

    return (
        <>
            {/* ジャバスクリプトの処理をそのまま書くことができる。 */}
            {console.log("hoge")}

            {/* Javascriptのオブジェクトとして定義をする。 */}
            <h1 style={{color: "red"}} >Hello World</h1>

            {/* コンポーネントを用いて定義をする。 */}
            <ColoredMessage color="blue" >お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink" >元気です！</ColoredMessage>

            <button onClick={onClickButton}>ぼたん</button>

            <p>{num}</p>
        </>
    );
};