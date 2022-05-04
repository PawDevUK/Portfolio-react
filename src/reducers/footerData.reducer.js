import { ADD_FOOTER_DATA } from 'actions/footer.actions'
import { isPopulatedArray } from 'factory'

const initState = {
    footerRightData:[]
}

export default function FooterData(state = initState, action){

    if(isPopulatedArray(action.payload)){
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

    return state
    
}