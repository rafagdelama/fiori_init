sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" // Asegúrate de importar JSONModel
],
function (Controller, JSONModel) {
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

        }
    });
});
