import React from "react";

function View({ list, handleDelete, handleEdit }) {
  return (
    <>
    <div className="container">
      <div className="mt-5">
        <h2 className="text-center">User Data</h2>
        {list.length > 0 ? (
          list.map((user, index) => (
            
            <table
              key={index}
              className="table table-bordered  mb-4 rounded"
              
            >
              <thead className="rounded-top-5 ">
                <tr >
                  <th className="head-bg">Sr. No.</th>
                  <th className="head-bg">Data</th>
                  <th className="head-bg">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan={9}>{index+1}</th>
                  <th>Username</th>
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>{user.password}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{user.phone}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{user.gender}</td>
                </tr>
                <tr>
                  <th>Hobby</th>
                  <td>{user.hobby?.toString()}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{user.address}</td>
                </tr>
                <tr>
                  <th>City</th>
                  <td>{user.city}</td>
                </tr>
                <tr>
                  <th>Actions</th>
                  <td>
                    <button
                      className="btn btn-danger me-2"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(user.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))
        ) : (
          <div className="text-center">Data Not Found.</div>
        )}
        
      </div>
    </div>
    </>
  );
}

export default View;