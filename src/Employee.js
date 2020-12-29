import React from "react";

function Employee(props) {
  const { EmployeesData } = props; //object destructuring, bryter ut mindre objekt ur ett objekt
  if (EmployeesData) {
    var { name, email, phone, skills, avatar } = EmployeesData;
  }

  return (
    <div className="EmployeeDiv">
      <img className="avatar" src={avatar} />
      <ul>
        <h2>{name}</h2>
        <p>
          <strong>Email: </strong>
          {email}
        </p>
        <p>
          <strong>Phone: </strong>
          {phone}
        </p>
        <p>
          <strong>Skills: </strong>
          {skills}
        </p>
      </ul>
    </div>
  );
}

export default Employee;
