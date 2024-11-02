import './App.css'

import AppBar from './components/AppBar/AppBar'
import SupportMessage from './components/Content/Message/Message'
import SearchComponent from './components/Search/Search'

function App() {
  return (
    <>
      <AppBar />
      <main>
        <SupportMessage />
        <SearchComponent />
      </main>
    </>
  )
}

export default App
