import React from "react"
import { Link } from "gatsby"
import containerStyles from "../styles/container.module.scss";
import Header from "../components/header"

console.log(containerStyles);

export default () => (
  <div className={containerStyles.container}>
    <Link to="/about/">About</Link>
    <br />
    <Link to="/user/">user</Link>
    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
