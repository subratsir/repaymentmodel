import React, { useState } from "react";
import { TextField, Button, Card } from "@mui/material";
import { observer } from "mobx-react-lite";
import { store } from "../../data/store";

const addAccountBalance = (data) => {
  store.setAccountsData(parseInt(data));
};

export const Sidebar = observer(() => {
  const [name, setName] = useState(0);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  console.log(store.accountsData);
  return (
    <Card
      style={{
        margin: 10,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className="sidebar"
    >
      <h2>Accounts</h2>
      <p>Count:{store.accountsData.length}</p>
      <TextField
        type={"number"}
        id="enter-balance"
        label="Enter Balance"
        variant="outlined"
        value={name}
        onChange={handleChange}
      />
      <Button
        style={{ marginTop: 10, marginBottom: 10 }}
        variant="contained"
        onClick={() => {
          setName(0);
          addAccountBalance(name);
        }}
      >
        Submit
      </Button>
      {store.accountsData.map((data, index) => (
        <div key={index}>Balance: {data}</div>
      ))}
    </Card>
  );
});
