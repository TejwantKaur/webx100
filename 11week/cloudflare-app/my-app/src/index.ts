// export default {
// 	async fetch(request, env, ctx): Promise<Response> {
// 		// return new Response("Hello World!");
// 		return Response.json({
// 			msge: "Hi there!"
// 		});
// 	},
// } satisfies ExportedHandler<Env>;

export default {
	// bcse its an async func; so instead of only Rsponse;
	// It's returning Promise<Response>;
	async fetch(request, env, ctx): Promise<Response> {
		console.log(request.body);
		console.log(request.headers);
		console.log(request.method);

		if (request.method === 'GET') {
			return Response.json({
				msge: 'You sent GET request!',
			});
		} else {
			return Response.json({
				msge: 'You did not sent GET request!',
			});
		}
	},
} satisfies ExportedHandler<Env>;


// if we have 
// async function sum(a,b): Number;    it will not only return Number;
// async function sum(a,b): Promise<Number>;    it will return Promise of num;
