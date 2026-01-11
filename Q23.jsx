const ws = new WebSocket("ws://test");

ws.onmessage = e => console.log(e.data);
ws.onclose = () => setTimeout(connect, 1000);
