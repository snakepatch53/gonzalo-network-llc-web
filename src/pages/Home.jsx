import { Link } from "react-router-dom";
import PageContent from "../components/PageContent";
import Products from "../components/Products";
import Slider from "../ui/Slider";
import {
    faFacebook,
    faInstagram,
    faTiktok,
    faWhatsapp,
    faXTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialItem from "../ui/SocialItem";

export default function Home() {
    return (
        <PageContent>
            <section className=" px-[--pdd] mt-4 ">
                <div className=" container flex justify-center gap-5 w-full ">
                    <Link
                        to="/"
                        className=" group relative hidden lg:flex flex-col gap-7 aspect-square max-h-80 "
                    >
                        <div className=" absolute left-16 top-5 -z-10 block w-1/2 aspect-square rounded-full bg-[--c1] opacity-80 " />
                        <div className=" absolute right-0 top-0 -z-10 block w-1/2 aspect-square rounded-full bg-[--c2] opacity-70 " />
                        <div className=" absolute left-1/2 bottom-0 -z-10 -translate-x-1/2 block w-3/4 aspect-square rounded-full bg-[--c2] opacity-90 " />
                        <img
                            className=" w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-110"
                            src="/image/service_man.png"
                            style={{
                                maskImage:
                                    "linear-gradient(to bottom, black 50%, transparent 90%, transparent)",
                            }}
                        />
                        <h2 className=" font-bold uppercase text-balance text-[--c3-txt2] text-center max-w-52 mx-auto leading-4 ">
                            We have professionals in our area
                        </h2>
                    </Link>
                    <div className="flex flex-col justify-center gap-3">
                        <SocialItem name="Facebook" icon={faFacebook} color="#0866ff" />
                        <SocialItem name="Instagram" icon={faInstagram} color="#e00161" />
                        <SocialItem name="Tiktok" icon={faTiktok} color="#000000" />
                        <SocialItem name="Youtube" icon={faYoutube} color="#ff1203" />
                        <SocialItem name="Twitter" icon={faXTwitter} color="#000000" />
                        <SocialItem name="Whatsapp" icon={faWhatsapp} color="#23c55f" />
                    </div>
                    <Slider className=" flex-1 aspect-video lg:aspect-[4/1] " />
                </div>
            </section>

            <section className="  ">
                <svg className=" fill-[--c2] translate-y-1 " viewBox="0 0 1440 320">
                    <path
                        fillOpacity="1"
                        d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,133.3C672,149,768,139,864,160C960,181,1056,235,1152,256C1248,277,1344,267,1392,261.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
                <div className=" bg-[--c2] px-[--pdd] ">
                    <Products />
                </div>
                <svg className=" fill-[--c2] -translate-y-1" viewBox="0 0 1440 320">
                    <path
                        fillOpacity="1"
                        d="M0,64L48,58.7C96,53,192,43,288,58.7C384,75,480,117,576,133.3C672,149,768,139,864,160C960,181,1056,235,1152,256C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                    />
                </svg>
            </section>
        </PageContent>
    );
}
