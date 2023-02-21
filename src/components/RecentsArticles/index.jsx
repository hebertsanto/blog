import { RecentNewPost } from "../NewPostCard"
import { useSelector } from "react-redux"

export const RecentesArticles = () => {

     const New = useSelector(state => state.recentsArticles)
     
     return(
        <div>
            <RecentNewPost newpost={New}/>
        </div>
    )
}