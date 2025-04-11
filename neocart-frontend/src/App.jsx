import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <div className="flex gap-4 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="bg-white shadow-md rounded p-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-8 text-sm text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
