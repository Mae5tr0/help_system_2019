import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    title: 'Important problem',
    user: 'user@localhost',
    status: "open",
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    title: 'Important problem #2',
    user: 'user@localhost',
    status: "closed",
    createdAt: 1555016800000
  },
];
