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
      JSON.stringify(this, null, 4),
      (err) => {
        if (err) {
          console.log("error", err);
        } else {
          console.log("file written");
        }
      }
    );
  }

  load() {
    fs.readFile("visitor_" + this.fullname + ".json", "utf-8", (err, jsonString) => {
      if (err) {
        console.log("error reading file", err)
     
      } else {
        try{
       const data = JSON.parse(jsonString);
        console.log(data);
      }catch(err){
        console.log("error parsing JSON", err)
      }
    }
    });
  }
}

let romeo = new Visitor(
  "Romeo",
  18,
  "28/02/2020",
  "15:30",
  "Visitor was rather cray-cray",
  "Teboho"
);

let yoki = new Visitor(
  "Thuli",
  20,
  "25/02/2020",
  "14:00",
  "Visitor was amazing",
  "Thabo"
);

romeo.save();
yoki.save();
yoki.load();
romeo.load();

module.exports = Visitor;
