import SocketIO from 'src/external/socketio.js';

export function SocketSingelton() {
  let socket;
  
  function create(){
    lively.prompt("Server Adress", "http://localhost:8080").then(a => {
      if(a === undefined) return;
      socket = SocketIO(a);
      // TODO make input
      socket.emit('options',  {
        connectString: 'localhost:1521/MLEEDITOR',
        user: 'system',
        password: 'MY_PASSWORD_123'
      });
    })
  }
  
  return !socket ? create() : socket ;
}