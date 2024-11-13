import { useEffect, useRef } from 'react';
import GlitchedWriter from 'glitched-writer';
import './App.css';
import './index.css';
import Countdown from './components/Countdown';

function App() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const writer = new GlitchedWriter(textRef.current, {
            steps: [1, 8],
        });
        writer.queueWrite(['SOMETHING IS HAPPENING SOON'], 1000, false);
    }, []);

    return (
        <div className="App">
            <div ref={textRef}></div>
            <Countdown targetDate="2025-02-22T23:59:59" />
        </div>
    );
}

export default App;