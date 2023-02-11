import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUserById } from "../../actions/actionsSignIn";

const SignInForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { getUserByIdResult } = useSelector((state) => state.SignInReducer);

    const [id, setId] = useState("");
    const [trySignIn, setTrySignIn] = useState(false);
    const [messageErrorLogin, setMessageErrorLogin] = useState(false);

    const handleSignIn = (event) => {
        event.preventDefault();

        // cek data user berdasarkan user id
        dispatch(getUserById({ id: id }));

        // set status trySignIn menjadi true, di sini user mencoba untuk melakukan sign in
        setTrySignIn(true);
    };

    useEffect(() => {
        // function ini berfungsi untuk memverifikasi apakah id user yang diinput user terdaftar atau tidak
        const verifySignIn = () => {
            if (getUserByIdResult.length > 0) {
                // hide message error login bila user id yang diinput oleh user terdaftar
                setMessageErrorLogin(false);

                // save data user login di local storage
                window.localStorage.setItem("UserLogin", JSON.stringify(getUserByIdResult[0]));

                // beralih ke halaman Homepage
                navigate("/home-page");
            } else if (getUserByIdResult.length < 1) {
                // tampilkan message error login bila user id yang diinput oleh user tidak terdaftar
                setMessageErrorLogin(true);
            } else {
                // hide message error login bila kondisi form sedang kosong
                setMessageErrorLogin(false);
            }
        };

        if (trySignIn === true) {
            // jika status trySignIn adalah true lakukan verifikasi sign in
            verifySignIn();
        }
    }, [trySignIn, getUserByIdResult, navigate]);

    return (
        <>
            <section id="login-form" className="d-flex justify-content-center align-items-center bg-secondary bg-opacity-10 vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={(event) => handleSignIn(event)} className="w-25 ms-auto me-auto p-3 bg-success bg-opacity-25 rounded-3">
                                {/* title form login */}
                                <div className="mb-3 text-center">
                                    <p className="fs-4 my-auto bg-success rounded-3 text-white p-1">Sign In Form</p>
                                </div>

                                {/* input user id */}
                                <div className="mb-3">
                                    <label className="form-label">User Id</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="id"
                                        placeholder="Input user ID"
                                        value={id}
                                        onChange={(event) => {
                                            setId(event.target.value);
                                        }}
                                    />
                                </div>

                                {messageErrorLogin && (
                                    <p className="fs-6" style={{ color: "red" }}>
                                        User Id yang Anda input tidak terdaftar...
                                    </p>
                                )}

                                {/* button sign in */}
                                <button type="submit" className="btn btn-success btn-sm w-100">
                                    Sign In
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignInForm;
