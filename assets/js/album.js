function showAlbumPage(object) {
  jsEntryPoint.innerHTML = `
          <div class="container mt-4 animate__animated animate__faster" style="background-color: #131313;">
            <div class="row">
              <div class="col-lg-4 col-md-12 font-weight-light" style="border: black;">
                <div class="" style="border: black;" >
                  <img src="${object.cover}" class="card-img-top" alt="...">
                  <div class="card-body text-center text-light" style="background-color: #131313;">
                    <h5 class="card-title">${object.title}</h5>
                    <h6 class="text-muted" style="font-size: 13px;">${object.label}</h6>
                    <a href="#" class="btn btn-success rounded-pill btn-block mt-4 mb-2">Play</a>
                    <div class="card-text">
                      <h6 class="text-light text-center text-muted mb-4"> <span>Date: ${object.release_date}</span> <span>Songs: ${object.nb_tracks}</span> </h6>
                      <span class="text-light text-muted"> <i class="fas fa-heart"></i> ...</span>
            
                    </div>
                  </div>
                </div>
              
              </div>
              <div class="col-lg-8">
                  <table class="table table-borderless text-light" style="font-size: 14px;">
                    <tbody id="trackList">
                      
                    </tbody>
      
              </div>
      
            </div>
      
          </div>
      

  `;
  const container = document.querySelector(
    '.container.mt-4.animate__animated.animate__faster'
  );
  container.classList.remove('animate__fadeInDown');
  container.classList.add('animate__fadeInDown');

  const trackListArray = object.tracks.data
  const tracklistHtml = document.getElementById("trackList")
  const renderSong = (track)=>{
    return `<tr class="d-flex align-items-center justify-content-between">
    <td><i class="fas fa-music"></i></td>
    <td><img src="https://via.placeholder.com/50"/></td>
    <td style="width:300px;"> ${track.title_short} <br> <h6 style="font-size: 10px;" class="text-muted">${track.title}</h6></td>
    <td style="width:60px;">${track.duration} s</td>
    <td> 
      <a href="${track.preview}">
        <i class="fas fa-play"></i>
      </a>
    </td>
    <td style="width:100px;">
      <small>${track.rank}</small>
    </td>    
    </tr>`
  }
    const renderAllSongs = (prev,track) =>{
    return prev + renderSong(track) 
  }

  const allListAlbum = trackListArray.reduce((prev,track)=>renderAllSongs(prev,track),"")

  tracklistHtml.innerHTML = allListAlbum
}

// Sad Api Cravers II (Delux Edition <br> 2011 Remaster)
