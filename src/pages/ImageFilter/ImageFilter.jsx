import React, { useContext, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './ImageFilter.scss'
import { AuthContext } from '../../Context/AuthContext'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../../api/firebase'

const ImageFilter = () => {

    const [blur, setBlur] = useState(0)
    const [grayScale, setGrayScale] = useState(0)
    const [sepia, setSepia] = useState(0)
    const [brightness, setBrightness] = useState(100)
    const [hueRotate, setHueRotate] = useState(0)
    const [saturate, setSaturate] = useState(100)
    const [opacity, setOpacity] = useState(100)
    const [contrast, setContrast] = useState(100)
    const [invert, setInvert] = useState(0)

    const { user } = useContext(AuthContext);

    const imgFilterStyle = css({
        filter: `blur(${blur}px) grayscale(${grayScale}%) sepia(${sepia}) brightness(${brightness}%) hue-rotate(${hueRotate}deg) saturate(${saturate}%) opacity(${opacity}%) contrast(${contrast}%) invert(${invert}%)`,
    })

    const imgFilterString = () => {
        const updateValueFuncs = []

        if (blur > 0) {
            updateValueFuncs.push(`blur(${blur}%)`)
        }

        if (grayScale > 0) {
            updateValueFuncs.push(`grayScale(${grayScale}px)`)
        }

        if(sepia > 0){
            updateValueFuncs.push(`sepia(${sepia}%)`)
        }

        if(brightness != 100){
            updateValueFuncs.push(`brightness(${brightness}%)`)
        }

        if(hueRotate > 0){
            updateValueFuncs.push(`hueRotate(${hueRotate}%)`)
        }

        if(saturate != 100){
            updateValueFuncs.push(`saturate(${saturate}%)`)
        }

        if(opacity < 100){
            updateValueFuncs.push(`opacity(${opacity}%)`)
        }

        if(contrast != 100){
            updateValueFuncs.push(`contrast(${contrast}%)`)
        }

        if(invert > 0){
            updateValueFuncs.push(`invert(${invert}%)`)
        }

        if (updateValueFuncs.length === 0) {
            return;
        } else {
            return `filter: ${updateValueFuncs.map((func) => func).join(' ')}`
        }

    }

    const copyToClipBoard = async () => {
        if (!imgFilterString()) {
            alert('パラメータがデフォルトのままです。')
        }

        try {
            await navigator.clipboard.writeText(imgFilterString());
            alert('コピーされました。');
        } catch (error) {
            console.error('コピーに失敗しました。', error);
        }
    }

    const sendImgFilter = async () => {
        const { uid, displayName } = user;

        const userDocRef = doc(db, "user", uid);

        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
            await setDoc(userDocRef, {
                displayName,
                imgfilter: imgFilterString(),
            })
        } else {
            await updateDoc(userDocRef, {
                imgfilter: imgFilterString(),
            })
        }

        alert('登録されました。')
    }

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10">
                        <div className="bg-white">

                            <div>
                                <img src="https://picsum.photos/500/300" alt="" css={imgFilterStyle} />
                            </div>

                            <div>
                                <h3>ぼかし</h3>
                                <p>{blur}px</p>
                                <input type="range" value={blur} onChange={(e) => setBlur(e.target.value)} />
                            </div>

                            <div>
                                <h3>グレー</h3>
                                <p>{grayScale}%</p>
                                <input type="range" value={grayScale} onChange={(e) => setGrayScale(e.target.value)} />
                            </div>

                            <div>
                                <h3>セピア</h3>
                                <p>{sepia}%</p>
                                <input type="range" value={sepia} onChange={(e) => setSepia(e.target.value)} />
                            </div>

                            <div>
                                <h3>明るさ</h3>
                                <p>{brightness}%</p>
                                <input type="range" value={brightness} min="0" max="200" onChange={(e) => setBrightness(e.target.value)} />
                            </div>

                            <div>
                                <h3>色相</h3>
                                <p>{hueRotate}°</p>
                                <input type="range" value={hueRotate} min="0" max="360" onChange={(e) => setHueRotate(e.target.value)} />
                            </div>

                            <div>
                                <h3>彩度</h3>
                                <p>{saturate}%</p>
                                <input type="range" value={saturate} min="0" max="1000" onChange={(e) => setSaturate(e.target.value)} />
                            </div>

                            <div>
                                <h3>透明度</h3>
                                <p>{opacity}%</p>
                                <input type="range" value={opacity} onChange={(e) => setOpacity(e.target.value)} />
                            </div>

                            <div>
                                <h3>コントラスト</h3>
                                <p>{contrast}%</p>
                                <input type="range" min="0" max="1000" value={contrast} onChange={(e) => setContrast(e.target.value)} />
                            </div>

                            <div>
                                <h3>反転</h3>
                                <p>{invert}%</p>
                                <input type="range" value={invert} onChange={(e) => setInvert(e.target.value)} />
                            </div>

                            <pre>
                                <code>
                                    {imgFilterString()}
                                </code>
                            </pre>

                            <button onClick={copyToClipBoard}>copy</button>
                            <button onClick={sendImgFilter}>お気に入り</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ImageFilter