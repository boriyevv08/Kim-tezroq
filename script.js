let btn = document.querySelector(".btnjs")
let inp = document.querySelector(".inp")
let personSpn = document.querySelector(".person")
let cycleSpn = document.querySelector(".cycle")
let vehicleSpn = document.querySelector(".vehicle")
let planeSpn = document.querySelector(".plane")

let person = 3.6
let cycle = 20.1
let vehicle = 70
let plane = 800


btn.addEventListener("click", function(e){
   personSpn.textContent = soat(inp.value, person) + 'soat'
   cycleSpn.textContent = soat(inp.value, cycle) + 'soat'
   vehicleSpn.textContent = soat(inp.value, vehicle) + 'soat'
   planeSpn.textContent = soat(inp.value, plane) + 'soat'
})

function soat(value, tezlik){
   return(value/tezlik).toFixed(2)
}