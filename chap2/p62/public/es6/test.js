'use strict';

const sentences = [
  {subject:'JavaScript', verb:'is', object:'great'},
  {subject:'I', verb:'am', object:'a king'},
];

function say({subject, verb, object}) {
  console.log(`${subject} ${verb} ${object}`);
}

for (let s of sentences) {
  say(s);
}