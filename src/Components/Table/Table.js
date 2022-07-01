import React, { useState } from 'react';

const Table = () => {
    const [row, setRow] = useState(3);
    const [obj, setObj] = useState({});
    let custs = [];
    for (let i = 0; i <= row; i++) {
        custs.push({
            firstName: `first${i}`,
            lastName: `last${i}`,
            email: `email${i}`,
            address: `address${i}`,
            zipCode: `zipCode${i}`,
        });
    }
    return (
        <div className='container mx-auto'>
            <h1 className="font-bold underline text-3xl">User Data</h1>

            <div className="mt-14 px-14">
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>

     {
        custs.map((single, index) => {
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
            const changeZipCode = (e) => {
                custs[index].zipCode = e.target.value;
            };
        })
     }
   
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>

            </div>
        </div>
    );
};

export default Table;