import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { getAllPets } from "./api/pets";

function App() {
  return (
    <div className="font-mono">
      <Navbar />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/:Id" Component={PetDetail} />
      </Routes>
    </div>
  );
}

export default App;
