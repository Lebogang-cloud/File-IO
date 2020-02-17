let Visitor = require("../src/index");
let romeo = new Visitor(
  "Romeo",
  18,
  "28/02/2020",
  "15:30",
  "visitor was kind",
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

describe("the visitor function", function() {
  it("check if the save function is defined", function() {
    expect(romeo.save).toBeDefined();
    expect(yoki.save).toBeDefined();
  });

  it("checks if the information has been saved to a json file ", function() {
    expect(romeo.fullname).toBe("Romeo");
    expect(romeo.age).toEqual(18);
    expect(romeo.comments).toEqual("visitor was kind");
  });
  it("checks if the information has been saved to a json file ", function() {
    expect(yoki.fullname).toBe("Thuli");
    expect(yoki.age).toEqual(20);
    expect(yoki.comments).toEqual("Visitor was amazing");
  });

  it("checks if the load function is defined ", function() {
    expect(romeo.load).toBeDefined();
    expect(yoki.load).toBeDefined();
  });
});
