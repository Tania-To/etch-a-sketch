const ROWS = 16;
const COLS = 16;

let grid= document.getElementById('container');
const gridButton=document.getElementById('btn');

const rangeSelector=document.getElementById('myRange');
const gridItems = document.querySelectorAll('.row');
const colors = document.querySelectorAll('.buttons');
let newSize = document.querySelector('.slider');

let output = document.getElementById("mysize");
output.innerHTML = rangeSelector.value +"x"+ rangeSelector.value;

rangeSelector.oninput = function() {
  output.innerHTML = this.value +"x"+this.value ;
}

function createGrid(m,n)
{
    let y=0;
    let x=400/m;
    for(let i=0; i<m; i++)
    {
        let col = document.createElement('div');
        col.classList.add('col');
        col.style.width=`${x}px`;
        col.style.height='400px';

        for(let j=0; j<n; j++)
        {
            let row = document.createElement('div')
            row.classList.add('row');
            row.style.height=col.style.width;
            col.appendChild(row);
        }
        grid.appendChild(col);
    } 
    const gridItems = document.querySelectorAll('.row');
    gridItems.forEach((item) => {
        item.addEventListener('mouseenter', () => {
          item.style.backgroundColor = 'black';
        });
       /*item.addEventListener('mouseleave', () => {
          item.classList.remove('hovered');
        });*/
      });

      colors.forEach((el)=>{
        el.addEventListener('click', changeColor)
        
    });
}

createGrid(ROWS,COLS);

 function modifiedGrid()
 {
    
    //const grSize = prompt("Enter grid size: ");
    
    if(rangeSelector.value!=null&&rangeSelector.value.length>0){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild)
    }
    console.log(rangeSelector.value);
    createGrid(rangeSelector.value, rangeSelector.value);
    }
    const gridItems = document.querySelectorAll('.row');
   
    gridItems.forEach((item) => {

        item.addEventListener('mouseenter', () => {
      item.style.backgroundColor ='black';
    });
   /*item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered');
    });*/
  });

  colors.forEach((el)=>{
    el.addEventListener('click', changeColor)
    
});

 }  
 let items = document.querySelectorAll('.col');
 let items2 = document.querySelectorAll('.row');
const buttons = document.querySelector('#btn');

//buttons.addEventListener('click', modifiedGrid);
newSize.addEventListener('input', modifiedGrid);
// define a reusable function
const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  
  const color1=document.getElementById('blacks');
  const color2 = document.getElementById('rgbs');
  const color3 = document.getElementById('blues');

let color=this.id;
function changeColor()
{
    const gridItems = document.querySelectorAll('.row');
    if(this.id==='blacks')
    {
        gridItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              item.style.backgroundColor = 'black';
            });
        });
    }
    else if(this.id==='blues')
    {
        gridItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              item.style.backgroundColor = 'blue';
            });
        });
        
    }
    else {
        gridItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              item.style.backgroundColor = randomRgbColor();
            });
        });
    }

}

colors.forEach((el)=>{
    el.addEventListener('click', changeColor)
    
});
function clearAll()
{
    const gridItems = document.querySelectorAll('.row');
    gridItems.forEach((item) => {
          item.style.backgroundColor = "";
        
    });
}

let clear = document.getElementById('clear');
clear.addEventListener('click', clearAll);

   /*item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered');
    });*/
 
    /*const colorButton = document.getElementById("color-button");
    const colorDisplay = document.getElementById("color-display");
    
    colorButton.addEventListener("click", function() {
      const red = getRandomValue();
      const green = getRandomValue();
      const blue = getRandomValue();
      
      const color = `rgb(${red}, ${green}, ${blue})`;
      colorDisplay.style.backgroundColor = color;
    });
    
    function getRandomValue() {
      return Math.floor(Math.random() * 256);
    }*/
