import { ADD_HEADER_MENU, ADD_PROJECTS, ADD_REACT_INFO, ADD_STACK, ADD_RIGHT_FOOTER_DATA } from 'actions/pageContent.actions'
import { initialState } from 'config/initialState'
import { addUUID_ToObject } from 'factory'
import { v4 as id } from 'uuid'

export default function PageContent(state = initialState, action){
        switch(action.type){
            case ADD_HEADER_MENU:
                return {
                    ...state,
                    header:{
                        ...state.header,
                        menu:[...addUUID_ToObject(state.header.menu, action.payload, id())]
                    }
                };
            case ADD_PROJECTS:
                return {
                    ...state,
                    projects:[...addUUID_ToObject(state.projects, action.payload, id())]
                }
            case ADD_REACT_INFO:
                return {
                    ...state,
                    reactInfo: {
                      ...addUUID_ToObject(state.reactInfo, action.payload, id()), ...action.payload
                    }
                }
            case ADD_STACK:
                return {
                    ...state,
                    stack:[...addUUID_ToObject(state.stack, action.payload, id())]
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