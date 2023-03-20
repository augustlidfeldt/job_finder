import React, { ReactNode, useEffect, useState } from 'react'
import {JobCard} from './JobCard'

export const JobGrid:React.FC = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        async function getJobs() {
            const res = await fetch('http://localhost:5000/jobs/detailed');
            const data = await res.json();
            setJobs(data);
        }
        getJobs();
    }, [])

    function mapJobs():any {

        return jobs.map((job)=><JobCard job={job} ></JobCard>)    
    }
  return (
    <div className='jobgrid'>
        {mapJobs()}
    </div>
  )
}