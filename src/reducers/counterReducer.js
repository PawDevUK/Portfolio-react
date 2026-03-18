export default function Visitors(state = 346, action) {
    switch (action.type) {
        case 'ADD_COUNTER':
            return action.payload;
        default:
            return state;
    }
}
