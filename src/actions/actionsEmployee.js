import axios from "axios";

export const GET_EMPLOYEES_BY_USER = "GET_EMPLOYEES_BY_USER";
export const ADD_EMPLOYEE = "ADD_EMPLOYEE";
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE";
export const DETAIL_EMPLOYEE = "DETAIL_EMPLOYEE";
export const UPDATE_EMPLOYEE = "UPDATE_EMPLOYEE";

export const getEmployeesByUser = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_EMPLOYEES_BY_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: `http://localhost:5000/employees?userId=${data.userId}`,
            timeout: 5000,
            data: data,
        })
            .then((response) => {
                // kondisi ketika sukses get data
                dispatch({
                    type: GET_EMPLOYEES_BY_USER,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // kondisi ketika gagal get data
                dispatch({
                    type: GET_EMPLOYEES_BY_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const addEmployee = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_EMPLOYEE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // post data
        axios({
            method: "POST",
            url: "http://localhost:5000/employees/",
            timeout: 5000,
            data: data,
        })
            .then((response) => {
                // kondisi ketika sukses post data
                dispatch({
                    type: ADD_EMPLOYEE,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // kondisi ketika gagal post data
                dispatch({
                    type: ADD_EMPLOYEE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const deleteEmployee = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_EMPLOYEE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // delete data
        axios({
            method: "DELETE",
            url: "http://localhost:5000/employees/" + id,
            timeout: 5000,
        })
            .then((response) => {
                // kondisi ketika sukses delete data
                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // kondisi ketika gagal delete data
                dispatch({
                    type: DELETE_EMPLOYEE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const detailEmployee = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: DETAIL_EMPLOYEE,
            payload: {
                data: data,
            },
        });
    };
};

export const updateEmployee = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_EMPLOYEE,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // put data
        axios({
            method: "PUT",
            url: "http://localhost:5000/employees/" + data.id,
            timeout: 5000,
            data: data,
        })
            .then((response) => {
                // kondisi ketika sukses put data karyawan
                dispatch({
                    type: UPDATE_EMPLOYEE,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // kondisi ketika gagal put data karyawan
                dispatch({
                    type: UPDATE_EMPLOYEE,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
