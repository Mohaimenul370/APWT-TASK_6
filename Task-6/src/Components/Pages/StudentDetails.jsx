import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
const StudentDetails=()=>{
    const {id} = useParams();
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
                            <h4 className="page-title"> Student From {id}</h4>
                        </div>
                    </div>
                </div>
                {/* end page title */}

                <div className="row">
                   
               </div>
                {/* end row*/}
            </div>
        </div>
        {/* content */}
        {/* Footer Start */}
        <Footer></Footer>
        {/* end Footer */}


    </div>
    )
}
export default StudentDetails;