import { useRef } from "react";
import { useFormStatus } from "react-dom";

async function submitForm() {
  await new Promise((res) => setTimeout(res, 5000));
}

function UsernameForm() {
  const { pending, data } = useFormStatus();

  return (
    <div>
      <h3>Request a Username: </h3>
      <input type="text" name="username" disabled={pending} />
      <button type="submit" disabled={pending}>
        Submit
      </button>
      <br />
      <p>{data ? `Requesting ${data?.get("username")}...` : ""}</p>
    </div>
  );
}

export default function App() {
  const ref = useRef(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await submitForm(formData);
        ref.current.reset();
      }}
    >
      <UsernameForm />
    </form>
  );
}
