import './App.css';
import Editor from './Editor';
import Previewer from './Previewer';

function App() {
  return (
    <div className='App container border border-dark mx-auto p-5 m-5'>
      <h1 className='m-5'>Markdown Previewer</h1>
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
