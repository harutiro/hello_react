export const ColoredMessage = ({ color, children }) => {

    // {/* オブジェクトを定義して、それを読み込むこともできる */}
    const contentStyle = {
        color,
        fontSize: "20px"
    }
    return <p style={contentStyle}>{children}</p>
}