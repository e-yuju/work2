var Modal = document.getElementById('myModal');
var Btn = document.getElementById('myBtn');
var Span = document.getElementById('close');

Btn.onclick = function() {
    Modal.style.display = 'block';
}
Span.onclick = function() {
    Modal.style.display = 'none';
}
window.onclick = function(event) {
    if(event.target == Modal) {
        Modal.style.display = 'none';
    }
} 