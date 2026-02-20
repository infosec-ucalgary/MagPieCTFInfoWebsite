import cybersecLogo from './assets/cybersecWordLogo.png'
import magpieLogo from './assets/magpiectflogonotext.png'
import textLogo from './assets/justtext.png'
import isc2 from './assets/ISC2_Logo.svg.png'
import enfocom from './assets/enfocom-black.png'
import aer from './assets/alberta-energy-regulator-aer-seeklogo.png'

function App() {
  return (
    <div className="bg-[url(./assets/combinedbackground.png)] bg-cover bg-center text-white">

        {/* hero section */}
        <section className="min-h-screen flex flex-col items-center justify-center">
            <img
                src={magpieLogo}
                className="w-40 md:w-48 h-auto"
                alt="MagpieCTF Logo"
            />

            <img
                src={textLogo}
                className="w-[70vw] max-w-5xl h-auto mt-4"
                alt="MagpieCTF Text Logo"
            />
        </section>

        {/* deets */}
        <section className='flex flex-col text-center p-12 space-y-4'>
            <h1 className='text-5xl'>February 21 - 22</h1>
            <h1 className='text-5xl'>ICT 121</h1>
            <h1 className='text-5xl'>2pm - 2pm</h1>
        </section>

        {/* sponsors*/}
        <section className="p-12 pt-0 text-center flex flex-col items-center">
            <h1 className="text-7xl my-8">Brought to you by</h1>
            <div className="
                flex flex-col md:flex-row md:flex-wrap
                items-center justify-center md:justify-between
                gap-20
                bg-white p-8 px-16
                w-full max-w-6xl
                rounded-xl
            ">
                <div className="flex-1 min-w-0 flex justify-center">
                    <a href='https://www.isc2.org/' target="_blank" rel="noopener noreferrer"><img src={isc2} className="w-full max-w-[320px] h-auto object-contain" /></a>
                </div>

                <div className="flex-1 min-w-0 flex justify-center">
                    <a href='https://enfocom.com/' target="_blank" rel="noopener noreferrer"><img src={enfocom} className="w-full max-w-[320px] h-auto object-contain" /></a>
                </div>

                <div className="flex-1 min-w-0 flex justify-center">
                    <a href='https://www.aer.ca/' target="_blank" rel="noopener noreferrer"><img src={aer} className="w-full h-auto object-contain" /></a>
                </div>
            </div>
        </section>


        {/* welcome and intro */}
        <section className="p-12 text-center">
            <h1 className='text-7xl my-8'>Welcome to Night City</h1>
            <p className='text-2xl'>
                After months of development, CYBERSEC is proud to announce the return of our sixth annual magpieCTF, and this year, we’re diving into the neon chaos of Night City!
                <br/><br/>Taking place both online and in-person at the University of Calgary, MagpieCTF 2026 brings 25 unique challenges across various categories such as OSINT, Forensics, Cryptography, PWN, and more! Designed for all skill levels, whether you're brand new or a seasoned netrunner, there’s something here for you.
                <br/><br/>This year, drop into a dystopian world ruled by megacorporations and hidden networks. You take on the role of V, a mercenary pulled into a high-stakes digital operation after receiving a message from Johnny Silverhand himself. Your mission is to break through corporate defences, uncover buried secrets, and prove you have what it takes to become a legend of the grid.
                <br/><br/>Get together in groups of three, and move fast. Other runners are chasing the same prize, and Night City doesn’t reward hesitation.
            </p>
        </section>

        {/* link to registration and ctf'd */}
        <section className="pb-12 my-8 text-center">
            <h1 className='text-7xl mb-6'>Register and Get Started!</h1>
            <div className='flex flex-col justify-center'>
                <a href="https://forms.gle/tzdtbCWWEZqfxGhT9" target="_blank" rel="noopener noreferrer" className="mb-4"><h1 className="text-6xl mb-8 underline">Registration</h1></a>
                <a href="https://2026.magpiectf.ca/" target="_blank" rel="noopener noreferrer" className="mb-4"><h1 className='text-6xl underline'>CTFd</h1></a>
            </div>
        </section>


        {/* groups and prize pools */}
        <section className="p-12 pt-0 text-center">
            <h1 className="text-7xl my-8">Prize Pool and Groups</h1>
            <div className="flex flex-col md:flex-row justify-between w-full text-3xl">
                <div className="flex-1 md:mb-0 mb-6">
                    <p className="text-3xl pb-3 underline">In-person</p>
                    <ol className='space-y-2'>
                        <li>First Place: $275</li>
                        <li>Second Place: $150</li>
                        <li>Third Place: $75</li>
                    </ol>
                </div>

                <div className="flex-1">
                    <p className="text-3xl pb-3 underline">Online</p>
                    <ol className='space-y-2'>
                        <li>First Place: $275</li>
                        <li>Second Place: $150</li>
                        <li>Third Place: $75</li>
                    </ol>
                </div>
            </div>
        </section>

        {/* cybersec club footer */}
        <section className="p-12 pt-0 text-center flex flex-col justify-center items-center">
            <h1 className='text-5xl'>An event brought to you by</h1>
            <a href="https://cybersec-ucalgary.club/" target="_blank" rel="noopener noreferrer" className="mb-4"><img className="max-w-[320px] h-auto" src={cybersecLogo} /></a>
            <h1>Cyberpunk 2077 © CD PROJEKT S.A. Used for non-commercial event.</h1>
        </section>

    </div>
  )
}



export default App;
