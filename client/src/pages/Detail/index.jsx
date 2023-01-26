import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useState } from 'react'
import "./Detail.scss"

function Detail() {
    const { id } = useParams()
    const [detail, setDetail] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8080/api/teachers/${id}`).then(res => {
            setDetail(res.data)
        })
    })
    return (
        <div className="detail ">
            <div className="detail__wrapper">

                <ul>
                    <li>{detail.name}</li>
                    <li>{detail.subject}</li>
                    <li>{detail.email}</li>
                    <li>{detail.desc}</li>
                </ul>
            </div>
        </div>
    )
}

export default Detail