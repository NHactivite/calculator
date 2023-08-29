let string=" ";
let braket=1;
let buttons= document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{

    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "="){

            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="Ac"){

            string="";
            document.querySelector("input").value=string;

        }
        else if(e.target.innerHTML=="( )"){
         let prac;
         if(braket){
             prac="(";
            braket=0;
         }else{
            prac=")";
            braket=1;
         };
         
         string= string+` ${prac}`;
         document.querySelector("input").value=string;

        }
        else  if(e.target.innerHTML=="%"){
            let prac=100;
            string= string/` ${prac}`;
            document.querySelector("input").value=string;                   
    }
    else if(e.target.innerHTML=="x"){

        string=string.slice(0,-1);
        document.querySelector("input").value=string;

    } else if(string==""&&e.target.innerHTML=="."){
         
        string+=`0${e.target.innerHTML}`;
        document.querySelector("input").value=string;


    }
     else{
            console.log(e.target);
            string+=e.target.innerHTML;
            document.querySelector("input").value=string;
                }
            }
    ) }         


);