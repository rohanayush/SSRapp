const CopyPlugin = require('copy-webpack-plugin');
module.exports{
   plugin:[
        new CopyPlugin({
		patterns:[
			{ from:'source',to:'dest'   },
			{ from:'other', to:'public' },
          
	],
	}),   
   ],	
};
