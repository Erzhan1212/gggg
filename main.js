let i = 0;
function change() {
  let doc = document.getElementById("div");
  let color = [
    "aqua",
    "red",
    "orange",
    "yellow",
    "pink",
    "blue",
    "indigo",
    "blueviolet",
  ];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
let inst = setInterval(change, 1000);
document.getElementById("div").onclick=function(){  setTimeout(() => {
    clearInterval(inst);
  });
  console.log("Вы остановили мигание");}

   setTimeout(() => {
    clearInterval(inst);  console.log("Время вышло")
  }, 10000);

const BASE_URL = "https://4f45b312fd699b94.mokky.dev/colors";


const getColor = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    let data = await response.json();
    data = data.flat()
    
    console.log(data);
    renderColor(data);
  } catch (error) {
    console.log(error);
  }
};


const renderColor = (newArray = []) => {
    let n= newArray.length-1;
  setInterval(()=>{  
    const divColor=document.getElementById("second-div")
    divColor.style.backgroundColor=newArray[n];
    if(n<0){n=newArray.length-1}
    n--
  },1000)
    

};
getColor();
