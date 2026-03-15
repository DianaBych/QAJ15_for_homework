// 1. Для оплаты корпоративного инструмента нам нужно узнать сколько у нас пользователей с разными ролями, т.к.разные роли нуждаются в разных видах подписки
// На входе у нас.json файл с данными пользователей содержащий свойства: id, username, role
// На выходе нам нужен объект вида:
// {
//     role_1: {
//         count: 5,
//             users: [{ id, username }, { id, username }, ...]
//     },
//     role_1: {
//         count: 20,
//             users: [{ id, username }, { id, username }, ...]
//     },
//     ...
// }

// JSON с данными пользователей
const users = [
  { id: 1, username: "ivan", role: "role_1" },
  { id: 2, username: "petr", role: "role_3" },
  { id: 3, username: "anna", role: "role_2" },
  { id: 4, username: "olga", role: "role_3" },
  { id: 5, username: "sergey", role: "role_1" },
  { id: 6, username: "elena", role: "role_3" },
  { id: 7, username: "dmitry", role: "role_3" },
  { id: 8, username: "maria", role: "role_2" },
  { id: 9, username: "alex", role: "role_3" },
  { id: 10, username: "natalia", role: "role_1" },
];

function groupUsersByRole(users: any[]) {
  const result: any = {};

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const role = user.role;

    if (!result[role]) {
      result[role] = {
        count: 0,
        users: [],
      };
    }

    result[role].users.push({
      id: user.id,
      username: user.username,
    });

    result[role].count++;
  }

  return result;
}

// Использование
const groupedUsers = groupUsersByRole(users);
console.log(JSON.stringify(groupedUsers, null, 2));
