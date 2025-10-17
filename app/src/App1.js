import logo from './logo.svg';
import './App.css';
import Addition  from './AdditionFunction';
import CDivision from './DivisionClass';
import CMultiplication from './MultiplicationClass';
import Subtraction from './SubtractionFunction';
import Rheader1 from './header';
import Rfooter1 from './footer';
import Rleftside from './leftside';
import Rrightside from './rightside';
import Counter1 from './Counter';
import DateTime from './Date';
import DateDisplay from './PropvsState';
import Greet from './prop';
import Add1 from './Add1';
import Events from './ReactEventDate';
import Calculator from './Calculator';
import RegForm from './form';
import RoutingDemo from './RoutingDemo';
import WeatherApp from './Weather';
import ToDo from './Todo';
import BookApp from './bookstor';
import Counter2 from './Counter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          CVR COLLEGE
        </p>
        <Addition/>
        <Subtraction/>
        <CDivision/>
        <CMultiplication/>
        <Rheader1/>
        <Rleftside/>
        <Rrightside/>
        <Rfooter1/>
      <DateTime/>
      <DateDisplay/>
      <Counter1/>
      <Greet name="Tranush" course="B.TEch"/>
    <Greet name="ABCD" course="B.TEch"/>
    <Add1/>
    <Events/>
    <Calculator/>
    <RegForm/>
    <RoutingDemo/>
    <WeatherApp/>
    <ToDo/>
    <Counter2/>
    <BookApp/>
    </header>
    </div>
  );
}

export default App;
