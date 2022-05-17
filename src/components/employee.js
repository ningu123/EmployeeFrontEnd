import React, { useState, useEffect } from "react";
import axios from 'axios';

export const Employee = () => {
  const [val, setVal] = useState({
    data: []
  })
  useEffect(() => {
    axios.get('http://localhost:5000/employee/getEmployee').then((res) => {
      console.log(res, "getcall succuss");
      const get = res.data.body.value;
      setVal({
        data: get
      });
    })
  }, [])
 
  return (
    <>
      <div className="container">
        <h2 className="mt-5">Employees</h2>
          {/* <Addemployee /> */}
        <table border="" className="mt-2">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Join Date</th>
              <th>Department</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <tbody>
            {
              val.data.map((items, index) => {
                return <tr key={index} style={{ textAlign: "center" }}>
                  <td >{index + 1}</td>
                  <td  >{items.empid}</td>
                  <td>{items.empname}</td>
                  <td>{items.email}</td>
                  <td>{items.created_on}</td>
                  <td>{items.department}</td>
                </tr>
              })
            }

          </tbody>
        </table>
      </div>
    </>
  );
};
