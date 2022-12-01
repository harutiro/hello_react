export const App = () => {

    const onClickButton = () => {
        alert();
    };

    return (
        <>
            {/* ジャバスクリプトの処理をそのまま書くことができる。 */}
            {console.log("hoge")}
            <h1>Hello World</h1>
            <p>お元気ですか？</p>
            <button onClick={onClickButton}>ぼたん</button>
        </>
    );
};