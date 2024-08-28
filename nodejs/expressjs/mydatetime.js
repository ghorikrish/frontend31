let getCurrentDate = () => 
    {
        let d1 = new Date();
        let today = d1.getDate() + "/" + d1.getMonth() + "/" + d1.getFullYear();
        return today;
    }
let getCurrentTime = () => 
    {
        let d1 = new Date();
        let now = d1.getHours() + "/" +  d1.getMinutes() + "/" + d1.getSeconds();
        return now;
    }
 function getHours()
    {
        return new Date().getHours();
    }    
let getCurrentDateTime = function()
    {
        let currentdatetime = getCurrentDate() + "" + getCurrentTime();
        return currentdatetime;
    }    
    // all function (module) export is complsory
    module.exports.getDate = getCurrentDate;
    module.exports.getTime = getCurrentTime;
    module.exports.gethours = getHours;
    module.exports.getdatetime = getCurrentDateTime;