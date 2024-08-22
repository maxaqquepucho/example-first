//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Header />

        <h1>Space apps</h1>
        <Footer />
      </div>
    </>
  );
}

export default App;
