let input = document.getElementById('input');
let btn = document.getElementById('btn');

btn.onclick = () =>{
      for (let i = 0; i < input.value; i++) {
        let color = "";
        if (i % 3 == 0) {
            color = "red";
        } else if (i % 3 === 1) {
            color = "yellow"
        } else {
            color = "green"
        }
        if (i> 10) break;
 
        
document.write(`<div style = "width: 100px; height: 100px;
margin-bottom: 10px; background-color: ${color}"
class = "square"></div>`)

    }
}
