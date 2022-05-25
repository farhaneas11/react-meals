import React , {useContext} from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import {BsToggleOff,BsToggleOn} from 'react-icons/bs';
import classes from './themebutton.module.css';

const ThemeButton = () => {
  const {darkMode , setDarkMode} = useContext(ThemeContext);
  const handleTheme = ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <button onClick={handleTheme} className={classes.btn}>
      {darkMode
      ? <BsToggleOn style={{fontSize:'2rem'}}/> : <BsToggleOff style={{fontSize:'2rem'}}/>}      
    </button>
  )
}

export default ThemeButton;