import React from 'react';
import DocumentsItem from './DocumentsItem';


const DocumentsList = ({ documentList, setRefresh }) => {
  return (
    <div className="grown min-h-0 pt-6">
      <div className="overflow-y-auto h-full pr-2">
        <div className="grow grid gap-4 grid-cols-1">
          { documentList.length > 0 && (
            documentList.map((document) => (
              <DocumentsItem document={document} setRefresh={setRefresh} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DocumentsList;
