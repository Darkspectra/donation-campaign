import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    const [click1, setClick1] = useState(false)
    const handleUnderline1 = () => {
        setClick1(true)
        setClick2(false)
        setClick3(false)

    }
    const [click2, setClick2] = useState(false)
    const handleUnderline2 = () => {
        setClick1(false)
        setClick2(true)
        setClick3(false)

    }
    const [click3, setClick3] = useState(false)
    const handleUnderline3 = () => {
        setClick1(false)
        setClick2(false)
        setClick3(true)
    }
    return (
        <div className="NavBar-container">
            <div className="flex justify-between items-center">
                <div>
                    <img src="https://i.ibb.co/DYyG0jF/Logo.png" alt="" />
                </div>
                <ul className="flex gap-3">
                    <li onClick={handleUnderline1} className={click1 ? 'underline text-red-600' : ''}><NavLink to="/">Home</NavLink></li>
                    <li onClick={handleUnderline2} className={click2 ? 'underline text-red-600' : ''}><NavLink to="/donation">Donation</NavLink></li>
                    <li onClick={handleUnderline3} className={click3 ? 'underline text-red-600' : ''}><NavLink to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
            <h2 className="display: absolute left-[33%] bottom-[90%] text-5xl font-bold text-center">I Grow By Helping People In Need</h2>
            <div className="display: absolute left-[44%] top-[45%]">
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                
            </div>
            <button className="display: absolute btn btn-error text-white left-[54%] top-[45%]">Search</button>
        </div>
    );
};

export default NavBar;