import React from 'react';
import { NavLink } from 'react-router-dom';


const EditorTitle = ({ name, setName, isEdit }) => {
  return (
    <div className="flex flex-row justify-start items-center border-b-2 border-brandDark-200 py-4">
      <NavLink
        to="/"
      >
        <img className="w-5 cursor-pointer mr-2" src="/arrow-icon.svg" alt="Arrow icon" />
      </NavLink>
      <div className="grow">
        { isEdit ? (
          <p className="text-lg w-full text-grey-200 px-2">{name}</p>
        ) : (
          <input
            id="name-input"
            value={name}
            placeholder="Nombre del documento..."
            className="bg-transparent text-lg w-full text-grey-200 px-2"
            type="text"
            readOnly={isEdit}
            onChange={(e) => setName(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default EditorTitle;
