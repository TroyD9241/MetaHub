import { useSelector } from 'react-redux'
import RequestCard from "./RequestCard";

const users = {
    userName: "demo",
    pfp: "https://cdn131.picsart.com/349218956014201.jpg"
}


const requests = [{
    title: "hi this is a demo",
    content: "this is content",
    pictures: ["https://static.wikia.nocookie.net/blackclover/images/0/00/Noelle_after_Heart_Kingdom_training.png/revision/latest?cb=20191117231002", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b60b118d-20f5-4d15-86f9-bd7010880ff0/ddn06j0-8359b80a-eeff-4db5-8896-f46d84097df4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I2MGIxMThkLTIwZjUtNGQxNS04NmY5LWJkNzAxMDg4MGZmMFwvZGRuMDZqMC04MzU5YjgwYS1lZWZmLTRkYjUtODg5Ni1mNDZkODQwOTdkZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.B97aIwnydCi_2wtX8z-v6xipCBTFS-TfzcaYgEnzajs", "https://thicc.mywaifulist.moe/waifus/8462/9684d1bbd0d72cfac795f99358d451dc6de915f919a0e889b7216660be24ab61_thumb.jpeg", "https://static3.cbrimages.com/wordpress/wp-content/uploads/2020/08/Charlotte-Roselei-02.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5", "https://ih1.redbubble.net/image.1174664137.5884/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"]
},
{
    title: "this is a different demo",
    content: "its more content"
},
{
    title: "this is a different demo",
    content: "its more content"
},
{
    title: "this is a different demo",
    content: "its more content"
},
{
    title: "this is a different demo",
    content: "its more content"
},
{
    title: "this is a different demo",
    content: "its more content"
},
{
    title: "this is a different demo",
    content: "its more content"
},
{
    title: "this is a different demo",
    content: "its more content"
},

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
