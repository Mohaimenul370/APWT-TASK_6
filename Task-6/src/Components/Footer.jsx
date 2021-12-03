function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <script>document.write(new Date().getFullYear())</script> &copy; SmartISP By <a href="https://tnrsoft.com/">TNRSOFT</a>
                    </div>
                    <div className="col-md-6">
                        <div className="text-md-right footer-links d-none d-sm-block">
                            <a href="https://tnrsoft.com/#about">About Us</a>
                            <a href="https://www.facebook.com/tnrsoft">Help</a>
                            <a href="https://tnrsoft.com/#contact_us">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;