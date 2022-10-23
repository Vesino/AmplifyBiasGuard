import React, { useEffect, useCallback, useState } from 'react';
import { Storage, Auth } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import Swal from 'sweetalert2';
import EditorActions from '../components/EditorActions';
import EditorContent from '../components/EditorContent';
import EditorResult from '../components/EditorResult';
import EditorTitle from '../components/EditorTitle';
import Header from '../components/Header';


const Editor = () => {

  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useAuthenticator((context) => [context.user]);

  let { key } = useParams();

  const showAlert = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'Introduce un nombre para tu documento.',
      icon: 'info',
      timer: 2000,
      timerProgressBar: false,
      showConfirmButton: false,
    });
  }

  const showAnalyzeAlert = () => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      title: 'Analizando...',
      icon: 'info',
      timer: 2000,
      timerProgressBar: false,
      showConfirmButton: false,
    });
  }

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
        showAlert();
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

  const handleAnalyze = useCallback(async() => {
    try {
      if (!name) {
        showAlert();
        return;
      }
      const jwtToken = user?.signInUserSession?.idToken?.jwtToken || "";
      const { identityId } = await Auth.currentCredentials();
    
      if (!jwtToken || !identityId) {
        return;
      }

      showAnalyzeAlert();

      const key = encodeURI(`private/${identityId}/${name}`);
      await Storage.put(name, content, { contentType: "text/plain" });
      fetch(`https://mvckzgzr6f.execute-api.us-east-2.amazonaws.com/dev/documents/?key=${key}`, {
        method: 'POST',
        headers: new Headers({
          'Authorization': 'Bearer ' + jwtToken,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        Swal.fire({
          toast: true,
          position: 'top-end',
          title: 'Se analizó con exito!',
          icon: 'success',
          timer: 2000,
          timerProgressBar: false,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        Swal.fire({
          toast: true,
          position: 'top-end',
          title: 'Error al analizar!',
          icon: 'error',
          timer: 2000,
          timerProgressBar: false,
          showConfirmButton: false,
        });
      });
    } catch (error) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        title: 'Error al analizar!',
        icon: 'error',
        timer: 2000,
        timerProgressBar: false,
        showConfirmButton: false,
      });
    }
  }, [name, content, user]);

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
          <EditorActions handleSave={handleSave} handleAnalyze={handleAnalyze} isEdit={isEdit} />
        </div>
      </div>
      <div className="basis-1/3">
        <div className="flex flex-col justify-start rounded shadow-lg bg-brandDark-300 text-gray-200 h-full">
          <EditorResult result={result} />
        </div>
      </div>
    </div>
  );
}

export default Editor;
