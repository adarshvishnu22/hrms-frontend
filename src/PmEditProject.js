import React, { useEffect, useState } from 'react'
import PmNav from './PmNav'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './baseUrl';
import { toast } from 'react-toastify';

function PmEditProject() {

    const [value, setvalue] = useState({ deadline: "" });
    const navigate = useNavigate();

    const {id}=useParams();
    console.log(id);

    useEffect(() => {
        axiosInstance
          .post(`/viewProjById/${id}`)
          .then((response) => {
            console.log(response);
            setvalue(response.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      console.log(value);

      const updatefcn = (e) => {
        e.preventDefault();
    
        axiosInstance
          .post(`/editProjyId/${id}`, value)
          .then((response) => {
            console.log(response);
            if (response.data.status == 200) {
              toast.success("Updated");
              navigate(`/pm_view_singleprct/${id}`);
            } else {
              toast.error("Updation Failed");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const changefn = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value });
      };

  return (
    <div>
      <PmNav/>
      <div class="contact mt-100">
        <div class="container">
          <div class="section-header">
            <h2>Edit Project</h2>
          </div>
          <form className="form" onSubmit={updatefcn}>
            <div class="row ">
              <div class="col-3">
                <label>Project Name</label>
              </div>

              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  name="title"
                  value={value.title}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            
            <div class="row ">
              <div class="col-3">
                <label>Technology</label>
              </div>

              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  name="technology"
                  value={value.technology}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-3">
                <label>Deadline</label>
              </div>
              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  name="deadline"
                  value={value.deadline.slice(0,10)}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-3">
                <label>Deadline</label>
              </div>
              <div class="col-9 mb-2">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  name="percentage"
                  value={value.percentage}
                  onChange={changefn}
                  required
                />
              </div>
            </div>
            {/* <div class="row ">
              <div class="col-3">
                <label>Comments</label>
              </div>
              <div class="col-9 mb-2">
              <textarea
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Comments"
                      onChange={(e)=>{setvalue({...value,comments:e.target.value})}}

                    />
              </div>
            </div> */}
            <div class="row ">
              <div class="col-3"></div>
              <div class="col-9 mb-2">
                <div>
                  <button
                    class="btn"
                    type="submit"
                    style={{ position: "relative", float: "right" }}
                  >
                    Apply
                  </button>
                </div>{" "}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PmEditProject
