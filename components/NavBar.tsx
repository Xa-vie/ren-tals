import { SearchBar } from "./SearchBar";


function NavBar() {

    return (
        <div className="border bg-backgroundcard p-4 flex justify-between items-center rounded-[20px]">
            <SearchBar />
        </div>
    );
}

export default NavBar;
