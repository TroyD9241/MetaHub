

const RequestCard = ({ request }) => {
    const { title, content } = request
    console.log(title, content)
    return (
        <>
            <div class="collapse w-96 border rounded-box border-base-300 collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">
                    {title}
                </div>
                <div class="collapse-content">
                    <p>
                        {content}
                    </p>
                </div>
            </div>
        </>
    )
}

export default RequestCard
