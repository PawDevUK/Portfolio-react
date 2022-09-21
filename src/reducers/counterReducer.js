export default function Visitors(state = 0, action) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return action.payload;
        default:
            return state;
    }
}
