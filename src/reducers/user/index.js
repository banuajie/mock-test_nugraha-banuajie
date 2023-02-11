import { GET_ALL_DATA_USER } from "../../actions/actionsUser";

const initialState = {
    getAllDataUserLoading: false,
    getAllDataUserResult: false,
    getAllDataUserError: false,

    addEmployeeLoading: false,
    addEmployeeResult: false,
    addEmployeeError: false,
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DATA_USER:
            return {
                ...state,
                getAllDataUserLoading: action.payload.loading,
                getAllDataUserResult: action.payload.data,
                getAllDataUserError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default UserReducer;
