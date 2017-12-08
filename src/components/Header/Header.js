import React from 'react';
import style from './Header.css';

export default class Header extends React.Component {
    render() {
        return (
            <nav className={style.Header}>
                <a href="/"  className={style.Logo}>React Website Inc.</a>
            </nav>
        );
    }
}
