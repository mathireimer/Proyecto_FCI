# Calculadora Web

Una calculadora web simple construida con React (frontend) y Flask (backend).

## Requisitos Previos

### Para Windows:
- Node.js (v14 o superior) - [Descargar](https://nodejs.org/)
- Python 3.x - [Descargar](https://www.python.org/downloads/)
- Git - [Descargar](https://git-scm.com/download/win)

### Para macOS:
- Node.js (v14 o superior) - `brew install node`
- Python 3.x - `brew install python`
- Git - `brew install git`

## Estructura del Proyecto

```
Proyecto_FCI/
├── backend_calculator.py    # Servidor Flask
├── requirements.txt        # Dependencias de Python
└── Proyecto_FCI/          # Frontend React
    ├── src/               # Código fuente React
    ├── package.json       # Dependencias de Node.js
    └── ...
```

## Configuración del Entorno de Desarrollo

### 1. Clonar el Repositorio

```bash
# Windows y macOS
git clone <url-del-repositorio>
cd Proyecto_FCI
```

### 2. Configurar el Backend

#### En Windows:
```bash
# Crear un entorno virtual
python -m venv venv

# Activar el entorno virtual
venv\Scripts\activate

# Instalar dependencias
pip install flask flask-cors
```

#### En macOS:
```bash
# Crear un entorno virtual
python3 -m venv venv

# Activar el entorno virtual
source venv/bin/activate

# Instalar dependencias
pip3 install flask flask-cors
```

### 3. Configurar el Frontend

```bash
# Windows y macOS
cd Proyecto_FCI
npm install
```

## Ejecutar en Desarrollo

### 1. Iniciar el Backend

#### En Windows:
```bash
# En la raíz del proyecto
venv\Scripts\activate
python backend_calculator.py
```

#### En macOS:
```bash
# En la raíz del proyecto
source venv/bin/activate
python3 backend_calculator.py
```

### 2. Iniciar el Frontend (en una nueva terminal):
```bash
# Windows y macOS
cd Proyecto_FCI
npm run dev
```

La aplicación estará disponible en:
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

## Despliegue en Producción

### Preparar el Frontend para Producción

```bash
# Windows y macOS
cd Proyecto_FCI
npm run build
```
Esto creará una carpeta `dist` con los archivos optimizados para producción.

### Opciones de Despliegue

#### Frontend
Puedes desplegar los archivos de la carpeta `dist` en:
- Netlify
- Vercel
- GitHub Pages
- Cualquier hosting de archivos estáticos

#### Backend
Opciones recomendadas:
- Heroku
- DigitalOcean
- PythonAnywhere
- AWS Elastic Beanstalk

### Cambios Necesarios para Producción

1. Backend (`backend_calculator.py`):
```python
import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ... resto del código ...

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port)
```

2. Frontend (configurar la URL del backend):
```typescript
// En src/App.tsx o un archivo de configuración
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';
```

### Variables de Entorno

#### En Windows:
```bash
# Crear archivo .env en el directorio del frontend
echo REACT_APP_API_URL=https://tu-backend.com > .env
```

#### En macOS:
```bash
# Crear archivo .env en el directorio del frontend
echo "REACT_APP_API_URL=https://tu-backend.com" > .env
```

## Configuración de Dominio Personalizado

### Frontend
1. Comprar un dominio (GoDaddy, Namecheap, etc.)
2. Configurar los registros DNS según el proveedor de hosting
3. En tu proveedor de hosting:
   - Netlify: Añadir dominio en Site settings > Domain management
   - Vercel: Añadir dominio en Project settings > Domains

### Backend
1. Configurar el dominio/subdominio para el backend
2. Configurar SSL/TLS para HTTPS
3. Actualizar CORS en el backend para permitir el nuevo dominio:
```python
CORS(app, resources={
    r"/*": {
        "origins": ["https://tu-dominio.com"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})
```

## Solución de Problemas Comunes

### Error: "Module not found: 'flask'"

#### En Windows:
1. Asegúrate de que el entorno virtual esté activado (deberías ver `(venv)` al inicio de la línea de comandos)
2. Ejecuta: `pip install flask flask-cors`
3. Si el error persiste, intenta: `python -m pip install flask flask-cors`

#### En macOS:
1. Asegúrate de que el entorno virtual esté activado (deberías ver `(venv)` al inicio de la línea de comandos)
2. Ejecuta: `pip3 install flask flask-cors`
3. Si el error persiste, intenta: `python3 -m pip install flask flask-cors`

### Error: CORS
1. Verificar que el backend tenga CORS configurado correctamente
2. Comprobar que las URLs del frontend y backend coincidan con la configuración CORS

### Error: "Port already in use"
#### En Windows:
```bash
# Encontrar el proceso usando el puerto
netstat -ano | findstr :5001
# Matar el proceso (reemplaza PID con el número de proceso)
taskkill /PID PID /F
```

#### En macOS:
```bash
# Encontrar el proceso usando el puerto
lsof -i :5001
# Matar el proceso (reemplaza PID con el número de proceso)
kill -9 PID
```

## Contribuir

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 