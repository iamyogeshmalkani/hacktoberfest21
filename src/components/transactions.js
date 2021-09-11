import React from 'react'
import TransData from './Transactionsdata'
import { useState , useEffect} from 'react';
import TableT from './TableT';



export default function Transactions() {
    const [Transactions, setTransactions] = useState([]);
    useEffect(() => {
       setTransactions(TransData);
    }, [])
   
    return (
        <div>
        <h1>Transactions</h1>
      <table class="table  table-striped table-hover">
       <thead>
  <tr>
    <th scope="col">Sr no</th>
    <th scope="col">Sender</th>
    <th scope="col">Receipent</th>
    <th scope="col">Amount</th>
  </tr>
</thead>
<tbody>
  
{Transactions.map((Transaction) =>
      <TableT Transaction={Transaction} ></TableT>
    )}
     </tbody>

    </table>
</div>
       
      
    )
}
