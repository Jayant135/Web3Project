import React, { useState } from "react";

function OwnerVerify({ ownerVerify }) {
  const [add, setadd] = useState("");
  return (
    <div>
      <form
        className="formStyle"
        onSubmit={(e) => {
          e.preventDefault();
          ownerVerify(add);
        }}
      >
        <h1 htmlFor="">Register Institute address </h1>

        <input
          type="text"
          name="address"
          value={add}
          onChange={(e) => setadd(e.target.value)}
          placeholder="0xEC5a998A3C04D1900ce13a3055e567Cf82e55abc"
        ></input>
        <br />
        <button className="myButton">Register</button>
      </form>
    </div>
  );
}

export default OwnerVerify;
