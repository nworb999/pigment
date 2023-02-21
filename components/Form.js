import React, { useState } from "react";
import { useRouter } from "next/router";

function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/barnYard?pigColor=${formData.pigColor}`);
  };

  const handleChange = (e) => {
    const { pigColor, value } = e.target;
    setFormData({ ...formData, [pigColor]: value });
  };

  return (
    <>
      <form id="colorForm" className="audio-trigger" onSubmit={handleSubmit}>
        <label htmlFor="colorInput">choose your color</label>
        <input
          type="text"
          name="pigColor"
          placeholder="pink"
          id="colorInput"
          required
          onChange={handleChange}
          className="audio-trigger"
        />
      </form>
      <button type="submit" form="colorForm" className="audio-trigger">
        submit
      </button>
    </>
  );
}

export default Form;
