import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import {formatearDinero, totalPagar} from "./helppers"

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses,setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

useEffect(()=>{
  setTotal(totalPagar(cantidad,meses))
},[cantidad,meses]
);
useEffect(()=>{
  setPago (total/meses);
},[total])

  const handleChange = (e) => {
    setCantidad(+e.target.value);
  };
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  function handleDecrement() {
    const valor = cantidad - STEP;
    if (valor < MIN) {
      alert('Valor no valido')
      return
    };
    setCantidad(valor)
  }
  function handleIncrement() {
    const valor = cantidad + STEP
    if (cantidad >= MAX) {
      alert('Cantidad limite');
      return;
    }
    setCantidad(valor)
  }
  // Render Screen 
  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button
          operator='-'
          fn={handleDecrement}
        />

        < Button
          operator='+'
          fn={handleIncrement}
        />
      </div>
      <input
        type="range"
        className="w-full bg-gray-200 accent-lime-500 hover: accent-limit-600 "
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        
      />
      <p className="text-center my-10 font-extrabold text-indigo-600 text-5xl">
        {formatearDinero(cantidad)}
      </p>
      <h2 className= "text-2xl text-gray-500 text-center font-bold">
        Elige un <span className= "text-indigo-600"> Plazo</span> a pagar
      </h2>


      <select 
      className="w-full text-center text-xl text-gray-500 font-bold border bg-white border-gray-400 rounded-lg mt-5  "
        value ={meses}
        onChange={e => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
        
      </select>
      <div
      className="bg-gray-50 my-2 p-5 space-y-3 rounded-sm"
      >
         <h2 className= "text-2xl text-gray-500 text-center font-bold">
        Resumen <span className= "text-indigo-600"> de pagos </span>
      </h2>
    <p className="text-center text-xl font-bold text-gray-500">{meses} Meses</p>
    <p className="text-center text-xl font-bold text-gray-500">{formatearDinero(total)} Total a pagar</p>
    <p className="text-center text-xl font-bold text-gray-500">{formatearDinero(pago)} Mensuales</p>
      </div>
      
    </div>
  );
}

export default App;
