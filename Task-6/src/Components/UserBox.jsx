function UserBox() {
    return (
        <div className="user-box text-center">
            <img src="assets/images/users/user-1.jpg" alt="user-img" title="Mat Helme" className="rounded-circle avatar-md" />
            <div className="dropdown">
                <a href="javascript: void(0);"
                    className="text-dark dropdown-toggle h5 mt-2 mb-1 d-block"
                    data-toggle="dropdown">Geneva Kennedy</a>
                <div className="dropdown-menu user-pro-dropdown">

                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-user mr-1"></i>
                        <span>My Account</span>
                    </a>

                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-settings mr-1"></i>
                        <span>Settings</span>
                    </a>

                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-lock mr-1"></i>
                        <span>Lock Screen</span>
                    </a>

                    {/* item*/}
                    <a href="javascript:void(0);" className="dropdown-item notify-item">
                        <i className="fe-log-out mr-1"></i>
                        <span>Logout</span>
                    </a>

                </div>
            </div>
            <p className="text-muted">Admin Head</p>
        </div>
    )
}
export default UserBox;