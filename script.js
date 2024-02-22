const game = {
    fillRow: function(widthOfGrid, target){
       

        let i = 0
        while(i<widthOfGrid){
            let gridCell = document.createElement("div")
            
            let Cell;
            Cell = gridCell
            console.log(Cell)
            Cell.setAttribute("id",i.toString())

            Cell.setAttribute("class","gridCell")
        
           target.append(Cell)
           console.log(document.querySelector("div"))
            i++

        }
    },
    makeRows: function(width){
        let i = 0
        while(i<width){
            const content = document.querySelector(".content")
            let row = document.createElement("div")
            
            let Cell;
            Cell = row
           
          
            Cell.setAttribute("id",i.toString())

            Cell.setAttribute("class","row")
            console.log()
            Cell.setAttribute("id",String(i))
            
         
            game.fillRow(width, row)
        
            content.appendChild(Cell)
            i++
        }
    }
}
game.makeRows(16)






