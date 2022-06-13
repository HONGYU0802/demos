import { useParams ,useNavigate, useLocation, useInRouterContext, useNavigationType, useOutlet,useOutletContext, useMatch, useHref, useResolvedPath} from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data";

export default function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let show = useInRouterContext()
    let type = useNavigationType()
    // const [count, setCount] = useOutletContext();
    let resolve = useResolvedPath(location.pathname)
    let href = useHref(location.pathname)
    let match = useMatch('/invoices/2000')
    console.log('match=',location)
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    return (<main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
        {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        <p>
            <button
            onClick={() => {
                deleteInvoice(invoice.number);
                navigate("/invoices" + location.search);
            }}
            >
            Delete
            </button>
        </p>
    </main>);
  }