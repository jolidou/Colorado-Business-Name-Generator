import { React, useState } from "react";
import { Modifier, Noun, BusinessType } from "./Labels";
import "./Generator.css";

function Generator() {
  const [name, setName] = useState("");

  const generateName = () => {
    const rand1 = Math.floor(Math.random() * Object.keys(Modifier).length);
    const rand2 = Math.floor(Math.random() * Object.keys(Noun).length);
    const rand3 = Math.floor(Math.random() * Object.keys(BusinessType).length);

    const randAdjective = Modifier[Object.keys(Modifier)[rand1]];
    const randNoun = Noun[Object.keys(Noun)[rand2]];
    const randBusinessType = BusinessType[Object.keys(BusinessType)[rand3]];

    const fullName = randAdjective + " " + randNoun + " " + randBusinessType;
    return fullName.toUpperCase();
  };

  const handleClick = async () => {
    const fetchName = async () => {
      const response = await generateName();
      setName(response);
    };
    fetchName();
  };

  return (
    <div className="Generator-body">
      {name === "" ? (
        <button className="Generator-button" onClick={handleClick}>
          Generate Name
        </button>
      ) : (
        <div>
          <div className="Generator-text"> {name} </div>
          <button className="Generator-button" onClick={handleClick}>
            Try Another!
          </button>
        </div>
      )}{" "}
    </div>
  );
}

export default Generator;
