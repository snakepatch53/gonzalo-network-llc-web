import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cls } from "../lib/utils";

export default function SocialItem({
    name,
    href = "#",
    icon,
    color = "#0866ff",
    noLabel = false,
    className = "",
    classIcon = "",
}) {
    return (
        <>
            <a
                className={cls(
                    " group flex items-center gap-1 transition-transform duration-200 hover:scale-125 ",
                    className
                )}
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                    icon={icon}
                    className={cls(" text-2xl ", classIcon)}
                    style={{ color }}
                />
                {noLabel ? null : (
                    <div className=" relative ">
                        <span className=" opacity-0 ">{name}</span>
                        <span className=" absolute top-0 block max-w-0 overflow-hidden transition-all duration-300 group-hover:max-w-20 ">
                            {name}
                        </span>
                    </div>
                )}
            </a>
        </>
    );
}
