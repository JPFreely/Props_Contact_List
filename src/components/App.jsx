import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
      />
      <Card
        name={contacts[4].name}
        img={contacts[4].imgURL}
        tel={contacts[4].phone}
        email={contacts[4].email}
      />
      <Card
        name={contacts[5].name}
        img={contacts[5].imgURL}
        tel={contacts[5].phone}
        email={contacts[5].email}
      />
      <Card
        name={contacts[6].name}
        img={contacts[6].imgURL}
        tel={contacts[6].phone}
        email={contacts[6].email}
      />
      <Card
        name={contacts[7].name}
        img={contacts[7].imgURL}
        tel={contacts[7].phone}
        email={contacts[7].email}
      />
    </div>
  );
}

export default App;
