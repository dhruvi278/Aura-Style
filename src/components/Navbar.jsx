import Button from "./Button";

function Navbar(){
    return(
        <div>
            <div className="logo">
                <h2>AuraStyle</h2>
            </div>
            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Our Story</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="Buttons">
                <Button text="Sign In"/>
                <Button text="Get Start"/>
            </div>
        </div>
    )
}

export default Navbar;