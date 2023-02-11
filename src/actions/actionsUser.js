import axios from "axios";

export const GET_ALL_DATA_USER = "GET_ALL_DATA_USER";

export const getAllDataUser = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_DATA_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        axios({
            method: "GET",
            url: `http://localhost:5000/accounts?id=${data.id}`,
            timeout: 5000,
            data: data,
        })
            .then((response) => {
                dispatch({
                    type: GET_ALL_DATA_USER,
                    payload: {
                        loading: false,
                        data: response.data[0],
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                dispatch({
                    type: GET_ALL_DATA_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
