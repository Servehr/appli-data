import React, { Component, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../pages/login/login.css'
import '../pages/register/register.css'
// import './bootstrap.css'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spinIt from "../pages/register/spinn.gif";
import { useDispatch } from 'react-redux';
import InputField from './controls/InputField';
import { PWSD_REGEX } from '../constant/regex';

const Password = ({ onBlurh }) => {

    const [password, setPassword] = useState('')
    const [validPassword, setValidPassword ] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)
    const [passwordLength, setPasswordLength] = useState("")
  
    useEffect(() => 
    {
        const doesPasswordMatch = PWSD_REGEX.test(password)
        setValidPassword(doesPasswordMatch);
  
    }, [password]);

    const changeEmail = () => 
    {
        alert("Am Ok")
    }

  return (
      <>      
        <div className={!validPassword && passwordLength > 1 ? 'input-group borderRed' : 'input-group mb-4'}>
            <InputField 
                    type="password" 
                    id="password" 
                    name="password"           
                    class="form-control borderh inputPadding"    
                    onChange={(event) => { setPassword(event?.target.value); }}
                    onFocus={(e) => {setPasswordFocus(true); }}
                    onKeyUp={(e) => [ setPasswordFocus(true), setPasswordLength(e.target.value.length), onBlurh(validPassword) ] }
                    onBlur={(e) => [ setPasswordFocus(false)] }
                    ariaInvalid={ !validPassword ? "false" : "true" }
                    ariaDescribedby="uidnotes"
                />
                
                <span class="input-group-text" id="basic-addon2" style={{ borderRadius : 0, paddingRight : 20 }}>                                
                    <span className={ passwordLength <= 0 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                        <FontAwesomeIcon icon={ faInfoCircle } style={{ color : "gray", fontSize : 26 }}/>
                    </span>                                
                    <span className={ ((passwordLength >= 3 && validPassword) || (!passwordFocus && validPassword)) && passwordLength >= 3 ? "valid" : "hide" } style={{ marginLeft : 10 }}>
                        <FontAwesomeIcon icon={ faCheck } style={{ color : "green", fontSize : 26 }}/>
                    </span>
                    <span className={ ((passwordLength >= 1 && !validPassword) || ((passwordLength < 3 && passwordLength > 0) && !validPassword)) ? "invalid" : "hide" } style={{ marginLeft : 10 }}>
                        <FontAwesomeIcon icon={ faTimes } style={{ color : "red", fontSize : 26 }}/>
                    </span>
                </span>  
        </div>                
                
        <div class="row" className={ password === '' ? 'hide' : '' } style={{ marginTop : 10 }}>
            <p id="passwordnotes" className={ ((passwordFocus && !validPassword) || (passwordLength < 3 && !validPassword)) || ( password && !validPassword) ? "instructions" : "hide" }>
                <FontAwesomeIcon icon={ faInfoCircle } style={{ marginRight : 15, color : "red" }}/>
                <span class="text-red">
                    8 to 24 characters
                    Must include uppercase and lowercase, a number and a special character
                    Allowed special characters :
                    <span aria-label="exclamation mark"> !</span>
                    <span aria-label="at symbol">@</span>
                    <span aria-label="hash tag">#</span>
                    <span aria-label="dollar sign">$</span>
                    <span aria-label="percent">%</span>
                </span>
            </p>  
        </div> 
      </>
  )
}

export default Password