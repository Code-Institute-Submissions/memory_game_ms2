describe("Array", function() {
  describe("shuffle array test", function () {
    var shuffledArray = shuffle(Cards);
    it("shoud return array length of 20", function() {
      expect(shuffledArray.length).toBe(20);
    });

    it("should find the item 中 in an Array", function() {
      expect(shuffledArray).toContain("中");
    });
    
    it("shouldn't find the item qqq in an Array", function() {
        expect(shuffledArray).not.toContain("qqq");
    });

    it("tracks if shuffle function was called at all", function() {
      spyOn(window, 'shuffle');
      window.shuffle(Cards);
      expect(window.shuffle.calls.any()).toEqual(true);
      window.shuffle.calls.reset();
      expect(window.shuffle.calls.any()).toEqual(false);
  });

  });
});


/*describe("The 'toContain' matcher", function() {
    it("works for finding an item in an Array", function() {
      var a = ["foo", "bar", "baz"];

      expect(a).toContain("bar");
      expect(a).not.toContain("quux");
    });

*/
