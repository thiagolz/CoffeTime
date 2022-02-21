import { useContext } from "react";
import { MessageContext } from "./MessageContext";
import "./Message.css";

const Message = () => {
  const { message, severity } = useContext(MessageContext);

  return message === "" ? (
    <div className="oculto"></div>
  ) : (
    <div className={message === "" ? "oculto" : severity}>{message}</div>
  );
};

export default Message;
