import React from 'react'

const Addregistartion = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 className="text-center">Add Student</h1>
                   <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">registrarion Number</label>
                        <input type="number" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">full name :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">aadthar number</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">email address</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">phone number :</label>
                        <select name="text" id="" className="form-control"></select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">department :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">parent name:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">sslc mark:</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">plus two mark</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">ug degree mark:</label>
                        <input type="text" className="form-control" />
                    </div>
                     <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">pg degree mark:</label>
                        <input type="text" className="form-control" />
                    </div>
                    
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success">submit </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addregistartion