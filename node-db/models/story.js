'use strict';

// class Story {
//     constructor (id, url) {
//         this._id = id;
//     }
// }

//getAll = function() {}
var connPool;

var Story = {
    getAll() {
        var sql = `select * from stories order by votes desc, createdOn desc limit 50`;
        return connPool.queryAsync(sql);
},

insert(story) {
    var sql = 'insert into series (url) values (?)';
    var params = [story.url];
    return connPool.queryAsync(sql, params)
        .then(function(results) {
            sql = 'select * from stories where id=?';
            params = [results.insertId];
            return connPool.queryAsync(sql, params);
        })
        .then(function(rows) {
            return rows.length > 0 ? rows[0] : null;
        })
    }
};

module.exports.Model = function(connectionPool) {
    connPool = connectionPool;
    return Story;
    
}