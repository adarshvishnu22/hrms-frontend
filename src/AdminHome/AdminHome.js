import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNav from '../AdminNav/AdminNav'
import AdminSidebar from '../AdminSidebar/AdminSidebar'
import axiosInstance from '../baseUrl';

function AdminHome() {

    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post("/viewEmployees")
        .then((response)=>{
            console.log(response.data.data);
            setArray(response.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        console.log(array);

    })

    const handleRemove = (id) => {
        axiosInstance.post(`/deleteEmployeeById/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Removed')
                setArray(prevArray => prevArray.filter(item => item._id !== id));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <AdminNav/>
     
            <div class="container-fluid pt-4 px-4 p-5" >
                <div class="bg-light text-center rounded p-5">
                    <div class="d-flex align-items-center justify-content-between mb-5">
                        <h6 class="mb-0">Employee Details</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">Name</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Date of join</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array?array.map((a)=>{
                                        return(
                                            <tr>
                                            <td>{a.name}</td>
                                            <td>{a.email}</td>
                                            <td>{a.designationid.title}</td>
                                            <td>{a.dateofjoin.slice(0,10)}</td>
                                            <td><button class="btn btn-sm btn-danger" onClick={() => handleRemove(a._id)} >Remove</button></td>                                        </tr>

                                        )
                                       

                                    }):<h1 style={{textAlign:'center',padding:'25px'}} >No Employee found</h1>
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminHome
