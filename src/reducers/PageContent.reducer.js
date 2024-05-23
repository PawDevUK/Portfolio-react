import { ADD_BUTTONS, ADD_HEADER_MENU, ADD_PROJECTS, ADD_REACT_INFO, ADD_STACK, ADD_RIGHT_FOOTER_DATA, ADD_HEADER_JUMBO_TEXT, ADD_ABOUT_INTRO, ADD_FONTS } from 'actions/pageContent.actions';
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
            case ADD_ABOUT_INTRO:
                return{
                    ...state,
                    aboutIntro:{ ...action.payload }
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
                    stack:{...state.stack, ...action.payload}
                }
            case ADD_RIGHT_FOOTER_DATA:
                return {
                    ...state,
                        footer:{
                            ...state.footer,
                            rightData:[ ...state.footer.rightData, ...action.payload]
                        }
                };
            case ADD_HEADER_JUMBO_TEXT:
                return {
                    ...state,
                        header:{
                            ...state.header,
                            jumboText:{ ...state.header.jumboText, ...action.payload }
                        }
                };
            case ADD_BUTTONS:
                return {
                    ...state,
                        buttons:{
                            ...state.buttons, ...action.payload 
                        }
                };
            case ADD_FONTS:
                return {
                    ...state,
                    fonts:{
                        ...state.fonts, ...action.payload
                    }
                };

                default:
                    return state;
        }
}