import React, { useState } from 'react'
import './QRcode.scss'
import QRCode from 'qrcode.react'

const QRcode = () => {

    const [url, setURL] = useState('https://example.com')

    const downloadQR = () => {
        const canvas = document.getElementById("123456");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "123456.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <div className="bg-white">

                            <div>
                                <QRCode
                                    id="123456"
                                    value="123456"
                                    size={290}
                                    level={"H"}
                                    bgColor={"#FF0000"}
                                    fgColor={"#FFC0CB"}
                                    includeMargin={true}
                                />
                            </div>

                            <form action="">
                                <div>
                                    <h3>url</h3>
                                    <div>
                                        <input type="text" value={url} onChange={(e) => setURL(e.target.value)} />
                                    </div>
                                </div>
                            </form>

                            <button onClick={downloadQR}> Download QR </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default QRcode