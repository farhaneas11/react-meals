import { Fragment  } from 'react';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import ThemeButton from '../theme/ThemeButton';

const Header = (props) => {  
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <div className={classes.buttons}>
          <HeaderCartButton onClick={props.onShowCart} />
          <ThemeButton/>
        </div>
      </header>
      <div className={classes['main-image']}>
        <img src='assets/food.jpg' alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
