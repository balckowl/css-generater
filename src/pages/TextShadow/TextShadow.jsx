import React, { useContext, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './TextShadow.scss'
import { AuthContext } from '../../Context/AuthContext';
import { db } from '../../../api/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const Textshadow = () => {

  const { user } = useContext(AuthContext);

  const [shadowX, setShadowX] = useState(0)
  const [shadowY, setShadowY] = useState(0)
  const [color, setColor] = useState("#000000")
  const [blur, setBlur] = useState(0)
  const textShadowCode = `${shadowX}px ${shadowY}px ${blur}px ${color}`

  const textShadowStyle = css({
    textShadow: textShadowCode
  })

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(textShadowCode);
      alert('コピーされました。');
    } catch (error) {
      console.error('コピーに失敗しました。', error);
    }
  }

  const sendFavTextShadow = async () => {
    const { uid, displayName } = user;

    const userDocRef = doc(db, "user", uid);

    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, {
        displayName,
        textShadowCode,
      })
    } else {
      await updateDoc(userDocRef, {
        textShadowCode,
      })
    }

    alert('登録されました。')
  }

  return (
    <div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10">
          <div className="bg-white">
            <div className='textbox' css={textShadowStyle}>
              text
            </div>

            <div>
              <h3>左右の位置</h3>
              <p>{shadowX}px</p>
              <input type="range" value={shadowX} onChange={(e) => setShadowX(e.target.value)} />
            </div>

            <div>
              <h3>縦横の位置</h3>
              <p>{shadowY}px</p>
              <input type="range" value={shadowY} onChange={(e) => setShadowY(e.target.value)} />
            </div>

            <div>
              <h3>ぼかし</h3>
              <p>{blur}px</p>
              <input type="range" value={blur} onChange={(e) => setBlur(e.target.value)} />
            </div>

            <div>
              <h3>カラー</h3>
              <p>{color}</p>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>

            <pre>
              <code>
                {textShadowCode}
              </code>
            </pre>

            <button className='mx-1' onClick={copyToClipBoard}>copy</button>
            <button onClick={sendFavTextShadow}>お気に入り</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Textshadow