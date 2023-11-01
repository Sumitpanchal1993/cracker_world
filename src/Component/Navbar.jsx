import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Media/Logo.png'
import './Navbar.css'

//Variable
const menu = [
    { name: 'Anar', path: '/' },
    { name: 'Fulzhari', path: '/product' },
    { name: 'Chakri', path: '/aboutus' },
    { name: 'Sutli Bomb', path: '/contactus' },
    { name: 'Kachra Bomb', path: '/tictactoe' },
    { name: 'Rocket', path: '/todo' },
    { name: 'Fancy Item', path: '/login' },
    { name: 'Child Crackers', path: '/geardata' },
    { name: 'Cart', path: '/geardata' },
    { name: 'About Us', path: '/geardata' },
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
