sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/layout/SplitterLayoutData",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, SplitterLayoutData, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("com.SMT.SMART_TABLE_VIEW.controller.MajorView", {
		
		
		onInit: function () {
			var oView = this.getView();
			this._SLD2 = oView.byId("SLD2");
			this._SLD3 = oView.byId("SLD3");
			this._SLDRB = oView.byId("SLDRB");
			this._SLDPP = oView.byId("SLDPP");
			this._SLDSS = oView.byId("SLDSS");
		},
		
		onBeforeRebindTable2: function(oEvent){
			var oView = this.getView();
			var oContext = oView.byId("ST11").getSelectedContextPaths();
	        var oModel = oView.getModel();
	        var sCategory, aFilters = [];
	        	for (var i = 0; i < oContext.length; i++) {
		        	sCategory = oModel.getProperty(oContext[i]).CATEGORY;
		        	aFilters.push(new Filter("CATEGORY","EQ",sCategory));
	        	}
	        var oFilter = new Filter({ filters: aFilters, and: false });
	        var binding = oEvent.getParameter("bindingParams").filters;
	        	binding.push(oFilter);
		},
		
		select1: function (oEvent) {
			var oView = this.getView();
				oView.byId("ST22").setVisible(true);
				// this.byId("T2").setLayoutData(new SplitterLayoutData({resizable : true, size: "50%"}));
				this._SLD2.setResizable(true);
				this._SLD2.setSize("50%");
	        var oContext = oView.byId("ST11").getSelectedItem();	
	        	if(oContext === null){
		        		this._SLDPP.setResizable(false);
						this._SLDPP.setSize("100%");
					if(oView.byId("FormDetails").getVisible()){
						oView.byId("PP").rerender();
						}
						// this.byId("T2").setLayoutData(new SplitterLayoutData({resizable : false, size: "0%"}));
						this._SLD2.setResizable(false);
						this._SLD2.setSize("0%");
						// this.byId("T3").setLayoutData(new SplitterLayoutData({resizable : false, size: "0%"}));
						this._SLD3.setResizable(false);
						this._SLD3.setSize("0%");
						// this.byId("rightBig").setLayoutData(new SplitterLayoutData({resizable : false, size: "100%"}));
						this._SLDRB.setResizable(false);
						this._SLDRB.setSize("100%");
						this._SLDSS.setResizable(false);
						this._SLDSS.setSize("50%");
			        	oView.byId("ST22").removeSelections(true);
			        	oView.byId("ST33").removeSelections(true);
			        	oView.byId("smartFilterBar").reset();
			        	oView.byId("smartFilterBar").setVisible(false);
			        	
				} else {
					oView.byId("smartFilterBar").setVisible(true);
					oView.byId("ST22").removeSelections(true);
					oView.byId("ST2").rebindTable();
					oView.byId("ST2").applyVariant({
		            sort:	{
		                      sortItems: [{  columnKey: "UnitPrice", 
		                                     operation:"Ascending"}]
		            		}
		        });	
						this._SLD3.setResizable(false);
						this._SLD3.setSize("0%");
				}
	        
					oView.byId("FormDetails").setVisible(false);
					oView.byId("FormCustomer").setVisible(false);
					oView.byId("FormEmployee").setVisible(false);
		},
		
		onBeforeRebindTable3: function(oEvent){
			var oView = this.getView();
			var oContext = oView.byId("ST22").getSelectedContextPaths();
	        var oModel = oView.getModel();
	        var sProductID, aFilters = [];
	        	for (var i = 0; i < oContext.length; i++) {
		        	sProductID = oModel.getProperty(oContext[i]).PRODUCTID;
		        	aFilters.push(new Filter("PRODUCTID","EQ",sProductID));
	    		}
	        var oFilter = new Filter({ filters: aFilters, and: false });
	        var binding  = oEvent.getParameter("bindingParams").filters;
	        	binding.push(oFilter);
		},
		
		select2: function () {
			var	oView = this.getView();
				oView.byId("ST33").setVisible(true);
				// this.byId("T2").setLayoutData(new SplitterLayoutData({resizable : true, size: "33%"}));
				this._SLD2.setResizable(true);
				this._SLD2.setSize("33%");
				// this.byId("T3").setLayoutData(new SplitterLayoutData({resizable : true, size: "33%"}));
				this._SLD3.setResizable(true);
				this._SLD3.setSize("33%");
		        // this.byId("rightBig").setLayoutData(new SplitterLayoutData({resizable : false, size: "100%"}));
		        this._SLDRB.setResizable(false);
				this._SLDRB.setSize("100%");
	        	
	    	var oContext = oView.byId("ST22").getSelectedItem();	
		        if(oContext === null){
		        	this._SLDPP.setResizable(false);
					this._SLDPP.setSize("100%");
				if(oView.byId("FormDetails").getVisible()){
					oView.byId("PP").rerender();
					}
					// this.byId("T2").setLayoutData(new SplitterLayoutData({resizable : true, size: "50%"}));
					this._SLD2.setResizable(true);
					this._SLD2.setSize("50%");
		        	// this.byId("T3").setLayoutData(new SplitterLayoutData({resizable : false, size: "0%"}));
		        	this._SLD3.setResizable(false);
					this._SLD3.setSize("0%");
					this._SLDSS.setResizable(false);
					this._SLDSS.setSize("50%");
		        	oView.byId("ST33").removeSelections(true);
				} else {
		        	oView.byId("ST33").removeSelections(true);
				}
				
				oView.byId("FormDetails").setVisible(false);
				oView.byId("FormCustomer").setVisible(false);
				oView.byId("FormEmployee").setVisible(false);
				oView.byId("ST3").rebindTable();
				
				oView.byId("ST3").applyVariant({
		            sort:	{
		                      sortItems: [{  columnKey: "QUANTITY", 
		                                     operation:"Ascending"}]
		            		}
		        });	
		},
		
		select3: function () {
			var	oView = this.getView();
			
				this._SLDPP.setResizable(true);
				this._SLDPP.setSize("50%");
				// this.byId("rightBig").setLayoutData(new SplitterLayoutData({resizable : true, size: "50%"}));
				this._SLDRB.setResizable(true);
				this._SLDRB.setSize("50%");
				this._SLDSS.setResizable(true);
				this._SLDSS.setSize("50%");
				if(!oView.byId("FormDetails").getVisible()){
				oView.byId("PP").rerender();
				}
				
			var	vOrderID = oView.byId("ST33").getSelectedItem().getBindingContext().getObject().PURCHASEORDERID,
		    	vPartnerID = oView.byId("ST22").getSelectedItem().getBindingContext().getObject().PARTNERID,
		    	vEmployeeID = oView.byId("ST22").getSelectedItem().getBindingContext().getObject().EMPLOYEEID,
		        form1 = oView.byId("FormDetails"),
		    	form2 = oView.byId("FormCustomer"),
	        	form3 = oView.byId("FormEmployee");
			    form1.bindElement({ path: "/Order_Details('" +  vOrderID + "')" });
		    	form2.bindElement({ path: "/Business_Partner('" +  vPartnerID + "')" });
			    form3.bindElement({ path: "/Employees('" +  vEmployeeID + "')" });
					oView.byId("FormDetails").setVisible(true);
					oView.byId("FormEmployee").setVisible(true);
					oView.byId("FormCustomer").setVisible(true);
		},
		
		onRemoveSelection: function () {
			var	oView = this.getView();
			if(oView.byId("FormDetails").getVisible()){
				oView.byId("PP").rerender();
				}
				oView.byId("ST11").removeSelections(true);
				oView.byId("ST22").removeSelections(true);
				oView.byId("ST33").removeSelections(true);
				oView.byId("FormDetails").setVisible(false);
				oView.byId("FormCustomer").setVisible(false);
				oView.byId("FormEmployee").setVisible(false);
				oView.byId("smartFilterBar").reset();
				oView.byId("ST2").rebindTable();
				oView.byId("ST3").rebindTable();
				oView.byId("smartFilterBar").setVisible(false);
				oView.byId("ST22").setVisible(false);
				oView.byId("ST33").setVisible(false);
				this._SLDPP.setResizable(false);
				this._SLDPP.setSize("100%");
				// this.byId("T2").setLayoutData(new SplitterLayoutData({resizable : false, size: "0%"}));
				this._SLD2.setResizable(false);
				this._SLD2.setSize("0%");
				// this.byId("T3").setLayoutData(new SplitterLayoutData({resizable : false, size: "0%"}));
				this._SLD3.setResizable(false);
				this._SLD3.setSize("0%");
				// this.byId("rightBig").setLayoutData(new SplitterLayoutData({resizable : false, size: "100%"}));
				this._SLDRB.setResizable(false);
				this._SLDRB.setSize("100%");
				this._SLDSS.setResizable(false);
				this._SLDSS.setSize("50%");
		}
		
	});
});