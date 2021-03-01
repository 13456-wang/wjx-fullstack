//山月面试 每天刷几遍
//interface接口 type自定义类型 ts基础
export type User = {
    name: string;
    age: number;
    occupation: string;
  };//自定义类型 unknown/any不确定/任一类型
export const users: User[]  = [ //ts类型约束 每个元素 满足
    {
        name: '王嘉新',
        age:18,
        occupation:"wjx"
    },
    {
        name:"dxl",
        age:18,
        occupation:"Adfdg"
    }
]
export function logPerson(user: User) {
    console.log(`- ${user.name}, ${user.age}`);
  }
  
  console.log("Users:");
  users.forEach(logPerson);