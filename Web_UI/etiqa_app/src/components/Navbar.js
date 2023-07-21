import React, {useState} from 'react'
import Logo from '../assets/cdn.png'
import {Link} from "react-router-dom";
import '../styles/Navbar.css'
import { Button } from '@material-ui/core';
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
      };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks? "open" : "close"}>
        <a href="/Home"><img src={Logo}  /></a>
        <div className="hiddenLinks">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/freelancer">Freelancer</Link>
        </div>
        <div></div> 
        </div>
        <div className="rightSide">
            <Link to="/Home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/freelancer">Freelancer</Link>
            <Button onClick={toggleNavbar}> 
                <ReorderIcon/>
            </Button>
        </div>

              
    </div>
  )
}

export default Navbar
