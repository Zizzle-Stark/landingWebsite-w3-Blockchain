import { useEffect, useState } from "react";

function Inspector() {
  const listOfLands = JSON.parse(localStorage.getItem("listOfLands")) || [];
  const toVerify = listOfLands.filter((land) => {
    if (land.isforSell) {
      return true;
    }
    return false;
  });

  const handleVerify = (land) => {
    const index = listOfLands.findIndex((object) => land.landID === object.landID);
    listOfLands[index].isforSell = false
    localStorage.setItem('listOfLands',JSON.stringify(listOfLands))
    window.location.reload()
  };
  return (
    <>
      <div>
        {toVerify.map((land) => {
          return (
            <>
              <h1>{land.landAddress}</h1>
              <button onClick={() => handleVerify(land)}>Approve</button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Inspector;
