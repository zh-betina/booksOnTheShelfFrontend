const submitFile = (data, method, url) => {
    fetch(url, {
        method: method,
        body: data
    })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                alert(data.errors)
            }
            else {
                console.log(data)
            }
        });
}
export default submitFile;