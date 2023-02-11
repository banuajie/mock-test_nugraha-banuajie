import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../actions/actionsEmployee";
import { getAllDataUser } from "../../actions/actionsUser";

const AddEmployee = () => {
    const dispatch = useDispatch();
    const { getAllDataUserResult } = useSelector((state) => state.UserReducer);
    const { addEmployeeResult } = useSelector((state) => state.EmployeeReducer);

    const [id, setId] = useState("");
    const [employeeName, setEmployeeName] = useState("");
    const [gender, setGender] = useState("");
    const [position, setPosition] = useState("");
    const [status, setStatus] = useState("");

    // get data user login dari local storage
    const getUserLogin = JSON.parse(window.localStorage.getItem("UserLogin"));

    useEffect(() => {
        // tarik data user berdasarkan user id yang login ketika pertama kali masuk halaman
        dispatch(getAllDataUser({ id: getUserLogin.id }));
    }, []);

    // function ini berfungsi untuk menggenerate ID employee
    const generatedId = () => {
        return Date.now();
    };

    const resetForm = () => {
        setId("");
        setEmployeeName("");
        setGender("");
        setPosition("");
        setStatus("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // tambah data karyawan
        dispatch(addEmployee({ id: generatedId(), userId: getUserLogin.id, employeeName: employeeName, gender: gender, position: position, status: status }));
    };

    useEffect(() => {
        // reset form add karyawan setelah sukses add data karyawan
        resetForm();
    }, [addEmployeeResult]);

    return (
        <>
            <section id="add-employee" className="pt-3 pb-3">
                {/* title form add/edit karyawan */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fs-4 my-auto">Tambah Karyawan</p>
                        </div>
                    </div>
                </div>

                {/* Form add/edit karyawan */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={(event) => handleSubmit(event)}>
                                {/* input nama */}
                                <div className="mb-3">
                                    <label className="form-label">Nama Karyawan</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="employeeName"
                                        placeholder="Inputkan nama karyawan"
                                        value={employeeName}
                                        onChange={(event) => {
                                            setEmployeeName(event.target.value);
                                        }}
                                    />
                                </div>

                                {/* input gender */}
                                <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="Laki-laki"
                                                value={gender}
                                                checked={gender === "Laki-laki"}
                                                onChange={(event) => {
                                                    setGender(event.target.id);
                                                }}
                                            />
                                            <label className="form-check-label" htmlFor="Laki-laki">
                                                Laki-laki
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gender"
                                                id="Perempuan"
                                                value={gender}
                                                checked={gender === "Perempuan"}
                                                onChange={(event) => {
                                                    setGender(event.target.id);
                                                }}
                                            />
                                            <label className="form-check-label" htmlFor="Perempuan">
                                                Perempuan
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* input jabatan */}
                                <div className="mb-3">
                                    <label className="form-label">Jabatan</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="position"
                                        placeholder="Inputkan jabatan karyawan"
                                        value={position}
                                        onChange={(event) => {
                                            setPosition(event.target.value);
                                        }}
                                    />
                                </div>

                                {/* select status karyawan */}
                                <div className="mb-4">
                                    <label className="form-label">Status Karyawan</label>
                                    <select
                                        className="form-select"
                                        name="status"
                                        value={status}
                                        onChange={(event) => {
                                            setStatus(event.target.value);
                                        }}
                                    >
                                        <option value="">Pilih Status Karyawan</option>
                                        <option value="Karyawan Tetap">Karyawan Tetap</option>
                                        <option value="Karyawan Vendor">Karyawan Vendor</option>
                                        <option value="Karyawan Intern">Karyawan Intern</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-success btn-sm">
                                    Tambah Karyawan
                                </button>
                            </form>
                        </div>

                        <div className="col d-flex flex-column justify-content-center align-items-center text-center">
                            <p className="fs-1 my-auto">Selamat Datang Di Homepage "{getAllDataUserResult.username}"</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddEmployee;
