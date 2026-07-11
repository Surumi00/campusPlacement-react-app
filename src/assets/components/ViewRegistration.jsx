import React,{useEffect} from 'react'
import { useState } from 'react'
import axios from 'axios'
import Navigationbar from './Navigationbar'

const ViewRegistration = () => {
     const [data,setdata]=useState([])

        const fetchData=()=>{


          axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (res)=>{
              setdata(res.data)
            }
          ).catch()

        }

        useEffect(()=>{
          fetchData()
        },[])
  return (
    <div>
        <Navigationbar/>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All Employees</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Registration No:</th>
              <th>Full name</th>
              <th>Branch</th>
              <th>sslc mark</th>
              <th>plus two</th>
              <th>ug mark</th>
              <th>pg mark</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.regNo}</td>
                        <td>{value.fullName}</td>
                        <td>{value.branch}</td>
                        <td>{value.sslcMark}</td>
                        <td>{value.plusTwoMark}</td>
                        <td>{value.ugMark}</td>
                        <td>{value.pgMark}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>


    </div>
  )
}

export default ViewRegistration