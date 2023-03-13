import { Header } from "./components/Header"
import { Menu } from "./components/Menu"

function App() {

  return (
    <>
      <Header/>
      <div className="content p-3">
        <Menu/>
      </div>
    </>
  )
}

export default App
