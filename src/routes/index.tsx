import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes