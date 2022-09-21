import { ADD_WT_ROUTE } from "actions/addWT_Route.action";

export default function AddWT_Route(state = 'calendar', action) {
    switch (action.type) {
        case ADD_WT_ROUTE:
            return action.payload;
        default:
            return state;
    }
}
