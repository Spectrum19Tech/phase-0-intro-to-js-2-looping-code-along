const names = ["Desiree", "Hunter", "Logan"];

function writeCards(names, event) {
    const notes = [];

    for (let i = 0; i < names.length; i++) {
        notes.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return notes;
}

function countDown(num) {
    for (let i = num; i > -1; i--) {
      console.log(i);
    }
  }