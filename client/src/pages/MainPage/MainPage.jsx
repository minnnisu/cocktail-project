import React, { useState } from "react";

function MainPage() {
  const [forms, setForms] = useState([{ name: "", abv: "" }]);

  const handleAddForm = () => {
    setForms([...forms, { name: "", abv: "" }]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 폼 데이터를 사용하거나 저장할 수 있습니다.
    console.log(forms);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {forms.map((form, index) => (
          <div key={index}>
            <h2>폼 {index + 1}</h2>
            <label>
              이름:
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <label>
              도수:
              <input
                type="text"
                name="abv"
                value={form.abv}
                onChange={(e) => handleChange(e, index)}
              />
            </label>
            <button type="button" onClick={() => handleRemoveForm(index)}>
              삭제 (-)
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddForm}>
          추가 (+)
        </button>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default MainPage;
