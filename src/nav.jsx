import React, { useEffect, useState } from "react";
import "./nav.css";
import { FaRegUser } from "react-icons/fa";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  const fetchData = () => {
    if (5 > 7) {
      console.log("yes");
    } else {
      console.log("no");
    }
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <h1 className="logo">NETFLIX</h1>
      <div>
        <FaRegUser className="avatar" onClick={fetchData()} />
      </div>
    </div>
  );
}

export default Nav;
