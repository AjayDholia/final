import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectList from '../database/ProjectData'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import './Mentordashboard.css'
import {Link} from 'react-router-dom'
function MentorDashboard() {
    const params = useParams()
    const [project, setProject] = useState({})

    useEffect(() => {
       
        let projectDetail = projectList.filter((ele) => {
            return ele.id == params.id
        })
        // console.log(projectDetail);
        // console.log(projectDetail[0])
        setProject(projectDetail[0])

    }, [params])
    console.log("project", project)
    return (
        <div className='superMain'>
            <div className='dummydata'>
                <h2>Get Dummy Data</h2>
                <button >Save</button>
            </div>
            <div className='handleclass' >
            <div className='class2'>
                <div className='subclass'>
          <div className='displayflex'>  <span class="material-symbols-outlined">person</span>
             <label>Assigned to</label>
             </div>
             <br></br>
             <span class="material-symbols-outlined">add_circle</span>
             </div>
             <div className='subclass'>
             <div className='displayflex'> 
             <span class="material-symbols-outlined">attach_file</span>
                <label>Attachments</label>
                </div>
                <br></br>
                <input type = 'file' />
             </div>
             <div className='subclass'>
             <div className='displayflex'> 
             <span class="material-symbols-outlined">group</span>
                <label>Shared With</label>
                </div><br></br>
                <span class="material-symbols-outlined">add_circle</span>
             </div>
            </div>
            <div className="class1">
             <div className='accordion1'>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <Box sx={{width:"89%",marginTop:"2%"}}></Box>OverView</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>   
    </div>
    <div className='accordion1'>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <Box sx={{width:"89%",marginTop:"2%"}}></Box>Connections</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Link to="/task"><label style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} >Task</label></Link>
        <button className='btntsk'>Add</button><br></br>
        <label style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>Timesheet</label>
        <button className='btntsk'>add</button><br></br>
      <Link to='/projectupdate'> <label style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>Project Update</label></Link> 
        <button className='btntsk'>Add</button>
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>

        <div className='main' style={{backgroundColor:"#d3d3d31f"}}>
            <div className='div1'>
                <label for="text" className='label1'> Project Name</label>
                <input type='text' className='textinput1' value={project.name}></input>
            </div>
            <div className='div2'>
                <label for="status" className='label1'> Status</label>
                <input type='text' className='textinput2' value={project.status}></input>
            </div>
            <div className='div3'>
                <label for="text" className='label1'> Final time</label>
                <input type='text' className='textinput3' value={project.finalTime}></input>
            </div>
            <div className='div4'>
                <label for="Comments" className='label1'> Comments</label>
                <input type='textbox' className='textinput4' value={project.comment}></input>
            </div>

            <div className='div5'>
                <label for="reply" className='label1'> Reply</label>
                <input type='textbox' className='textinput5' value={project.reply}></input>
            </div>
            <div className='div6'>
                <label for="qa" className='label1'> QA</label>
                <input type='textbox' className='textinput6' value={project.QA}></input>
            </div>
            <div className='div7'>
                <label for="code" className='label1'> Code Quality</label>
                <input type='text' className='textinput7' value={project.code}></input>
            </div>
            <div className='div8'>
                <label for="code" className='label1' > Approved</label>
                <input type='text' className='textinput8' value={project.Approved}></input>
            </div>
            <div className='div9'>
                <label for="developer" className='label1'> Developer</label>
                <input type='text' className='textinput9' value={project?.access?.join(",")}></input>
            </div>
            <div className='div10'>
                <label for="last" className='label1'>Start Date</label>
                <input type='text' className='textinput10' value={project.date} ></input>
            </div>           
        </div>
        <div className='accordion1'>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <Box sx={{width:"89%",marginTop:"2%"}}></Box>UserDetails</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className='custmor' style={{display:"flex"}}>
          <div className='div1'>
                <label for="text" className='label1'> Custmor</label>
                <input type='text' className='textinput1' style={{backgroundColor:"#d3d3d330"}}></input>
            </div>
            <div className='div2'>
                <label for="status" className='label1'> SalesDetail</label>
                <input type='text' className='textinput2' style={{backgroundColor:"#d3d3d330"}}></input>
            </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
    <div className='accordion1'>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <Box sx={{width:"89%",marginTop:"2%"}}></Box>Notes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
    <div className='accordion1'>
    <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          <Box sx={{width:"89%",marginTop:"2%"}}></Box>Start & End Date</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <div className='custmor' style={{display:"flex"}}>
          <div className='div1'>
                <label for="text" className='label1'> Actual Start Date</label>
                <input type='date' className='textinput1' style={{backgroundColor:"#d3d3d330"}}></input>
            </div>
            <div className='div2'>
                <label for="status" className='label1'>Actual End Date</label>
                <input type='date' className='textinput2' style={{backgroundColor:"#d3d3d330"}}></input>
            </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion> 
    </div>
    <div className='comments'>
        <h5  style={{marginLeft:"2%"}}>Add a Comments</h5>
        <input type = 'text' className='inputcomments'></input>
        <br></br>
        <button className='commentbtn'>Comment</button>
    </div>
    </div>
    </div>
        </div>
    )
}
export default MentorDashboard