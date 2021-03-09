const newsearch = () => {
    console.log("is working?");
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9466e102ddmsh5f37d70069cdb21p12195bjsn7a02d9747f64",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then(response => response.json()).then(eminemObject =>{
    
})
.catch(err => {
	console.error(err);
});
}