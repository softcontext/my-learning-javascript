var name = "Tom";
var age = 33;
var address = 'Seoul Korea';

var tag = "\n" +
"  <div>\n" +
"    <h3>"+name+"<mark>"+age+"</mark></h3>\n" +
"    <p>"+address+"</p>\n" +
"  </div>\n" +
"\n";
console.log(tag);

var html = `
  <div>
    <h3>${name} <mark>${age}</mark></h3>
    <p>${address}</p>
  </div>
`;

console.log(html);
/*
  <div>
    <h3>Tom <mark>33</mark></h3>
    <p>Seoul Korea</p>
  </div>
*/