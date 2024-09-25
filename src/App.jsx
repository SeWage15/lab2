
import './App.css'
//import Cat from "./Components/Cat"
import Card from "./Components/Card"

function App() {
 

  return (
    <>
      <h1>Resorts Lite</h1>
      <div className="container">
      <Card image="src/assets/1.jpg" 
      name="Indonesia" 
      hotel="Gili Air Hotel" 
      ratings="4.8★"
       price="$589/night" />
      <Card 
      image="src/assets/2.jpg"
       name="Seychelles"
       hotel="Hilton Resort"
       ratings="4.2★"
       price="$629/night"/>
      <Card 
      name="US Virgin Islands"
      image="src/assets/3.jpg"
      hotel="Goa Resort"
      ratings="3.5★"
      price="$485/night"/>
      <Card 
      name="Bahamas"
      image="src/assets/4.jpg"
      hotel="Kuredu Resort"
      ratings="4.1★"
      price="$729/night"/>
      <Card 
      name="Mauritius"
      image="src/assets/5.jpg"
      hotel="Trou D'eau Douce"
      ratings="4.9★"
      price="$877/night"/>
      <Card 
      name="Bermuda"
      image="src/assets/6.jpg"
      hotel="Staniel Cay Hotel"
      ratings="3.2★"
      price="$365/night"/>
      
      </div>
    </>
  )
}

export default App
