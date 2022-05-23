export const ADD_COUNTER = 'ADD_COUNTER'


export default function addCounter(counter){
    return {
        type:ADD_COUNTER,
        payload:counter
    }
}