const INITIAL_STATE = {
    profiles: null,
    pending: false,
    errorMessage: null
}

export const profilesReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}