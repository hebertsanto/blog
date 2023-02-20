import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

export const PostId = () => {
    const {categoria} = useParams();
    const NewCategory = useSelector((state) => state.setCategory);
    console.log(categoria, NewCategory);
    return (
        <div>
         
        </div>
    )
}

