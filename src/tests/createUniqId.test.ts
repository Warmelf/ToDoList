import { createUniqId } from '../utils/createUniqId';
import { ToDoListItemType } from '../types/ToDoListTypes/ToDoListTypes';

const mockData: Array<ToDoListItemType> = [
  { id: 1, title: 'Task 1', isDone: false },
  { id: 2, title: 'Task 2', isDone: true },
  { id: 3, title: 'Task 3', isDone: false },
];

describe('createUniqId', () => {
  it('should return 1 if the array is empty', () => {
    const result = createUniqId([]);
    expect(result).toBe(1);
  });

  it('should return a unique id which is the max id + 1', () => {
    const result = createUniqId(mockData);
    expect(result).toBe(4);
  });

  it('should work correctly with a single element in the array', () => {
    const singleElementArray: Array<ToDoListItemType> = [{ id: 10, title: 'Single Task', isDone: false }];
    const result = createUniqId(singleElementArray);
    expect(result).toBe(11);
  });

  it('should handle non-sequential ids correctly', () => {
    const nonSequentialIds: Array<ToDoListItemType> = [
      { id: 10, title: 'Task 1', isDone: false },
      { id: 5, title: 'Task 2', isDone: true },
      { id: 8, title: 'Task 3', isDone: false },
    ];
    const result = createUniqId(nonSequentialIds);
    expect(result).toBe(11);
  });
});