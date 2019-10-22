sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.SMT.SMART_TABLE_VIEW.controller.MajorView", {
		onInit: function () {

		},
		
		select1: function () {
			// var oView = this.getView();
			// var vCategoryName = oView.byId("ST11").getSelectedItem().getBindingContext().getObject().CategoryName;
			// if (vCategoryName === null || vCategoryName === this.gCategoryName) {
			// 	oView.byId("ST11").removeSelections(true);
			// } else {
			// 	this.gCategoryName = this.getView().byId("ST11").getSelectedItem().getBindingContext().getObject().CategoryName;
			// }
		},
		select2: function () {
			// var oView = this.getView();
			// var vProductName = oView.byId("ST22").getSelectedItem().getBindingContext().getObject().ProductName;
			// if (vProductName === null || vProductName === this.gProductName) {
			// 	oView.byId("ST22").removeSelections(true);
			// } else {
			// 	this.gProductName = this.getView().byId("ST22").getSelectedItem().getBindingContext().getObject().ProductName;
			// }
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