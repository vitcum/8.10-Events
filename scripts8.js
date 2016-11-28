var list = document.getElementById('Lista')
	add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
	list.innerHTML += '<li>item ' + list.childElementCount + '</li>';
});