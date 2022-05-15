const Validation = (values) => {

    let errors = {};
    if(!values.email){
        errors.email="Email is required"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is Invalid"
    }
    if(!values.password){
        errors.password="Password is required"
    }
    if(!values.confirm_password){
        errors.confirm_password="Password is required"
    } else if (values.confirm_password !== values.password){
        errors.confirm_password="Password not match"
    }
    if(!values.fullname){
        errors.fullname="Name is required"
    }
    if(!values.phone){
        errors.phone="Phone is required"
    } else if(values.phone.length < 10){
        errors.phone="Invalid number"
    } 

  return errors;
}

export default Validation