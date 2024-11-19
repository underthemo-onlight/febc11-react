<<<<<<< HEAD
<<<<<<< HEAD
import Footer from "@components/Footer";
import Header from "@components/Header";
import TodoContainer from '@pages/TodoContainer';

function App(){
  return (
    <div id="todo">
      <Header />
      <TodoContainer />
=======
import { produce } from 'immer';
=======
>>>>>>> aacba05 (✨)
import Footer from "@components/Footer";
import Header from "@components/Header";
import TodoContainer from '@pages/TodoContainer';

function App(){
  return (
    <div id="todo">
      <Header />
<<<<<<< HEAD
      <Todo itemList={ itemList } addItem={ addItem } toggleDone={ toggleDone } deleteItem={ deleteItem } />
>>>>>>> 8d17eac (🚚)
=======
      <TodoContainer />
>>>>>>> aacba05 (✨)
      <Footer />
    </div>
  );
}

export default App
