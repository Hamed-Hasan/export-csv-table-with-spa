import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = () => {
    return (
        <div>
            <button>
                <CSVLink>
                    Generate
                </CSVLink>
            </button>
        </div>
    );
};

export default ExportButton;