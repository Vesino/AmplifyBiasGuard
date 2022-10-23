import React from 'react';


const EditorContent = ({ content, setContent }) => {
  return (
    <div className="grow pt-6">
      <textarea
        id="message"
        value={content}
        className="block p-4 w-full h-full text-base text-gray-200 rounded shadow-lg bg-brandDark-300 resize-none"
        placeholder="Escribe tu publicación..."
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}

export default EditorContent;
