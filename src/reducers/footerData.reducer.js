import { ADD_FOOTER_DATA } from 'actions/footer.actions'

const initState = {
    footerRightData:[]
}

export default function FooterData(state = initState, action){
    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_FOOTER_DATA:
            return{
                ...state,
                footerRightData:[ ...state.footerRightData, ...action.payload]
            };
            default:
                return state
    }
}