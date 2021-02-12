import React from "react";
//------------Bootstrap--------------
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";


const TableHeader = (props) => {
  return (
    <thead>
      <tr>
        <th>Sort by: <button className="btn btn-outline-secondary" onClick={() => props.sortOrder()}>{props.sortBtn}</button></th>
        <th>Details</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  console.log(props)
  if(props.sortByAlpha === true){
    props.characterData.sort(function(a, b){
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })}else{
      props.characterData.sort(function(a, b){return a.id - b.id})
      console.log(props.characterData)
    }

  const rows = props.characterData.map((person) => {
    return (
      <tr key={person.id}>
        <td>{person.name}</td>
        <td>
          <Button variant="secondary" onClick={() => props.openDetails(person.id)}>
            Show details
          </Button>
        </td>
        <td>
          <Button variant="danger" onClick={() => props.removeCharacter(person.id)}>
            Delete
          </Button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const PersonTable = (props) => {
  console.log(props)
  const { characterData, removeCharacter, openDetails, sortOrder, sortByAlpha, sortBtn } = props;

  return (
    <Table striped bordered hover>
      <TableHeader 
      sortOrder={sortOrder}
      sortBtn={sortBtn}
      />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
        openDetails={openDetails}
        sortByAlpha={sortByAlpha}
      />
    </Table>
  );
};

export default PersonTable;
