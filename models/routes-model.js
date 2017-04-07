const fetch = require('fetch');
const db = require('../config/database');

const routes = {};

routes.allRoutes = () => {
    return db.manyOrNone(
        'SELECT * FROM routes'
    );
};

routes.create = (obj) => {
    return db.one('INSERT INTO routes(start_lat, start_lng, start_addr, start_name, end_lat, end_lng, end_addr, end_name, price, start_time, users_id) VALUES($[start_lat], $[start_lng], $[start_addr], $[start_name], $[end_lat], $[end_lng], $[end_addr], $[end_name], $[price], $[start_time], $[user_id]) returning id', obj);
};

routes.findByStartName = (start_name) => {
    return db.any('SELECT * FROM routes WHERE start_name=$1', start_name);
}

module.exports = routes;