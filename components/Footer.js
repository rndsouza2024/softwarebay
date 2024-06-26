import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="bg-[#000]">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" className="flex items-center justify-center text-gray-900">
              <img src="/logo.png" alt="Logo" width={500} height={150} className="rounded-3xl" />
            </a>
            <p className="text-black hover:px-0 text-bg font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent mt-2 text-center text-sm" >
              Explore. Discover. Download.
            </p>
            
            <div className="flex justify-center mt-4">
            <a href="https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaYoutube className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/channel/UCiYD6dTKTk0cRnhCo-3SKzw" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600 mx-2">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
    <nav className="list-none mb-10">
      <li>
        <a href="https://softwarebay.vercel.app/desktop" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Desktop</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/browsers" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Browser</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/multimedia" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Multimedia</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/network" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Network</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/graphicdesign" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Graphic Design</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/development" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Development</a>
      </li>
    </nav>
    
    <nav className="list-none mb-10">
     
      <li>
        <a href="https://softwarebay.vercel.app/filesharing" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">File Sharing</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/games" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Security</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Games</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/education" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Education</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/mobile" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Mobile</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/utilities" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Utilities</a>
      </li>
      <li>
        <a href="https://softwarebay.vercel.app/othersoftware" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Other Software</a>
      </li>
    </nav>
  </div>


            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">
                About Us
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="/intro/contact" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Contact</a>
                </li>
                <li>
                  <a href="/intro/privacy" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Privacy Policy</a>
                </li>
                <li>
                  <a href="/intro/tearms" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Terms of Use</a>
                </li>
                <li>
                  <a href="/intro/dmca" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">D.M.C.A</a>
                </li>
                <li>
                  <a href="/intro/cookiepolicy" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800">Cookie Policy</a>
                </li>
              </nav>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800  text-center sm:text-left">
              © 2024 Softwarebay™ —{' '}
              <a href="https://twitter.com/MxplayerMovies" rel="noopener noreferrer" className="px-0 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent text-xl font-bold hover:text-blue-800 ml-1" target="_blank">
                Explore. Discover. Download. All rights reserved.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
