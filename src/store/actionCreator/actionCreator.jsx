
export function dataFromServer({results,episode}){
    return{
        type:"GET",
          data:results,
          episode:episode,
    }
}


export function getDataFromServer(data){
    console.log(data);
    return async (dispatch)=>{
        const response= await fetch("https://rickandmortyapi.com/api/character")
        const allData=await response.json(data)
        dispatch(dataFromServer(allData))
    }
}