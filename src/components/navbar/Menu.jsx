import React from 'react'

const Menu = (props) => {
  
  if (props.isLoggedIn=== true) {
    return (
    <div id="__menuBlock">
      <nav>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONACT</a>
          </li>
          <li>
            {props.username}
          </li>
          <li>
            <a href="">logout</a>
          </li>
        </ul>
      </nav>
    </div>
  );
    
  }else {
    return (
    <div id="__menuBlock">
      <nav>
        <ul>
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">CONACT</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
  }
  
}

export default Menu