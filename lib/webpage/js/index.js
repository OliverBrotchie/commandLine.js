
var ip = null,c = new Interface(document.getElementById('interface').firstElementChild,m => {},{

	messageOptions: {
		striped:false,
		separators:'full',
		tags:{
			tagStyles:{
				You:"client",
				Console:"host"
			}
		}
	},
	code: {
		usage:'tagged'
	},
	consoleCommands:{
		deliminator: "/",
		commands:{ 
	
		}
	}
});

function sleep(fun,time){
	setTimeout(function () {
		fun();
	}, time);
}

