import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({csvData, filName}) => {
    return (
        <div>
            <button className="bg-amber-500 p-3 rounded-md">
                <CSVLink data={csvData} filName={filName}>
                    Generate
                </CSVLink>
            </button>
        </div>
    );
};

export default ExportButton;