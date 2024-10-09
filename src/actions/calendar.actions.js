export const ADD_CALENDAR = 'ADD_CALENDAR'

export function addCalendar(data){
    return {
        type:ADD_CALENDAR,
        payload:data
    }
}