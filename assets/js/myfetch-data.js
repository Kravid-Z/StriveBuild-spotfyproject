// window.onload = () => {
//     newsearch()
// }

const memorySearches = [] // This will be my memory array in live of objectsArtist searches in the same sesion. To avoid call too much the same API ¿How effective could be this?



const Card = (track) => {
    return `<p>${track.title}</p>`
}

const createCardsFor = (prev,curr)=>{
    return prev+Card(curr)
}
const newsearch = () => {
    console.log("is working?");
    fetch("https://cors-anywhere.herokuapp.com/https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9466e102ddmsh5f37d70069cdb21p12195bjsn7a02d9747f64",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => response.json()).then(eminemObject =>{
    console.log(eminemObject)
    //memorySearches.push(eminemObject) // Here I'm saving this in my memory sesion
    const innerHTML = eminemObject.data.reduce((prev,curr)=>createCardsFor(prev,curr),'')  

    console.log(innerHTML)
    
})
.catch(err => {
	console.error(err);
});
}