import Footer from "../Footer";
import Student from "./Student";
function StudentList(){
    return(
        <div className="content-page">
            <div className="content">


                <div className="container-fluid">

                    {/* start page title */}
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <div className="page-title-right">
                                    <form className="form-inline">
                                        <div className="form-group">
                                            <div className="input-group input-group-sm">
                                                <input type="text" className="form-control border-0" id="dash-daterange" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text bg-blue border-blue text-white">
                                                        <i className="mdi mdi-calendar-range"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="javascript: void(0);" className="btn btn-blue btn-sm ml-2">
                                            <i className="mdi mdi-autorenew"></i>
                                        </a>
                                        <a href="javascript: void(0);" className="btn btn-blue btn-sm ml-1">
                                            <i className="mdi mdi-filter-variant"></i>
                                        </a>
                                    </form>
                                </div>
                                <h4 className="page-title">Student List</h4>
                            </div>
                        </div>
                    </div>
                    {/* end page title */}

                    <div className="row">
                        
                    <div className="table-responsive">
                                            <table className="table table-striped mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>CGPA</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    
                                                    <Student Id="17-35381-3" Name="Tanjimul Islam" Cgpa="3.51"></Student>
                                                    <Student Id="17-35451-3" Name="Ahmed Borno" Cgpa="3.83"></Student>
                                                    <Student Id="17-12345-2" Name="Abul Basar" Cgpa="2.50"></Student>
                                                    <Student Id="18-40381-3" Name="Moidul Islam" Cgpa="3.01"></Student>
                                                   
                                                </tbody>
                                            </table>
                                        </div>
                    </div>
                    {/* end row*/}
                </div>
            </div>
            {/* content */}
            {/* Footer Start */}
            <Footer></Footer>
            {/* end Footer */}


        </div>
    );
}

export default StudentList;