import NavLink from "./NavLink";
//네비게이션 란에 쓰여진 코드
export default function NavBar(){
    return(
        <nav>
            <ul className="flex gap-2">
                <li>
                    <NavLink href="/"
                        className="font-bold font-orbitron">
                        Indie Gamer
                    </NavLink>
                </li>
                <li className="ml-auto">
                    <NavLink href="/reviews">
                        Reviews
                    </NavLink>
                </li>
                <li>
                    <NavLink href="/about" prefetch={false}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}