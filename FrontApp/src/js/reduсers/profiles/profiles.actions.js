import { profilesActionTypes } from './profiles.types';
import 'regenerator-runtime/runtime';

export const fetchProfilesPending = () => ({
    type: profilesActionTypes.FETCH_PROFILES_PENDING
});

export const fetchProfilesSuccess = (profiles) => ({
    type: profilesActionTypes.FETCH_PROFILES_SUCCESS,
    payload: profiles
});

export const fetchProfilesError = (errorMessage) => ({
    type: profilesActionTypes.FETCH_PROFILES_ERROR,
    payload: errorMessage
});

export const fetchProfiles = () => async (dispatch) => {
    dispatch(fetchProfilesPending())
    try {
        const res = await fetch('http://localhost:3000/profile');
        const data = await res.json();
        dispatch(fetchProfilesSuccess(data))
    } catch(error) {
        dispatch(fetchProfilesError(error.message))
    }
}