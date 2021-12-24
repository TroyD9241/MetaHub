import { useState } from "react"

const user = {
    userName: "demo",
    pfp: "https://cdn131.picsart.com/349218956014201.jpg"
}

const RequestCard = ({ request }) => {
    const [image, setImage] = useState(null)
    const { title, content, pictures } = request
    console.log(title, content)
    return (
        <div class="collapse w-100 border rounded-box border-base-300 collapse-arrow">
            <input type="checkbox" />
            <div class="collapse-title text-center text-lg font-medium" >
                <p>{request.title}</p>
            </div>
            <div class="collapse-content text-xs">
                <p>{request.content}</p>
                <div class="tabs tabs-boxed w-35">
                    <a class="tab">Image</a>
                    <a class="tab tab-active">Image</a>
                    <a class="tab">Image</a>
                </div>
            </div>
        </div >
    )
}

export default RequestCard
