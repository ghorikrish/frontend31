function getCurrentdate()
{
    let d1 = new Date();
    let today = d1.getDate() + "/" + (d1.getMonth()+1) + "/" + d1.getFullYear();
    console.log(today);
    return today;
}
var today = getCurrentdate();
console.log(today);