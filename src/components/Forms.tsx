import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

type InputChange = ChangeEvent<HTMLInputElement>;
type SelectChange = ChangeEvent<HTMLSelectElement>;
type TextareaChange = ChangeEvent<HTMLTextAreaElement>;
type FormSubmit = SubmitEvent<HTMLFormElement>;

type FormData = {
  firstName: string;
  email: string;
  gender: string;
  country: string;
  newsletter: boolean;
  terms: boolean;
  accountType: string;
  bio: string;
};

const initialForm: FormData = {
  firstName: "",
  email: "",
  gender: "",
  country: "",
  newsletter: false,
  terms: false,
  accountType: "",
  bio: "",
};

const Forms = () => {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  const handleInputChange = (e: InputChange) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (e: SelectChange) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTextareaChange = (e: TextareaChange) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text Input */}
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={form.firstName}
        onChange={handleInputChange}
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleInputChange}
      />

      {/* Select Dropdown */}
      <select name="gender" value={form.gender} onChange={handleSelectChange}>
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <select name="country" value={form.country} onChange={handleSelectChange}>
        <option value="">Select country</option>
        <option value="in">India</option>
        <option value="us">USA</option>
      </select>

      <br />

      {/* Checkbox 1 */}
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={form.newsletter}
          onChange={handleInputChange}
        />
        Subscribe to newsletter
      </label>

      {/* Checkbox 2 */}
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={form.terms}
          onChange={handleInputChange}
        />
        I accept the terms and conditions
      </label>

      <br />

      {/* Radio */}
      <label>
        <input
          type="radio"
          name="accountType"
          value="personal"
          checked={form.accountType === "personal"}
          onChange={handleInputChange}
        />
        Personal
      </label>
      <label>
        <input
          type="radio"
          name="accountType"
          value="business"
          checked={form.accountType === "business"}
          onChange={handleInputChange}
        />
        Business
      </label>

      <br />

      {/* Textarea */}
      <textarea
        placeholder="Bio / About you"
        name="bio"
        value={form.bio}
        onChange={handleTextareaChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Forms;
