import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainGridComponent from './components/MainGridComponent';
import SecondaryGridComponent from './components/SecondaryGridComponent';

function App() {
  return (
    <>
    {/*Tailwind css for background color*/}
    <section className="p-8 dark:bg-slate-900 h-full lg:h-screen">
        <div
          className="bg-slate-100 dark:bg-slate-800 h-52 w-full absolute top-0 left-0 rounded-b-3xl"
          style={{
            zIndex: 0,
          }}
        ></div>
        <HeaderComponent/>
        <MainGridComponent/>
        <SecondaryGridComponent/>
      </section>
    </>
    
  );
}

export default App;
