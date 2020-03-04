/**have a song list to be put in array */

//create an array and initialize
let songs = ['Alive', 'Dead', 'Blackbird', 'Friday', 'On the Rocks'];
//wanna loop through the songs list 

let paragraph;
for(let i = 0; i< songs.length; i++) {
    //create a p elelment for each song to conatin it
    paragraph = document.createElement('p');
    paragraph.setAttribute('id', `song${i + 1}`);
    paragraphText = document.createTextNode(`${songs[i]}`);
    paragraph.appendChild(paragraphText);
    let div = document.getElementById('container');
    div.appendChild(paragraph);
    //document.getElementById('container').appendChild(paragraph); //writtem differently, could have been declared a variable let first
    //actually i did above and commented the shor version

}

let ul = document.createElement('ul');
for(let i = 0; i< songs.length; i++) {
    //create a p elelment for each song to conatin it
    li = document.createElement('li');
    li.setAttribute('id', `song${i + 1}`);
    liText = document.createTextNode(`${songs[i]}`);
    li.appendChild(liText);
    //let div = document.getElementById('container');
    //div.appendChild(li);
    li.appendChild(liText);
    ul.appendChild(li);
    //document.getElementById('container').appendChild(paragraph); //writtem differently, could have been declared a variable let first
    //actually i did above and commented the shor version

}
document.getElementById('container').appendChild(ul);