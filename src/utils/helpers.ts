import uniqid from 'uniqid';
import { faker } from '@faker-js/faker';
import { Tasks } from 'src/tasks/types';

export const generateTaskId = (): any => uniqid('Task-');

export const generateFakeTasks = (): Tasks => {
  return {
    [generateTaskId()]: {
      title: 'Sample task example 1',
      shortDescription: 'Sample task short description 1',
      longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book.`,
      createdAt: faker.date.past(),
      startDate: faker.date.future(),
      endDate: faker.date.future(),
      image: faker.image.abstract(640, 480, true),
    },
    [generateTaskId()]: {
      title: 'Sample task example 2',
      shortDescription: 'Sample task short description 2',
      longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book.`,
      createdAt: faker.date.past(),
      startDate: faker.date.future(),
      endDate: faker.date.future(),
      image: faker.image.abstract(640, 480, true),
    },
    [generateTaskId()]: {
      title: 'Sample task example 3',
      shortDescription: 'Sample task short description 3',
      longDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book.`,
      createdAt: faker.date.past(),
      startDate: faker.date.future(),
      endDate: faker.date.future(),
      image: faker.image.abstract(640, 480, true),
    },
  };
};
