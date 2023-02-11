import React from "react";
import linkedin from "../../assets/images/linkedin.png";
import gihub from "../../assets/images/github.png";

const Footer = () => {
    return (
        <>
            <section id="footer" className="sticky-bottom">
                <div className="container-fluid">
                    <div className="row bg-success">
                        <div className="col align-self-center text-center">
                            <div className="row align-items-center">
                                <div className="col text-end pe-1">
                                    <img src={linkedin} alt="Linkedin Link" />
                                </div>
                                <div className="col text-start ps-1">
                                    <a href="https://www.linkedin.com/in/nugraha-banuajie-633410ba/" className="text-decoration-none" target="_blank" rel="noreferrer">
                                        <span className="fs-5 text-dark" style={{ cursor: "pointer" }}>
                                            Linkedin
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col bg-success pt-4 pb-4 text-center">
                            <p className="fs-5 my-auto">Mock Test_Nugraha Banuajie</p>
                        </div>

                        <div className="col align-self-center text-center">
                            <div className="row align-items-center">
                                <div className="col text-end pe-1">
                                    <img src={gihub} alt="Github Link" />
                                </div>
                                <div className="col text-start ps-1">
                                    <a href="https://github.com/banuajie" className="text-decoration-none" target="_blank" rel="noreferrer">
                                        <span className="fs-5 text-dark" style={{ cursor: "pointer" }}>
                                            Github
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
