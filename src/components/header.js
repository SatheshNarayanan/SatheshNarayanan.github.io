import { Link } from "gatsby"
import React from "react"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Header = () => (
  <header> 
    <div className="container">
      <div className="inner-header" id = 'home'>
        <div className="logo">
          <Link to ="/">Full Stack Developer</Link>
        </div>
        <div className="navigation">
          <nav >
            <Link to="/#my-cool-header"> About </Link>
            <Link to="/#education"> Education </Link>
            <Link to="/#work"> Career </Link>
            <Link to="/contact"> Contact </Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)


export default Header
