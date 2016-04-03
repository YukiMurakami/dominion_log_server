var socket = io.connect();

socket.on('message:receive', function (data) {
    $("div#chat-area").prepend("<div>" + data.message + "</div>");
    var file = fs.OpenTextFile("text.txt", 2, true, -1);
    file.Write(data.message);
    file.Close();
});

function send() {
    var msg = $("input#message").val();
    $("input#message").val("");
    socket.emit('message:send', { message: msg });
}
