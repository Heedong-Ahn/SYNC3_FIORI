sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("projectb1505.controller.HelloPanel", {
            onInit: function () {

            },
            
            onShowHello: function(){
                // sap.m.MessageToast.show('Hello Panel Click');
                let that = this; // this 를 사용할 수 있도록 1
                sap.m.MessageBox.confirm('Hello Panel Click', {
                    title: "Confirm",                                    // default
                    onClose: function(action){
                        switch(action){
                            case 'YES':
                                sap.m.MessageToast.show('Yes Click');
                                // that.afterSuccess(); // this 를 사용할 수 있도록 1
                                this.afterSuccess();    // this 를 사용할 수 있도록 2
                                break;
                            case 'NO' :
                                sap.m.MessageToast.show('No Click');
                                break;
                        }
                    }.bind(this), // this 를 사용할 수 있도록 2
                    styleClass: "",                                      // default
                    actions: [ sap.m.MessageBox.Action.YES,
                               sap.m.MessageBox.Action.NO ],         // default
                    emphasizedAction: sap.m.MessageBox.Action.Yes,        // default
                    initialFocus: null,                                  // default
                    textDirection: sap.ui.core.TextDirection.Inherit     // default
                });
            },
            afterSuccess: function(){
                sap.m.MessageToast.show('생성 후 로직');
            }
        });
    });
