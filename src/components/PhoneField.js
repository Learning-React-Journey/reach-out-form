import { useState } from "react";
import { CountriesData } from "../Data/CountriesData";

export default function PhoneField({ form, setForm }) {
  const [length, setLength] = useState(CountriesData[0].length);
  function handleChangeCountry(e) {
    const selectedCountry = CountriesData.find(
      (item, i) => item.name === e.target.value
    );
    setForm({ ...form, countryCode: selectedCountry.code, phone: "" });
    setLength(selectedCountry.length);
  }
  return (
    <div className="field">
      <label htmlFor="phone">Phone number</label>
      <div className="phone-content">
        <select onChange={handleChangeCountry}>
          {CountriesData.map((item, i) => (
            <option key={i + 1}>{item.name}</option>
          ))}
        </select>
        <input type="text" className="code" value={form.countryCode} readOnly />
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
          id="phone"
          maxLength={length}
          placeholder={`Enter ${length}-digit phone number`}
        />
      </div>
    </div>
  );
}
