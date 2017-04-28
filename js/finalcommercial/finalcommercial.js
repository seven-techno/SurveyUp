/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function newCommercialSurvey() {
var count,c;
 db.info().then(function(result){
    //console.log(result);
    //console.log(result.update_seq);
    if(result.doc_count==0){
    count=1;
        
    }
    else{
        count=result.doc_count+1;
        
    }
    var str = "" + count;
    var pad = "0000"
    var ans = pad.substring(0, pad.length - str.length) + str
    var currentDate = new Date();
    var year = currentDate.getFullYear().toString().substr(-2);
    var nextYear= currentDate.getFullYear()+1;
    nextYear=nextYear.toString().substr(-2);
    c=ans+"/"+year+"-"+nextYear+'/MOTOR-FINAL-COMMERCIAL';

    document.getElementById('report_number_final_private_id').value =c ;
    document.getElementById('report_number_final_private_id').readOnly = true;
 });
 var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();
//document.write("<b>" + day + "/" + month + "/" + year + "</b>")
//document.getElementById('report_date_final_private_id').readOnly = true;
    document.getElementById('report_date_final_private_id').value=  day + "/" + month + "/" + year ;

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

    var partsNode = document.getElementById("damagedPartsTable");
    while (partsNode.childNodes.length > 2) {
        partsNode.removeChild(partsNode.lastChild);
    }

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
        schedulePainting.style.display = 'block';

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

//    if (paintingRadio[2].checked) {
//
////        seventyFiveTwentyFivePainting.style.display = 'none';
////        seventyFiveTwentyFiveServiceTaxPainting.style.display = 'none';
//        schedulePainting.style.display = 'block';
//
//    }

}

function bodyRadioSelection() {

    if (document.getElementById("fabricated").checked) {

        document.getElementById("fabricated_body").style.display = "block";

    }

    if (document.getElementById("company").checked) {        

        document.getElementById("fabricated_body").style.display = "none";

    }

}

//function setMaterialPercentage(percentage) {
//
//    document.getElementById("schedule_painting_vat_final_private_id").innerHTML = percentage;
//
//}
//
//function setLabourPercentage(percentage) {
//
//    document.getElementById("schedule_painting_service_tax_final_private_id").innerHTML = percentage;
//    document.getElementById("schedule_painting_swach_bharath_final_private_id").innerHTML = percentage;
//    document.getElementById("schedule_painting_krishi_kalyan_final_private_id").innerHTML = percentage;
//
//}