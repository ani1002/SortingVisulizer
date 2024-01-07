let bars = [];
const def = "#fd0081", chng = "#431f91", finished = "#557A46", selected = "yellow";

window.onload=setup();
async function setup(){
	let ars = document.getElementById("bars");
	let speed = document.getElementById('delay');
	document.getElementById('ars').innerText= ars.value;
	document.getElementById('speed').innerText= speed.value+"ms";
	if (bars.length != parseInt(ars.value)) {
		generateBars(parseInt(ars.value));
	}
	console.log(ars);
console.log(speed);
}  


function reset(){
	location.reload();
}

function generateBars(n=-1){
	bars= [];
     let container = document.getElementById("container");
   /*  n = n < 0 ? Math.random() * 20 : n; */
     for(let i=0;i<n;i++){
     	bars.push('<div class="bar" id="' + i + '" style="height:' + Math.floor(2 + Math.random() * 98) + '%"></div>');
     } 
     container.innerHTML = bars.join('');
}

function MapRange(value, in_min, in_max, out_min, out_max) {
	return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}


function Disable_The_Input(){
	let x = document.getElementsByTagName("input");
	for(let i=0;i<x.length;i++)
		x[i].disabled= true;
      return parseInt(document.getElementById("delay").value);
	
}
   function Sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


function finished_input(){
	let x = document.getElementsByTagName("bars");
	for(let i=0;i<x.length;i++){
		x[i].style.backgroundColor= finished;
	}
	 x = document.getElementsByTagName("input");
	for(let i=0;i<x.length;i++)
		x[i].disabled= false;
}



async function BubbleSort(){
   
 let delay = Disable_The_Input();
 let container = document.getElementById("container");

 for(let i=0;i<bars.length;i++){
 	let swap = false;
        for(let j=0;j<bars.length-i-1; j++){
 		let curr_id = bars[j].split('id="')[1].split('"')[0];
		let next_id = bars[j + 1].split('id="')[1].split('"')[0];
        document.getElementById(curr_id).style.backgroundColor = selected;
 		let sound = MapRange(document.getElementById(curr_id).style.height.split('%')[0],2,100,500,1000);
 		beep(100,sound,delay)
 		document.getElementById(next_id).style.backgroundColor =selected;
 		await Sleep(delay/2)
 		let a = parseInt(bars[j].split(/[:%]/)[1]);
 		let b = parseInt(bars[j+1].split(/[:%]/)[1]);
       if(a>b){
              has_swap = true;
              let t = bars[j];
              bars[j] = bars[j+1];
              bars[j+1] = t;
            container.innerHTML = bars.join('');
          }

          document.getElementById(curr_id).style.backgroundColor =selected;
          document.getElementById(next_id).style.backgroundColor =chng;
          await Sleep(delay/2)
          document.getElementById(curr_id).style.backgroundColor =def;
          document.getElementById(next_id).style.backgroundColor =def;
 	}
 	if(has_swap==false)  break;
 }
 finished_input();
}


async function SelectionSort(){

 let delay = Disable_The_Input();
 let container = document.getElementById("container");
   for(let i=0;i<bars.length;i++){
   	let swap = false;
   	let minind = i;
   	let minele_id = bars[i].split('id="')[1].split('"')[0];
   	document.getElementById(minele_id).style.backgroundColor = selected;
   	let sound = MapRange(document.getElementById(minele_id).style.height.split('%')[0],2,100,500,1000);
 		beep(100,sound,delay)
 		await Sleep(delay/2)

 		for(let j=i+1;j<bars.length;j++){
 			let next_ele = bars[j].split('id="')[1].split('"')[0];
            document.getElementById(next_ele).style.backgroundColor = chng;
 			let a = parseInt(bars[minind].split(/[:%]/)[1]);
 		let b = parseInt(bars[j].split(/[:%]/)[1]);

         if(a>b) minind = j;
         await Sleep(delay/5);
       document.getElementById(next_ele).style.backgroundColor =def;
 		}
 		let next_ele = bars[minind].split('id="')[1].split('"')[0];
          document.getElementById(minele_id).style.backgroundColor = selected;
 		await Sleep(2*delay/5);

 		let temp = bars[i];
 		bars[i] = bars[minind];
 		bars[minind] = temp;

 		 container.innerHTML = bars.join('');
 		   await Sleep(2*delay/5);

         document.getElementById(next_ele).style.backgroundColor = def;
         document.getElementById(minele_id).style.backgroundColor = def;
   }
   finished_input();
}

async function InsertionSort() {
    let delay = Disable_The_Input();
    let container = document.getElementById("container");
    for(let i=1;i<bars.length;i++){
        let j = i-1;
        let key = bars[i];
        let min_id = key.split('id="')[1].split('"')[0];
        let next_key= bars[j].split('id="')[1].split('"')[0];
         document.getElementById(min_id).style.backgroundColor =selected;
         let sound = MapRange(document.getElementById(min_id).style.height.split('%')[0],2,100,500,1000);
        beep(100,sound,delay)
        while(j>=0 && parseInt(bars[j].split(/[:%]/)[1]) > parseInt(key.split(/[:%]/)[1])) {
            document.getElementById( next_key).style.backgroundColor =selected;
            next_key = bars[j].split('id="')[1].split('"')[0];
            document.getElementById(next_key).style.backgroundColor =selected;
             await Sleep(delay)
             bars[j+1] = bars[j];
             j--;
        }
        bars[j+1] = key;
        container.innerHTML = bars.join('');
        document.getElementById(min_id).style.backgroundColor =selected;
        document.getElementById(next_key).style.backgroundColor =chng;
        await Sleep(3*delay/2);

         document.getElementById(min_id).style.backgroundColor =def;
         document.getElementById(next_key).style.backgroundColor =def;
}
finished_input();
 

}







