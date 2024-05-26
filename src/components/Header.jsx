import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";
import { cls } from "../lib/utils";
import { useState } from "react";

export default function Header() {
    const [isSticky, setSticky] = useState(false);
    window.onscroll = () => setSticky(window.scrollY == 0);
    return (
        <header
            className={cls(
                " sticky top-0 z-30 flex w-full px-[--pdd] border-t-4 border-[--c1]   ",
                {
                    "shadow-none": isSticky,
                    "shadow-lg bg-white/70 backdrop-blur": !isSticky,
                }
            )}
        >
            <div className=" container flex justify-between items-center ">
                <Link to="/" className=" w-36 aspect-video ">
                    <img className="w-full h-full object-contain " src="/img/logo.png" />
                </Link>
                <nav className="flex gap-2">
                    <Option to="/" name="Home" />
                    <Option to="/products" name="Products" />
                    <Option to="/services" name="Services" />
                    <Option to="/about" name="About" />
                    <Option to="/contact" name="Contact" />
                </nav>

                <a
                    className=" flex items-center px-4 py-2 gap-1 text-[--c2] border border-[--c2] rounded-full transition-all duration-300 hover:bg-[--c2] hover:text-[--c2-txt] "
                    href="tel:3472582888"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faPhone} />
                    <span className=" font-bold ">347-258-2888</span>
                </a>
            </div>
        </header>
    );
}

function Option({ to, name }) {
    const { pathname } = useLocation();
    return (
        <Link
            to={to}
            className={cls(
                " font-medium uppercase text-sm text-[--c3-txt2] hover:text-[--c3-txt1] transition-colors px-1 ",
                {
                    "text-[--c3-txt1]": pathname === to,
                }
            )}
        >
            {name}
        </Link>
    );
}
