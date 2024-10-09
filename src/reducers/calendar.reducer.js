import { ADD_CALENDAR , ADD_WT_ROUTE, WT_Route } from "actions/calendar.actions";
import { initialState } from "config/initialState";

export default function workTracker( state = initialState.WorkTracker, action){
    switch(action.type){
        case ADD_CALENDAR:
            return {
                ...state,
                WorkTracker:{
                    ...state.WorkTracker,
                    calendars:[
                        ...state.WorkTracker.calendars, action.payload
                    ]
                }
            };
        case ADD_WT_ROUTE:
            return {
                ...state,
                WT_Route:action.payload
            }
            default:
                return state;
    }
}