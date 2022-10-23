import React, { useEffect, useCallback, useState } from 'react';
import { Storage } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditorActions from '../components/EditorActions';
import EditorContent from '../components/EditorContent';
import EditorResult from '../components/EditorResult';
import EditorTitle from '../components/EditorTitle';
import Header from '../components/Header';


const Editor = () => {

  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  let { key } = useParams();

  const handleDownload = useCallback(async(key) => {
    try {
      const result = await Storage.get(key, { download: true, contentType: 'string' });
      // data.Body is a Blob
      result.Body.text().then((string) => {
        setContent(string);
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Error al descargar!',
        icon: 'error',
        timer: 2000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    }
  }, []);

  const handleSave = useCallback(async() => {
    try {
      if (!name) {
        Swal.fire({
          toast: true,
          position: 'top-end',
          title: 'Introduce un nombre para tu documento.',
          icon: 'info',
          timer: 2000,
          timerProgressBar: false,
          showConfirmButton: false,
        });
        return;
      }
      await Storage.put(name, content, { contentType: "text/plain" });
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Se guardó con exito!',
        icon: 'success',
        timer: 2000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Error al guardar!',
        icon: 'error',
        timer: 2000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    }
  }, [content, name]);

  useEffect(() => {
    if (key) {
      setIsEdit(true);
      setName(key);
      handleDownload(key);
    }
  }, [key, handleDownload]);

  return (
    <div className="flex flex-row h-screen px-14 py-12 overflow-hidden">
      <div className="basis-2/3 mr-6">
        <div className="flex flex-col justify-start h-full">
          <Header />
          <EditorTitle name={name} setName={setName} isEdit={isEdit} />
          <EditorContent content={content} setContent={setContent} />
          <EditorActions handleSave={handleSave} isEdit={isEdit} />
        </div>
      </div>
      <div className="basis-1/3">
        <div className="flex flex-col justify-start rounded shadow-lg bg-brandDark-300 text-gray-200 h-full">
          <EditorResult />
        </div>
      </div>
    </div>
  );
}

export default Editor;
