

export default function Visitors(state= 0 , action){
    switch(action.type){
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: action.payload
            };
            default:
                return state
    }
}