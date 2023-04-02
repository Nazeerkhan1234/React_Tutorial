
import './App.css';
import Context from './component/Context';
import Demo from './component/Demo';
import Todo from './component/Todo';
import Ueffect1 from './component/Ueffect1';
import Ueffect2 from './component/Ueffect2';
import Ueffect3 from './component/Ueffect3';

function App() {
  return (
    <div >
      <Parent/>
      <Context/>
      <Ueffect1/>
      <Ueffect2/>
      <Ueffect3/>
    <Demo/>
    <Todo/>
    </div>
  );
}

export default App;
