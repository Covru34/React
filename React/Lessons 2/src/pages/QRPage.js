import QRCode from "react-qr-code";
import {useState} from "react";

const QRPage = () => {
    const [qrCode, setQrCode] = useState("https://europeservice.com.ua/");

    console.log("qrCode", qrCode);
    const onQrCodeChange = (e) => {
        setQrCode(e.target.value);
    }
    return (
        <div className="container">
            <div className={"col-md-8 offset-md-2 mt-2"}>
                <h1 className={"text-center"}>Генерація QR кодів</h1>
                <div className="mb-3">
                    <label htmlFor="myInputQR" className="form-label">Вкажіть посилання на сайт</label>
                    <input type="text"
                           className="form-control"
                           id="myInputQR"
                           value = {qrCode}
                           onChange={onQrCodeChange}
                    />
                </div>
                <QRCode value={qrCode}/>
            </div>
        </div>
    )
}
export default QRPage