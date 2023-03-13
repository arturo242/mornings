
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header className="">
            <nav className="navbar bg-dark p-3">
                <div className="container-fluid">
                    <h2 className="text-white">Mornings</h2>
                    <FontAwesomeIcon className="text-white fs-3" icon={faCartShopping} />
                </div>
                
            </nav>
        </header>
    )
}
