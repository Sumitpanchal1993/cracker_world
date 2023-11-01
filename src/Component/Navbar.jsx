import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Media/Logo.png'
import './Navbar.css'

//Variable
const menu = [
    { name: 'अनार', path: '/' },
    { name: 'फुलझारी', path: '/product' },
    { name: 'चकरी', path: '/aboutus' },
    { name: 'सुतली बम', path: '/contactus' },
    { name: 'कचरा बम', path: '/tictactoe' },
    { name: 'राकेट', path: '/todo' },
    { name: 'फैंसी आइटम', path: '/login' },
    { name: 'बच्चो के फटके ', path: '/geardata' },
    { name: 'बिल', path: '/geardata' },
    { name: 'हमारे बारे में ', path: '/geardata' },
];

// functions
const menubtn = () => {
    let btn1 = document.getElementById('menuicon');
    let btn2 = document.getElementById('close');
    let list = document.getElementById('navmenu');
    btn1.style.display = 'none';
    btn2.style.display = 'block';
    list.style.display = 'block';
};
const closebtn = () => {
    let btn1 = document.getElementById('menuicon');
    let btn2 = document.getElementById('close');
    let list = document.getElementById('navmenu');
    btn1.style.display = 'block';
    btn2.style.display = 'none';
    list.style.display = 'none';
};

function Navbar() {
    return (
        <>
            <div>
                <nav>
                    <div id="logo">
                        <img src={logo} alt="logo" srcset="" />
                        <h2>Charbhuja Fireworks</h2>
                    </div>
                    <div>
                        <span className="material-symbols-outlined"
                            id="menuicon"
                            onClick={menubtn}>
                            menu
                        </span>
                        <span className="material-symbols-outlined"
                            id="close"
                            onClick={closebtn}>
                            close
                        </span>
                    </div>
                    <div>
                        <ul id="navmenu">
                            {menu.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
