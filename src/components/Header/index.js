import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <section id="header" className="sticky-top">
                <nav className="navbar bg-success pt-2 pb-2">
                    <div className="container">
                        <p className="navbar-brand fs-3 my-auto text-white">Aplikasi Todo List</p>
                        <form
                            className="d-flex"
                            onSubmit={(event) => {
                                event.preventDefault();

                                // beralih ke halaman sign in ketika klik button logout
                                navigate("/");
                            }}
                        >
                            <button type="submit" className="btn btn-danger btn-sm" hidden={location.pathname === "/" ? true : false}>
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Header;
