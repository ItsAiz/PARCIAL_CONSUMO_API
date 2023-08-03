const API_URL = 'http://api-dishes.verce.app'
function loadDishes(){
    return new Promise((resolve,reject)=>{
        fetch(`${API_URL}/`)
            .then(resp => resp.json())
            .then(resp => resolve(resp))
            .catch( err => reject(err))
    })
}

const loadData = ()=>{
    const id = document.getElementById('idAuthor').value    
    const name = document.getElementById('nameAuthor').value    
    const birthday = document.getElementById('birthday').value    

    const data = {"id":`${id}`, "name":`${name}`, "birthday":`${birthday}`}

    return JSON.stringify(data)
}

document.getElementById('btnSend').addEventListener('click',()=>{
    fetch(`${API_URL}/post`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: loadData()
    }).then( resp => resp.json())
        .then( resp => {
            if( resp.message ){
                alert(resp.message)
            }else{
                alert('Noooo')
            }          
        })
        .catch(err => {
            alert(`Error ${err}`)
        })
})