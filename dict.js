const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result=document.getElementById("result");
const sound = document.getElementById("sound");
const searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("click",()=>{
    let inputtext = document.getElementById("inputbtn").value;
    fetch(`${url}${inputtext}`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        result.innerHTML =`
         <div class="displaytext">  
                <h3>${inputtext}</h3>
                <button id="resultbtn" onclick="PlaySound()">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[2].text}</p>
                
            </div>
            <p class="word-meaning">
            ${data[0].meanings[0].synonyms[0]},
            ${data[0].meanings[0].synonyms[1]},
            ${data[0].meanings[0].synonyms[4]}
            </p>
            <p class="example">
            ${data[0].meanings[0].definitions[0].definition}
            </p>`;

            sound.setAttribute("src",`${data[0].phonetics[0].audio}`);
      
    })
    .catch(()=>{
        result.innerHTML = `<h3 class="error">Unable to Find the Word</h3>`;
    })
});
function PlaySound(){
    sound.play();
}