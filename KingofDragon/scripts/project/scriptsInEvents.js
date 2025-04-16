

const scriptsInEvents = {

	async Efase1_Event22_Act4(runtime, localVars)
	{
		//const vidasList = ["0", "1", "2", "3"];
		//obter o valor da variavel global vidas
		let vidas = runtime.globalVars.Vidas;
		
		//reduzir uma vida
		vidas --;
		
		//atualiza a variavel global no construct3
		runtime.globalVars.Vidas = vidas;
		/*if (runtime.layout.name === "Fase1") {
			var vidasanima= runtime.getInstanceByUid(41);
		}
		else{
			var vidasanima= runtime.getInstanceByUid(73);
		}*/
		//var animation = vidasanima.getAnimation;
		//animation -=1;
		
		//vidasanima.setAnimation(vidasList[vidas]);
		//vidasanima.setAnimation(vidas.toString());
		
		
		
		//let vidas = runtime.globalVars.Vidas;
		let todasAsVidas = runtime.objects["Vidasanimacao"].getAllInstances();
		
		if(runtime.layout.name === "Fase2"){
			todasAsVidas = "";
			todasAsVidas = runtime.objects["Vidasanimacao2"].getAllInstances();
		}
		
		for (let sprite of todasAsVidas) {
		  sprite.setAnimation(vidas.toString());
		}
		//se vidas chegarem a zero, va para game over
		if(vidas <= 0){
		  runtime.goToLayout("GameOver")
		}
	},

	async Efase1_Event24_Act3(runtime, localVars)
	{
		//obter o valor da variavel global vidas
		let vidas = runtime.globalVars.Vidas;
		
		//reduzir uma vida
		vidas --;
		
		//atualiza a variavel global no construct3
		runtime.globalVars.Vidas = vidas;
		/*if (runtime.layout.name === "Fase1") {
			var vidasanima= runtime.getInstanceByUid(41);
		}
		else{
			var vidasanima= runtime.getInstanceByUid(73);
		}*/
		//var animation = vidasanima.getAnimation;
		//animation -=1;
		
		//vidasanima.setAnimation(vidasList[vidas]);
		//vidasanima.setAnimation(vidas.toString());
		
		
		
		//let vidas = runtime.globalVars.Vidas;
		let todasAsVidas = runtime.objects["Vidasanimacao"].getAllInstances();
		
		if(runtime.layout.name === "Fase2"){
			todasAsVidas = "";
			todasAsVidas = runtime.objects["Vidasanimacao2"].getAllInstances();
		}
		
		for (let sprite of todasAsVidas) {
		  sprite.setAnimation(vidas.toString());
		}
		//se vidas chegarem a zero, va para game over
		if(vidas <= 0){
		  runtime.goToLayout("GameOver")
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
