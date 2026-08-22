import { useState } from "react";
import QRCode from "react-qr-code";

const QRPage = () => {
    const [input, setInput] = useState("");
    const [qrValue, setQrValue] = useState("https://kherson.itstep.org/");

    const handleGenerate = () => {
        if (input.trim() !== "") {
            setQrValue(input);
        }
    };

    return (
        <>
            <h1 className={"text-center"}>Генерація QR кодів</h1>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введіть URL"
            />
            <button onClick={handleGenerate}>Генерувати</button>

            <QRCode value={qrValue} />
        </>
    );
};

export default QRPage;