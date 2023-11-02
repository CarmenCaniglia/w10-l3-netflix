import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import CompleteGalleries from './component/CompleteGalleries';
// import Account from './component/Account';
// import Settings from './component/Settings';

function App() {
  return (
    <>
    <header>
     <NavBar/>
    </header>
    <main>
    {/* <Account/> */}
    {/* <Settings/> */}
    <CompleteGalleries/>
    </main>
    <footer>
     <Footer/>
    </footer>
    </>
  );
}

export default App;
