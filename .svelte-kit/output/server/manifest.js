export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/plots/3-1-3 Boxplot of Production Volume - No Outliers.png","images/plots/3-1-3 Boxplot of Production Volume.png","images/plots/3-1-3 Histogram of Production Volume.png","images/plots/3-1-4 Boxplot of Economic Value - No Outlier.png","images/plots/3-1-4 Boxplot of Economic Value.png","images/plots/3-1-4 Distribution of Economic Value.png","images/plots/3-2-1 Mean Economic Value of each Species.png","images/plots/3-2-1 Total Economic Value of each Species.png","images/plots/3-2-2 Total Production Volume of each Species.png","images/plots/3-2-3 Mean Economic Value for each Region.png","images/plots/3-2-3 Total Economic Value for each Region.png","images/plots/3-2-3 Total Production Volume of each Species.png","images/plots/3-2-4 Total Production Volume per Region.png","images/plots/3-2-5 Economic Value from Q1 of 2020 to Q4 of 2024.png","images/plots/3-2-5 Economic Value from the Q1 of 2020 to Q4 of 2024.png","images/plots/3-2-5 Production Volume from Q1 of 2020 to Q4 of 2024.png","images/plots/3-2-6 Production Volume from Q1 of 2020 to Q4 of 2024.png","images/plots/3-2-7 Economic vs. Production Value of Aquaculture Systems in the Philippines.png","images/plots/3-3-1 Economic Value Distribution for each Species.png","images/plots/3-3-1 Economic Value Trend for each Species.png","images/plots/3-3-2 Economic Value Distribution for each Region.png","images/plots/3-3-2 Economic Value Trend for each Region.png","images/plots/3-3-3 Production Volume Distribution for each Species.png","images/plots/3-3-3 Production Volume Trend for each Species.png","images/plots/3-3-4 Production Volume Distribution for each Region.png","images/plots/3-3-4 Production Volume Trend for each Region.png","images/plots/4-1 KMeans Clustering.png","images/plots/4-1 Kmeans with regression lines.png","images/plots/4-1 Relationship between Production Volume and Economic Value.png","images/plots/4-2 Production Volume by Region.png","images/plots/4-2 Production Volume Distribution by Region.png","images/plots/4-3 Production Volume Over the Years by Region.png","images/plots/4-3 Production Volume Over The Years.png","images/plots/5 Nutshell plot.png","images/s23330897651.png","images/teehee.png","images/witch.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BbjBd2KB.js",app:"_app/immutable/entry/app.jbmS25gt.js",imports:["_app/immutable/entry/start.BbjBd2KB.js","_app/immutable/chunks/CUNYLv-T.js","_app/immutable/chunks/D1CJRQLn.js","_app/immutable/chunks/CPpT_tx3.js","_app/immutable/chunks/Ab0eBhEk.js","_app/immutable/entry/app.jbmS25gt.js","_app/immutable/chunks/C4wCfrIe.js","_app/immutable/chunks/D1CJRQLn.js","_app/immutable/chunks/CJuP1WCt.js","_app/immutable/chunks/CRmGNqMR.js","_app/immutable/chunks/Ab0eBhEk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/exploratory-data-analysis/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
