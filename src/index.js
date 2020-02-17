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
      err => {
        if (err) {
          throw ("error", +err);
        } else {
          console.log("file written");
        }
      }
    );
  }

  load() {
    fs.readFile("visitor_" + this.fullname + ".json", (err, jsonString) => {
      if (err) {
        throw ("error reading file", +err);
      } else {
        try {
          const data = JSON.parse(jsonString);
          console.log(data);
        } catch (err) {
          console.log("error parsing JSON", err);
        }
      }
    });
  }
}
module.exports = Visitor;
