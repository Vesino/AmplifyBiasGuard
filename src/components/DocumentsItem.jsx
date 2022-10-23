import React from 'react';


const DocumentsItem = () => {
  return (
    <div className="flex flex-row justify-between rounded shadow-lg bg-brandDark-300 text-gray-200 w-full py-3 px-3">
      <p className="text-lg">Document title</p>
      <img className="w-4 cursor-pointer truncate" src="/trash-icon.svg" alt="Trash icon" />
    </div>
  );
}

export default DocumentsItem;
