/* eslint-disable jsx-a11y/anchor-is-valid */

import './style.css';

const Header = ({empresa}) =>{
    return(
        <header>
            <h1>{empresa}</h1>
            <nav>
                <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;