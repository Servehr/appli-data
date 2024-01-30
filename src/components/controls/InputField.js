import React, { Component, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const InputField = (props) => {

  return (
      <input type={props.type} 
                  id={props.id} 
                  name={props.name} 
                  className={props.class} 
                  onChange={props.onChange} 
                  onFocus={ props.onFocus }
                  onKeyUp={ props.onKeyUp }
                  onBlur={ props.onBlur }
                  aria-invalid={ props.invalid}
                  aria-describedby={props.ariaDescribedby}
                  autoComplete='off'
                  /> 
  )
}

export default InputField