import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

type InputChange = ChangeEvent<HTMLInputElement>;
type SelectChange = ChangeEvent<HTMLSelectElement>;
type FormSubmit = SubmitEvent<HTMLFormElement>;

// ---------- Types ----------
type MyFormData = {
  firstName: string;
  email: string;
  mobile: number;
  country: string;
  termsAndConditions: boolean;
  newsletter: boolean;
  gender: string;
};

// ---------- Initial Form ----------
const initialForm: MyFormData = {
  firstName: "",
  email: "",
  mobile: 0,
  country: "",
  termsAndConditions: false,
  newsletter: false,
  gender: "",
};

// ---------- Component ----------
const Forms = () => {
  const [myForm, setMyForm] = useState<MyFormData>(initialForm);

  const handleInputChange = (e: InputChange) => {
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

  const handleSelectChange = (e: SelectChange) => {
    const { name, value } = e.target;
    setMyForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    console.log("Form submitted:", myForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text */}
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={myForm.firstName}
        onChange={handleInputChange}
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={myForm.email}
        onChange={handleInputChange}
      />

      {/* Mobile */}
      <input
        type="number"
        name="mobile"
        placeholder="Mobile"
        value={myForm.mobile}
        onChange={handleInputChange}
      />

      {/* Select */}
      <select
        name="country"
        value={myForm.country}
        onChange={handleSelectChange}
      >
        <option value="">Select country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
      </select>

      {/* Radio */}
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

      {/* Checkbox */}
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
