
function JobItemBody(props) {
    return (
        <section>
          <div class='w-full flex gap-4 mx-6'>
            <div class='w-4/6'>
                <p class='my-3 '>introduction, Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, impedit.</p>
                <h2  class='my-3 font-black'>Responsibilities</h2>
                <p  class='my-3'>Responsibilites, Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis id in aliquam provident perspiciatis corrupti facere numquam, quae sed vitae assumenda eaque quo ratione?</p>
                <h2  class='my-3 font-black'>Skills</h2>
                <p> orem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium nemo ad quidem porro maxime esse?</p>
            </div>
            <div class='w-2/6'>
                <h2 class='pb-2'>{props.salary}per year</h2>
                <div class='flex py-2 '>
                   <p class=''>{props.industryType}</p>
                   <p class=''>{props.city}, {props.province}</p>
                </div>

              <div>
                  <p>{props.jobSearchDescription}</p>
              </div>
            </div>
        </div>
        </section>
    )
}
export default JobItemBody