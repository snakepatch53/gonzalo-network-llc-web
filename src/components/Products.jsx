import Product from "../ui/Product";
import { Link } from "react-router-dom";
import products from "../mocks/products.json";

export default function Products() {
    return (
        <div className=" container ">
            <div className="flex flex-row justify-between items-center py-5 font-semibold ">
                <h3 className=" text-[--c2-txt] text-base border-solid ">We offer you...</h3>
                <div className="flex gap-2">
                    <Item to="#" text="Products" />
                    <Item to="#" text="Services" />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {products.map((product, index) => (
                    <Product key={index} {...product} />
                ))}
            </div>
        </div>
    );
}

function Item({ to, text }) {
    return (
        <Link
            to={to}
            className=" font-medium text-[--c3-txt2]  transition-colors hover:text-[--c3-txt3]"
        >
            {text}
        </Link>
    );
}
