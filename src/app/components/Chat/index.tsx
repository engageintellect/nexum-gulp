// Chat.tsx

import React, { FormEvent, ChangeEvent } from "react";
import Messages from "./Messages";
import { Message } from "ai/react";

interface Chat {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleMessageSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  messages: Message[];
}

const Chat: React.FC<Chat> = ({
  input,
  handleInputChange,
  handleMessageSubmit,
  messages,
}) => {
  return (
    <div id="chat" className="flex flex-col w-full lg:w-3/5 px-2">
      <Messages messages={messages} />
      <>
        <form
          onSubmit={handleMessageSubmit}
          className="mt-5 mb-5 relative bg-zinc-700 rounded-lg"
        >
          <input
            type="text"
            className="input-glow appearance-none border rounded w-full py-2 px-3 text-zinc-200 leading-tight focus:outline-none focus:shadow-outline pl-3 pr-10 bg-zinc-600 border-zinc-600 transition-shadow duration-200"
            value={input}
            onChange={handleInputChange}
          />

          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-400">
            Press ⮐ to send
          </span>
        </form>
      </>
    </div>
  );
};

export default Chat;
