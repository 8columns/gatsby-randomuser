import React from 'react';
import { Link } from "gatsby";
import style from "./menu.module.css";

export default () => (
  <div className={style.menu}>
  	<Link to="/">Male</Link><Link to="/female">Female</Link>
  </div>
)
