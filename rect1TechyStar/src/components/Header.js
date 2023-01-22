import React from 'react'
import { HashLink } from 'react-router-hash-link'

function header() {
  return (
    <nav>
        <h1>Logo</h1>
        <main>
            <HashLink to={"/"}>Home</HashLink>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
            <HashLink to={"/services"}></HashLink>
        </main>
    </nav>
  )
}

export default header
