import {
    AiOutlineClose,
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiOutlineYoutube,
    AiOutlineGithub,
  } from "react-icons/ai";
  import { useEffect, useRef } from "react";
  
  export default function Menu({ menuActive, onMenuActive }) {
    const menuElement = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuElement.current && !menuElement.current.contains(event.target)) {
          onMenuActive(false);
        }
      };
  
      if (menuActive) {
        document.body.classList.add("slide-active");
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.body.classList.remove("slide-active");
        document.removeEventListener("mousedown", handleClickOutside);
      }
  
      return () => {
        document.body.classList.remove("slide-active");
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [menuActive]);
  
    return (
      <div
        className={menuActive ? "nav-menu active" : "nav-menu"}
        ref={menuElement}
      >
        <button className="menu-close" onClick={() => onMenuActive(false)}>
          <AiOutlineClose /> CLOSE
        </button>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#product">Product</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
        </ul>
        <span>ABOUT</span>
        <p className="description">
          The inspiration got from natural, color pastel & activities the daily.
        </p>
        <div className="social-icons">
          <a href="#" target="_blank">
            <AiOutlineTwitter />
          </a>
          <a href="#" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="#" target="_blank">
            <AiOutlineYoutube />
          </a>
          <a href="https://github.com/Cappuccino03" target="_blank">
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    );
  }