sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/layout/SplitterLayoutData",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, SplitterLayoutData, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.SMT.SMART_TABLE_VIEW.controller.MajorView", {
		onInit: function () {
			var oSplitterLayoutData2 = new SplitterLayoutData({size: "0%"}),
				oSplitterLayoutData3 = new SplitterLayoutData({size: "0%"}),
				oPane2 = this.byId("T2"),
				oPane3 = this.byId("T3");
	        	oPane2.setLayoutData(oSplitterLayoutData2);
	        	oPane3.setLayoutData(oSplitterLayoutData3);
		},
		
		onBeforeRebindTable2: function(oEvent){
			var oView = this.getView();
			var oContext = oView.byId("ST11").getSelectedContextPaths();
	        var oModel = oView.getModel();
	        var sCategoryID, aFilters = [];
	        	for (var i = 0; i < oContext.length; i++) {
		        	sCategoryID = oModel.getProperty(oContext[i]).CategoryID;
		        	aFilters.push(new sap.ui.model.Filter("CategoryID","EQ",sCategoryID));
	        	}
	        var oFilter = new sap.ui.model.Filter({ filters: aFilters, and: false });
	        var binding = oEvent.getParameter("bindingParams").filters;
	        	binding.push(oFilter);
		},
			
		select1: function (oEvent) {
			var oView = this.getView();
				oView.byId("ST22").setVisible(true);
			var oSplitterLayoutData2 = new SplitterLayoutData({size: "50%"}),
				oPane2 = this.byId("T2");
	        	oPane2.setLayoutData(oSplitterLayoutData2);
	        var oContext = oView.byId("ST11").getSelectedItem();	
	        	if(oContext === null){
						oSplitterLayoutData2 = new SplitterLayoutData({size: "0%"});
					var oSplitterLayoutData3 = new SplitterLayoutData({size: "0%"}),
						oPane3 = this.byId("T3");
			        	oPane2.setLayoutData(oSplitterLayoutData2);
			        	oPane3.setLayoutData(oSplitterLayoutData3);
			        	oView.byId("ST22").removeSelections(true);
			        	oView.byId("ST33").removeSelections(true);
				} 
	        
				oView.byId("FormDetails").setVisible(false);
				oView.byId("FormCustomer").setVisible(false);
				oView.byId("FormEmployee").setVisible(false);
				oView.byId("smartFilterBar").reset();
				oView.byId("ST2").rebindTable();
		},
		
		onBeforeRebindTable3: function(oEvent){
			var oView = this.getView();
			var oContext = oView.byId("ST22").getSelectedContextPaths();
	        var oModel = oView.getModel();
	        var sProductID, aFilters = [];
	        	for (var i = 0; i < oContext.length; i++) {
		        	sProductID = oModel.getProperty(oContext[i]).ProductID;
		        	aFilters.push(new sap.ui.model.Filter("ProductID","EQ",sProductID));
	    		}
	        var oFilter = new sap.ui.model.Filter({ filters: aFilters, and: false });
	        var binding  = oEvent.getParameter("bindingParams").filters;
	        	binding.push(oFilter);
		},
			
		select2: function () {
			var	oView = this.getView();
				oView.byId("ST33").setVisible(true);
			var oSplitterLayoutData2= new SplitterLayoutData({size: "33%"}),
				oSplitterLayoutData3= new SplitterLayoutData({size: "33%"}),
				oPane2= this.byId("T2"),
				oPane3= this.byId("T3");
	        	oPane2.setLayoutData(oSplitterLayoutData2);
	        	oPane3.setLayoutData(oSplitterLayoutData3);
	        	
	    	var oContext = oView.byId("ST22").getSelectedItem();	
		        if(oContext === null){
					oSplitterLayoutData2 = new SplitterLayoutData({size: "50%"});
		        	oPane2.setLayoutData(oSplitterLayoutData2);
		        	oSplitterLayoutData3 = new SplitterLayoutData({size: "0%"});
		        	oPane3.setLayoutData(oSplitterLayoutData3);
		        	oView.byId("ST33").removeSelections(true);
				} 
				
				oView.byId("FormDetails").setVisible(false);
				oView.byId("FormCustomer").setVisible(false);
				oView.byId("FormEmployee").setVisible(false);
				oView.byId("ST3").rebindTable();
		},
		select3: function () {
			var	oView = this.getView(),
				vOrderID = oView.byId("ST33").getSelectedItem().getBindingContext().getObject().OrderID,
		        form1 = oView.byId("FormDetails"),
		        form2 = oView.byId("FormCustomer"),
	        	form3 = oView.byId("FormEmployee");
			        form1.bindElement({ path: "/Orders(" +  vOrderID + ")" });
			        form2.bindElement({ path: "/Orders(" +  vOrderID + ")/Customer" });
			        form3.bindElement({ path: "/Orders(" +  vOrderID + ")/Employee" });
					oView.byId("FormDetails").setVisible(true);
					oView.byId("FormCustomer").setVisible(true);
					oView.byId("FormEmployee").setVisible(true);
		},
		onRemoveSelection: function () {
			var	oView = this.getView();
				oView.byId("ST11").removeSelections(true);
				oView.byId("ST22").removeSelections(true);
				oView.byId("ST33").removeSelections(true);
				oView.byId("FormDetails").setVisible(false);
				oView.byId("FormCustomer").setVisible(false);
				oView.byId("FormEmployee").setVisible(false);
				oView.byId("smartFilterBar").reset();
				oView.byId("ST2").rebindTable();
				oView.byId("smartFilterBar").setVisible(false);
				oView.byId("ST22").setVisible(false);
				oView.byId("ST33").setVisible(false);
			var oSplitterLayoutData2= new SplitterLayoutData({size: "0%"}),
				oSplitterLayoutData3= new SplitterLayoutData({size: "0%"}),
				oPane2= this.byId("T2"),
				oPane3= this.byId("T3");
	        	oPane2.setLayoutData(oSplitterLayoutData2);
	        	oPane3.setLayoutData(oSplitterLayoutData3);
		}
	});
});