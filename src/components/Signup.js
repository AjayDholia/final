import React , {useState} from 'react'
import {Link} from 'react-router-dom'
import { ErrorMessage, Field,} from 'formik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import Errortext from './Errortext'
import './signup.css'

let initialValues = {
    // esme key ka name input value m string k name se same hona chaiye
    firstname: '',
    lastname: '',
    email: '',
    password: ''
}
const validationSchema = Yup.object({
   
    name: Yup.string().required('required'),
    password: Yup.string().required('required'),
    email: Yup.string().email('invalid input').required('required')
})
function Signup() {
    const [uservalue, setUservalue] = useState('')
    let onSubmit = (values) => {

        let signupdata ={
            name : values.name,
            email : values.email,
            password : values.password,
            role : uservalue,
            id : new Date().getTime(),
          }
    }
    return (
        <Formik 
        initialValues={ initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            {
                formik => {
                    return (
                        <Form>
                            <div className="page">
                                <div className='account' style={{marginTop:"7%"}}>
                            <span class="material-icons" style={{marginLeft:"40%"}}>account_circle</span>
                                <h1 style={{color:"blue"}}>Create Account</h1>
                                </div>
                                <div className='form-control'>
                                    <Field type="text" placeholder="First Name" name='name' className="input" />  
                                    <ErrorMessage name='firstname' component={Errortext} />
                                </div>
                               
                                <div className='form-control'>
                                    <Field type="email"  name="email" placeholder='Enter Your Mail' className='input' />
                                    <ErrorMessage name='email' component={Errortext} />
                                </div>
                                <div className='form-control'>
                                    <Field type="password"  name="password" placeholder='Enter Your Password' className='input'/>
                                    <ErrorMessage name='password' component={Errortext} />
                                </div>
                                <div className='radio'>
                                    <select  className = "selectusertype" onChange={(e) => setUservalue(e.target.value)}>
                                        <option value='employee'>Employee</option>
                                        <option value='mentor'>Mentor</option>
                                    </select>
                                </div>
                               
                               <Link to='/'><button type='submit' className='Signbtn'>SignUp</button></Link> 
                                <div><p>Already Have a Account? <Link to='/'><span>Login</span></Link></p></div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}
export default Signup