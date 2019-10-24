sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/layout/SplitterLayoutData",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, SplitterLayoutData, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.SMT.SMART_TABLE_VIEW.controller.MajorView", {
		onInit: function () {
			var oSplitterLayoutData2= new SplitterLayoutData({size: "0%"}),
				oSplitterLayoutData3= new SplitterLayoutData({size: "0%"}),
				oPane2= this.byId("T2"),
				oPane3= this.byId("T3");
	        	oPane2.setLayoutData(oSplitterLayoutData2);
	        	oPane3.setLayoutData(oSplitterLayoutData3);
		},
		
		select1: function (oEvent) {
			var oView = this.getView();
			oView.byId("ST22").setVisible(true);
			var oSplitterLayoutData2 = new SplitterLayoutData({size: "50%"}),
				oPane2= this.byId("T2");
	        	oPane2.setLayoutData(oSplitterLayoutData2);
			var	vCategoryID = oView.byId("ST11").getSelectedItem().getBindingContext().getObject().CategoryID;
	    	this._oTable = oView.byId("ST22");
			var oBinding = this._oTable.getBinding("items"),
				oFilter;
				if (vCategoryID || vCategoryID === "") {
				this._oTable.setShowOverlay(false);
				oFilter = new sap.ui.model.Filter("CategoryID", "EQ", vCategoryID);
				oBinding.filter([oFilter]);
				}
				if (vCategoryID === null || vCategoryID === this.gCategoryID) {
					oView.byId("ST11").removeSelections(true);
			} else {
				this.gCategoryID = this.getView().byId("ST11").getSelectedItem().getBindingContext().getObject().CategoryID;
				var oSplitterLayoutData3 = new SplitterLayoutData({size: "0%"}),
				oPane3 = this.byId("T3");
				oPane3.setLayoutData(oSplitterLayoutData3);
			}
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
	        var vProductID = oView.byId("ST22").getSelectedItem().getBindingContext().getObject().ProductID;
	    	this._oTable1 = oView.byId("ST33");
			var oBinding = this._oTable1.getBinding("items"),
				oFilter;
				if (vProductID || vProductID === "") {
				this._oTable1.setShowOverlay(false);
				oFilter = new sap.ui.model.Filter("ProductID", "EQ", vProductID);
				oBinding.filter([oFilter]);
				}
		},
		select3: function () {
			// var oView = this.getView();
			// var vOrderID = oView.byId("ST33").getSelectedItem().getBindingContext().getObject().OrderID;
			// if (vOrderID === null || vOrderID === this.gOrderID) {
			// 	oView.byId("ST33").removeSelections(true);
			// } else {
			// 	this.gOrderID = this.getView().byId("ST33").getSelectedItem().getBindingContext().getObject().OrderID;
			// }
		}
	});
});