import { FilterItemPipe } from './filter-item.pipe';
import { async } from '@angular/core/testing';

describe('FilterItemPipe', () => {
  let testSubject: FilterItemPipe;

  beforeEach(async(() => {
    testSubject = new FilterItemPipe();
  }));

  it('returns value as is when no input given', () => {
    // Given
    const someInput = 'input';

    // When
    const result = testSubject.transform(someInput, '');

    // Then
    expect(result).toEqual(someInput);
  });

  it('returns an array with just the name searched for', () => {
    // Given
    const unfilteredArray = [
      {name: 'one'},
      {name: 'two'},
      {name: 'three'},
    ];
    const expectedFilteredArray = [
      {name: 'two'}
    ];

    // When
    const result = testSubject.transform(unfilteredArray, 'two');

    // Then
    expect(result).toEqual(expectedFilteredArray);
  });

  it('returns an array of filtered items based on partial name found', () => {
    const unfilteredArray = [
      {name: 'grape'},
      {name: 'grapefruit'},
      {name: 'apple'},
    ];
    const expectedFilteredArray = [
      {name: 'grape'},
      {name: 'grapefruit'},
    ];

    // When
    const result = testSubject.transform(unfilteredArray, 'gra');

    // Then
    expect(result).toEqual(expectedFilteredArray);
  });
});
