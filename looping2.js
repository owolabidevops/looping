const cuts=['chuck','brisket','shank','short rib'];
//regular for loop
//for (let index = 0; index < cuts.length; index++) {
  //  const element = cuts[index];
  //  console.log(element);
    
//}
 //cuts.forEach((cut)=>{
//console.log(cut);

 //});
 //for(const index in cuts){
  //   console.log(cuts[index]);
 //}


 //Array.prototype.shuffle=function(){
   //  var i=this.length,j,temp;
   //  if(i==0) return this;
    // while(--i){
     //    j=math.floor(math.random()*(i+1));
      //   temp=this[i]
       //  this[i]=this[j];
       //  this[j=temp]
    // }
     //return this;
 //};
 for(const cut of cuts){
     
     if(cut==='chuck'){
         continue;
     }
     console.log(cut);
 }
