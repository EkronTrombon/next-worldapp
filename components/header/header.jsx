import Image from "next/image";

import Logo from '@/assets/images/WorldInfo_Logo.png';

export default function Header() {
    return (
        <header>
            <div className="container my-5 md:my-10">
                <div className="flex justify-between items-center w-full">
                    <Image src={Logo} alt="World Info Logo" width={200} height={200} />
                    <div>NAV MENU</div>
                    <div>SEARCH BAR</div>
                    <div>THEME TOGGLE</div>
                </div>
            </div>
        </header>
    );
}