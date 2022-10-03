import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import './Mentordashboard.css'
import {Link} from 'react-router-dom'
function Task() {
    
    return (
        <div className='superMain'>
            <div className='dummydata'>
                <h2>New Task</h2>
                <button >Add New Task</button>
            </div>
            <div className='handleclass' style={{backgroundcolor: '#d3d3d329'}}>
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
        <div className='main' style={{backgroundColor:"#d3d3d31f"}}>
            <div className='div1'>
                <label for="text" className='label1'> Subject</label>
                <input type='text' className='textinput1' ></input>
            </div>
            <div className='div2'>
                <label for="status" className='label1'> Status</label>
                <br></br>
               <select
               style={{width: "93%",
               marginLeft: "2%",
               height: "7vh",
               marginTop: "4%",
               borderRadius: "11px"}}>
                <option value='open'>open</option>
                <option value='open'>close</option>
                <option value='open'>working</option>
               </select>
            </div>
            <div className='div3'>
                <label for="text" className='label1'> Project</label>
                <input type='text' className='textinput3'></input>
            </div>
            <div className='div4'>
                <label for="Comments" className='label1'>Prority</label>
                <br></br>
                <select style={{width: "93%",
    marginLeft: "2%",
    height: "7vh",
    marginTop: "4%",
    borderRadius: "11px"}}>
                <option value='open'>high</option>
                <option value='open'>low</option>
                <option value='open'>medium</option>
               </select>
            </div>

            <div className='div5'>
                <label for="reply" className='label1'> Issue</label>
                <input type='textbox' className='textinput5'></input>
            </div>
            <div className='div6'>
                <label for="qa" className='label1'> QA</label>
                <input type='textbox' className='textinput6'></input>
            </div>
            <div className='div7'>
                <label for="code" className='label1'> Type</label>
                <input type='text' className='textinput7'></input>
            </div>
            <div className='div8'>
                <label for="code" className='label1' > Approved</label>
                <input type='text' className='textinput8'></input>
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
          <Box sx={{width:"89%",marginTop:"2%"}}></Box>Timeline</Typography>
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
  
    <div className='comments'>
        <h5  style={{marginLeft:"2%"}}>Add a Comments</h5>
        <input type = 'text' className='inputcomments'></input>
        <button className='commentbtn'>Comment</button>
    </div>
    </div>
    </div>
        </div>
    )
}
export default Task