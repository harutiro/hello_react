import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    const onClickButton = () => {
        alert();
    };

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
        </>
    );
};