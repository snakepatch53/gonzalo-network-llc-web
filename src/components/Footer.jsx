import {
    faFacebookF,
    faTiktok,
    faWhatsapp,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialItem from "../ui/SocialItem";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="z-30 flex w-full bg-gray-200 border-solid border-t-[1px] border-t-gray-300 font-semibold">
            <div className="container">
                <div className="flex flex-col w-full items-center py-10 gap-3">
                    <div className="flex gap-2">
                        <SocialItem
                            className=" border-[#0866ff] flex justify-center items-center contrast-0 hover:contrast-100 border  w-8 aspect-square rounded-full "
                            classIcon=" text-xl "
                            icon={faFacebookF}
                            color="#0866ff"
                            noLabel
                        />
                        <SocialItem
                            className=" border-[#e00161] flex justify-center items-center contrast-0 hover:contrast-100 border  w-8 aspect-square rounded-full "
                            classIcon=" text-xl "
                            icon={faInstagram}
                            color="#e00161"
                            noLabel
                        />
                        <SocialItem
                            className=" border-[#000000] flex justify-center items-center contrast-0 hover:contrast-100 border  w-8 aspect-square rounded-full "
                            classIcon=" text-xl "
                            icon={faTiktok}
                            color="#000000"
                            noLabel
                        />
                        <SocialItem
                            className=" border-[#ff1203] flex justify-center items-center contrast-0 hover:contrast-100 border  w-8 aspect-square rounded-full "
                            classIcon=" text-xl "
                            icon={faYoutube}
                            color="#ff1203"
                            noLabel
                        />
                        <SocialItem
                            className=" border-[#000000] flex justify-center items-center contrast-0 hover:contrast-100 border  w-8 aspect-square rounded-full "
                            classIcon=" text-xl "
                            icon={faXTwitter}
                            color="#000000"
                            noLabel
                        />
                        <SocialItem
                            className=" border-[#22c45f] flex justify-center items-center contrast-0 hover:contrast-100 border  w-8 aspect-square rounded-full "
                            classIcon=" text-xl "
                            icon={faWhatsapp}
                            color="#22c45f"
                            noLabel
                        />
                    </div>
                    <div>
                        <h3 className="opacity-70">
                            Powered by{" "}
                            <a href="" className="text-[--c1]">
                                ideasoft
                            </a>
                        </h3>
                    </div>
                    <div className="flex gap-4 opacity-50 text-sm ">
                        <Item to="/" text="Home" />
                        <Link to="/">Home</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/serevices">Services</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <span className="opacity-70">Copyright 2024 © Gonzalo Network LLC</span>
                </div>
            </div>
        </footer>
    );
}

function Item({ to, text }) {
    return (
        <Link to={to} className="hover:underline">
            {text}
        </Link>
    );
}
