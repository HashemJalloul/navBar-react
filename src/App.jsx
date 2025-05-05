import './App.css'
import Nav from './components/Nav'
function App() {

  return (
    <>
      <h1>hello</h1>
      <Nav logo="Vaccination.ng" items={[
        { link: "#", content: "Home" }, { link: "#", content: "Services" },
        { link: "#", content: "Schedule" }, { link: "#", content: "FeedBack" }
      ]} btn="Check Status" />

    </>
  )
}

export default App
