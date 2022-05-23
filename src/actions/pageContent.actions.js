export const ADD_HEADER_MENU = 'ADD_HEADER_MENU'
export const ADD_PROJECTS = 'ADD_PROJECTS';
export const ADD_REACT_INFO = 'ADD_REACT_INFO';
export const ADD_STACK = 'ADD_STACK';
export const ADD_RIGHT_FOOTER_DATA = 'ADD_RIGHT_FOOTER_DATA'

export function AddHeaderMenu(data) {
    return {
        type:ADD_HEADER_MENU,
        payload:data
    }
}
export function AddProjects(data){
    return {
        type:ADD_PROJECTS,
        payload:data
    }
}
export function AddReactInfo(data){
    return{
        type:ADD_REACT_INFO,
        payload:data
    }
}
export function AddStack(data){
    return{
        type:ADD_STACK,
        payload:data
    }
}
export  function AddFooterRightData(data){
    return {
        type:ADD_RIGHT_FOOTER_DATA,
        payload:data
    }
}

