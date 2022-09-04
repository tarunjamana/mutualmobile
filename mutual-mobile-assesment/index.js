


state = {
    query:''
}


function setState(callback){
    callback();
    renderData();
}


document.getElementById('searchbox').addEventListener("keyup",function(e){
    setState(() =>{
        state.query= e.target.value;
    })
})

const getData = async (url) =>{

    try{
        let response = await fetch(url);

        return await response.json();
    }

    catch(err){
    console.log(err);
    }
}

const renderData = async () =>{
 let data = await getData("https://run.mocky.io/v3/b0f3e975-b815-4e88-8a6a-84af59fe32eb");

 let html ="";


 let response = await filteredData(data,state.query);

 console.log(response);

 response.forEach(d=>{
    let singleData = `
             <div class="restarunt">
                           <h2>${Object.values(d)[0]}</h2>
            </div>`
    
            html += singleData;

})


 let container = document.querySelector('.container');
 container.innerHTML = html;

}


function filteredData(data,query){
    let filteredData = data;

    if(state.query !==""){
        filteredData = filteredData.filter((d) =>Object.values(d)[0].toLowerCase().includes(query) )
    }

    return filteredData;
}

renderData();

