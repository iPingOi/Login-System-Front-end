import * as I from 'react-icons/md';
import C from './components';

function App() {
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen bg-white text-gray-900">
      <form className="flex flex-col w-full max-w-[400px] gap-4">
        <C.Input />
        {/* <label htmlFor="email" className="flex flex-col gap-3">
          <span className="text-gray-100 font-sans text-sm font-semibold">Email address</span>
          <div className="flex items-center gap-3 h-14 px-3 bg-gray-200 w-full">
            <I.MdOutlineAlternateEmail size={24} />
            <input type="email" id="email" className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" autoFocus placeholder="Enter your email" />
          </div>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <span className="text-gray-100 font-sans text-sm font-semibold">Password</span>
          <div className="flex items-center gap-3 h-14 px-3 bg-gray-200 w-full">
            <I.MdLockOutline size={24} />
            <input type="password" id="password" className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none" placeholder="********" />
          </div>
        </label> */}

        <C.Button>Sign In</C.Button>
      </form>
    </div>
  )
}

export default App;
