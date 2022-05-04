export const ADD_FOOTER_DATA = 'ADD_FOOTER_DATA'

export default function AddFooterRightData(data){
    return{
        type:ADD_FOOTER_DATA,
        payload:data
    }
}