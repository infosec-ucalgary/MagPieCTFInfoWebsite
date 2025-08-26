import logo from './assets/logo_alt.svg'

function App() {
    return (
        <div className='h-full w-full bg-black'>
            <div className='flex flex-col items-center justify-center min-h-screen text-white'>
                <img src={logo} className="h-64 w-64" alt="MagpieCTF Logo" />
                <h2 className="text-6xl font-bold">MagpieCTF</h2>
                <a className="text-2xl mt-4">February 2026</a>
            </div>
        </div>
    );
}

export default App;
