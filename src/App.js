import Form from "./components/Form";

export default function App() {
  return (
    <div className="wrapper">
      <img src={require("./Assets/stairs.png")} alt="stairs img" />
      <Form />
    </div>
  );
}
