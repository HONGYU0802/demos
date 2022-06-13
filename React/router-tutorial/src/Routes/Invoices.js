import { NavLink , Outlet, useSearchParams, useLocation,useOutlet} from "react-router-dom";
import { getInvoices } from "../data";
import React from 'react';


function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
  }

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  let out = useOutlet()
  const [count, setCount] = React.useState(0);
  console.log('count=',count)
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
          <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
        .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
        .map((invoice) => (
            <QueryNavLink
                style={({ isActive }) => {
                    return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                    };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
                >
                {invoice.name}
            </QueryNavLink>
        ))}
      </nav>
      <Outlet context={[count, setCount]} />
    </div>
  );
}