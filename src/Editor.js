import React from 'react';

const Editor = ({ text, dispatch }) => {
  return (
    <div className='form-group'>
      <label className='text-light'>Editor:</label>
      <textarea
        id='editor'
        className='form-control'
        rows='10'
        value={text}
        onChange={ev => dispatch({ type: 'SET', payload: ev.target.value })}
      />
    </div>
  );
};

export default Editor;
