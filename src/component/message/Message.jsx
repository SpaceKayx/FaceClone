import React from 'react'

const MessageComponent = ({onClose}) => {
  // Ví dụ dữ liệu tin nhắn
  const messages = [
    { text: 'Hello!', sender: 'other' },
    { text: 'Hi there!', sender: 'me' },
    { text: 'How are you?', sender: 'other' },
    { text: 'I am good, thanks!', sender: 'me' },
  ];

  return (
    <div className="fixed bottom-0 right-0 m-5 w-80 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
      <div className="flex justify-between items-center p-3 bg-gray-100 border-b border-gray-300">
        <h3 className="text-lg font-semibold">Chat</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div className="flex-1 p-3 min-h-[200px] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 max-w-[70%] p-2 rounded-lg ${
              msg.sender === 'me'
                ? 'bg-blue-500 text-white ml-auto text-right'
                : 'bg-gray-200 text-gray-800 mr-auto text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-2 border-t border-gray-300">
        <input
          type="text"
          placeholder="Nhập tin nhắn..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
        <button className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Gửi
        </button>
      </div>
    </div>
  );
};

export default MessageComponent
