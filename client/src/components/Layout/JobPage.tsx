import React from 'react'
import {server} from 'config';


type Props = {
    [key: string]: any;
}

const JobPage:React.FC<Props> = ({job}:Props) => {
  return (
    <div className="job">
        <img src='/fruit.png'></img>
        <div className='job-info'>
            <h1>{job.j_name}</h1>
            <p>{job.j_description}</p>
        </div>
    </div>
  )
}


export default JobPage