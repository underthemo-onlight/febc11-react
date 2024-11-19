import Header from "./components/Header";
import Todo from "./pages/Todo";
import Footer from "./components/Footer";
import TodoContainer from "@pages/TodoContainer";

function App() {
  return (
    <div id="todo">
      <Header />
      <TodoContainer />
      <Footer />
    </div>
  );
}

export default App;
