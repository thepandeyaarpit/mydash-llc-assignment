import React, { useState, useEffect } from 'react'
import image from '../../src/component/image.png';
import Validation from './Validation';
const Signin = ({submitForm}) => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirm_password: "",
        fullname: "",
        phone: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        setDataIsCorrect(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]);

  return (
    <>
        <div className='main_container'>
            <div className='first_container'>
                <img className='side_img' src={image} />
                <p className='main_para'>Choose a date range</p>
                <p className='subtitle'>Lorem ipsum, or lipsum</p>
                <p className='sub_subtitle'>In publishing and graphic design</p>
                
            </div>

            <div className='second_container'>
                <h2>Create an Account</h2>
                <form>
                <div>
                    <p className='p'>Your Email Address</p>
                    <input className='input_box' type="email" name='email' value={values.email} onChange={handleChange} />
                    {errors.email && <p className='error_validation'>{errors.email}</p>}
                </div>
                <div>
                    <p className='p'>Your Password</p>
                    <input className='input_box' type="password" name='password' value={values.password} onChange={handleChange} />
                    {errors.password && <p className='error_validation'>{errors.password}</p>}
                </div>
                <div>
                    <p className='p'>Confirm Password</p>
                    <input className='input_box' type="password" name='confirm_password' value={values.confirm_password} onChange={handleChange} />
                    {errors.confirm_password && <p className='error_validation'>{errors.confirm_password}</p>}
                </div>
                <div>
                    <p className='p'>Your Full Name</p>
                    <input className='input_box' type="text" name='fullname' value={values.fullname} onChange={handleChange} />
                    {errors.fullname && <p className='error_validation'>{errors.fullname}</p>}
                </div>
                <div>
                    <p className='p'>Your phone number</p>
                    <input className='input_box' type="text" name='phone' value={values.phone} onChange={handleChange} />
                    {errors.phone && <p className='error_validation'>{errors.phone}</p>}
                </div>

                <div className='check_button'>
                    <input type='checkbox' defaultChecked />
                    <span className='check_text'>I read and agree Terms and Conditions.</span>
                </div>
                <button onClick={handleFormSubmit} className='button'>Create account</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Signin