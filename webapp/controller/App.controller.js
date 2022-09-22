sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.App",{
        onShowHello: function() {
            //read msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            MessageToast.show(sMsg);
        },

        onCalcRent: function() {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var dIncome = this.getView().getModel().getProperty("/finance/income");
            var dRent = this.getView().getModel().getProperty("/finance/rent");
            let dRentPerc = Math.round(dRent / dIncome * 10000) / 100;
            this.getView().getModel().setProperty("/finance/rentPerc", dRentPerc);
            var sMsg = oBundle.getText("rentPercMsg", [dRent, dRentPerc, dIncome]);

            MessageToast.show(sMsg);
        }

    });
});