import { ADD_HEADER_MENU, ADD_PROJECTS, ADD_REACT_INFO, ADD_STACK, ADD_RIGHT_FOOTER_DATA } from 'actions/pageContent.actions'
import { isPopulatedArray } from 'factory'
import { initialState } from 'config/initialState'

const initState = initialState

export default function PageContent(state = initState, action){
  
    if(isPopulatedArray(action.payload)){
        switch(action.type){
            case ADD_HEADER_MENU:
                return {
                    ...state,
                    header:{
                        ...state.header,
                        menu:[...state.header.menu, ...action.payload]
                    }
                };
            case ADD_PROJECTS:
                return {
                    ...state,
                    projects:[...state.projects, ...action.payload]
                }
            case ADD_REACT_INFO:
                return {
                    ...state,
                    reactInfo: [
                        ...state.reactInfo, ...action.payload
                    ]
                }
            case ADD_STACK:
                return {
                    ...state,
                    stack:[...state.stack, ...action.payload]
                }
            case ADD_RIGHT_FOOTER_DATA:
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