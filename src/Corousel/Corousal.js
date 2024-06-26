import React from 'react'
// import img from '../Images/imgcorousel.jpg'
import Link from 'react-router-dom'

function Corousal() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-uppercase text-dark mb-lg-4">
                Comp Name
              </h1>
              <h1 className="text-uppercase text-white mb-lg-4">
              Deliver exceptional employee experiences
              </h1>
              <p className="fs-4 text-white mb-lg-4">
              Automate HR processes with customisable software that works for you. Connect people, tools, and data from onboarding to offboarding, and everything in between.              </p>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                {/* <a
                  to="/about"
                  className="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Read More
                </a> */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Corousal
