/*
	操作数据库通用api
 */
const mysql = require('mysql');
 
exports.base = (sql,data,callback)=>{
		//创建数据库连接
	const connection = mysql.createConnection({
	  host     : 'localhost',//数据库所在的服务器ip或域名
	  user     : 'root',		 //数据库账号
	  password : 'root',		
	  database : 'mybook'	
	});

	//执行连接操作
	connection.connect();

	//操作数据库(数据库操作也是异步的)
	connection.query(sql,data, function (error, results, fields) {
	  if (error) throw error;
	  callback(results);
	});

	//关闭数据库连接
	connection.end();
}