import { ADD_EMPLOYEE, GET_EMPLOYEES_BY_USER } from "../../actions/actionsEmployee";

const initialState = {
    getEmployeesByUserLoading: false,
    getEmployeesByUserResult: false,
    getEmployeesByUserError: false,

    addEmployeeLoading: false,
    addEmployeeResult: false,
    addEmployeeError: false,
};

const EmployeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES_BY_USER:
            return {
                ...state,
                getEmployeesByUserLoading: action.payload.loading,
                getEmployeesByUserResult: action.payload.data,
                getEmployeesByUserError: action.payload.errorMessage,
            };

        case ADD_EMPLOYEE:
            return {
                ...state,
                addEmployeeLoading: action.payload.loading,
                addEmployeeResult: action.payload.data,
                addEmployeeError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default EmployeeReducer;
