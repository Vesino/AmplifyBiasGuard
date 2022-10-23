import React from 'react';


const EditorActions = ({ handleSave }) => {
  return (
    <div className="flex flex-row justify-end w-full pt-6">
      <button
        className="bg-transparent rounded-md border border-brandDark-100 text-base text-brandDark-100 cursor-pointer py-2 px-4 mr-3"
        type="button"
        id="save-button"
        onClick={handleSave}
      >
        Guardar
      </button>
      <button
        className="bg-brandGreen-500 rounded-md text-base text-brandDark-500 cursor-pointer py-2 px-4"
        type="button"
        id="analyze-button"
      >
        Analizar
      </button>
    </div>
  );
}

export default EditorActions;
