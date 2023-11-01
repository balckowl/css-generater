import React, { useState } from 'react'
import './QRcode.scss'
import QRCode from 'qrcode.react'

const QRcode = () => {

    const [url, setURL] = useState('https://example.com')
    const [bgColor, setBgColor] = useState("#FFFFFF")
    const [fgColor, setFgColor] = useState("#000000")

    const downloadQR = () => {
        const canvas = document.getElementById("qrcode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrcode.png";
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
                                    id="qrcode"
                                    value={url}
                                    size={290}
                                    level={"H"}
                                    bgColor={bgColor}
                                    fgColor={fgColor}
                                    includeMargin={true}
                                />

                                <div>
                                    <h3>背景色</h3>
                                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)}/>
                                </div>

                                <div>
                                    <h3>前景色</h3>
                                    <input type="color" value={fgColor} onChange={(e) => setFgColor(e.target.value)}/>
                                </div>
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