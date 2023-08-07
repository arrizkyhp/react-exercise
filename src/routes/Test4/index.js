import { useEffect, useState } from "react";
import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";

const Test4 = () => {
  const [dataUser, setDataUser] = useState(DATA);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setDataUser(DATA.filter((item) => item.name.includes(inputValue)));
  }, [inputValue]);

  return (
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>
          Please filter the table by name search (after press enter or click
          search button)
        </li>
      </ul>
      <Input setInputValue={setInputValue} />
      <div>
        <Table data={dataUser} />
      </div>
    </div>
  );
};

export default Test4;
