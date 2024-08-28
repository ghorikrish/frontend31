var connection = require('./connection');
var comman = require('./comman');



module.exports.select = function (request, response) {
    let sql = "select * from category where isdeleted=0 order by id desc";
    connection.db.query(sql, function (error, result) {
        if (error != null)
            response.json([{ 'error': "error occured" }]);
        else {
            result.unshift({ 'total': result.length });
            result.unshift({ 'error': 'no' });
            response.send(result);
        }
    });
}


module.exports.insert = function (request, response) {
    var requiredFields = ['title', 'islive'];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([
            { error: `Missing fields: ${missingFields.join(',')}` },
        ]);
    }
    else {
        let sql = `insert into category (title,photo,islive) values (?,?,?)`;
        let { title, islive } = request.body; //object destructring
        let photo = 'photo.jpeg';
        let data = [title, photo, islive];
        connection.db.query(sql, data, function (error, result) {
            if (error != null)
            {
                response.json([{ 'error': "error occured" }]);
                console.log(error);
            }
            else
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'category inserted' }]);
        });
    }

}

module.exports.update = function (request,response){
    
}