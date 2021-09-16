import { sanityClient } from "../../sanity"
import JobItem from '../../components/jobItem/jobItem'
// import { isMultiple } from "../../utils"
// // import Image from "../../components/Image"
// // import Review from "../../components/Review"
// // import Link from "next/link"



// const Job = ({
//   title,
//   description,
//   province,
//   salary,
// }) => {
//   return (
//     <div className="container">
//       <h1>
//         <b>{title}</b>
//       </h1>
//       <p>{province}</p>
//       <p> {description}</p>
//        <p>{salary}</p>
      
      
//     </div>
//   )
// }
const Job = ({
jobtitle,
jobType,
description,
province,
salary,
host,
city


}) => {
  console.log(host.name)
  return (
    <div>
    <JobItem
    salary={salary}
    province={province}
    jobTitle={jobtitle}
    city={city}
    host={host?.name}
    
    />
    </div>
  )
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug

  const query = `*[ _type == "job" && slug.current == $pageSlug][0]{
    jobtitle,
    jobType,
    city,
    salary,
    province,
    description,
    host->{
      _id,
      name,
      slug,
      image
    }
  }`

  const job = await sanityClient.fetch(query, { pageSlug })

  if (!job) {
    return {
      props: null,
      notFound: true,
    }
  } else {
    return {
      props: {
        jobtitle: job.jobtitle,
        jobType: job.jobType,
        city: job.city,
        province: job.province,
        salary: job.salary,
        description: job.description,
        host:job.host,
      },
    }
  }
}



export default Job
