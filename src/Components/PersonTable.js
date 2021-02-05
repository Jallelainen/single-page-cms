import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const TableHeader = () => {
  return (
    <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Remove</th>
          </tr>
        </thead>
  ) 
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) =>{
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>
          <Button >Show details</Button>
        </td>
        <td>
          <Button variant="danger" onClick={()=> props.removeCharacter(index)}>Delete</Button>
        </td>
      </tr>
    )
  })

 return  <tbody>{rows}</tbody>
}

const PersonTable = (props) =>{
   const {characterData, removeCharacter} = props

    return (
      <Table striped bordered hover>
        <TableHeader />
        <TableBody characterData={characterData}
        removeCharacter={removeCharacter}/>
      </Table>
    )
}

export default PersonTable