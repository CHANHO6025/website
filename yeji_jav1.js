var menu = document.getElementById('COFFEE');
var qna = document.getElementById('Q&A');
var contents = document.getElementById('content');
var del = document.getElementById('delete');

menu.onmouseover = function() {
menu.style.color = 'black'
menu.style.cursor = 'pointer'
}
menu.onmouseout = function() {
menu.style.color = 'grey'
}
menu.onclick = function() {
contents.innerHTML = `
<p>
<h5>menu 1</h5>
<h5>menu 2</h5>
<h5>menu 3</h5>
</p>
`
}

del.onclick = function() {
contents.innerHTML = ''
}

qna.onmouseover = function() {
qna.style.color = 'black'
qna.style.cursor = 'pointer'
}
qna.onmouseout = function() {
qna.style.color = 'grey'
}
qna.onclick = function() {
contents.innerHTML = `
<div id="board">
empty
</div>
<p>question</p><input type="text" id="question">
<button id="write">write</button>
<script type="text/javascript">
window.onload = function() {
var write = document.getElementById('write')
var board = documnet.getElementById('board')
write.onclick = function() {
board.innerHTML = 'test'
}
}

</script>
`
}