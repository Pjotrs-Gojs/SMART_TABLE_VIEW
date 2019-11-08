function initModel() {
	var sUrl = "/BB/com/SMT/Service/oDataSMT.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}