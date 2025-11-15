import { getToken } from "./commentsService";

const url = "https://re-estate.runasp.net/api/Like/ToggleLikeProperty"

export const Like = async (id:any) => {
    try {
        const token = getToken()
        
        const setLike = await fetch(`${url}/${id}`, {
            method: "POST",
            headers: {
                Authorization:token,
                "Content-Type": "application/json",
            },
        });
        return await setLike.json()

    }catch(err){console.log(err)};
    
}