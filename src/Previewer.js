import React from 'react';

const Previewer = ({ text }) => {
  return (
    <div className='form-group'>
      <label className='text-light'>Previewer:</label>
      <div
        className='bg-light rounded p-2'
        id='preview'
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default Previewer;
