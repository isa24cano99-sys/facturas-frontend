import Upload from './ui/Upload'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

const API = 'https://facturas-ia.onrender.com'

function App() {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/test`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la respuesta del servidor')
        }
        return res.json()
      })
      .then(res => setData(res))
      .catch(err => setError(err.message))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>Facturas IA 🚀</h1>

      <h3>Respuesta del backend:</h3>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
