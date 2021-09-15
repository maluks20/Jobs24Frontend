

function JobItemHeader(props) {
    return(
        <section class='my-4'>
        <div class=' text-center mx-6'>
            <h1 class='font-black my-4 text-xl '>{props.jobTitle}</h1>
            <p class='py-4'>{props.jobDescription}</p>
            <div class=''>
                <button class='m-2'>Apply Now</button>
                <button class='m-2'>Read More</button>
            </div>
        </div>
        </section>
    )
}

export default JobItemHeader