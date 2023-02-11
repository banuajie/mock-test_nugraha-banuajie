import { GET_USER_BY_ID } from "../../actions/actionsSignIn";

const initialState = {
    getUserByIdLoading: false,
    getUserByIdResult: false,
    getUserByIdError: false,
};

const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_BY_ID:
            return {
                ...state,
                getUserByIdLoading: action.payload.loading,
                getUserByIdResult: action.payload.data,
                getUserByIdError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default SignInReducer;
