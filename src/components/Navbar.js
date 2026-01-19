import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
       <a className="navbar-brand" href="3">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a  className="nav-link active" aria-current="page" href="#">Home</a>
          {/* <Link  className="nav-link active" aria-current="page" to="/">Home</Link> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutMe}</a> */}
          {/* <Link className="nav-link" to="/about">{props.aboutMe}</Link> */}
        {/* </li> */}
      </ul>
    </div>
  </div>
  <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input"onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'? "Enable LightMode" : "Enable DarkMode"} </label>
</div>
</nav> 
  )
}
Navbar.propTypes = {
    title :  PropTypes.string.isRequired,
    aboutMe: PropTypes.string.isRequired
}

// Navbar.defaultProps ={
//     title:'This is the Title',
//     aboutMe: 'About me '
// };