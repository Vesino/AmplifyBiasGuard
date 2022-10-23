import React from 'react';
import { NavLink } from 'react-router-dom';


const EditorTitle = ({ name, setName }) => {
  return (
    <div className="flex flex-row justify-start items-center border-b-2 border-brandDark-200 py-4">
      <NavLink
        to="/"
      >
        <img className="w-5 cursor-pointer mr-2" src="/arrow-icon.svg" alt="Arrow icon" />
      </NavLink>
      <div className="grow">
        <input
          id="name-input"
          value={name}
          placeholder="Document name..."
          className="bg-transparent text-lg w-full text-grey-200 px-2"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

export default EditorTitle;
