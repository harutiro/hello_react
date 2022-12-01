export const ColoredMessage = (props) => {

    console.log(props);

    const { color, children } = props;

    // {/* オブジェクトを定義して、それを読み込むこともできる */}
    const contentStyle = {
        color: color,
        fontSize: "20px"
    }
    return <p style={contentStyle}>{children}</p>
}