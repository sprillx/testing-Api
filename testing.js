const api = 'https://brawlhalla.fly.dev/v1/legends/name?legend_name=cassidy'


let searchBar = document.getElementById('searchBar').value





 function testingData(){
    
    let searchBar = document.getElementById('searchBar').value
    console.log(searchBar)
    fetch(`https://brawlhalla.fly.dev/v1/legends/name?legend_name=${searchBar}`)
    .then( (response) => response.json())
    .then( data => {
         console.log(data)
    })
    
}