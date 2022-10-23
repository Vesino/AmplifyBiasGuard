import React from 'react';
import DocumentsList from '../components/DocumentsList';
import DocumentsPagination from '../components/DocumentsPagination';
import DocumentsProTips from '../components/DocumentsProTips';
import DocumentsTitle from '../components/DocumentsTitle';
import Header from '../components/Header';


const Documents = () => {
  return (
    <div className="flex flex-row h-screen px-14 py-12 overflow-hidden">
      <div className="basis-2/3 mr-6">
        <div className="flex flex-col justify-start h-full">
          <Header />
          <DocumentsTitle />
          <DocumentsList />
          <DocumentsPagination />
        </div>
      </div>
      <div className="basis-1/3">
        <div className="flex flex-col justify-start rounded shadow-lg bg-brandDark-300 text-gray-200 h-full">
          <DocumentsProTips />
        </div>
      </div>
    </div>
  );
}

export default Documents;
