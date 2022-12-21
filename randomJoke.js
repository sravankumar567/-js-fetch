 let textEl=document.getElementById('TextContent');
 let buttonEL=document.getElementById("click");
 function getRAndomJoke(){



  let options={
    method:"GET"
  }

  let url="https://apis.ccbp.in/jokes/random";


 fetch(url,options)
 .then(function(response){
    return response.json();
 })

 .then(function(jsonData){
    let randomData=jsonData.value;
    console.log(jsonData)
    textEl.textContent=randomData;

 })
 
}
buttonEL.addEventListener('click',getRAndomJoke);