import { useEffect, useRef, useState } from 'react';
import GlitchedWriter, { presets } from 'glitched-writer';
import './App.css';
import './index.css';
import logo from './assets/logo.webp';

function App() {
    const textRef = useRef<HTMLDivElement>(null);
    const countdownRef = useRef<HTMLDivElement>(null);
    const [showLogo, setShowLogo] = useState(false);
    const [showCountdown, setShowCountdown] = useState(false);
    const [countdown, setCountdown] = useState('');
    const [initialWriteDone, setInitialWriteDone] = useState(false);

    useEffect(() => {
        if (textRef.current) {
            const writer = new GlitchedWriter(textRef.current, presets.encrypted);
            const phrases = ["SOMETHING IS HAPPENING SOON"];
            writer.queueWrite(phrases, 1000, () => {
                setTimeout(() => setShowLogo(true), 500);
            });
        }
    }, []);

    useEffect(() => {
        if (showLogo) {
            setTimeout(() => setShowCountdown(true), 1000);
        }
    }, [showLogo]);

    useEffect(() => {
        if (showCountdown && countdownRef.current) {
            const countdownWriter = new GlitchedWriter(countdownRef.current, presets.encrypted);

            const updateCountdown = () => {
                const targetDate = new Date("2025-02-22T23:59:59").getTime();
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance < 0) {
                    countdownWriter.write("EXPIRED");
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
                setCountdown(countdownText);

                if (!initialWriteDone) {
                    countdownWriter.write(countdownText).then(() => {
                        setInitialWriteDone(true);
                        countdownRef.current?.classList.remove('hidden');
                    });
                }
            };

            updateCountdown();
            const interval = setInterval(updateCountdown, 1000);

            return () => clearInterval(interval);
        }
    }, [showCountdown, initialWriteDone]);

    useEffect(() => {
        if (initialWriteDone) {
            const writer = new GlitchedWriter(textRef.current, presets.encrypted);
            const newPhrases = ["February 22, 2025"];
            writer.queueWrite(newPhrases, 1100, false);
        }
    }, [initialWriteDone]);

    return (
        <div className="wrapper">
            <pre className="text-7xl">
                <div ref={textRef}></div>
                {showLogo && <img src={logo} className="logo" alt="logo" />}
                {showCountdown && <div ref={countdownRef} className="text-5xl mt-2 hidden">{countdown}</div>}
            </pre>
        </div>
    );
}

export default App;