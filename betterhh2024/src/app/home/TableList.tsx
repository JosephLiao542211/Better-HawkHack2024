// TableList.tsx
import React from 'react';
import TableRowComponent from './TableRowComponent';

interface RowData {
    name: string;
    date: string;
    totalBounty: string;
    id: number;
}

const TableList: React.FC = () => {
    const rows: RowData[] = [
        { name: 'Alice', date: '2024-05-01', totalBounty: '$100', id: 1 },
        { name: 'Bob', date: '2024-05-02', totalBounty: '$200', id: 2 },
        { name: 'Charlie', date: '2024-05-03', totalBounty: '$300', id: 3 },
        { name: 'Alice', date: '2024-05-01', totalBounty: '$100', id: 1 },
        { name: 'Bob', date: '2024-05-02', totalBounty: '$200', id: 2 },
        { name: 'Charlie', date: '2024-05-03', totalBounty: '$300', id: 3 },
        { name: 'Alice', date: '2024-05-01', totalBounty: '$100', id: 1 },
        { name: 'Bob', date: '2024-05-02', totalBounty: '$200', id: 2 },
        { name: 'Charlie', date: '2024-05-03', totalBounty: '$300', id: 3 },
        // Add more rows as needed
    ];

    const handleEnter = (id: number) => {
        console.log(`Enter button clicked for row with id: ${id}`);
    };

    return (
        <div className="w-full overflow-x-auto ">
            <div className="flex w-full bg-gray-100 bg-opacity-5 p1 p-1 ">
                <div className="flex-1 p-2">Name</div>
                <div className="flex-1 p-2">Date</div>
                <div className="flex-1 p-2">Total Bounty</div>
                <div className="flex-1 p-2">Action</div>
            </div>
            <div className="max-h-96 overflow-y-auto ">
                {rows.map((row) => (
                    <TableRowComponent
                        key={row.id}
                        name={row.name}
                        date={row.date}
                        totalBounty={row.totalBounty}
                        onEnter={() => handleEnter(row.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TableList;
