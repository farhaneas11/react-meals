import { useContext } from 'react';
import { ThemeContext } from '../../store/ThemeContext';
import classes from './Card.module.css';

const Card = props => {
  const {darkMode } = useContext(ThemeContext);
  return <div className={darkMode ? classes.carddark : classes.card}>{props.children}</div>
};

export default Card;