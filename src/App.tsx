import React from 'react';
import './index.css';
import cotesaIcon from './assets/cotesa_icon.jpeg';

function App() {
  return (
    <div className="bg-white w-screen h-screen">
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center bg-gray-100 h-16 px-4">
        <div className="flex md:flex-row flex-col items-center space-y-2 md:space-y-0">
          <img src={cotesaIcon} alt="logo" className="w-25 h-8 mr-5" />
          <div className="hidden md:block w-0.5 h-8 bg-gray-400 mr-5"></div>
          <h1 className="text-gray-700 text-xl font-bold">Cálculo de vazão afluente de Aguti</h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center items-center h-60 px-4">
        <div className="flex flex-col md:flex-row md:justify-center items-center bg-gray-100 w-full md:w-96 h-40 md:mr-10 mb-10 md:mb-0 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center w-60 h-40">
            <h1 className="text-gray-700 text-xl font-bold whitespace-normal mb-3">Santa Paulina</h1>
            <div className="flex justify-center items-center w-32 h-24 bg-gray-300 rounded-full">
              <h1 className="text-gray-700 text-4xl font-bold">0</h1>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-60 h-40">
            <h1 className="text-gray-700 text-xl font-bold whitespace-normal mb-3">Figueira do Tigre</h1>
            <div className="flex justify-center items-center w-32 h-24 bg-gray-300 rounded-full">
              <h1 className="text-gray-700 text-4xl font-bold">0</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-60 h-40">
          <h1 className="text-gray-700 text-xl font-bold whitespace-normal mb-3">Potência em Aguti</h1>
          <div className="flex justify-center items-center w-32 h-24 bg-gray-300 rounded-full">
            <h1 className="text-gray-700 text-4xl font-bold">0</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-col md:justify-center items-center px-4">
        <h1 className="text-gray-700 text-xl font-bold whitespace-normal mb-3">
          Alterar valores da potência de geração (kW)
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full mt-4">
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-600 mb-2" htmlFor="cghSantaPaulina">CGH Santa Paulina</label>
            <input
              type="text"
              id="cghSantaPaulina"
              name="cghSantaPaulina"
              value="0.0"
              className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm text-black focus:outline-none focus:border-custom-orange focus:ring focus:ring-custom-orange focus:ring-opacity-50 no-arrows"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-gray-600 mb-2" htmlFor="cghFigueiraTigre">CGH Figueira do Tigre</label>
            <input
              type="text"
              id="cghFigueiraTigre"
              name="cghFigueiraTigre"
              value="0.0"
              className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm text-black focus:outline-none focus:border-custom-orange focus:ring focus:ring-custom-orange focus:ring-opacity-50 no-arrows"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;