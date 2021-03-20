const arr = [1,2,3,4,5,5,5,6,6]
let a=[]

// console.log(arr.reduce((acc,item)=>{
//     if(!acc.includes(item)){
//         acc.push(item)
//     }
//     return acc
// },[]))

[1,2,3,4].reduce((acc,cur,index,o) =>{
    console.log(acc,cur,index,o)
    return acc+cur
},10)

[1,2,3,4].reduce((acc,cur,index,o) =>{
    console.log(acc,cur,index,o)
    return acc+cur
})

// const bills =[
//     {
//         type:'shop',
//         momey:233
//     },
//     {
//         type:'shop',
//         momey:341
//     },
//     {type:'transfer' , money:821,},
//     {type:'study' , money:821,}
// ]

// for(let i=0;i<arr.length;i++){
//     let b =arr[i]
//     // console.log(b)
//     if(!a.includes(b)){
//         a.push(b)
//     }
// }
// console.log(a)