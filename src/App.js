import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>     <Link to="/Login">Login</Link> </li>
          <li>     <Link to="/Login">Contactus</Link> </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}