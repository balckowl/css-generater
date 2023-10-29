import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='bottom-0 w-100 mt-4'>
            <div className="p-3 border-top border-3">
                <div className="d-flex justify-content-center m-1">
                    <div className="align-self-center">
                        <div className="top-icon px-2">
                            <i className="bi bi-gear"></i>
                        </div>
                    </div>
                    <div className="top-name align-self-center fs-2">
                        <a className="navbar-brand" href="#">CSS Generater</a>
                    </div>
                </div>
                <p className='text-center text-white'>&copy; Team Name 2023</p>
            </div>
        </footer>
    )
}

export default Footer