nums=[1,46,26,3,6,3,8,6,2,7]
function quickSort(nums) {
    // 传进来的数组如果如果为空或者只有一个元素，则直接返回
    if (nums.length < 2) {
        return nums;
    }

    // 快排核心代码

    // 选择中间元素作为快排的基点，获取基点的下标，待会需要取出
    let centerIndex = Math.floor(nums.length / 2);
    console.log(centerIndex)
    // 因为返回的是一个数组，使用0下标直接取用
    // console.log(nums.splice(centerIndex, 1)[0])
    const centerNum = nums.splice(centerIndex, 1)[0];
    // 定义左右两个空数组，用于分区
    const left = [];
    const right = [];
    // 遍历数组
    nums.forEach(item => {
        // 如果元素大于基点，就存入右边，否则存入左边
        if (item > centerNum) {
            right.push(item);
        } else {
            left.push(item);
        }
    })
    // 使用递归调用，同时对左右两个分区进行快排，后面裂变后速度将极快
    // 将其连接，基点一定是放在中间的，很多人快排失败很可能是因为基点位置放错了
    return quickSort(left).concat(centerNum, quickSort(right));
}
console.log(quickSort(nums))