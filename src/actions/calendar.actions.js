export const ADD_CALENDAR = 'ADD_CALENDAR'
export const ADD_WT_ROUTE = 'ADD_WT_ROUTE';

export function addCalendar(data){
    return {
        type:ADD_CALENDAR,
        payload:data
    }
}

export function WT_Route(route){
    return {
        type:ADD_WT_ROUTE,
        payload:route
    }
}