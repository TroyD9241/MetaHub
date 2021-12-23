import { useSelector } from 'react-redux'
import RequestCard from "./RequestCard";

const requests = [{
    title: "hi this is a demo",
    content: "this is content"
},
{
    title: "this is a different demo",
    content: "its more content"
}
]

const RequestGrid = () => {
    return (
        <div>

            {Object.values(requests)?.map((request, i) => {
                return <RequestCard key={i} request={request} />;
            })}
        </div>
    )
}

export default RequestGrid
