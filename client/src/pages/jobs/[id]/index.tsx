import BasicGrid from '@/components/Layout/BasicGrid'
import JobPage from '@/components/Layout/JobPage'
import React from 'react'
import {server} from 'config'

const job = ({job}:any) => {
  return (
    <>
      <JobPage job={job}></JobPage>
    </>
  )
}


// Get server side request - fetching data on request
export const getStaticProps = async (context:any) => {
  //both server side and static props can be passed in a context
  const res = await fetch(`${server}/jobs/${context.params.id}`)
  const job = await res.json();

  return {
      props: {
          job: job[0],
      }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/jobs/`)
  const jobs = await res.json();

  // Important to pass the correct params to the return "paths" key 
  const ids = jobs.map((job:any) => job.j_id);
  const paths = ids.map((id:any) => ({ params: { id: id.toString() } }))
  console.log('Paths were', paths)

  return {
      paths,
      fallback: false //if we go to something that doesn't exists in the data it will return a 404 
  }
}

export default job