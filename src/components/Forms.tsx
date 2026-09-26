import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

type FormSubmit = SubmitEvent<HTMLFormElement>;
type InputEvent = ChangeEvent<HTMLInputElement>;
type SelectEvent = ChangeEvent<HTMLSelectElement>;

type MyForm = {
  fullName: string;
  email: string;
  mobile: number;
  country: string;
  gender: string;
  termsAndConditions: boolean;
  newsletter: boolean;
};

const Forms = () => {
  const [myForm, setMyForm] = useState<MyForm>({
    fullName: "",
    email: "",
    mobile: 0,
    country: "",
    gender: "",
    termsAndConditions: false,
    newsletter: false,
  });

  const handleMyForm = (e: FormSubmit) => {
    e.preventDefault();
    console.log(myForm);
  };

  const handleInputChange = (e: InputEvent) => {
    const { name, value, type, checked } = e.target;
    setMyForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "mobile"
            ? Number(value)
            : value,
    }));
  };

  const handleSelectChange = (e: SelectEvent) => {
    const { name, value } = e.target;
    setMyForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h2>Forms</h2>

      <form onSubmit={handleMyForm}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={myForm.fullName}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={myForm.email}
          onChange={handleInputChange}
        />

        <input
          type="number"
          name="mobile"
          placeholder="Mobile"
          value={myForm.mobile}
          onChange={handleInputChange}
        />

        <select
          name="country"
          value={myForm.country}
          onChange={handleSelectChange}
        >
          <option value="">Select country</option>
          <option value="in">India</option>
          <option value="us">USA</option>
        </select>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={myForm.gender === "male"}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={myForm.gender === "female"}
            onChange={handleInputChange}
          />
          Female
        </label>

        <label>
          <input
            type="checkbox"
            name="newsletter"
            checked={myForm.newsletter}
            onChange={handleInputChange}
          />
          Subscribe to newsletter
        </label>

        <label>
          <input
            type="checkbox"
            name="termsAndConditions"
            checked={myForm.termsAndConditions}
            onChange={handleInputChange}
          />
          I accept terms and conditions
        </label>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default Forms;
