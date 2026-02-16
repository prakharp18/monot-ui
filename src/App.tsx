import { AsciiContainer } from './components/ascii/AsciiContainer';
import { AsciiLoader } from './components/ascii/AsciiLoader';
import { AsciiText } from './components/ascii/AsciiText';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-green-500 font-mono flex flex-col items-center justify-center p-8 gap-8">
      <AsciiContainer className="text-center max-w-2xl">
        <h1 className="text-4xl mb-4">
          <AsciiText text="Monot-UI" speed={100} />
        </h1>
        <p className="mb-4">
          <AsciiText text="ASCII Component Library for the modern web." speed={50} />
        </p>
        <div className="flex flex-col gap-4 text-left">
          <div>
            <span className="mr-2">Spinner:</span>
            <AsciiLoader type="spinner" />
          </div>
          <div>
            <span className="mr-2">Progress:</span>
            <AsciiLoader type="bar" length={15} speed={200} />
          </div>
          <div>
            <AsciiLoader type="dots" speed={500} />
          </div>
        </div>
      </AsciiContainer>
    </div>
  );
}

export default App;
