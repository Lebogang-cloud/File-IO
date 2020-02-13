let Visitor = require("../src/index");
let romeo = new Visitor(
  "Romeo",
  18,
  "28/02/2020",
  "15:30",
  "visitor",
  "Teboho"
);
let yoki = new Visitor (
    "Thuli",
    20,
    "25/02/2020",
    "14:00",
    "Visitor was amazing",
    "Thabo"
    );

describe("function saves basic information", function() {
  it("save information", function() {
    expect(romeo.save).toBeDefined();
    expect(yoki.save).toBeDefined();
  });

  it("save information", function() {
    expect(romeo.fullname).toBe("Romeo");
    expect(romeo.age).toEqual(18);
    expect(romeo.comments).toEqual("visitor");
  });
});

describe("function loads basic information", function() {
  it("loads information", function() {
    expect(romeo.load).toBeDefined();
    expect(yoki.load).toBeDefined();
  });
});
