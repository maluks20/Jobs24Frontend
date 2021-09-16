import { sanityClient, urlFor } from "../sanity"
import Link from "next/link"


const Home = ({ jobs}) => {
  console.log(jobs)
  return (
    <section>
        {jobs && (
        <div >
          <div class='mx-8 border-2 border-green-400' >
            <div class='mx-8 border-2 border-yellow-500'>
              {jobs.map((job) => (
                <Link href={`job/${job.slug.current}`}>
                  <div key={job._id} className="card">
                    <img src={urlFor(job.mainImage)} />
                    <h3 class=''> <b>{job.jobtitle}</b></h3>
                    <p class=''>{job.companyName}</p>
                    <p>{job.city},{job.province}</p>
                    <p>{job.description}</p>
                  
                    <h3>
                      <b>{job.salary} per year</b>
                    <p>posted at {job.date}</p>
                    </h3>
                  </div>
                  
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
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
