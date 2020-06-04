sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],

	function (Controller) {
		"use strict";

		return Controller.extend("RC.NEWAR.controller.View1", {

			onCreate: function () {
				var myRouter = sap.ui.core.UIComponent.getRouterFor(this);
				myRouter.navTo("View2");
			}
		});
	});