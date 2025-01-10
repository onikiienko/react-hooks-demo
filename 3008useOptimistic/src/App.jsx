import { useOptimistic, useState, useRef } from "react";

function OptimisticThread({ messages, sendMessage }) {
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

function Thread({ messages, sendMessage }) {
  const formRef = useRef();

  async function formAction(formData) {
    formRef.current.reset();

    await sendMessage(formData);
  }

  return (
    <>
      {messages.map((message, index) => (
        <div key={index}>{message.text}</div>
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
    setMessages((messages) => [
      ...messages,
      { text: sentMessage, sending: false },
    ]);
  }

  // return <Thread messages={messages} sendMessage={sendMessage} />;
  return <OptimisticThread messages={messages} sendMessage={sendMessage} />;
}
