import { useContext } from 'react';
import classes from './meals.module.css';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { ThemeContext } from '../../store/ThemeContext';


const Meals = () => {
  const {darkMode} = useContext(ThemeContext)
  return (
    <main className={darkMode ? classes.maindark : classes.mainlight}>
      <MealsSummary />
      <AvailableMeals />
    </main>
  );
};

export default Meals;
