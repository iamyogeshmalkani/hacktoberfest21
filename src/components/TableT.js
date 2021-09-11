import React from 'react'

export default function TableT(props) {
    return (
        <tr >
      <th scope="row">{props.Transaction.srno}</th>
      <td>{props.Transaction.sender}</td>
      <td>{props.Transaction.receipent}</td>
      <td>{props.Transaction.amount}</td>
      <td>
      
      </td>
      
    </tr>
    )
}
