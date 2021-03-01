//数据是要类型化的
//拿着数据做一大波操作 为了不掉链子
export type User = {
    name: string;
    age: number;
    occupation?: string;
    role?:string
};
interface Admin {
    name:string;
    age:number;
    role:string;
}
export type Person=User |Admin;//普通用户与管理员
  //用户表里 有的用户是role管理员 
export const users: Person[]  = [ //ts类型约束 每个元素 满足
    {
        name: '王嘉新',
        age:18,
        occupation:"wjx"
    },
    {
        name:"dxl",
        age:18,
        occupation:"Adfdg"
    },{
        name:'xr',
        age:20,
        role:'eee'
    }
];
export function logPerson(user:Person){
    console.log(`- ${user.name}, ${user.age}`)
    let additionalInformation:string;
    //类型推导 js +new Date() int("14")
    // if((<Admin>user).role){
        if("role" in user){
        additionalInformation = (<Admin>user).role;
    } else{
        additionalInformation = (<User>user).occupation;
    }

}
users.forEach(logPerson);