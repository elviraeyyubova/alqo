class Message {
    constructor(sender, content) {
      this.sender = sender;
      this.date = gettime();
      this.content = content;
    }
  
    toString() {
      return `${this.date} ${this.sender}: ${this.content}`;
    }
  }
  
  class Messenger {
    constructor() {
      this.history = [];
    }
  
    show_history() {
      this.history.forEach((message) => {
        console.log(message.toString());
      });
    }
  
    send(author, text) {
      const message = new Message(author, text);
      this.history.push(message);
    }
  }
  
  function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  }
  
  let messenger = new Messenger();
  messenger.send("Resad", "double click on my computer");
  messenger.send("Elvira", "how is click your computer from my computer");
  messenger.show_history();