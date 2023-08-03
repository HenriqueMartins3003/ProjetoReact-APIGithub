import AppCalc from "./components/AppCalc";
import AverageNotes from "./components/AverageNotes";
import Factorial from "./components/Factorial";
import Investment from "./components/Investment";
import Palindrome from "./components/Palindrome";
import PrimeNumbers from "./components/PrimeNumber";
import Table from "./components/Table";
import VoelCount from "./components/VoelCount";
import "./Style/App.css";

function App() {
  return (
    <>
      <AppCalc />
      <PrimeNumbers />
      <Factorial />
      <Palindrome />
      <Table />
      <VoelCount />
      <AverageNotes />
      <Investment />
    </>
  );
}

export default App;
