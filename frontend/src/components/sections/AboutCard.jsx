import { AiFillDatabase } from "react-icons/ai";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { MdOutlineSpeed } from "react-icons/md";
const WhatIDo=()=>{
  return<>
  <center>
        <h1 className="What-i-do">What I do</h1>
      </center>
      <div className="row row-cols-2 row-cols-md-4 **row-cols-lg-4** g-4 py-5 what-i-do-box">
        <div className="col">
          <div className="card h-100 overflow-hidden  rounded-4 shadow-lg **service-card-bg** what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="**service-icon-wrapper** mb-3">
                <BsCreditCard2FrontFill className="about-icon"/>
              </div>

              <h3 className="what-do">Frontend Development</h3>
              <p className="how-do">
                Creating responsive and intuitive user interfaces with modern
                JavaScript frameworks
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg **service-card-bg** what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="**service-icon-wrapper** mb-3">
                <IoChevronBackOutline className="about-icon" />
               <IoChevronForwardOutline className="about-icon"/>
              </div>

              <h3 className="what-do">Backend Development</h3>
              <p className="how-do">
                Building robust server-side applications and RESTful APIs
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg **service-card-bg** what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="**service-icon-wrapper** mb-3">
                <AiFillDatabase className="about-icon"/>
              </div>
              <h3 className="what-do">Database Design</h3>
              <p className="how-do">
                Designing efficient database structures for optimal data
                management
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 overflow-hidden rounded-4 shadow-lg **service-card-bg** what-i-do-card">
            <div className="d-flex flex-column h-100 p-4">
              <div className="**service-icon-wrapper** mb-3">
               <MdOutlineSpeed className="about-icon"/>

              </div>

              <h3 className="what-do">Performance Optimization</h3>
              <p className="how-do">
                Enhancing application speed and efficiency for better user
                experience
              </p>
            </div>
          </div>
        </div>
      </div>
  </>
}
export default WhatIDo;