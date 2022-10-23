import React from 'react';
import { NavLink } from 'react-router-dom';


const DocumentsTitle = () => {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-brandDark-200 py-4">
      <p className="text-lg font-bold">Mis Documentos</p>
      <NavLink
        to="/editor/"
      >
        <button
          className="bg-brandGreen-500 rounded-md text-lg text-brandDark-500 cursor-pointer py-2 px-4"
          type="button"
          id="new-document-button"
        >
          Nuevo Documento
        </button>  
      </NavLink>
    </div>
  );
}

export default DocumentsTitle;
