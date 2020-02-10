let fs = require("fs");

class Visitor {
  constructor(fullname, age, dateOfVisit, timeOfVisit, comments, assistedBy) {
    this.fullname = fullname;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVisit = timeOfVisit;
    this.comments = comments;
    this.assistedBy = assistedBy;
  }
  // Storing data:
   save() {
    fs.writeFile(
      "visitor_" + this.fullname + ".json",
      "utf8",
      JSON.stringify(this, null, 4),
      function(err) {
          if (err){
              throw err
          }
      }
    );
  }

 load() {
    fs.readFile("visitor_" + this.fullname
    + ".json", "utf8",
    function(
      err,
      data
    ) { 
        if (err){
            throw err
        } else {
            console.log(data)
        }
    });
  }
}

let romeo = new Visitor("Romeo");

console.log(romeo.save());
console.log(romeo.load());
