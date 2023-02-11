import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SignInForm from "../../components/SignInForm";

const SignInPage = () => {
    return (
        <div className="bg-success bg-opacity-10">
            <Header />
            <SignInForm />
            <Footer />
        </div>
    );
};

export default SignInPage;
