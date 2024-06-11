import Header from './components/Header.jsx';
import Login from './components/usingStatesLoginForm_ExtractingInputValues.jsx'; // ypu can also do it using refs present in the component
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        <Signup />
      </main>
    </>
  );
}

export default App;
