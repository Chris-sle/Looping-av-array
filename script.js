//M
const app = document.getElementById('app');
const purseStuff = ['scrounchy', 'pen', 'cellphone', 'wallet', 'lipstick', 'eyeliner'];

//V
updateView()
function updateView() {
    app.innerHTML = /*HTML*/ `
        <button onclick="seeWhatsInPurse()">
            See content of purse!    
        </button>
        <div id="content">a</div>
    `;
}
//C
function seeWhatsInPurse() {
    const content = document.getElementById('content');
    let contentText = '';

    for (let i = 0; i < purseStuff.length; i++) {
        console.log(`på runde ${i} i loopen ser jeg: ${purseStuff[i]}`);
        contentText += `på runde ${i} i loopen ser jeg: ${purseStuff[i]} <br>`;
    }

    content.innerHTML = contentText;
}
