import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from "react-router-dom";

// console.log(<Outlet/>)

export default function App() {
  return (
    <div>
      <h1>Bookkeeper!</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
        <Outlet />
      </nav>
    </div>
  );
}
