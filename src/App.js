import Footer from "./components/Footer";
import Links from "./components/Links";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Profile />
        <Links />
        <Footer />
      </div>
    </div>
  );
}

export default App;
