import { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { username: "", email: "", password: "" };
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [formState, dispatch] = useReducer(formReducer, {
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <input
        name="username"
        value={formState.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={formState.password}
        onChange={handleChange}
        placeholder="Password"
        type="password"
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
