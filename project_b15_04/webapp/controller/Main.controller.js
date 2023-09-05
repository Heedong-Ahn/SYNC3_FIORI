sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("projectb1504.controller.Main", {
            onInit: function () {
                var oDatas = {
                    'list' : [
                
                    ]
                };
                var oModel = new JSONModel(oDatas);

                this.getView().setModel(oModel);
                
            },
            
            onAdd: function(oEvent){
                debugger;
                var oModel = this.getView().getModel();
                var aList = oModel.getData().list;

                // var sName = this.getView().byId('idName').getValue(),
                //     sAddress = this.getView().byId('idAdd').getValue(),
                //     sPhone = this.getView().byId('idPho').getValue(),
                //     sDepartment = this.getView().byId('idDep').getValue()
            
                    // aList.push({Name : sName, Address: sAddress, Phone: sPhone, Department : sDepartment});
                    aList.push({Name:'', Address: '', Phone: '', Department : ''});

                    oModel.setData(aList, true);
            },
            onDelete: function(oEvent){
                var oModel = this.getView().getModel();
                var aList = oModel.getData().list;
                var oTable = this.getView().byId('idTab');

                var aSelList = oTable.getSelectedIndices();               // 테이블에서 선택된 index를 array 형태로 받기
                
                for(var i = aSelList.length-1; i > -1; i--){              // 앞에서부터 지우면 인덱스가 꼬여서 뒤에서부터 삭제해줘야함
                    aList.splice(aSelList[i], 1 );                         // LIFO 방식으로~
                }; 
                    
                oModel.setProperty('/list', aList);
                // oModel.setData(aList, true);
            },
            onRowActionDel: function(oEvent){
                debugger;
                var oModel = this.getView().getModel();
                var aList = oModel.getData().list;

                // delete aList[oEvent.getParameters().row.getIndex()];
                aList.splice(oEvent.getParameters().row.getIndex(), 1 ); 
                oModel.setProperty('/list', aList);
            }
        });
    });
