function newPrivateSurvey(){
 var count,c;
 db.info().then(function(result){
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
    c=ans+"/"+year+"-"+nextYear+'/MOTOR-FINAL-PRIVATE';
    console.log(c);
    document.getElementById('report_number_final_private_id').value =c ;
    document.getElementById('report_number_final_private_id').readOnly = true;
 });
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();
    var abc= currentDate.getFullYear()+1;
    abc=abc.toString().substr(-2);
    console.log(abc);
    document.getElementById('report_date_final_private_id').value=  day + "/" + month + "/" + year ;
    document.getElementById('road_tax_display').style.display = 'none';
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

function paintingRadioSelection() {

    var paintingRadio = document.getElementsByName('painting');
    var schedulePainting = document.getElementById('schedule_painting_final_survey_id');

    if (paintingRadio[0].checked) {


        schedulePainting.style.display = 'none';

    }

    if (paintingRadio[1].checked) {


        schedulePainting.style.display = 'none';

    }
    if (paintingRadio[2].checked) {


        schedulePainting.style.display = 'block';

    }
    if (paintingRadio[3].checked) {


        schedulePainting.style.display = 'none';

    }
    if (paintingRadio[4].checked) {


        schedulePainting.style.display = 'block';

    }

}
     