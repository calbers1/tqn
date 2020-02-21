import {LoadingActions} from "../actions/LoadingActions";

const INITIAL_STATE = {
    loading: true
}

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        
        case INTRO_UPDATE_DATA:
            return { ...state, [payload.prop]: payload.value };

        default:
            return state;

    }
}
