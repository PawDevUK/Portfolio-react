import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import {PolskaFlaga} from 'img/index'
import {EnglishFlag} from 'img/index'

const Toggler = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    height: 26,
    padding: 1,
    color: '#17293f',
    '&$checked': {
    color: '#17293f',
    transform: 'translateX(16px)',
      '& + $track': {
        backgroundColor:'#fff',
        backgroundImage: `url(${PolskaFlaga})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 1,
        border: 'none',
      },
    },

  },
  thumb: {
    width: 24,
    height: 24,
  },
  
  track: {
    borderRadius: 26 / 2,
    backgroundImage: `url(${EnglishFlag})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {
  },
  focusVisible: {
  },
}))(({ classes, ...props }) => {
  console.log(PolskaFlaga);
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});


export default Toggler