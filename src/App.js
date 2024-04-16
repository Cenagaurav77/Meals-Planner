import "./App.css";
import Favorites from "./Components/Favorites";
import Search from "./Components/Search";
import Meals from "./Components/Meals";
import Modal from "./Components/Modal";
import { useGlobalContext } from "./context";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </>
  );
}

export default App;
