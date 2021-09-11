import React from 'react'
import Table from './Table';
import Customers from './Customers';
import { useState } from 'react';
import { useEffect } from 'react';



export default function ViewCustomer() {

const [customers, setcustomers] = useState([]);
useEffect(() => {
    setcustomers(Customers);
    
}, [])

    return (
        <div>
        <h1>Customers</h1>
      <table class="table  table-striped table-hover">
       <thead>
  <tr>
    <th scope="col">Client Id</th>
    <th scope="col">Name</th>
    <th scope="col">E-mail</th>
    <th scope="col">Bank Balance</th>
  </tr>
</thead>
<tbody>
  
{customers.map((customer) =>
      <Table customer={customer} ></Table>
    )}
     </tbody>

    </table>
      </div>
    )
}
