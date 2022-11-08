import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from './routs/Routs';

function App() {
  return (
    <div className="max-w-screen-xl	 m-auto	 ">
     <RouterProvider router={route}>

     </RouterProvider>
    </div>
  );
}

export default App;
