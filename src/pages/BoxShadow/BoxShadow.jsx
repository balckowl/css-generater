import React, { useContext, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './BoxShadow.scss'
import { AuthContext } from '../../Context/AuthContext';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../api/firebase';

const BoxShadow = () => {

  const { user } = useContext(AuthContext);

  const [shadowX, setShadowX] = useState(0)
  const [shadowY, setShadowY] = useState(0)
  const [blur, setBlur] = useState(0)
  const [color, setColor] = useState('#000000')
  const boxShadowCode = `${shadowX}px ${shadowY}px ${blur}px ${color}`

  const boxShadowStyle = css({
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "white",
    boxShadow: boxShadowCode,
  });

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(boxShadowCode);
      alert('コピーされました。');
    } catch (error) {
      console.error('コピーに失敗しました。', error);
    }
  }

  const sendFavBoxShadow = async () => {
    const { uid, displayName } = user;

    const userDocRef = doc(db, "user", uid);

    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, {
        displayName,
        boxShadowCode,
      })
    } else {
      await updateDoc(userDocRef, {
        boxShadowCode,
      })
    }

    alert('登録されました。')
  }

  return (
    <main>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10">
            <div className='bg-white'>

              <div css={boxShadowStyle}></div>

              <div>
                <h3>横の影</h3>
                <p>{shadowX}px</p>
                <input type="range" value={shadowX} onChange={(e) => setShadowX(e.target.value)} />

              </div>

              <div>
                <h3>縦の影</h3>
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
                <input type="color" value={color} onChange={(e) => setColor(e.target.value)}></input>
              </div>

              <pre>
                <code>
                  {boxShadowCode}
                </code>
              </pre>

              <button onClick={copyToClipBoard}>copy</button>
              <button onClick={sendFavBoxShadow}>お気に入り</button>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default BoxShadow