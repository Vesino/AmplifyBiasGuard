import React, { useCallback } from 'react';
import { Storage } from 'aws-amplify';


const DocumentsItem = ({ document }) => {
  
  const handleRemove = useCallback( async () => {
    try {
      await Storage.remove(document.key);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }, [document.key]);
  
  return (
    <div className="flex flex-row justify-between rounded shadow-lg bg-brandDark-300 text-gray-200 w-full py-3 px-3">
      <p className="text-lg">{document.key}</p>
      <img 
        className="w-4 cursor-pointer" 
        src="/trash-icon.svg" 
        alt="Trash icon"
        onClick={handleRemove}
      />
    </div>
  );
}

export default DocumentsItem;
