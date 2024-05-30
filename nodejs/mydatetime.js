let getCurrentDate = () =>
    {
        let d1 = new Date();
        let today = d1.getDate() + "-" + (d1.getMonth()+1) + "-" + d1.getFullYear();
        console.log(today);
        return today;
    }
    function getCurrentTime()
    {
        let d1 = new Date();
        let nowtime = d1.getHours() + ":" + d1.getMinutes() + ":" + d1.getSeconds();
        return nowtime; 
    }
    let getCurrentDateTime = function()
    {
        let currentdatetime = getCurrentDate() + "" + getCurrentTime();
        return currentdatetime;
    }

    // export all function (compulsory)
    module.exports.getDate = getCurrentDate;
    module.exports.getTime = getCurrentTime;
    module.exports.getDateTime = getCurrentDateTime;