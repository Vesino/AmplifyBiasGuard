import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { Storage } from 'aws-amplify';
import Swal from 'sweetalert2';


const DocumentsItem = ({ document, setRefresh }) => {
  
  const handleRemove = useCallback(async() => {
    try {
      await Storage.remove(document.key);
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Se borró con exito!',
        icon: 'success',
        timer: 2000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
      setRefresh(true);
    } catch (error) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Error al borrar!',
        icon: 'error',
        timer: 2000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    }
  }, [document.key, setRefresh]);
  
  return (
    <div className="flex flex-row justify-between rounded shadow-lg bg-brandDark-300 text-gray-200 w-full py-3 px-3">
      <NavLink
        className="text-lg hover:text-brandGreen-300"
        to={`/editor/${document.key}`}
      >
        {document.key}
      </NavLink>
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
