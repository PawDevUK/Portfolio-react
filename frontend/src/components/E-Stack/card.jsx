
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
        height:120,
        margin:10,
    },
    media: {
        width:200,
        height:'100%',
    },
    area: {
        display: 'flex'
    },
    button: {
        marginLeft: "auto !important"
    },
    header: {
        display: "flex"
    }

})

export default function card(props) {

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.area}>
                    <CardMedia className={classes.media}
                        image={props.image}
                        title={props.title}

                    />
                
                <CardContent>
                    <ButtonGroup className={classes.header}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.title}
                        </Typography>
                        <Button variant="text" target='_blanc' href={props.href} className={classes.button} size="small" color="primary">
                            Learn More
                       </Button>
                    </ButtonGroup>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};