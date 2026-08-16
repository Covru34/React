import QRCode from "react-qr-code";

const QRPage = () => {
    return (
        <>
            <h1 className={"text-center"}>Генерація QR кодів</h1>
            <QRCode value="https://www.google.com.ua/" />
        </>
    )
}

export default QRPage;