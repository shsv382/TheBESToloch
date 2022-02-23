import { profilesActionTypes } from "./profiles.types";

const INITIAL_STATE = {
    profiles: [],
    pending: false,
    errorMessage: null
}

export const profilesReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case (profilesActionTypes.FETCH_PROFILES_PENDING):
            return {
                ...state, 
                pending: true, 
                errorMessage: null};
        case (profilesActionTypes.FETCH_PROFILES_SUCCESS):
            return {
                ...state,
                pending: false,
                profiles: action.payload,
                errorMessage: null
            }
        case (profilesActionTypes.FETCH_PROFILES_ERROR):
            return {
                ...state,
                pending: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}