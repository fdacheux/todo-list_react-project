import { useState } from "react";
import Item from "../Item";
import { v4 as uuidv4 } from "uuid";

function Form() {
  const [dataArr, setDataArr] = useState([
    { txt: "Promener le chien (ou pas)", id: uuidv4() },
    { txt: "Sport (mais pas trop", id: uuidv4() },
    { txt: "Coder avec React", id: uuidv4() },
  ]);

  const [stateInput, seStateInput]: any[] = useState<string | null>('');

  const deleteElement = (id: string) => {
    // console.log(id);
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  const linkedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input
          onInput={linkedInput}
          type="text"
          className="form-control"
          id="todo"
        />

        <button className="mt-2 btn btn-primary d-block">Envoyez</button>
      </form>
      <h2>Liste des choses à faire :</h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              id={item.id}
              delFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Form;
