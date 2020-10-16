
import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
    root: {
        margin: '10px 0px',
    },
    area: {
        display: 'flex'
    },
    media: {
        display:'block',
        margin: '0 auto',
        minWidth: '140px',
        maxWidth:'160px',
        transitionDuration: '0.3s',
        height: '130px'
    },
    body:{
        width:"60vw"
    },
    header:{
        fontSize:26,
        fontWeight:600
    },
    typo: {
        fontSize:"16px",
        margin: '0 auto',
        width: '100%',
    }

})
// img need to been adjusted, I cant figure out how to do it right now. Images are different sizes and they look bad. Option 1 is to resize them in Figma or option 2 is to make them fill 100% wrapper. 
export default function card(props) {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.area}>
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
                    {/* <ButtonGroup className={classes.header}>
                       
                        <Button variant="text" target='_blanc' href={props.href} className={classes.button} size="small" color="primary">
                            Learn More
                       </Button>
                    </ButtonGroup> */}

                    <Typography className={classes.typo} variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};