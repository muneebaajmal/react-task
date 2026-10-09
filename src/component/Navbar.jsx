export function Navbar(){
    return(
        <nav className="bg-black text-white ">
        <div className="flex items-center justify-between px-10 h-20 ">
            <h1 className="tracking-[3px] text-3xl text-orange-300">My Website</h1>
            <div className="flex items-center gap-4 text-orange-300">
                <a href="">Home</a>
                   <a href="">About</a>
                   <a href="">Contact</a>
            </div>
        </div>
        </nav>
    ) 

}