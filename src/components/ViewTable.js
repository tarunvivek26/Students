import React, { useEffect, useState } from "react";
import ViewTableRow from "./ViewTableRow";
import axios from "axios";

function ViewTable() {
  const [student, setStudent] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5500/students")
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(student);
  return (
    <div>
      <ViewTableRow />
    </div>
  );
}

export default ViewTable;