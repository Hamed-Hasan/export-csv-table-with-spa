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
        <div>
            <h1 className="font-bold underline text-3xl">This Is Table</h1>

            <div className="mt-14 px-14">
   



            </div>
        </div>
    );
};

export default Table;