import './App.css'

import AppBar from './components/AppBar/AppBar'
import Grid from './components/Content/Grid/Grid'
import { GridItems } from './components/Content/Grid/GridItems'
import SupportMessage from './components/Content/Message/Message'
import SearchComponent from './components/Search/Search'

function App() {
  return (
    <>
      <AppBar />
      <SupportMessage />
      <SearchComponent />
      <Grid items={GridItems} />
    </>
  )
}

export default App
