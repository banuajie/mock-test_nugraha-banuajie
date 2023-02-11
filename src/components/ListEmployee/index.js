import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeesByUser } from "../../actions/actionsEmployee";

const ListEmployee = () => {
    const dispatch = useDispatch();
    const { addEmployeeResult, getEmployeesByUserLoading, getEmployeesByUserResult, getEmployeesByUserError } = useSelector((state) => state.EmployeeReducer);

    // get data user login dari local storage
    const getUserLogin = JSON.parse(window.localStorage.getItem("UserLogin"));

    useEffect(() => {
        // tarik data karyawan berdasarkan user id yang login ketika pertama kali masuk halaman
        dispatch(getEmployeesByUser({ userId: getUserLogin.id }));
    }, []);

    useEffect(() => {
        if (addEmployeeResult) {
            dispatch(getEmployeesByUser({ userId: getUserLogin.id }));
        }
    }, [addEmployeeResult, dispatch, getUserLogin.id]);

    return (
        <>
            <section id="list-employee" className="pt-3 pb-3">
                {/* title tabel tambah/edit karyawan */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fs-4 my-auto">Tabel Karyawan</p>
                        </div>
                    </div>
                </div>

                {/* tabel list karyawan */}
                {getEmployeesByUserResult ? (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-bordered table-success table-striped table-hover">
                                    <thead>
                                        <tr className="text-center">
                                            <th className="col-1">#</th>
                                            <th className="col-2">ID Karyawan</th>
                                            <th className="col-2">Nama</th>
                                            <th className="col-1">Gender</th>
                                            <th className="col-2">Jabatan</th>
                                            <th className="col-2">Status</th>
                                            <th className="col-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getEmployeesByUserResult.map((employee) => {
                                            return (
                                                <tr key={employee.id}>
                                                    <th className="text-center">{getEmployeesByUserResult.indexOf(employee) + 1}</th>
                                                    <td className="text-center">{employee.id}</td>
                                                    <td>{employee.employeeName}</td>
                                                    <td className="text-center">{employee.gender}</td>
                                                    <td className="text-center">{employee.position}</td>
                                                    <td className="text-center">{employee.status}</td>
                                                    <td>
                                                        <div className="row flex-nowrap">
                                                            <div className="col">
                                                                <button className="btn btn-info btn-sm w-100">Edit</button>
                                                            </div>
                                                            <div className="col">
                                                                <button className="btn btn-danger btn-sm w-100">Hapus</button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : getEmployeesByUserLoading ? (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="fs-5 my-auto">Loading data karyawan...</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="fs-5 my-auto">{getEmployeesByUserError ? getEmployeesByUserError : "Data Kosong..."}</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ListEmployee;
