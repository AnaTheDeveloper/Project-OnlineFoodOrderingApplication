import React from 'react';
import styles from './Header.module.css';
import CafeIllustration from '../../assets/CafeIllustration.jpg';
import HeaderChartButton from './HeaderChartButton';

const Header = (props) => {

    //Header will be split into two: The Nav Bar and the image below the header.
    return (
        <React.Fragment>
            {/* Nav Bar */}
            <header className={styles.header}>
                <h1>Anas Cafe</h1>
                {/* I'm forwarding that point at that function in App to the whenClicked prop on the HeaderCartButton*/}
                <HeaderChartButton whenCartVisibilityIsClicked={props.onCartVisibility}/>
            </header>
            {/* Image Location */}
            <div className={styles.mainImage}>
                <img src={CafeIllustration} alt="A Cafe Illustration"/>
            </div>
        </React.Fragment>
    );
};

export default Header;