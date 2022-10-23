import React, { useEffect, useCallback, useState } from 'react';
import { Auth } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import EditorActions from '../components/EditorActions';
import EditorContent from '../components/EditorContent';
import EditorResult from '../components/EditorResult';
import EditorTitle from '../components/EditorTitle';
import Header from '../components/Header';


const Editor = () => {

  const [content, setContent] = useState("");

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      console.log(id);
    }
  }, [id]);

  const handleSave = useCallback(async () => {
    const user = await Auth.currentAuthenticatedUser();
    const auth = await Auth.currentCredentials();
    console.log(auth);
    console.log(user);
  }, []);

  return (
    <div className="flex flex-row h-screen px-14 py-12 overflow-hidden">
      <div className="basis-2/3 mr-6">
        <div className="flex flex-col justify-start h-full">
          <Header />
          <EditorTitle />
          <EditorContent content={content} setContent={setContent} />
          <EditorActions handleSave={handleSave} />
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
