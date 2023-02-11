import axios from "axios";

export const GET_USER_BY_ID = "GET_USER_BY_ID";

export const getUserById = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_USER_BY_ID,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: `http://localhost:5000/accounts?id=${data.id}`,
            timeout: 5000,
            data: data,
        })
            .then((response) => {
                // kondisi jika sukses get data
                dispatch({
                    type: GET_USER_BY_ID,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // kondisi jika gagal get data
                dispatch({
                    type: GET_USER_BY_ID,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
