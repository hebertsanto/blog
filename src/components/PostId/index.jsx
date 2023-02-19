import { useParams } from "react-router-dom"

export const PostId = () => {
    const { id } = useParams();
    console.log(id);
    
    return (
        <div>
            <h1>post</h1>
        </div>
    )
}