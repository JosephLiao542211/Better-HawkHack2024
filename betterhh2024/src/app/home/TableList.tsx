// TableList.tsx
import TableRowComponent from './TableRowComponent';

import { runPython } from '@/src/app/run-python/actions'
import { addFunds } from './actions'

interface RowData {
  name: string;
  task_rep: number;
  due_date: string;
  totalBounty: string;
  id: number;
}

async function TableList() {
  const rowData: RowData[] = [
    {name: 'Do 10 pushups', task_rep: 10, due_date: '2024-06-24', totalBounty: '50 ETH', id: 1},
    {name: 'Do 10 jumping jacks', task_rep: 10, due_date: '2024-06-28', totalBounty: '150 ETH', id: 2},
    {name: 'Do 10 squats', task_rep: 10, due_date: '2024-06-16', totalBounty: '120 ETH', id: 3},
    {name: 'Do 20 reps of bench', task_rep: 20, due_date: '2024-08-12', totalBounty: '30 ETH', id: 4},
    {name: 'Do 50 lunges', task_rep: 50, due_date: '2024-09-08', totalBounty: '10 ETH', id: 5},
    {name: 'Do 80 goblet squats', task_rep: 80, due_date: '2024-10-20', totalBounty: '80 ETH', id: 6},
  ];

  const handleEnter = (id: number) => {
    console.log(`Enter button clicked for row with id: ${id}`);
    runPython();
    addFunds(1);
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
        {rowData.map((row: RowData) => (
          <TableRowComponent
            key={row.id}
            name={row.name}
            date={row.due_date}
            totalBounty={row.totalBounty}
            onEnter={() => handleEnter(row.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TableList;
