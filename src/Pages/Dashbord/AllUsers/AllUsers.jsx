import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllUsers() {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    
    },
  });

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is Admin now !`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch()
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
        .then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly my-6">
        <h3 className="text-3xl ">All user</h3>
        <p className="text-3xl ">Total users : {users.length}</p>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {" "}
                    { user.role === "Admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn bg-amber-600 btn-lg "
                      >
                        <FaUsers className="text-white"></FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost bg-red-600 btn-lg "
                    >
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
