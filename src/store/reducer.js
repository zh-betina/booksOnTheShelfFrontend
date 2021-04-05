import * as actionTypes from "./actions.js";

const initialState = {
    id: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.SAVE_ID):
            return {
                id: action.idValue
            }
        default:
            return state.id
    }
}

export default reducer;