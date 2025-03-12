//get

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

	var u = new ApiMRVSUtils();
	try {
		var catSysId = '4761a5ab1bf37d10ca3b6280f54bcbe9'; // Pedido de Compra Fertilizantes
		var data = u.getData(catSysId);
		response.setBody(data);
	} catch (ex) {
		response.setError(ex);
	}
})(request, response);