import React, { useContext, useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import './LinerGradient.scss'
import { AuthContext } from '../../Context/AuthContext';
import { db } from '../../../api/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

const LinerGradient = () => {

  const { user } = useContext(AuthContext);

  const [degree, setDegree] = useState(0)
  const [colorFields, setColorFields] = useState([{ color: "#FFC778", endPoint: "50" }, { color: "#FFC778", endPoint: "50" }])

  const generateGradientString = () => {
    const baseGradient = `${degree}deg`;
    const colorFieldGradient = colorFields
      .map((field) => `,${field.color} ${field.endPoint}%`)
      .join('');
    console.log(colorFieldGradient)
    console.log(baseGradient + colorFieldGradient)
    return baseGradient + colorFieldGradient;
  };

  const linerGradientStyle = css({
    width: "100%",
    height: "200px",
    background: `linear-gradient(${generateGradientString()})`,
  })

  const addColorField = () => {
    setColorFields([...colorFields, { color: "#FFC778", endPoint: "50" }])
  }

  const removeColorField = () => {
    const updatedColorFields = [...colorFields]

    updatedColorFields.pop()

    setColorFields(updatedColorFields)
  }

  const updateColorField = (index, field, value) => {
    const updatedColorFields = [...colorFields];
    updatedColorFields[index][field] = value;
    setColorFields(updatedColorFields);
    console.log(updatedColorFields)
  };

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(boxShadowCode);
      alert('コピーされました。');
    } catch (error) {
      console.error('コピーに失敗しました。', error);
    }
  }

  const sendFavLinerGradient = async () => {
    const { uid, displayName } = user;

    const userDocRef = doc(db, "user", uid);

    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await setDoc(userDocRef, {
        displayName,
        LinerGradient: `liner-gradient(${generateGradientString()})`,
      })
    } else {
      await updateDoc(userDocRef, {
        LinerGradient: `liner-gradient(${generateGradientString()})`,
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
              <div css={linerGradientStyle}></div>


              <pre>
                <code>
                  {`liner-gradient(${generateGradientString()})`}
                </code>
              </pre>

              <button onClick={copyToClipBoard}>copy</button>
              <button onClick={sendFavLinerGradient}>お気に入り</button>

              <div>
                <h3>角度</h3>
                <p>{degree}deg</p>
                <input type="range" value={degree} min="-180" max="180" onChange={(e) => setDegree(e.target.value)} />
              </div>

              <button onClick={addColorField}>カラーフィールド+</button>
              <button onClick={removeColorField}>カラーフィールド-</button>

              {colorFields.map((CF, index) => (
                <div style={{ border: '1px solid black' }} key={index}>
                  <h3>colorField{index + 1}</h3>
                  <div>

                    <div>
                      <h3>カラー</h3>
                      <p>{CF.color}</p>
                      <input type="color" value={CF.color} onChange={(e) => updateColorField(index, 'color', e.target.value)} />
                    </div>

                    <div>
                      <h3>終始位置</h3>
                      <p>{CF.endPoint}%</p>
                      <input type="range" value={CF.endPoint} onChange={(e) => updateColorField(index, 'endPoint', e.target.value)} />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LinerGradient