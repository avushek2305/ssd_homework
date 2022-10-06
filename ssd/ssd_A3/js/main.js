
const occ = new Map();
for(let i = 0; i<10; i++){
  occ.set("d"+toString(i+1),0);
}



//if occ[i] = 0 unoccupied
//if occ[i] = 1 occupied by vulture 
//if occ[i] = 2 occupied by 

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("circle", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("circle");
    if(occ.has(data) && occ.get(data) == 0)
    {
      ev.target.appendChild(document.getElementById(data));
      
      
    }
  }
