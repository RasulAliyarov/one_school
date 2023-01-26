import React from 'react'
import "./Navbar.scss"
import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, cartState } from "../../redux/Slices/TeacherSlice"

function Navbar() {

    let reduxValue = useSelector(state => state.teacher)
    const dispatch = useDispatch()

    return (
        <>
            <header className='header'>
                <div className="header__wrapper container">
                    <div className="header__wrapper__left">
                        <NavLink><h1>OneSchool</h1></NavLink>
                    </div>
                    <div className="header__wrapper__middle">
                        <NavLink to="/" className={({ isActive }) => isActive ? "activeLink" : ""}>Home</NavLink>
                        <NavLink to="/courses" className={({ isActive }) => isActive ? "activeLink" : ""}>Courses</NavLink>
                        <NavLink to="/add" className={({ isActive }) => isActive ? "activeLink" : ""}>Add</NavLink>
                        <button style={{ marginLeft: "30px" }} onClick={() => {
                            dispatch(cartState(true))
                            console.log(reduxValue)
                        }}>Cart</button>
                    </div>
                    <div className="header__wrapper__right">
                        <button >Contact Us</button>
                    </div>
                </div>
            </header>

            <div className={reduxValue.addToCartState ? "cart" : "NoneCart"}>
                <button onClick={() => {
                    dispatch(cartState(false))
                }}>×</button>

                <div className="cart__content">
                    {
                        reduxValue.cart.map(value => {
                            return (
                                <ul key={value._id}>
                                    <div>
                                        <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg" alt="" />
                                    </div>
                                    <div>

                                        <li><span>Name:</span> {value.name}</li>
                                        <li><span>Subject: </span>{value.subject}</li>
                                        <li><span>Email:</span> {value.email}</li>
                                        <li><span>Description:</span> {value.desc}</li>
                                    </div>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar