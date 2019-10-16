/*global QUnit*/

sap.ui.define([
	"com/SMT/SMART_TABLE_VIEW/controller/MajorView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("MajorView Controller");

	QUnit.test("I should test the MajorView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});