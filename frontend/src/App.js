import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-shell">

      

      <main className="canvas-area">
        <PipelineToolbar />
        <div className="react-flow-wrapper">
          <PipelineUI />
        </div>
      </main>

      <footer className="bottom-bar">
        <SubmitButton />
      </footer>

    </div>
  );
}

export default App;
