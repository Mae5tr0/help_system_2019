import uuid from "uuid/v1";

export default [
  {
    id: uuid(),
    email: "admin@localhost",
    role: "admin",
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    email: "manager@localhost",
    role: "manager",
    createdAt: 1554670800000
  },
  {
    id: uuid(),
    email: "user@localhost",
    role: "user",
    createdAt: 1522702800000
  }
];
