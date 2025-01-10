import { useActionState } from "react";

async function increment(previousState, formData) {
  await new Promise((res) => setTimeout(res, 1000));
  return previousState + 1;
}

export default function App() {
  const [state, formAction, isPending] = useActionState(increment, 0);
  return (
    <form>
      {isPending ? "waiting" : state}
      <br />
      <button formAction={formAction}>Increment</button>
    </form>
  );
}
