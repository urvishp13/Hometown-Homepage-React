import './App.css'

// import components
import Hero from "./components/Hero"
import Activities from './components/Activities'
import Guide from './components/Guide'

export default function App() {
  return (
    <main className='container'>
        <Hero />
        <Activities />
        <Guide />
    </main>
  )
}
