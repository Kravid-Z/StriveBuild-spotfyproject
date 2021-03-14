console.log("Js Connected, fecthingAlbumOnclick => Card");

const fetchAlbum =()=>{
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/75621062")
    .then(response=> response.json())
    .then(album=> {
      console.log(album)
      showAlbumPage(album)
      }
      )
      
}



// album => parentObject

// album.tracks = childObject

// tracks.data = array of songs

/* Object Track inside array
artist: {id: 412, name: "Queen", tracklist: "https://api.deezer.com/artist/412/top?limit=50", type: "artist"}
duration: 25
explicit_content_cover: 0
explicit_content_lyrics: 0
explicit_lyrics: false
id: 568120922
link: "https://www.deezer.com/track/568120922"
md5_image: "8b8fc5d117f9357b79f0a0a410a170e8"
preview: "https://cdns-preview-b.dzcdn.net/stream/c-bcf686b9b7b146a3ce3d160cbfa2d1b5-7.mp3"
rank: 319172
readable: true
title: "20th Century Fox Fanfare"
title_short: "20th Century Fox Fanfare"
title_version: ""
type: "track"*/


//----------------------------------->

 // const trackListArray = album.tracks.data
  // const track = trackListArray[0]
  // const renderSong = (track)=>{
  //   return `<tr>
  //   <th scope="row"><i class="fas fa-music"></i></th>
  //   <td><img src="${track.md5_image}"/></td>
  //   <td> ${track.title_short} <br> <h6 style="font-size: 10px;" class="text-muted">${track.title}</h6></td>
  //   <td>${track.duration} s</td>
  //   <td> 
  //     <a href="${track.preview}">
  //       <i class="fas fa-play"></i>
  //     </a>
  //   </td>
  //   <td>
  //     <small>${track.rank}</small>
  //   </td>    
  //   </tr>`
  // }
  // console.log(renderSong(track))