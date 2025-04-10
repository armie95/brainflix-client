console.log("✅ App.jsx is running");

import './App.scss'
import AppRoutes from './components/Router/AppRoutes';


function App() {
  return (
    <div className="App">
      < AppRoutes />
    </div>
  )
}

export default App
