import React from 'react';
import DocumentsItem from './DocumentsItem';


const DocumentsList = () => {
  return (
    <div className="grow pt-6">
      <div className="grow grid gap-4 grid-cols-1">
        <DocumentsItem />
        <DocumentsItem />
        <DocumentsItem />
        <DocumentsItem />
      </div>
    </div>
  );
}

export default DocumentsList;
