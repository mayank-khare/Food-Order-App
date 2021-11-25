import { Fragment } from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
    <Fragment>

        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>

        <div className={classes['main-image']}>
            <img alt="A table of delicious food" src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" />
        </div>

    </Fragment>
    )
};

export default Header;