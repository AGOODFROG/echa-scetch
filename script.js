const game = {
    penColor: undefined,
    gridSize: undefined,// will be defined
  
    fillRow: function(widthOfGrid, target){
        

        let i = 0
        while(i<widthOfGrid){
            let gridCell = document.createElement("div")
            
            let Cell;
            Cell = gridCell
          
            Cell.setAttribute("id",i.toString())
            
            Cell.setAttribute("class","gridCell")
            Cell.style.width = this.gridSize + "vh"

            gridCell.addEventListener("mouseover", function(){
                //gridCell.setAttribute("style",`background-color:${game.penColor}`)
                let red = document.querySelector("#red").value
                let green = document.querySelector("#green").value
                let blue = document.querySelector("#blue").value
                console.log(red,green,blue)
                
                game.penColor = `rgb( ${red}, ${green}, ${blue})`
               
                gridCell.style.backgroundColor = `${game.penColor}`
            })
            target.append(Cell)
       
            i++

        }
    },
    makeRows: function(width){
        if(width < 15) this.gridSize = 6
        else if(width < 30) this.gridSize = 3
        else if(width < 60) this.gridSize = 1.5
        else if (width < 90) this.gridSize = 1
        else this.gridSize =0.75

        document.querySelector(".content").innerHTML = ""

        let i = 0
        while(i<width){
            const content = document.querySelector(".content")
            let row = document.createElement("div")
            
            let Cell;
            Cell = row
           
          
            Cell.setAttribute("id",i.toString())

            Cell.setAttribute("class","row")
        
            Cell.setAttribute("id",String(i))

            //test TODO add logic
            //Cell.setAttribute("style","height: 1vh;")
            Cell.style.height = this.gridSize + "vh"
            //test
            
         
            game.fillRow(width, row)
        
            content.appendChild(Cell)
            i++
        }
        
    },

   

}
let slider = document.querySelector(".slider")
let input = undefined
slider.oninput = function(){
    input = this.value
    document.querySelector(".numberSpan").textContent = String(this.value)
    game.makeRows(input)
}
game.makeRows(20)


 



