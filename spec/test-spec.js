
describe('getting date', function() {

  it('should return the day of the specified date', function() {
    let testDate = new Date(1321, 11, 12);
    expect(testDate.getDay()).toEqual(5);
  });
});