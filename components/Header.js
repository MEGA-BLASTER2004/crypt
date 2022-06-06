import React from "react";
import { Copy, Line, Minus, X } from "tabler-icons-react";

function Header() {
    return (
        <div className="flex border-b border-white bg-black px-8 py-8 justify-between">
            <img className="h-10" src="logo.svg" />
            <div className="flex text-white space-x-2">
                <div className="hover:bg-green-500 duration-100 rounded-md h-max p-1 cursor-pointer">
                    <Minus />
                </div>
                <div className="hover:bg-blue-500 duration-100 rounded-md h-max p-1 cursor-pointer">
                    <Copy />
                </div>
                <div className="hover:bg-red-500 duration-100 h-max rounded-md border border-red-500 p-1 cursor-pointer">
                    <X />
                </div>
            </div>
        </div>
    );
}

export default Header;
