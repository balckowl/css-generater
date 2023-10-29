import React from 'react'
import { auth, provider } from '../../../api/firebase'
import { signInWithPopup } from 'firebase/auth'

const LoginBtn = () => {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    }

    return (
        <div className="align-self-center d-none d-sm-block text-white">
            <p onClick={signInWithGoogle}>Login</p>
        </div>
    )
}

export default LoginBtn