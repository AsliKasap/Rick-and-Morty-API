
const createElement = (elements,image) => {
  const charactersEll=document.querySelector(".characters");  
for(let i=0;i<elements.length;i++){
const divEll=document.createElement("div");
divEll.className="char-block";
const nameEll=document.createElement("p");
const imageEll=document.createElement("img");
imageEll.src=image[i];
nameEll.textContent=elements[i];
divEll.appendChild(nameEll);
divEll.appendChild(imageEll);
charactersEll.appendChild(divEll);
}


}

async function getCharacters(){
    const characters = await fetch(`https://rickandmortyapi.com/api/character`)
    const charactersJson= await characters.json();
    allCharactersID=Object.values(charactersJson.results);
    
    const charID=allCharactersID.map((char)=>{
       let arrChar=[];
        arrChar=char.name;
        return arrChar;
    });
    const charImage=allCharactersID.map((char)=>{
        let arrChar=[];
         arrChar=char.image;
         return arrChar;
     });

   createElement(charID,charImage);

}

getCharacters();
