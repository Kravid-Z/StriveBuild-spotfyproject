// https://prox-cors-apis.herokuapp.com/
console.log("Fetchchart.js connected");

const fetchchartHomeP = ()=> {
    fetch("https://prox-cors-apis.herokuapp.com/https://api.deezer.com/chart/0")
    .then(response => response.json())
    .then(chart=>{
        // console.log(chart)
        const sectionTitles = Object.keys(chart) // 0: "tracks" 1: "albums" 2: "artists" 3: "playlists" 4: "podcasts"
        sectionTitles.shift() //Deleting tracks listTitle
        // console.log(sectionTitle);
        
        // const renderSection = (sectionTitles, chart) => {
        //     return `<section id="section-${idx + 1}" class="cards-section mb-1 mb-md-5">
        //                 <h4 class="section-name text-white font-weight-bold mb-2 display-5 pl-2">${sectionName}</h4>
        //                 <div class="d-flex flex-md-wrap row-albums mb-1">
        //                     <div class="px-2 mb-3">
        //                         <div class="card-custom shadow animate__animated animate__faster">
        //                             <div class="card-image-wrapper d-flex flex-column p-2">
        //                                 <img src="${album.coverUrl}" class="img-fluid rounded shadow-lg" alt="" />
        //                                 <a href="#" class="card-play-btn align-self-end "><i class="fas fa-play-circle "></i></a>
        //                             </div>
        //                             <div class="card-body-custom px-2">
        //                                 <h6 class="card-title-custom text-white text-truncate">${album.title}</h6>
        //                                 <p class="card-text-custom text-muted">random text</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </section>`
        // }

    })
}

