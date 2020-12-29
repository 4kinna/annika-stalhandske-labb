import React, { useState } from "react";
import Employee from "./Employee";

function EmployeeList(props) {
  const [employees, setEmployees] = useState([
    {
      name: "Yazeen Jasim",
      email: "yj@mail.com",
      phone: "0700000000",
      skills: "React",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Obi-wan Kenobi",
      email: "ok@mail.com",
      phone: "0700000000",
      skills: "Java",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Annika Stålhandske",
      email: "as@mail.com",
      phone: "0700000000",
      skills: "None",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
  ]); //state (först variable andra function)

  function handleAddEmployee(props) {
    console.log("Add emlployee");
    const newEmployee = {
      name: "Sandra Wahlgren",
      email: "sw@mail.com",
      phone: "0700000000",
      skills: "Html och CSS",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    };

    setEmployees(function () {
      return [...employees, newEmployee];
    });
  }

  return (
    <div>
      <h1>EmployeeList</h1>
      <button className="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      {employees.map((employee, index) => (
        <Employee EmployeesData={employee} key={index} />
      ))}
    </div>
  );
}

export default EmployeeList;
