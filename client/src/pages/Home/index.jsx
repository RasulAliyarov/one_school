import React from 'react'
import "./Home.scss"
import { SiRedhat } from "react-icons/si"
import { TbBuilding } from "react-icons/tb"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import axios from "axios"
import Form from "../../components/Form/Form"
import { addToCart } from "../../redux/Slices/TeacherSlice"

function Home() {

  const [data, setData] = useState([])
  const [deleteState, SetdeleteState] = useState(false)
  useEffect(() => {
    axios.get("http://localhost:8080/api/teachers/").then(res => {
      setData(res.data)
    })
  }, [deleteState])

  let reduxValue = useSelector(state => state.teacher)
  const dispatch = useDispatch()



  return (
    <div className='home'>
      <section className="home__top">
        <div className="home__top__wrapper container1050">
          <div className="home__top__wrapper__content">

            <div className="home__top__wrapper__content__left">
              <h1>Learn From The Expert</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
              <button>ADMISSION NOW</button>
            </div>
            <div className="home__top__wrapper__content__right">
              <form action="">
                <span>Sign Up</span>
                <input type="text" placeholder='Email Address' />
                <input type="text" placeholder='Password' />
                <input type="text" placeholder='Re-type Password' />
                <button>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='home__programs'>
        <div className="home__programs__wrapper container1050">
          <div className="section__title">
            <h1>
              Our Programs
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
          </div>

          <div className="home__programs__wrapper__content">
            <div className="home__programs__wrapper__content__left">
              <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_youtube_tutorial.svg" alt="" />
            </div>
            <div className="home__programs__wrapper__content__right">
              <h4>We Are Excellent In Education</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
              <div className='achieve'>
                <div><SiRedhat /></div>
                <span>22,931 Yearly Graduates</span>
              </div>

              <div className='achieve'>
                <div><TbBuilding /></div>
                <span>22,931 Yearly Graduates</span>
              </div>
            </div>
          </div>
          <div className="home__programs__wrapper__content">
            <div className="home__programs__wrapper__content__right">
              <h4>Strive for Excellent</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.</p>
              <div className='achieve'>
                <div><SiRedhat /></div>
                <span>22,931 Yearly Graduates</span>
              </div>

              <div className='achieve'>
                <div><TbBuilding /></div>
                <span>22,931 Yearly Graduates</span>
              </div>
            </div>
            <div className="home__programs__wrapper__content__left">
              <img src="https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="" />
            </div>
          </div>


        </div>
      </section>

      <section className='home__teachers'>
        <div className="home__teachers__wrapper">
          <div className="section__title">
            <h1>
              Our Teachers
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
          </div>

          <div className="home__teachers__wrapper__cards container1050">
            {
              data.map(value => {
                return (
                  <div key={value._id} className="home__teachers__wrapper__cards__card">
                    <div className="home__teachers__wrapper__cards__card__img">
                      <img src="https://preview.colorlib.com/theme/oneschool/images/person_1.jpg" alt="" />
                    </div>
                    <div className="home__teachers__wrapper__cards__card__content">
                      <h1>{value.name}</h1>
                      <h3>{value.subject}</h3>
                      <p>{value.desc}</p>

                    </div>
                    <div className="home__teachers__wrapper__cards__card__bottom">
                      <button className='delete' onClick={() => {
                        axios.delete(`http://localhost:8080/api/teachers/${value._id}`).then(res => {

                          SetdeleteState(!deleteState)
                        })
                      }}>Delete</button>
                      <button onClick={() => {
                        dispatch(addToCart(value))
                      }}>Add</button>
                      <button>
                        <Link to={`/detail/${value._id}`}>Detail</Link>
                      </button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className='home__add'>
        <div className="home__add__wrapper container1050">
          <div className="section__title addTeacher">
            <h1>
              Add Teacher
            </h1>
            <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
          </div>

          <div className="home__add__wrapper__form">
            <Form />
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home
