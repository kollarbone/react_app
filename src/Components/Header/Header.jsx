import React from "react";
import "./Header.css";
import "./Header__dark.css";
import Burger from "./Burger/Burger";
import GoBack from "./GoBack/GoBack";
import { FaFire } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsBell } from "react-icons/bs";

export default function Header(props) {
  return (
    <div className={props.theme === "light" ? "header" : "header__dark"}>
      <div className="burger">
        <Burger theme={props.theme} />
      </div>
      <div className="goBack">
        <GoBack theme={props.theme} />
      </div>
      <div className={props.theme === "light" ? "logo" : "logo__dark"}>
        <FaFire />
        <a>GenshinPol</a>
      </div>
      <div className="header_icon">
        <div
          className={props.theme === "light" ? "settings" : "settings__dark"}
        >
          <AiOutlineSetting />
        </div>
        <div
          className={
            props.theme === "light" ? "profileicon" : "profileicon__dark"
          }
        >
          <AiOutlineUser />
        </div>
        <div
          className={
            props.theme === "light" ? "notification" : "notification__dark"
          }
        >
          <BsBell />
        </div>
        <div className="switchTheme">
          <span className={props.theme === "light" ? "theme" : "theme__dark"}>
            Theme:
          </span>
          <input
            type="checkbox"
            onChange={props.switchTheme}
            checked={props.theme === "dark" ? "checked" : ""}
          />
        </div>
      </div>
    </div>
  );
}
