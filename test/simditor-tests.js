// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-simditor.js.
import { name as packageName } from "meteor/boostbob:meteor-simditor";

Tinytest.add('meteor-simditor - example', function(test) {
  test.equal(packageName, "meteor-simditor");
});