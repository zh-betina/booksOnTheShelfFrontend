const getList = async(data, url, method)=>{
    const response = await fetch(url,{
        method: method,
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try{
        data = await response.json();
        return data;
    }catch(error){
        console.log("Error:", error);
    }
}

export default getList;