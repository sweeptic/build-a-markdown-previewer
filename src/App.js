import React, { useEffect } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import { initialText } from './initialText';
import marked from 'marked';

function markdownReducer(state, action) {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        editorText: action.payload,
        previewText: marked(action.payload, { breaks: true }),
      };
    default:
      throw new Error(`invalid action type ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = React.useReducer(markdownReducer, {});

  useEffect(() => {
    dispatch({ type: 'SET', payload: initialText });
  }, []);

  return (
    <div className='App container border border-dark mx-auto shadow-lg m-5 bg-dark'>
      <h1 className='text-light py-3'>Markdown Previewer</h1>
      <Editor text={state.editorText} dispatch={dispatch} />
      <Previewer text={state.previewText} />
    </div>
  );
}

export default App;
