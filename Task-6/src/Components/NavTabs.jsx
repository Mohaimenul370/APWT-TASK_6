function NavTabs() {
    return (
        <ul className="nav nav-tabs nav-bordered nav-justified" role="tablist">
            <li className="nav-item">
                <a className="nav-link py-2" data-toggle="tab" href="#chat-tab" role="tab">
                    <i className="mdi mdi-message-text d-block font-22 my-1"></i>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link py-2" data-toggle="tab" href="#tasks-tab" role="tab">
                    <i className="mdi mdi-format-list-checkbox d-block font-22 my-1"></i>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link py-2 active" data-toggle="tab" href="#settings-tab" role="tab">
                    <i className="mdi mdi-cog-outline d-block font-22 my-1"></i>
                </a>
            </li>
        </ul>
    );
}
export default NavTabs;