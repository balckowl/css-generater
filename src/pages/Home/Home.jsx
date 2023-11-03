import React, { useContext } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <main>
            <div className="container">
                <div className="row gy-5 py-3">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/linergradient">
                                    <h3 className="card-title">liner-gradient</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-brush"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/boxshadow">
                                    <h3 className="card-title">box-shadow</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-back"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/textshadow">
                                    <h3 className="card-title">text-shadow</h3>
                                    <div className="card-icon text-center">
                                        <i class="bi bi-body-text"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className="card">
                            <div className="card-body">
                                <Link to="/imgfilter">
                                    <h3 className="card-title">image-filter-generater</h3>
                                    <div className="card-icon text-center">
                                        <i class="bi bi-card-image"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <Link to="/qrcode">
                                    <h3 className="card-title">QRcode-generater</h3>
                                    <div className="card-icon text-center">
                                        <i className="bi bi-qr-code-scan"></i>
                                    </div>
                                    <p className="card-text"></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">flex-container</h3>
                                <div className="card-icon text-center">
                                    <i className="bi bi-grid-3x3-gap"></i>
                                </div>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">talk-to-AI</h3>
                                <div className="card-icon text-center">
                                    <i className="bi bi-chat-left-text"></i>
                                </div>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home