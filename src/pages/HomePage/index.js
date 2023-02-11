import React from "react";
import AddEmployee from "../../components/AddEmployee";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListEmployee from "../../components/ListEmployee";

const HomePage = () => {
    return (
        <div className="bg-success bg-opacity-10">
            <Header />
            <AddEmployee />
            <ListEmployee />
            <Footer />
        </div>
    );
};

export default HomePage;
