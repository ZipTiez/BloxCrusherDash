class Logger {
	moduleName = 'Logger';
	developperLogs = [];
	
	log(m) {
		this.developperLogs.push(m);
		console.log(`%c[${this.moduleName} LOG]: ${m}`, 'color: cornflowerblue');
	}
	
	success(m) {
		this.developperLogs.push(m);
		console.log(`%c[${this.moduleName} SUCCESS]: ${m}`, 'color: lime');
	}
	
	error(m) {
		this.developperLogs.push(m);
		console.log(`%c[${this.moduleName} ERROR]: ${m}`, 'color: tomato');
	}
}


module.exports = { Logger };