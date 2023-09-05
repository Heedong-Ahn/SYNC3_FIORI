sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("sync.projectb1501.controller.main", {
            onInit: function () {

            },
            
            onClick : function(){
                ////////////////////////         버튼 클릭 텍스트 출력         ////////////////////////////////////
                // alert('버튼 클릭하였습니다.')
                // var oText = this.byId('idText'); // Text 객체 가져오기
                // var sText = oText.getText(); // Text 객체에서 text property 값을 가져옴

                // alert(sText);
                ////////////////////////         버튼 클릭 인풋 값으로 텍스트 값 바꾸기         ///////////////////////////////
                var oInput = this.byId('idInput'); // Input 객체 가져오기
                var oText = this.byId('idText');

                var sUserText = oInput.getValue(); // Input 객체에서 value 가져오기

                oText.setText(sUserText);
                //////////////////////////////////////////////////////////////////////////////
            }
        });
    });
