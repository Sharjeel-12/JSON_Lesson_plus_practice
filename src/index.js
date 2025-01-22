import "./Style.css";
async function populate(){
    const request=new Request("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");
    const reponse= await fetch(request);
    let MyJSON= await reponse.json();
   populateHeader(MyJSON);
   populateBody(MyJSON);

 }
let Header=document.querySelector("header");
let Section=document.querySelector("section");
function populateHeader(MyJSON){
    let main_heading=document.createElement("h1");
    let para=document.createElement("p");
    para.innerHTML=`Home Town: ${MyJSON.homeTown} // Formed: ${MyJSON.formed}`;
    main_heading.innerHTML=MyJSON.squadName;
    Header.appendChild(main_heading);
    Header.appendChild(para);

}
function populateBody(MyJSON){
    MyJSON["members"].forEach((member)=>{
let div=document.createElement("div");
let heading=document.createElement("h2");
let power_heading=document.createElement("p");
 power_heading.innerHTML="Super Powers"
let secret_p=document.createElement("p");
let age_p=document.createElement("p");
let powers_ul=document.createElement("ul");
let powers=member.powers;
powers_ul.appendChild(power_heading);
for(let i=0;i<powers.length;i++){
    let li=document.createElement("li");
    li.setAttribute("class","power");
    li.innerHTML=powers[i];
    powers_ul.appendChild(li);
}

secret_p.innerHTML=`Secret Identity: ${member.secretIdentity}`;
age_p.innerHTML=`Age: ${member.age}`
heading.innerHTML=member.name;
div.appendChild(heading);
div.appendChild(secret_p);
div.appendChild(age_p);
div.appendChild(powers_ul);
div.setAttribute("class","member");

Section.appendChild(div);
    })
    

}



populate()