let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link="collision.json"
info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

   for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
     build += `<div class="fitted card">
     <h3>${collison.type}</h3>
                 <hr>
                 <p>${crash_date}</p>
                 <p>${number_of_persons_injured}</p>
                 <p>${number_of_persons_killed}</p>
                 <hr>
                 <p>${collision_id}</p>
                 <hr>
                 <p>${on_street_name}</p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByStreet(){
  let output = document.getElementById("output");
  let street = document.getElementById("street").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    if(complaint.street == street){
      build += `<div class="fitted card">
                   <h3>${collison.type}</h3>
                 <hr>
                 <p>${crash_date}</p>
                 <p>${number_of_persons_injured}</p>
                 <p>${number_of_persons_killed}</p>
                 <hr>
                 <p>${collision_id}</p>
                 <hr>
                 <p>${on_street_name}</p>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}