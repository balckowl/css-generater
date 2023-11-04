import React, { useContext } from 'react'
import './Header.scss'
import LoginBtn from '../LoginBtn/LoginBtn'
import { AuthContext } from '../../Context/AuthContext';
import LogoutBtn from '../LogoutBtn/LogoutBtn';
import { Link } from 'react-router-dom';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <header>
            <div className="p-2 mb-4 head">
                <div className="d-flex">
                    <div className="d-flex flex-grow-1">
                        <div className="align-self-center">
                            <div className="top-icon px-2">
                                <img src="/images/CSSGenerator-icon.png" alt="" />
                            </div>
                        </div>
                        <div className="top-name align-self-center fs-2">
                            <Link className="navbar-brand" to="/">Helpee</Link>
                        </div>
                    </div>
                    <div className="d-flex gap-2">
                        {!user ? <LoginBtn /> : <LogoutBtn />}
                        <div className="vr text-white" style={{ width: '3px' }}></div>
                        <div className="align-self-center d-none d-sm-block text-white">
                            <a className="nav-link" href="#">My account</a>
                        </div>
                        <div className="align-self-center">
                            <div className="person-icon pe-2">
                                {user ? <img src={user.photoURL} alt=""/> :<i className="bi bi-person-circle"></i>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header