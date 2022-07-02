
import React, { useState } from 'react';
import ExportButton from '../ExportButton/ExportButton';


const Table = () => {
  let [row, setRow] = useState(3);
  let [obj, setObj] = useState({});
  let custs = [];
  for (let i = 0; i <= row; i++) {
    custs.push({
      firstName: `Jhone${i}`,
      lastName: `Due${i}`,
      email: `abc${i}@gmail.com`,
      address: `000${i} street city, ST`,
      zipcode: `3929${i}`,
      location: `932${i}`,
      time: `22${i}`,
    });
  }
  return (
    <div className="container mx-auto">
      <div className="">
        <h3 className="py-14 text-4xl font-bold">User Data</h3>
     
      </div>

     <div className="overflow-x-auto">
     <table className="table w-full">
        <thead className="bg-slate-400">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Zipcode</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {custs.map((single, index) => {
            const changeFirstName = (e) => {
              custs[index].firstName = e.target.value;
            };
            const changeLastName = (e) => {
              custs[index].lastName = e.target.value;
            };
            const changeEmail = (e) => {
              custs[index].email = e.target.value;
            };
            const changeAddress = (e) => {
              custs[index].address = e.target.value;
            };
            const changeLocation = (e) => {
              custs[index].location = e.target.value;
            };
            const chagneZipCode = (e) => {
              custs[index].zipcode = e.target.value;
            };
            const changeTime = (e) => {
              custs[index].time = e.target.value;
            };
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <input
                    type="text"
                    onChange={changeFirstName}
                    defaultValue={single.firstName}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeLastName}
                    defaultValue={single.lastName}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeEmail}
                    defaultValue={single.email}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeAddress}
                    defaultValue={single.address}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={chagneZipCode}
                    defaultValue={single.zipcode}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeLocation}
                    defaultValue={single.location}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    onChange={changeTime}
                    defaultValue={single.time}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
     </div>
    <div className="flex mt-9">
    <ExportButton csvData={custs} fileName={"export table"} />
      <button
        className="d-block mx-auto btn btn-success"
        onClick={() => setRow(row++)}
      >
        +
      </button>
    </div>
    </div>
  );
};

export default Table;
