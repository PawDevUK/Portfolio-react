import React, { Component } from 'react';

import Calendar from './Calendar/Calendar.jsx';
import DayTime from './DayTime/DayTime.jsx';
import Menu from './Menu/Menu';
import { connect } from "react-redux";
import s from './style/style.module.css';

class WorkTracker extends Component {

    returnRoute(route){
        let payload = ''
        switch(route) {
            case 'Calendar':
                payload = <Calendar></Calendar>
                break;
            case 'Day Tracker':
                payload = <DayTime></DayTime> 
              break;
            default:

          }
          return payload
    }
    
    render() {
        return (
            <div id={s.wrapper}>
                <Menu>
                    {this.returnRoute(this.props.WT_Route)}
                </Menu>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        WT_Route:state.WT_Route
    }
}
export default connect(mapStateToProps)(WorkTracker)