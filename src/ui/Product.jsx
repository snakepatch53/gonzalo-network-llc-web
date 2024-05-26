export default function Product({ src, name, price }) {
    return (
        <div className=" flex flex-col items-center rounded-md overflow-hidden font-semibold  border-solid border-[1px] bg-white/10 border-black/15 ">
            <img src={src} className="w-full aspect-square" />
            <div className="py-3 text-center ">
                <h3 className=" font-bold text-[--c3-txt2] uppercase ">{name}</h3>
                <span className=" font-bold opacity-80 text-[--c2-txt] ">
                    <b className=" text-xl text-[--c3-txt2] mr-1 ">$</b>
                    {price}
                </span>
            </div>
        </div>
    );
}
