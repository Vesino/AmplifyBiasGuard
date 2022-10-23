import React from 'react';


const DocumentsPagination = () => {
  return (
    <div className="flex flex-row justify-center w-full pt-6">
      <div className="grid grid-flow-col auto-cols-max gap-1">
        <div className="flex justify-center items-center rounded-full bg-brandGreen-500 text-gray-800 text-sm font-bold cursor-pointer w-6 h-6">1</div>
        <div className="flex justify-center items-center rounded-full bg-brandDark-100 text-gray-800 text-sm font-bold cursor-pointer w-6 h-6">2</div>
        <div className="flex justify-center items-center rounded-full bg-brandDark-100 text-gray-800 text-sm font-bold cursor-pointer w-6 h-6">3</div>
        <div className="flex justify-center items-center rounded-full bg-brandDark-100 text-gray-800 text-sm font-bold cursor-pointer w-6 h-6">4</div>
      </div>
    </div>
  );
}

export default DocumentsPagination;
