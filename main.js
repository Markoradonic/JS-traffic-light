function ponavljanje() {

    var boje = document.getElementsByClassName('boje');
    boje[0].style.background = 'red';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'gray';

    function postaviZutu() {
        boje[1].style.background = 'yellow';

    };

function PostaviZelenu() {
    boje[0].style.background = 'gray';
    boje[1].style.background = 'gray';
    boje[2].style.background = 'green';

};

setTimeout(postaviZutu, 5000); // sabirali smo ovo vreme 
setTimeout(PostaviZelenu, 7000); // dobili smo tu razliku od 2s 
var x = setInterval(ponavljanje, 15000); // 8s traje zeleno
};

ponavljanje();