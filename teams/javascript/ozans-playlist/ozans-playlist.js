// @ts-check
//
// The line above enables type checking for this file. letious IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */

export function removeDuplicates(playlist) {  
  const set = new Set(playlist);
  const new_Playlist = [...set]
  return new_Playlist
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return playlist.includes(track)
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  playlist.push(track)
  const set = new Set(playlist);
  const new_Playlist = [...set]
  return new_Playlist
  
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  if(playlist.includes(track)){
    playlist.splice(playlist.indexOf(track), 1);
    return playlist
  }
  else{
    return playlist
  }
 
  
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */


export function listArtists(playlist) {
  if(playlist.length == 0){   // se a array for vazia retorne []
    return []
  }
  else{
    let nomes_completos = []                       //criando uma lista para receber os nomes
    for(let i=0;i<playlist.length; i++){                            //percorrendo cada item da playlist
      let array1 =playlist[i].slice(playlist[i].indexOf("-")+ 2)    //eliminando todos os caracteres antes do item "- " de cada item da playlist
      
      nomes_completos.push(array1)                                 // adicionando a lista construindo uma array composta por nomes completos      
    }
    return removeDuplicates(nomes_completos)                      //removendo nomes duplicados através da função removeDuplicates()
  }
  
}


