import logo from "./assets/Logo-removebg.png";

function NavSection() {

    return (
        <nav className="mt-0 h-20 w-full flex flex-row items-center justify-between bg-white">
        <div className="ml-24">
            <img src={logo} alt="Logo" />
        </div>
        <div className="flex flex-row">
            <ul className="gap-16 flex flex-row items-center justify-center font-semibold">
                <li>
                    <p>Texto</p>
                </li>
                <li>
                    <p>Texto</p>
                </li>
                <button className="mr-24 w-[88px] h-[42px] rounded-[7px] font-light bg-black text-white text-center hover:cursor-pointer">
                    SIGN UP
                </button>
            </ul>
            
        </div>
    </nav>
    )
    
}

export default NavSection