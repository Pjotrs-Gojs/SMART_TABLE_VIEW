/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/SMT/SMART_TABLE_VIEW/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});