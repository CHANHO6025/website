var menu = document.getElementById('MILKTEA');
var qna = document.getElementById('qna');
var contents = document.getElementById('content');
var del =document.getElementById('delete');


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
    <h2>QUESTION & ANSWER</h2>  
  
    <input type="text" id="text_id" value="ASK THIS HERE!">
    <button onclick="ASK()">ASK!</button>
    
    <p id='GFG'></p>
    `
}
function ASK() {  
    var txt = document.getElementById("text_id").value;
    document.getElementById("GFG").innerHTML = txt;
    
}