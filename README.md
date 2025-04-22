# Calculadora Web

Una calculadora web simple construida con React (frontend) y Flask (backend).

## Requisitos Previos

- Node.js (v14 o superior)
- Python 3.x
- npm o yarn

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

### 1. Configurar el Backend

```bash
# Crear un entorno virtual
python3 -m venv venv

# Activar el entorno virtual
# En Windows:
venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate

# Instalar dependencias
pip3 install flask flask-cors
```

### 2. Configurar el Frontend

```bash
# Navegar al directorio del frontend
cd Proyecto_FCI

# Instalar dependencias
npm install
```

## Ejecutar en Desarrollo

1. Iniciar el Backend:
```bash
# En la raíz del proyecto
source venv/bin/activate  # Si no está activado
python3 backend_calculator.py
```

2. Iniciar el Frontend (en una nueva terminal):
```bash
cd Proyecto_FCI
npm run dev
```

La aplicación estará disponible en:
- Frontend: http://localhost:5173
- Backend: http://localhost:5001

## Despliegue en Producción

### Preparar el Frontend para Producción

```bash
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

Crear un archivo `.env` en el directorio del frontend:
```env
REACT_APP_API_URL=https://tu-backend.com
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
Asegúrate de:
1. Tener el entorno virtual activado
2. Haber instalado las dependencias con pip
3. Estar usando el Python del entorno virtual

### Error: CORS
1. Verificar que el backend tenga CORS configurado correctamente
2. Comprobar que las URLs del frontend y backend coincidan con la configuración CORS

### Error: "Port already in use"
1. Verificar que no haya otra instancia del servidor corriendo
2. Cambiar el puerto en la configuración si es necesario

## Contribuir

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 