import { useOptimistic, useState, useRef } from "react";

function Thread({ messages, sendMessage }) {
  const formRef = useRef();
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ],
  );

  async function formAction(formData) {
    addOptimisticMessage(formData.get("message"));

    formRef.current.reset();

    await sendMessage(formData);
  }

  return (
    <>
      {optimisticMessages.map((message, index) => (
        <div key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction} ref={formRef}>
        <input type="text" name="message" placeholder="Hello!" />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

async function deliverMessage(message) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

export default function App() {
  const [messages, setMessages] = useState([
    { text: "Hello there!", sending: false },
  ]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return <Thread messages={messages} sendMessage={sendMessage} />;
}
