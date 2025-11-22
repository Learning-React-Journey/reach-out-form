import { ServicesData } from "../Data/ServicesData";

export default function ServicesField({ form, setForm }) {
  return (
    <div className="services">
      <label>Services</label>
      <div className="checkboxes">
        {ServicesData.map((item, i) => (
          <label key={i + 1}>
            <input
              type="checkbox"
              checked={form.selectedService === item}
              onChange={() => setForm({ ...form, selectedService: item })}
            />{" "}
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
