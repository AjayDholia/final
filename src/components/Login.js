import React, { useState } from 'react'
import './Login.css'
import { ErrorMessage, Field } from 'formik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Errortext from './Errortext'
import {Link} from 'react-router-dom'
import alldata from '../database/Alldata'
import {useNavigate} from "react-router-dom"

let initialValues = {
    // esme key ka name input value m string k name se same hona chaiye
    password: '',
    email: ''
}
const validationSchema = Yup.object({
    password: Yup.string().required('required'),
    email: Yup.string().email('invalid input').required('required')
})
function Login() {  
    const navigate = useNavigate()
    let onSubmit = (values) => {
        console.log("values", values);
        const filterData = alldata.filter((e)=> e.email == values.email && e.password == values.password)
        console.log("filterdata", filterData);
        if(filterData.length > 0){
            if(filterData[0].role === "mentor"){
                 navigate(`/mentor`)
                 console.log("abc");
            }
            else {
                navigate(`/employee`)
                console.log("abhishek");
            }
        }
        else {
            alert("you are not authorized person")
        }
            }
        
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {
                formik => {
                    return (
                        <Form className='form'>

                            <div className='action'>
                                <div><h2 style={{marginLeft:"16%"}}>Welcome!</h2>
                                <img src="https://img.icons8.com/emoji/48/000000/basketball-emoji.png"/>
                                <h4 style={{color:"lightgray", marginTop:"-6%"}}>Login to Your Account</h4></div>
                                <div className='form-control'>
                                    <Field type="email" id="email" name="email" placeholder='Enter Your Mail' />
                                    <ErrorMessage name='email' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="password" id="password" name="password" placeholder='Enter Your Password' />
                                    <ErrorMessage name='password' component={Errortext} />
                                </div>
                                <button type='submit'>Login</button>
                                <div className='span'>Don't Have Account?<Link to='/signup'><span>Signup</span></Link></div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
export default Login
