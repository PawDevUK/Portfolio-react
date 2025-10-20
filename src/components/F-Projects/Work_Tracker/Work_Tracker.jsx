import React, { Component } from 'react';

import Calendar from './Calendar/Calendar';
// import DayTime from './DayTime/DayTime';
import ClockInOut from './Clock-in_out/Clock_IN_OUT';
import Menu from './Menu/Menu';
import { connect } from 'react-redux';
import s from './style/style.module.css';
import Presentation from './Presentation';
import fullYear24_25 from './fullYear24_25.json';

class WorkTracker extends Component {
  returnRoute(route) {
    let payload = '';
    switch (route) {
      case 'ClockInOut':
        payload = <ClockInOut></ClockInOut>;
        break;
      case 'Calendar':
        payload = <Calendar></Calendar>;
        break;
      case 'Presentation':
        // TODO: Replace mockData with actual data from API or Redux store
        payload = <Presentation data={fullYear24_25}></Presentation>;
        break;
      case 'Day Tracker':
        // payload = <DayTime></DayTime>;
        break;
      default:
    }
    return payload;
  }

  render() {
    return (
      <div id={s.wrapper}>
        <Menu>{this.returnRoute(this.props.WT_Route)}</Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    WT_Route: state.WT_Route,
  };
};
export default connect(mapStateToProps)(WorkTracker);
