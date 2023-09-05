sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel" // 1. 모델을 사용하기 위한 라이브러리 추가
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) { // 2. JSONModel 추가
        "use strict";

        return Controller.extend("test.projectb1503.controller.View1", {
            //  Controller의 Life Cycle의 첫번쨰로 무조건 실해되는 Function
            //  Initialization 이 목적
            onInit: function () {
                // debugger;
                var oDatas = { // JSON data 생성
                               'name' : 'Heedong Ahn',   
                               'title' : 'Title HD',
                               'list' : [
                                {num1:12, operator:'test', num2:13, result: 0}
                                ],
                               'age' : 20
                            };                

                                                                       // JSON data를 포함한 json 모델 생성
                var oModel = new JSONModel(oDatas);                    // 자주 사용할시에는 이렇게 하자~
                // var oModel = new sap.ui.model.json.JSONModel();     // 이렇게도 사용 가능

                                                                       // main은 model의 이름을 뜻함
                this.getView().setModel(oModel, 'main');               // View에게 Model Set (json model을 view에서 사용할 수 있도록)
            },


            onClick: function (oEvent) {
                var oText = this.byId('text');
                var nNum1 = Number(this.byId('inputNum1').getValue()),
                    nNum2 = Number(this.byId('inputNum2').getValue());
                var nResult = 0;
                var oItem = this.byId('select').getSelectedItem();
                var sOperator = oItem.getKey();

                debugger // break point 잡는것 
                            // 디버거를 써먹으려면 개발자 도구를 켠 상태여야함

                var sOp;

                switch(sOperator){
                    case('PLUS'):
                        sOp = '+'
                        nResult = nNum1 + nNum2;
                        break;
                    case('MINUS'):
                        sOp = '-'
                        nResult = nNum1 - nNum2;
                        break;
                    case('MULTIPLE'):
                        sOp = '*'
                        nResult = nNum1 * nNum2;
                        break;
                    case('DIVISION'):
                        // if(!nNum2) return this.onChange(this.byId('inputNum2'));
                        // if(!nNum2){
                        //     this.byId('inputNum2').fireEvnet('change')
                        // }
                        sOp = '/'
                        nResult = nNum1 / nNum2;
                        break;
                }
                oText.setText(nResult);

                this.onAdd(nNum1, nNum2, sOp ,nResult);
            },


            onChange: function(oEvent){                                       // 이거는 Input과 관련된 function
                                                                              // oEvent에 들어오는것이 Input에 관한것

                var nNum = Number(oEvent.getParameters().value); // Nan or 0 -> false

                if(!nNum && this.byId('select').getSelectedKey() === 'DIVISION'){
                    // 입력값이 없거나 0이면 에러 상태로변경
                    oEvent.getSource().setValueState('Error');               // Input field에 대한 Set 메서드
                    this.byId('button').setEnabled(false);                   // Button에 대한 Enable set 메서드

                }else{
                    oEvent.getSource().setValueState('None');
                    this.byId('button').setEnabled(true);   
                }
            },

            onAdd: function(num1, num2, op, result) {
                // main 모델의 list 배열 데이터를 가져오는 방법
                var oModel = this.getView().getModel('main'), // main 모델 가져오기
                    // alist  = oModel.getData().list,           // list 배열 데이터 가져오기    // 한꺼번에 모델에 있는 모든 데이터를 다 가져옴
                                                                                            // 근데 그 중 .list 했으니까 이건 리스트 형태
                    alist2 = oModel.getProperty("/list");      // list 배열 데이터 가져오기 2  // 경로에 맞는 데이터만 가져옴 ("/") 만 입력하면 전체 데이터 다 가져옴

                
                switch(op){
                    case 'PLUS':
                        
                        break;
                    case('MINUS'):
                        sOp = nNum1 - nNum2;
                        break;
                    case('MULTIPLE'):
                        nResult = nNum1 * nNum2;
                        break;
                    case('DIVISION'):
                        // if(!nNum2) return this.onChange(this.byId('inputNum2'));
                        // if(!nNum2){
                        //     this.byId('inputNum2').fireEvnet('change')
                        // }
                        nResult = nNum1 / nNum2;
                        break;
                }
                debugger;

                // alist2에 새로운 데이터를 추가
                alist2.push({num1 : num1, operator: op, num2: num2, result : result});

                // alist2를 그대로 모델의 list로 바꾼다.
                oModel.setProperty('/list', alist2);
            }
        });
    });
