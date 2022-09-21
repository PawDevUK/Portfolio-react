export const ADD_WT_ROUTE = 'ADD_WT_ROUTE';

export default function WT_Route(route){
    return {
        type:ADD_WT_ROUTE,
        payload:route
    }
}