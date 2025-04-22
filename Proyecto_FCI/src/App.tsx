import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Puedes añadir estilos básicos aquí

function App() {
  // Estados para los números de entrada y el resultado
  // Inicializamos como strings vacíos o null
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState(''); // Añade más si tu cálculo los necesita
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState(''); // Estado para manejar errores
  const [cargando, setCargando] = useState(false); // Estado para feedback visual

  // Función que se ejecuta al hacer clic en el botón
  const handleCalcular = async () => {
    setError(''); // Limpiar errores previos
    setResultado(null); // Limpiar resultado previo
    setCargando(true); // Mostrar indicador de carga

    try {
      console.log('Enviando datos al backend:', { valor1: input1, valor2: input2 });
      
      const response = await axios.post('http://localhost:5001/calcular', {
        valor1: input1,
        valor2: input2,
      });

      console.log('Respuesta del servidor:', response.data);
      setResultado(response.data.resultado_calculo);

    } catch (error: any) {
      console.error("Error completo:", error);
      // Muestra un mensaje de error al usuario
      setError(`Error al calcular: ${error.message}`);
    } finally {
      setCargando(false); // Ocultar indicador de carga
    }
  };

  return (
    <div className="App">
      <h1>Calculadora Web</h1>

      <div>
        <label>
          Valor 1:
          <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)} // Actualiza el estado al escribir
          />
        </label>
      </div>

      <div>
        <label>
          Valor 2:
          <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </label>
      </div>
      {/* Añade más inputs si los necesitas */}

      <button onClick={handleCalcular} disabled={cargando}>
        {cargando ? 'Calculando...' : 'Calcular'}
      </button>

      {/* Muestra el resultado si existe */}
      {resultado !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>{resultado}</p>
        </div>
      )}

      {/* Muestra errores si existen */}
      {error && (
        <div style={{ color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;