// TableList.tsx
import { useState, useEffect } from 'react';
import TableRowComponent from './TableRowComponent';

import { createClient } from '@/utils/supabase/client'

interface RowData {
  name: string;
  task_rep: number;
  created_date: string;
  due_date: string;
  totalBounty: string;
}

async function TableList() {
  const [rowData, setRowData] = useState<RowData[]>([]);
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()

  useEffect(() => {
      async function getBounties() {
        const bountyData = await supabase.from('bounties').select('*');

        // Process each row in the bountyData
        const processedData: RowData[] = [];
        bountyData.data?.forEach((row) => {
          // Example: Create a new variable from the row
          const newRow = {
            ...row,
            newField: row.existingField * 2, // Example of adding a new field
          };
          processedData.push(newRow);
        });
        // Update the state with the processed data
        setRowData(processedData);
      }
  }, [])

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
        {rowData.map((row: RowData) => (
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
