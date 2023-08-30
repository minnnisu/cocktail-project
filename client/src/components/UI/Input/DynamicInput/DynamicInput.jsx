import { Fragment, useEffect } from "react";
import style from "./DynamicInput.module.css";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";
import Dropdown from "../../Dropdown/Dropdown";

function DyanmicInput({ headerTitle, inputField, forms, setForms }) {
  const handleAddForm = () => {
    const initField = {};
    inputField.map((field) => {
      initField[field.name] = "";
    });

    setForms([...forms, initField]);
  };

  const handleRemoveForm = (index) => {
    const newForms = [...forms];
    newForms.splice(index, 1);
    setForms(newForms);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newForms = [...forms];
    newForms[index][name] = value;
    setForms(newForms);
  };

  return (
    <div>
      <div className={style.header}>
        <Title size={4}>{headerTitle}</Title>
        <Button backgroundColor="blue" onClickButton={handleAddForm}>
          추가
        </Button>
      </div>
      {forms.map((form, index) => (
        <div key={index}>
          {inputField.map((field, indexField) => (
            <Fragment key={indexField}>
              {field.type === "dropdown" && (
                <div className={style.input_container}>
                  <Dropdown
                    title={field.title}
                    name={field.name}
                    options={field.options}
                    handleSelectedValueChange={(e) => handleChange(e, index)}
                  />
                </div>
              )}
              {!field.type && (
                <div className={style.input_container}>
                  <Input
                    title={field.title}
                    name={field.name}
                    value={form[field.name]}
                    onChangeValue={(e) => handleChange(e, index)}
                  />
                </div>
              )}
            </Fragment>
          ))}
          <Button
            backgroundColor="red"
            onClickButton={() => handleRemoveForm(index)}
          >
            삭제
          </Button>
        </div>
      ))}
    </div>
  );
}

export default DyanmicInput;
