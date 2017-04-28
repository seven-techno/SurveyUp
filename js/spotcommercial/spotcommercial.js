/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

//function newSpotCommercialSurvey() {

  //  var flag = "MOTOR";

  /*  var reportNumberElement = document.getElementById('report_number_final_private_id');

    var lastReportNumber;

    var number;

    var db;

    var d = new Date();

    var date = d.getDate();

    var month = d.getMonth();

    var year = d.getYear();

//    Todo check for year jan to march previous year not next year

    if (month === 0 || month === 1 || month === 2) {

        var year1raw = d.getFullYear() - 1;

        var year1 = year1raw.toString().substr(2, 2);

        var year2 = d.getFullYear().toString().substr(2, 2);

    } else {

        var year1 = d.getFullYear().toString().substr(2, 2);

        var year2raw = d.getFullYear() + 1;

        var year2 = year2raw.toString().substr(2, 2);

    }

    var request = window.indexedDB.open("survey_database", 1);

    request.onerror = function (event) {
        // Do something with request.errorCode!
        console.log("Database error: " + event.target.errorCode);
    };

    request.onsuccess = function (event) {
        // Do something with request.result!
        db = event.target.result;

        var transaction = db.transaction(["motor_survey"], "readonly");

        transaction.oncomplete = function (event) {

        };

        transaction.onerror = function (event) {

        };

        var motorObjectStore = transaction.objectStore("motor_survey");

        var reportNumberIndex = motorObjectStore.index("reportNumber");

        var reportNumberCursor = reportNumberIndex.openCursor(null, 'prev');

        reportNumberCursor.onerror = function (event) {

        };

        reportNumberCursor.onsuccess = function (event) {

            if (event.target.result) {

                lastReportNumber = parseInt(event.target.result.value.reportNumber.toString().substring(0, 4));
                lastReportNumber += 1;
                number = ('0000' + lastReportNumber).slice(-4);
                reportNumberElement.value = number + "/" + year1 + "-" + year2 + "/" + flag;

            } else {

                lastReportNumber = 1;
                number = ('0000' + lastReportNumber).slice(-4);
                reportNumberElement.value = number + "/" + year1 + "-" + year2 + "/" + flag;

            }

            sessionStorage.setItem('reportKey', number + "/" + year1 + "-" + year2 + "/" + flag);

            db.close();

        };

    };

    document.getElementById("form_final_private_id").reset();
    $('#report_date_final_private_id').datepicker('update', new Date());

    document.getElementById('road_tax_display').style.display = 'none';

    var vehicleNode = document.getElementById("vehicleListsTable");
    while (vehicleNode.childNodes.length > 2) {
        vehicleNode.removeChild(vehicleNode.lastChild);
    }

    var surveyNode = document.getElementById("surveyDatesTable");
    while (surveyNode.childNodes.length > 2) {
        surveyNode.removeChild(surveyNode.lastChild);
    }

//    var partsNode = document.getElementById("damagedPartsTable");
//    while (partsNode.childNodes.length > 2) {
//        partsNode.removeChild(partsNode.lastChild);
//    }

}

function roadTaxSelection() {

    var roadTaxElement = document.getElementById('road_tax_selection_final_private_id');

    var roadTax = roadTaxElement.options[roadTaxElement.selectedIndex].value;

    var roadTaxPaidUptoDate = document.getElementById('road_tax_display');

    if (roadTax === 'Paid upto') {

        roadTaxPaidUptoDate.style.display = 'block';

    } else {

        roadTaxPaidUptoDate.style.display = 'none';

    }

}*/
function buttonClick(){
    var count,c;
    db.info().then(function (result) {
  if(result.doc_count == 0) {
    console.log(result);
    count=1;
}else{
    //console.log('It's empty!');
    count=result.doc_count +1 ;
    
   // var date=new Date();
   // var components=[
  //   date.getDate(),
    // date.getTime()
   //];
    //countnum=components.join("");
}
var str = "" + count;
var pad = "0000"
var ans = pad.substring(0, pad.length - str.length) + str
var currentDate = new Date();
    var year = currentDate.getFullYear().toString().substr(-2);
    var nextYear= currentDate.getFullYear()+1;
    nextYear=nextYear.toString().substr(-2);
    c=ans+"/"+year+"-"+nextYear+'/MOTOR-SPOT-COMMERCIAL';
document.getElementById('report_number_final_private_id').readOnly=true;
document.getElementById('report_number_final_private_id').value=c;
});
    

var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();
//document.write("<b>" + day + "/" + month + "/" + year + "</b>")
//document.getElementById('report_date_final_private_id').readOnly=true;
    document.getElementById('report_date_final_private_id').value=  day + "/" + month + "/" + year ;
         //});
    //document.getElementById("form_final_private_id").reset();
    //$('#report_date_final_private_id').datepicker('update', new Date());

    document.getElementById('road_tax_display').style.display = 'none';

    var vehicleNode = document.getElementById("vehicleListsTable");
    while (vehicleNode.childNodes.length > 2) {
        vehicleNode.removeChild(vehicleNode.lastChild);
    }

    var surveyNode = document.getElementById("surveyDatesTable");
    while (surveyNode.childNodes.length > 2) {
        surveyNode.removeChild(surveyNode.lastChild);
    }

    //var partsNode = document.getElementById("damagedPartsTable");
    //while (partsNode.childNodes.length > 2) {
      //  partsNode.removeChild(partsNode.lastChild);

    // }
 }
     function roadTaxSelection() {

    var roadTaxElement = document.getElementById('road_tax_selection_final_private_id');

    var roadTax = roadTaxElement.options[roadTaxElement.selectedIndex].value;

    var roadTaxPaidUptoDate = document.getElementById('road_tax_display');

    if (roadTax === 'Paid upto') {

        roadTaxPaidUptoDate.style.display = 'block';

    } else {

        roadTaxPaidUptoDate.style.display = 'none';

    }

}

function bodyRadioSelection() {

    var bodyRadio = document.getElementsByName('body_radio');

    var fabricatedBody = document.getElementById('fabricated_body');

    if (bodyRadio[0].checked) {

        fabricatedBody.style.display = 'none';

    }

    if (bodyRadio[1].checked) {

        fabricatedBody.style.display = 'block';

    }

}

//function serviceTaxRadioSelection() {
//
//    var labourRadio = document.getElementsByName('labour');
//
//    var labourServiceTax = document.getElementsByClassName('labour_service_tax');
//
//    if (labourRadio[0].checked) {
//
//        for (var i = 0; i < labourServiceTax.length; i++) {
//
//            labourServiceTax[i].style.display = 'none';
//
//        }
//
//    }
//
//    if (labourRadio[1].checked) {
//
//        for (var i = 0; i < labourServiceTax.length; i++) {
//
//            labourServiceTax[i].style.display = 'block';
//
//        }
//
//    }
//
//}

function paintingRadioSelection() {

    var paintingRadio = document.getElementsByName('painting');

//    var seventyFiveTwentyFivePainting = document.getElementById('seventyFiveTwentyFivePainting');
//
//    var seventyFiveTwentyFiveServiceTaxPainting = document.getElementById('seventyFiveTwentyFiveServiceTaxPainting');

    var schedulePainting = document.getElementById('schedule_painting_final_survey_id');

//    if (paintingRadio[0].checked) {
//
//        seventyFiveTwentyFivePainting.style.display = 'none';
//        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'none';
//        schedulePainting.style.display = 'none';
//
//    }

    if (paintingRadio[0].checked) {

//        seventyFiveTwentyFivePainting.style.display = 'block';
//        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'none';
        schedulePainting.style.display = 'none';

    }

    if (paintingRadio[1].checked) {

//        seventyFiveTwentyFivePainting.style.display = 'none';
//        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'block';
        schedulePainting.style.display = 'none';

    }
    if (paintingRadio[2].checked) {

//        seventyFiveTwentyFivePainting.style.display = 'none';
//        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'block';
        schedulePainting.style.display = 'none';

    }
    if (paintingRadio[3].checked) {

//        seventyFiveTwentyFivePainting.style.display = 'none';
//        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'block';
        schedulePainting.style.display = 'none';

    }
    if (paintingRadio[4].checked) {

//        seventyFiveTwentyFivePainting.style.display = 'none';
//        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'block';
        schedulePainting.style.display = 'block';

    }

}

