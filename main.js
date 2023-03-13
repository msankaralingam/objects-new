/*let mobiles ={
	brand:"asus",
	model:"max pro",
	color:{
		yellow:45,
		red:65,
		blue:35,
	}
}
console.log(mobiles);
console.log(mobiles.color);
console.log(mobiles.color.blue);
console.log(Object.values(mobiles));
console.log(Object.entries(mobiles));
console.log(Object.keys(mobiles));*/


let mobiles={
	brand:"vivo",
	model:"ace",
	color:{
		yellow:30,
		red:40,
		blue:50,
	},
	welcome(){
		var msg=this.brand;
		console.log("hello"+msg);
		//return msg;
		
	      },
		  rate:"17000",
		}
	console.log(mobiles);
	console.log(mobiles.color);
console.log(mobiles.color.blue);
console.log(Object.values(mobiles));
console.log(Object.entries(mobiles));
console.log(Object.keys(mobiles));


var b=[1,2,3,4,5,6];
  b.forEach (function(e,r,d){
	console.log(d);
})

for(e of b){
	console.log(e);
}

for(b in e){
	console.log(e);
}
