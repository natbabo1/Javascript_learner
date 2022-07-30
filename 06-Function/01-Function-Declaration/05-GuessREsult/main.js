// const sender = "Matt";

// function sendTo(from, to) {
//   console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, "Sarah"); // log "From Matt to Sarah"
// sendTo(null); // log "From null to undefined"

const sender = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // log "From CC to Max"
sendTo("Ben", "Jay"); // log "From Jay to Ben"