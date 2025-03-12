// post
(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	// implement resource here
	var body = request.body.data;
	if(body){
		try{
			var apagri = new APagri();
			var responseBody = apagri.updateRequest(body, 'update_info'); // 'update_status' - /api/aapas/apagri/reqstatus
			if(responseBody.error){
				response.setStatus(400);
			}else{
				response.setStatus(200);
			}
			response.setBody(responseBody);
		}catch(ex){
			response.setStatus(500);
			response.setBody({
				error: 'Internal Server Error: ' + ex.toString()
			});
		}
	}else{
		response.setBody(400);
		response.setBody({
			error: 'Body not found'
		});
	}

})(request, response);