import { NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  ['/', 'Overview'],
  ['/activities', 'Activities'],
  ['/leaderboard', 'Leaderboard'],
  ['/teams', 'Teams'],
  ['/users', 'Users'],
  ['/workouts', 'Workouts'],
]

function Overview() {
  return (
    <div className="hero-panel p-4 p-md-5 rounded-4">
      <p className="text-uppercase fw-semibold small mb-2">Your fitness, together</p>
      <h1 className="display-4 fw-bold">Build momentum with Octofit.</h1>
      <p className="lead mb-0">Track activities, connect with your team, and make every workout count.</p>
    </div>
  )
}

function App() {
  return (
    <div className="app-shell">
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <NavLink className="navbar-brand fw-bold text-primary" to="/">Octofit</NavLink>
          <div className="navbar-nav flex-row flex-wrap gap-1">
            {navigation.map(([path, label]) => (
              <NavLink key={path} className={({ isActive }) => `nav-link px-2 ${isActive ? 'active fw-semibold' : ''}`} to={path}>{label}</NavLink>
            ))}
          </div>
        </div>
      </nav>
      <main className="container py-5">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
