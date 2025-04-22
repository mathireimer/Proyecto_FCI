# backend_calculator.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Esto permite CORS para todas las rutas

# Tu función de cálculo original (ejemplo: suma)
def mi_calculo(val1, val2):
    try:
        num1 = float(val1)
        num2 = float(val2)
        return num1 + num2
    except ValueError:
        return "Error: Ambos valores deben ser numéricos."

@app.route('/calcular', methods=['POST'])
def endpoint_calcular():
    try:
        print("Recibiendo solicitud...")
        data = request.get_json() # Recibe los datos JSON
        print(f"Datos recibidos: {data}")

        # Asegúrate que las claves coincidan con lo que envía React
        valor1 = data.get('valor1')
        valor2 = data.get('valor2')
        print(f"Valores extraídos: valor1={valor1}, valor2={valor2}")

        if valor1 is None or valor2 is None:
             return jsonify({"message": "Faltan datos (valor1 o valor2)"}), 400 # Bad Request

        # Llama a tu función de cálculo
        resultado = mi_calculo(valor1, valor2)
        print(f"Resultado calculado: {resultado}")

        # Devuelve el resultado en formato JSON
        return jsonify({"resultado_calculo": resultado})

    except Exception as e:
         # Manejo de errores generales en el servidor
         print(f"Error en el servidor: {e}")
         return jsonify({"message": f"Error interno del servidor: {e}"}), 500 # Internal Server Error

if __name__ == '__main__':
    # Corre el servidor Flask en el puerto 5001
    print("Servidor iniciando en http://localhost:5001")
    app.run(port=5001, debug=True)