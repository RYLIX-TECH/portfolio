import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggleNav = () => {
    setIsToggled(!isToggled)
   let body =  document.querySelector('body')
    body.classList.toggle('dark__mode')
     
  }
  return (
    <StyledWrapper>
      <label className="switch">
        <input type="checkbox"
        onClick={()=>{toggleNav()}}
              
        />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    display: block;
    --width-of-switch: 3.5em;
    --height-of-switch: 2em;
    /* size of sliding icon -- sun and moon */
    --size-of-icon: 1.4em;
    /* it is like a inline-padding of switch */
    --slider-offset: 0.3em;
    position: fixed;
    right:10px;
    top:3rem;
    z-index:100;
    width: var(--width-of-switch);
    height: var(--height-of-switch);
  }
    

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f4f4f5;
    transition: .4s;
    border-radius: 30px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: var(--size-of-icon,1.4em);
    width: var(--size-of-icon,1.4em);
    border-radius: 20px;
    left: var(--slider-offset,0.3em);
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(40deg,#ff0080,#ff8c00 70%);
    ;
   transition: .4s;
  }

  input:checked + .slider {
    background-color: #303136;
  }

  input:checked + .slider:before {
    left: calc(100% - (var(--size-of-icon,1.4em) + var(--slider-offset,0.3em)));
    background: #303136;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }`;

export default Switch;
