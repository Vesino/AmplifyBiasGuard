import React from 'react';


const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="p-6 w-72">
        <div className="flex">
          <img className="m-auto w-44" src="/dark-logo.svg" alt="BIAS GUARD" />
        </div>

        <hr className="border-gray-500 border my-4" />

        <label className="block mb-3" id="email-input">
          <input
            placeholder="Email"
            className="bg-gray-50 text-sm rounded-md block w-full p-2.5 text-brandDark-500"
            type="email"
            id="email-input" 
          />
        </label>

        <label className="block" for="pasword-input">
          <input
            placeholder="Password"
            className="bg-gray-50 text-sm rounded-md block w-full p-2.5 text-brandDark-500"
            type="password"
            id="pasword-input"
          />
        </label>

        <button className="mt-2 py-1 px-0 rounded-md underline" type="button" id="login-remember-password">
          Olvidé mi contraseña
        </button>

        <footer className="flex mt-10">
          <button className="bg-brandGreen-500 font-bold py-1 px-4 rounded-md text-brandDark-500 mr-auto">
            Iniciar Sesión
          </button>

          <button
            className="border-gray-50 border py-1 px-2 rounded-md"
            type="button"
            id="login-register-button"
          >
            Crear Cuenta
          </button>
        </footer>
      </form>
    </div>
  );
}

export default Login;
