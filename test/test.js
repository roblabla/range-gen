import range from "../dist/";
import assert from "assert";

describe("range", function() {
  it("Can be called with 1 argument", function() {
    var i = 0;
    for (var j of range(5))
    {
      assert(j === i, "Wrong value for j");
      assert(j < 5, "Wrong value for j");
      i++;
    }
    assert(i === 5, "for not called enough times");
  });
  it("Can be called with 0", function() {
    for (var j of range(0))
      assert(false, "Should not come here");
  })
  it("Can be called with 2 arguments", function() {
    var i = 3;
    for (var j of range(3, 15))
    {
      assert(j === i, "Wrong value for j");
      assert(j < 15, "Wrong value for j");
      i++;
    }
    assert(i === 15, "for not called enough times");
  });
  it("Can be called with 2 arguments, the wrong order", function() {
    for (var j of range(15, 3))
      assert(false, "Should not come here");
  });
  it("Can be called with 3 arguments", function() {
    var i = 2;
    for (var j of range(2, 8, 2))
    {
      assert(j === i, "Wrong value for j");
      assert(j < 8, "Wrong value for j");
      i += 2;
    }
    assert(i === 8, "for not called enough times");
  });
  it("Can be called with a negative step", function() {
    var i = 5;
    for (var j of range(5, -3, -1))
    {
      assert(j === i, "Wrong value for j");
      assert(j > -3, "Wrong value for j");
      i--;
    }
    assert(i === -3, "for not called enough times");
  });
});
