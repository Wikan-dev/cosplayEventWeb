import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import back from './assets/close-x-svgrepo-com.svg';

const LoginIpt = ({ placeHolder }) => {
  const [value, setValue] = useState(''); //meyimpan data focus
  const [isFocus, setIsFocus] = useState(false);

  const iptRef = useRef(null);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsFocus(false);
    }
  };

  const clearInput = () => {
    setValue('');
    setIsFocus(false);
    iptRef.current.blur(); // opsional, supaya juga blur saat dihapus
  };

  return (
    <div className='relative mt-7'>
      <h1
        className={`absolute left-2 text-white transition-all duration-300 text-[20px] ${isFocus || value ? 'translate-y-[-20px] opacity-100 text-sm' : 'translate-y-0 opacity-30'}`}
      >
        {placeHolder}
      </h1>

      {value && (
        <button
          onClick={clearInput}
          className='text-white absolute right-2 font-bold top-3 z-10'
        >
          X
        </button>
      )}

      <input
        ref={iptRef}
        className='bg-black w-full h-8 pl-2  border-b border-white mt-3 text-white outline-none'
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

const Login = () => {
  return (
    <div className='m-3'>
      <div className='bg-linear-to-t from-gray-900 to-black w-full min-h-[300px] mx-auto p-3 relative max-w-100 h-150 rounded-md drop-shadow-lg/50'>
        <Link to="/">
          <img
            className='w-10 bg-white p-1 rounded-full absolute right-3 lg:w-5 hover:scale-110 transition-all duration-300'
            src={back}
            alt="Back"
          />
        </Link>
        <div>
          <h1 className='text-white font-bold text-[50px]'>Login</h1>
          <LoginIpt placeHolder="username" />
          <LoginIpt placeHolder="password" />


          <button className='bg-white w-20 py-1 mt-5 font-bold rounded-md hover:scale-110 transition-all duration-300'>enter</button>
          <button className='bg-[rgba(0, 0, 0, 0)] w-20 py-1 mt-5  rounded-md hover:scale-110 transition-all duration-300 ml-3 border border-white text-white'>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;