let Ul = document.getElementById("lists");
  let Btn1= document.getElementById("btn");
      Btn1.addEventListener("click",function Addelement(){
  let Inputvalue= document.getElementById("input").value;
  let Text=document.createTextNode(Inputvalue);
      let Li =document.createElement("li");
      let Label = document.createElement("label");
    Ul.appendChild(Label); 
	Li.appendChild(Label);
   Label.appendChild(Text);
   Ul.appendChild(Li);
 
  })
                                            