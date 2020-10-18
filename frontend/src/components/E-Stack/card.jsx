import React, { useState,useEffect } from 'react';
import '../../style.css'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyles = makeStyles({
    root:{
        margin:"10px 0px"
    },
    area: {
        display: 'flex',
        "&:hover": {
            textDecoration: "none"
        }
    },
    media: {
        display: 'block',
        margin: '0 auto',
        minWidth: '140px',
        maxWidth: '160px',
        transitionDuration: '0.3s',
        height: '130px'
    },
    body: {
        width: "60vw"
    },
    header: {
        fontSize: 26,
        fontWeight: 600
    },
    typo: {
        fontSize: "16px",
        margin: '0 auto',
        width: '100%',
    }
})

export default function card(props) {

    useEffect(()=>{
        AOS.init({duration:1000});
    })

    const classes = useStyles();
    return (
            <Card data-aos="fade-up" className={classes.root}>
                <CardActionArea href={props.href} target='_blank' className={classes.area}>
                    <CardContent>
                        <CardMedia className={classes.media}
                            image={props.image}
                            title={props.title}
                        />
                    </CardContent>
                    <CardContent className={classes.body}>
                        <Typography className={classes.header} gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Typography className={classes.typo} variant="body2" color="textSecondary" component="p">
                            {props.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

    );
};