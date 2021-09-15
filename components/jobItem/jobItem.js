import JobItemHeader from './jobItemHeader'
import JobItemBody from './jobItemBody'

function JobItem(props) {

    return (
        <section>
        <JobItemHeader {...props}/>
        <JobItemBody {...props}/>
        </section>
    )
}

export default JobItem