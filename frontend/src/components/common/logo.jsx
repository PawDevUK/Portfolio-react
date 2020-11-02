import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import logo from "../../img/pavdev.png"

const useStyles = makeStyles({
    outer:{
        position:"static"
    },
    LogoWrapper: {
        width: "300px",
        margin: "auto",
        position: "relative",
    },
    IntroLogo: {
        position: "absolute",
        height: "80px",
    },
    UnderLogoText: {
        fontSize: "15px",
        color: "white",
        width: "200px",
        position: "absolute",
        top: "63px",
        left: "20px",
    }
})

function Logo(props) {
    const classes = useStyles();
    return (
        // <div className={classes.outer}>
            <div className={classes.LogoWrapper}>
                <img className={classes.IntroLogo} src={logo} alt="pavdev"></img>
                <p className={classes.UnderLogoText}>React developer</p>
            </div>
        // </div>

    );
}

export default Logo;