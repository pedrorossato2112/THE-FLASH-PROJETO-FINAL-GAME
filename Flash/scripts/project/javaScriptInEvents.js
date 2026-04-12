

const scriptsInEvents = {

	async TheFlashGameEvents_Event33(runtime, localVars)
	{
		const layer = runtime.layout.getLayer(0); 
		const view = layer.getViewport();
		
		const Mil = runtime.objects.Milesimos.getFirstInstance();
		if (Mil) {
		    Mil.x = view.right - 1000;
		    Mil.y = view.top + 80;
		}
		
		const Seg = runtime.objects.Segundos.getFirstInstance();
		if (Seg) {
		    Seg.x = view.right - 1150;
		    Seg.y = view.top + 50;
		}
		
		const Temp = runtime.objects.Tempo.getFirstInstance();
		if (Temp) {
		    Temp.x = view.right - 1080;
		    Temp.y = view.top + 28;
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
