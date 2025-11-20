import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const Toggler = ({ checkedImg, uncheckedImg, onChange, checked, ...props }) => {
  const StyledSwitch = withStyles((theme) => ({
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
          backgroundColor: '#fff',
          backgroundImage: `url(${uncheckedImg})`,
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
      backgroundImage: `url(${checkedImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(Switch);

  return (
    <StyledSwitch
      onChange={onChange}
      checked={checked}
      disableRipple
      {...props}
    />
  );
};

export default Toggler;
