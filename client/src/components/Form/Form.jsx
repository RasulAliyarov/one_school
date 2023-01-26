import React from 'react'
import "./Form.scss"
import { useFormik } from "formik"
import * as Yup from 'yup';
import axios from "axios"
function Form() {

    const TeacherValidation = Yup.object().shape({
        name: Yup.string().required(),
        subject: Yup.string().required(),
        email: Yup.string().required(),
        desc: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: {
            name: "",
            subject: "",
            email: "",
            desc: ""
        },
        validateOnBlur: "",
        validationSchema: TeacherValidation,
        onSubmit: values => {
            axios.post("http://localhost:8080/api/teachers/", {
                name: values.name,
                subject: values.subject,
                email: values.email,
                desc: values.desc,
            })
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} className='form'>
                <div>
                    {formik.errors.name && formik.touched.name ? (<div className='errorMessage'>{formik.errors.name}</div>) : null}
                    <input name='name' type="text" placeholder='Name' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                    {formik.errors.subject && formik.touched.subject ? (<div className='errorMessage'>{formik.errors.subject}</div>) : null}
                    <input name='subject' type="text" placeholder='Subject' onChange={formik.handleChange} onBlur={formik.handleBlur} />
                </div>

                {formik.errors.email && formik.touched.email ? (<div className='errorMessage'>{formik.errors.email}</div>) : null}
                <input name='email' type="text" placeholder='Email' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                {formik.errors.desc && formik.touched.desc ? (<div className='errorMessage'>{formik.errors.desc}</div>) : null}
                <textarea name='desc' placeholder='Description' onChange={formik.handleChange} onBlur={formik.handleBlur} />

                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default Form