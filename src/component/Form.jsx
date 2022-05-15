import React, { useState } from 'react'
import Main from './Main';
import Signin from './Signin'

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true);
    }

  return (
    <div>
        { !formIsSubmitted ? <Signin submitForm={submitForm} /> : <Main /> }
    </div>
  )
}

export default Form