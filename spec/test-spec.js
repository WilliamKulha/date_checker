import {convertDay} from './../src/module.js';

describe('getting date', function() {
  let testDate;
  let testDateDay;

  beforeEach(function() {
    testDate = new Date(1321, 11, 12);
  });

  beforeEach(function() {
    testDateDay = testDate.getDay();
  });

  it('should return the day of the specified date', function() {
    expect(testDate.getDay()).toEqual(5);
  });

  it('should return a string corresponding to the day of the week that Javascript returns as a number', function() {
    expect(convertDay(testDateDay)).toEqual('Friday');
  });

});