import { sanityClient, urlFor } from "../sanity"
import Link from "next/link"


const Home = ({ jobs }) => {
  console.log(jobs)
  return (
    <>
        {jobs && (
        <div >
          <div >
            <h1>its showing</h1>
            <div >
              {jobs.map((job) => (
                <Link href={`job/${job.slug.current}`}>
                  <div key={job._id} className="card">
                    <img src={urlFor(job.mainImage)} />
                    <h3>{job.jobtitle}</h3>
                    <p>{job.companyName}</p>
                    <p>{job.city},{job.province}</p>
                    <p>{job.description}</p>
                    <h3>
                      <b>£{job.salary} per year</b>
                    <p>{job.datePosted}</p>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "job"]'
  const jobs = await sanityClient.fetch(query)

  if (!jobs.length) {
    return {
      props: {
        jobs: [],
      },
    }
  } else {
    return {
      props: {
        jobs,
      },
    }
  }
}


export default Home
