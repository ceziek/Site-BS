var elems = document.getElementsByClassName('panel-item');
var contents = document.getElementsByClassName('panel-content');

for (var i = 0; i < elems.length; i++) {
    elems[i].onclick = function () {
        for (var i = 0; i < contents.length; i++) {
            elems[i].classList.remove('active');
            contents[i].classList.remove('active');
        }
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active');
    }
}