import { SquareArrowOutUpRight } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";

function Navbar() {
    return (
        <div>
            <Logo />
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Our Story</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="Buttons flex gap-3">
                <Button variant="whiten" className="jost font-semibold" size="lg">Sign In</Button>
                <Button className="jost font-bold">Get Start</Button>
            </div>
        </div>
    )
}

export default Navbar;