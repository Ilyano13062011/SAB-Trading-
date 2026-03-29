let chat = [];

function postMessage() {
    let user = document.getElementById("username").value || "Anoniem";
    let msg = document.getElementById("message").value;
    let img = document.getElementById("image").value;

    if(msg === "" && img === "") return;

    let chatBox = document.getElementById("chatBox");

    let html = `<p><strong>${user}:</strong> ${msg}`;
    if(img) html += `<br><img src="${img}" width="150">`;
    html += `</p>`;

    chatBox.innerHTML += html;
    chatBox.scrollTop = chatBox.scrollHeight;

    document.getElementById("message").value = "";
    document.getElementById("image").value = "";
}
