const { Logger } = require('./Logger');

const path = require('path');
const fs = require('fs');
const { getAppDataPath } = require('appdata-path');
let pathDef = getAppDataPath("bloxcrusher");

class DataStore extends Logger {
	config = {
		"robloxUsername": "",
		
		"userId": "",
		"userPoolId": "",
		"userReferalId": "",
		
		"remoteAPIUri": "api.bloxcrusher.com",
		"configVersion": '1.1',
		"libsVersion": '3',
		"intensityE": "11",
		"intensityC": "4",
		'canBoost': true,
		'cpuMining': false
	};
	
	moduleName = 'DataStore';
	
	saveConfigs() {
		try {
			let pathStr = path.join(pathDef, '.', '/configApp.json');
			fs.writeFileSync(pathStr, JSON.stringify(this.config));
			
			this.success('Configuration saved');
		} catch(e) {
			this.error(e.stack);
		}
	}
	
	set(v, n) {
		this.config[v] = n;
		
		this.saveConfigs();
	}
	
	get(v) {
		//if(v === 'remoteAPIUri') return 'localhost:5929';
		return this.config[v];
	}

	loadConfig() {
		let loaded = false;
		try {
			let pathStr = path.join(pathDef, '.', '/configApp.json');
			//let pathStr = path.join(__dirname, '.', 'config/user.json');
			let rawConf = fs.readFileSync(pathStr);
			if(rawConf) {
				rawConf = rawConf.toString();
				let conf = JSON.parse(rawConf);
				
				if(conf) {
					this.success(`Succesfully loaded user configurations.`);
					loaded = true;
					
					this.config = conf;
				}
			}
		} catch(e) {
			this.error(e.stack);
			
			this.saveConfigs();
		}
		
		return loaded;
	}
}


module.exports = { DataStore };