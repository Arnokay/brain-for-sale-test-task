const attempt = require('./attempt');

describe('attempt', () => {
  test('attempt#1', () => {
    expect(attempt([240, 360, 720], [360, 720], [1080])).toEqual([360]);
  });
  test('attempt#2', () => {
    expect(attempt([240, 720], [360, 720], [1080])).toEqual([720]);
  });
  test('attempt#3', () => {
    expect(attempt([240], [360, 720], [1080])).toEqual([]);
  });
  test('attempt#4', () => {
    expect(attempt([240, 360, 720], [240, 360, 720, 1080], [240, 360])).toEqual([240, 360]);
  });
  test('attempt#5', () => {
    expect(attempt([240, 720], [240, 360, 720, 1080], [240, 360])).toEqual([240, 720]);
  });
  test('attempt#6', () => {
    expect(attempt([240, 720], [240, 360, 1080], [240, 360])).toEqual([240]);
  });
  test('attempt#7', () => {
    expect(attempt([720], [240, 360, 1080], [240, 360])).toEqual([]);
  });
  test('attempt#8', () => {
    expect(attempt([240, 360], [240, 360], [720, 1080])).toEqual([360]);
  });
});


describe('attempt with "any"', () => {
  test('attempt with "any"#1', () => {
    expect(attempt([240, 360, 720], [360, 'any'], [360, 720])).toEqual([360, 720]);
  });
  test('attempt with "any"#2', () => {
    expect(attempt([240, 360, 720], [240, 360, 720], ['any', 720])).toEqual([240, 360, 720]);
  });
  test('attempt with "any"#3', () => {
    expect(attempt([240, 360, 720], [360, 1080], ['any', 720])).toEqual([360]);
  });
  test('attempt with "any"#4', () => {
    expect(attempt([240, 360, 720], [1080], ['any', 720])).toEqual([]);
  });
});