import React from 'react';
import DocumentsItem from './DocumentsItem';


const DocumentsList = ({ documentList }) => {
  return (
    <div className="grow pt-6">
      <div className="grow grid gap-4 grid-cols-1">
        { documentList.length > 0 ? (
          documentList.map((document) => (
            <DocumentsItem document={document} />
          ))
        ) : (
          <p>Aun no tienes documentos</p>
        )}
      </div>
    </div>
  );
}

export default DocumentsList;
