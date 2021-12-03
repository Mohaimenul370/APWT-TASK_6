import { Link } from "react-router-dom";
function SideMenu() {
    return (
        <div id="sidebar-menu" className="show">

            <ul id="side-menu">

                <li className="menu-title">Navigation</li>

                


                <li className="menuitem-active">
                    <Link to="/" className="active">
                        <i className="mdi mdi-view-dashboard-outline"></i>
                        <span> Home </span>
                    </Link>
                </li>


                <li className="menuitem-active">
                    <Link to="/student-list" className="active">
                        <i className="mdi mdi-view-dashboard-outline"></i>
                        <span> Students </span>
                    </Link>
                </li>


                <li className="menuitem-active">
                    <Link to="/contact" className="active">
                        <i className="mdi mdi-view-dashboard-outline"></i>
                        <span> Contact </span>
                    </Link>
                </li>



                

                
            </ul>
        </div>
    );
}

export default SideMenu;