sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel", // Asegúrate de importar JSONModel
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

],
/**
 * 
 * @param {typeof sap.ui.core.mvc.Controller} Controller 
 * @param {typeof sap.ui.core.mvc.Filter} Filter 
 * @param {typeof sap.ui.core.mvc.FilterOperator} FilterOperator 
 * @returns 
 */
function (Controller, JSONModel, FilterOperator) {
    "use strict";

    return Controller.extend("invoice.controller.Main", {
        onInit: function () {
            // Corrección: Es 'JSONModel' y no 'oJSONModel'
            const oJSONModel = new JSONModel();
            // Obtiene la vista
            const oView = this.getView();
            // Carga el archivo JSON
            oJSONModel.loadData("/model/selectionScreenMenu.json");
            // Asigna el modelo a la vista
            oView.setModel(oJSONModel, "selectionScreen");

        },
        onFilter: function(onEvent)  {

            const oData = this.getView().getModel("selectionScreen").getData();
            let filters = [];

            if (oData.ShipName !== ""){
                filters.push(new Filter("ShipName", FilterOperator.Contains, oData.ShipName ));
            }

            if (oData.Countrykey !== ""){
                filters.push(new Filter("Country", FilterOperator.EQ, oData.Countrykey ));
            }

            const oList = this.getView().byId("invoicesList");
            const oBinding =  oList.getBinding("items");
            oBinding.filter(filters);
            
        } ,
        onClearFilter: function(){
            const oModelSS =this.getView().getModel("selectionScreen");
            oModelSS.setProperty("/CountryKey", "");
            oModelSS.setProperty("/ShipName", "");

            const oList = this.getView().byId("invoicesList");
            const oBinding =  oList.getBinding("items");
            oBinding.filter([]);
        }
    });
});
