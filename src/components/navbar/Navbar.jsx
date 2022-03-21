import React, { Component } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import "./navbar.style.css";

export default class Navbar extends Component {
  render() {
    return (
      <section id="_NavbarSection">
        <article>
          <Logo />
          <Menu isLoggedIn={true } username="Carlos" />
        </article>
      </section>
    );
  }
}
