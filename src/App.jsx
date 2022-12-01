import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    const onClickButton = () => {
        alert();
    };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    }

    return (
        <>
            {/* ジャバスクリプトの処理をそのまま書くことができる。 */}
            {console.log("hoge")}

            {/* Javascriptのオブジェクトとして定義をする。 */}
            <h1 style={{color: "red"}} >Hello World</h1>

            {/* コンポーネントを用いて定義をする。 */}
            <ColoredMessage/>

            <p style={contentPinkStyle}>元気です！</p>
            <button onClick={onClickButton}>ぼたん</button>
        </>
    );
};