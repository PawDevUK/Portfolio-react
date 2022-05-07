import { ADD_FOOTER_DATA } from 'actions/footer.actions'
import { isPopulatedArray } from 'factory'
import { initialState } from 'config/initialState'

const initState = initialState

export default function PageContent(state = initState, action){
  
    if(isPopulatedArray(action.payload)){
        switch(action.type){
            case ADD_FOOTER_DATA:
                return {
                    ...state,
                        footer:{
                            ...state.footer,
                            rightData:[ ...state.footer.rightData, ...action.payload]
                        }
                };
                default:
                    return state
        }
    }

    return state
    
}