import NavBar from "./NavBar" 
import OtherInputs from "./OtherInputs"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='root'>
        <NavBar /> 
        <OtherInputs className="otherInputs"/>
      </div>
    </>
  )
}

export default App
