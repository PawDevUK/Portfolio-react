import { ADD_HEADER_MENU, ADD_PROJECTS, ADD_REACT_INFO, ADD_STACK, ADD_RIGHT_FOOTER_DATA } from 'actions/pageContent.actions'
import { initialState } from 'config/initialState'

export default function PageContent(state = initialState, action){
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
                    reactInfo: {
                      ...state.reactInfo, ...action.payload
                    }
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