import { useState } from "react";
import PhoneField from "./PhoneField";
import ServicesField from "./ServicesField";
import { CountriesData } from "../Data/CountriesData";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: CountriesData[0].code,
    phone: "",
    about: "",
    selectedService: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("form", JSON.stringify(form));
    setForm({
      name: "",
      email: "",
      countryCode: CountriesData[0].code,
      phone: "",
      about: "",
      selectedService: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Let's level up your brand, together</h1>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="You@Company.com"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <PhoneField form={form} setForm={setForm} />
      <div className="field textarea">
        <label htmlFor="about">How can we help?</label>
        <textarea
          required
          placeholder="Tell us a little about the project..."
          id="about"
          value={form.about}
          onChange={(e) => setForm({ ...form, about: e.target.value })}
        ></textarea>
      </div>
      <ServicesField form={form} setForm={setForm} />
      <button type="submit" className="get-started-btn">
        Get started
      </button>
    </form>
  );
}
