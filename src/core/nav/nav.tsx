import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface MainNavProps {

}

const MainNav: FunctionComponent<MainNavProps> = () => {
    return (
        <div>
            <Link to="items">items</Link>
            <Link to="workers">workers</Link>
            <Link to="auth">autk</Link>
            <Link to="register">register</Link>
        </div>
     );
}

export default MainNav;
