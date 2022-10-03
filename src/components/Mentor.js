import React , {useState} from 'react'
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './mentor.css'
import {useNavigate} from "react-router-dom"
import projectList from '../database/ProjectData'
import EnhancedTable from './MentordataTable';
function Mentor() {
  const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;
  return (
    <div className='mentor'>
        <div className='project'>
        <h2>Project</h2>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300
          }}
        >
        </Box>
      </Popover>
         <Button className='addproject' aria-describedby={"name"} variant="contained" onClick={(e) => {
          handleClick(e)
        }} >
          Add Project
        </Button>
        
        </div>
        <div className='subtables' style={{width:"100%",height:"100%"}}>
        <div className='select' style={{width:"25%"}} >
            <span >Filter by</span>
            <div className='select1' style={{marginTop:"6%"}}>
         <select className="allselect">
            <option>Assign to</option>
            <option value='ajay'>ajay</option>
            <option value='akhil'>akhil</option>
         </select>
         </div>
         <div className='select2' style={{marginTop:"6%"}}>
            <select className='allselect'>
                <option>Created by</option>
                <option value='digvijay'>digvijay</option>
            </select>
         </div>
         <div className='select3' style={{marginTop:"11%"}}>
            <span style={{color:"#002bffb5"}}>Edit filter</span>
            <br></br>
            <select className='allselect'>
                <option>edit</option>
            </select>
         </div>
         
        </div>
        <div className='tabledata' style={{width:"70%"}}>
            <div className='filterfunctionality' style={{padding:"3%"}}>
                <input type='text' placeholder='Name' className='input1'></input>
                <input type='text' placeholder='Project Name' className='input2'></input>
                <select className='allselect1'>
                    <option value="open">open</option>
                    <option value="complete">complete</option>
                    <option value="cancle">cancle</option>
                </select>
                <select className='allselect2'>
                    <option value="open">Low</option>
                    <option value="complete">Medium</option>
                    <option value="cancle">High</option>
                </select>
            </div>
            <div className='table' style={{marginTop:"1%"}}>
              {/* <EnhancedTable/> */}
              <table style={{width:"100%",}}>
                <tr>
                  <th>Project Name</th>
                  <th>Status</th>
                  <th>Project Type</th>
                  <th>Name</th>
                  <th>Employee</th>
                </tr>
                {
                  projectList.map((ele)=>{
                    return(
                      <tr  onClick={()=>{
                        navigate(`/mentordashboard/${ele.id}`)
                      }
                     
                      } >
                        <td>{ele.name}</td>
                        <td>{ele.status}</td>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.access}</td>
                      </tr>
                    )
                  })
                }
              </table>
            </div>
        </div>
        </div>
    </div>

  )
}

export default Mentor