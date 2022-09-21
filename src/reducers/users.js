export default function Users(state = [], action){
    switch(action.type){
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.user, action.payload]
            };
            default:
                return state
    }
}