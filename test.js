var tape = require('tape');
var tapes = require('tapes');
var test = tapes(tape);

test('empty test', (t) => {
  t.end();
  t.equal(2,2);
});

test('tape-diff test', function (t) {
  //console.log("whateeeeee");

    const expected = {
      "one" : "val",
      "two" : "val",
      "three" : "val",
      "four" : "val",
      "five" : {
        "someting" : "lorem ipsum dolor sit amet", "other" : "lorem ipsum is getting too long"
      }      
    };

    const actual = {
      "five" : {
        "someting" : "lorem1 ipsum dolor sit amet", "other" : "lorem ipsum is getting too long"
      },      
      "four" : "val",
      "three" : "val",
      "two" : "val"
    };

    const expected1 = {
      "one" : "val",
      "two" : "val",
      "three" : "val",
      "four" : "val"
    };

    const actual1 = {
      "four" : "val",
      "three" : "val",
      "two" : "val",
      "one" : "val"
    };

    t.deepEqual(1,1, "1 deepEquals 1");
    t.deepEqual(actual1, expected1, 'different order should still be equivalent');    
    t.deepEqual(1,1);
    t.deepEqual("laura", "donna");
    t.deepEqual(1,2, "1 doesnt equal 2");
    t.deepEqual(actual, expected);
    t.deepEqual([1,23], [2,23]);
    t.end();
});