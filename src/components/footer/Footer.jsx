import React from 'react';
import './footer.css';
import logo from '../../img/CromaWaveSinFondo.png';

export const Footer = () => {

    return(
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 w-25 h-25"><img src="" alt="" /></div>
                    <div className="col-8">
                        <span className="text-white">Place sticky footer content here.</span>
                    </div>
                
                </div>
                
            </div>
        </footer>
    )
}

