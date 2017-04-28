  var url = window.location.href;
  //console.log(url);

   var a = url.split("_id=")[1];
   var a,b;    // var aValue = localStorage.getItem("final_private");
      
  


  db.get(a,function(err,doc){
       //console.log(doc.report_date_final_private_id);
    if(!err){
     //  document.getElementById("total_labour_print_id").innerHTML=doc.total_labour_claimed_final_private_id;
      //document.getElementById("cost_parts_print_id").innerHTML=doc.cost_of_spare_parts_claimed_final_private_id;
      //document.getElementById("spot_photos_print_id").innerHTML=doc.spot_photo_claimed_final_private_id;
      //document.getElementById("spot_photos_assessed_print_id").innerHTML=doc.spot_photo_assessed_final_private_id
     // document.getElementById("spot_repair_print_id").innerHTML=doc.spot_repairs_claimed_final_private_id;
    //  document.getElementById("spot_repair_assessed_print_id").innerHTML=doc.spot_repairs_assessed_final_private_id;
//document.getElementById("policy_number_bill_print_id").value=doc.policy_number_code_final_private_id;      
//document.getElementById("policy_code_motor_print_id").value=doc.policy_number_code_final_private_id;
 //document.getElementById("class_motor_private_id").value=doc.vehicle_class_final_private_id;
// document.getElementById("body_type_motor_private_id").value=doc.vehicle_body_type_final_private_id;
//document.getElementById("policy_code_bill_print_id").value=doc.policy_number_final_private_id;


document.getElementById("license_no_bill_print_id").value=doc.dl_number_final_private_id;
//document.getElementById("ins_name").innerHTML=doc.company_name_final_private_id;
//document.getElementById("claim_print_id").innerHTML=doc.claim_number_code_final_private_id;
//document.getElementById("ins_date").innerHTML=doc.report_date_final_private_id;
    document.getElementById("report_number_bill_print_id").innerHTML=doc._id;
    document.getElementById("report_date_bill_print_id").innerHTML=doc.report_date_final_private_id;
    document.getElementById("branch_code_of_insurance_company_bill_print_id").innerHTML=doc.company_code_final_private_id;
    document.getElementById("manager_of_insurance_company_bill_print_id").innerHTML=doc.company_manager_final_private_id;
   document.getElementById("name_of_insurance_company_bill_print_id").innerHTML=doc.company_name_final_private_id;
    document.getElementById("address_of_insurance_company_bill_print_id").innerHTML=doc.company_address_final_private_id;
   // document.getElementById("policy_number_code_final_private_id").value=doc.policy_number_code_final_private_id;
   document.getElementById("policy_number_bill_print_id").innerHTML=doc.policy_number_code_final_private_id;
   document.getElementById("policy_code_bill_print_id").innerHTML=doc.policy_number_final_private_id;
    document.getElementById("claim_number_code_bill_private_id").innerHTML=doc.claim_number_code_final_private_id;
   document.getElementById("claim_number_bill_print_id").innerHTML=doc.claim_number_final_private_id;
   // document.getElementById("insurer_code_final_private_id").value=doc.insurer_code_final_private_id;
   // document.getElementById("insurer_name_final_private_id").value=doc.insurer_name_final_private_id;
   // document.getElementById("insurer_address_final_private_id").value=doc.insurer_address_final_private_id;
   document.getElementById("name_of_insured_bill_print_id").innerHTML=doc.insured_name_final_private_id;
   document.getElementById("address_of_insured_bill_print_id").innerHTML=doc.insured_address_final_private_id;
//document.getElementById("insurance_period_from_final_private_id").value=doc.insurance_period_from_final_private_id;
    //document.getElementById("insurance_period_to_final_private_id").value=doc.insurance_period_to_final_private_id;
 //document.getElementById("insurance_endorsement_final_private_id").value=doc.insurance_endorsement_final_private_id;
   // document.getElementById("sum_insured_final_private_id").value=doc.sum_insured_final_private_id;
    //document.getElementById("hpahyp_motorr_private_id").innerHTML=doc.hpahyp_final_private_id;

    for(var key in doc.vehicle_permitted){
    var str="";
              var value=doc.vehicle_permitted[key];
              // data1 += key+ ":" +value ;
    str+="<tr><td>"+key+"</td><td>"+value.type+"</td><td>"+value.effective_from+
         "</td><td>"+value.valid_upto+"</td><td>"+value.badge_no+"</td></tr>";
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }

   

    // document.getElementById("rc_verification_selection_final_private_id").value=doc.rc_verification_final_private_id;
    document.getElementById("vehicle_registration_number_bill_print_id").innerHTML=doc.vehicle_registerd_number_final_private_id;
   // document.getElementById("vehicle_registration_date_final_private_id").value=doc.vehicle_registration_date_final_private_id;
    document.getElementById("vehicle_make_bill_print_id").innerHTML=doc.vehicle_make_final_private_id;
    document.getElementById("vehicle_model_bill_print_id").innerHTML=doc.vehicle_model_final_private_id;
  //  document.getElementById("vehicle_chassis_number_final_private_id").value=doc.vehicle_chassis_number_final_private_id;
   // document.getElementById("vehicle_engine_number_final_private_id").value=doc.vehicle_engine_number_final_private_id;
   // document.getElementById("vehicle_colour_final_private_id").value=doc.vehicle_colour_final_private_id;
   // document.getElementById("road_tax_selection_final_private_id").value=doc.road_tax_selection_final_private_id;
    //document.getElementById("road_tax_date_final_private_id").value=doc.road_tax_date_final_private_id;
   // document.getElementById("vehicle_body_type_final_private_id").value=doc.vehicle_body_type_final_private_id;
   // document.getElementById("vehicle_class_final_private_id").value=doc.vehicle_class_final_private_id;
   // document.getElementById("vehicle_condition_selection_final_private_id").value=doc.vehicle_condition_selection_final_private_id;
    //document.getElementById("vehicle_odometer_reading_final_private_id").value=doc.vehicle_odometer_reading_final_private_id;
    document.getElementById("valid_upto_bill_print_id").innerHTML=doc.vehicle_rc_validity_final_private_id;
   // document.getElementById("vehicle_seating_capacity_final_private_id").value=doc.vehicle_seating_capacity_final_private_id;
    //document.getElementById("dl_verification_selection_final_private_id").value=doc.dl_verification_selection_final_private_id;
      
                        
    document.getElementById("license_no_bill_print_id").innerHTML=doc.dl_number_final_private_id;
   // document.getElementById("dl_name_final_private_id").value=doc.dl_name_final_private_id;
    //document.getElementById("dl_address_final_private_id").value=doc.dl_address_final_private_id;
    //document.getElementById("dl_issue_date_final_private_id").value=doc.dl_issue_date_final_private_id;

  //  document.getElementById("dl_issuing_authority_final_private_id").value=doc.dl_issuing_authority_final_private_id;
  //  document.getElementById("dl_type_final_private_id").value=doc.dl_type_final_private_id;
//document.getElementById("dl_endorsements_final_private_id").value=doc.dl_endorsements_final_private_id;
//document.getElementById("accident_time_final_private_id").value=doc.accident_time_final_private_id;
//document.getElementById("accident_place_final_private_id").value=doc.accident_place_final_private_id;
//document.getElementById("accident_cause_final_private_id").value=doc.accident_cause_final_private_id;
//document.getElementById("property_damage_final_private_id").value=doc.property_damage_final_private_id;
//document.getElementById("details_of_injury_final_private_id").value=doc.details_of_injury_final_private_id;
//document.getElementById("accident_reported_to_police_final_private_id").value=doc.accident_reported_to_police_final_private_id;
//document.getElementById("name_of_police_station_final_private_id").value=doc.name_of_police_station_final_private_id;
//document.getElementById("fir_details_final_private_id").value=doc.fir_details_final_private_id;
//document.getElementById("survey_request_date_final_private_id").value=doc.survey_request_date_final_private_id;

//document.getElementById("survey_place_final_private_id").value=doc.survey_place_final_private_id;


var b1=document.getElementById("spot_survey_bill_print_id").innerHTML=doc.spot_survey_charges_final_private_id;
var b2=document.getElementById("final_survey_bill_print_id").innerHTML=doc.final_survey_charges_final_private_id;
var b3=document.getElementById("reinspection_bill_print_id").innerHTML=doc.reinspection_charges_final_private_id;
var b4=document.getElementById("opinion_bill_print_id").innerHTML=doc.opinion_charges_final_private_id;
var b5=document.getElementById("check_bill_print_id").innerHTML=doc.check_charges_final_private_id;

var b6=document.getElementById("local_expense_bill_print_id").innerHTML=doc.local_travelling_expenses_final_private_id;
document.getElementById("local_location_bill_print_id").innerHTML=doc.local_place_of_survey_final_private_id;
document.getElementById("local_distance_bill_print_id").innerHTML=doc.local_distance_travelled_final_private_id;
var b7=document.getElementById("outstation_expense_bill_print_id").innerHTML=doc.outstation_travelling_expenses_final_private_id;
document.getElementById("outstation_location_bill_print_id").innerHTML=doc.outstation_place_of_survey_final_private_id;
document.getElementById("outstation_distance_bill_print_id").innerHTML=doc.outstation_distance_travelled_final_private_id;
//document.getElementById("number_of_photos_bill_print_id").innerHTML=doc.number_of_photos_final_private_id;
//document.getElementById("rate_per_photo_bill_print_id").innerHTML=doc.per_photo_price_final_private_id;
var b8=document.getElementById("outstation_bill_print_id").innerHTML=doc.outstation_allowance_final_private_id;
var b9=document.getElementById("miscellaneous_bill_print_id").innerHTML=doc.postage_charges_final_private_id;
a=document.getElementById("number_of_photos_bill_print_id").innerHTML=doc.number_of_photos_final_private_id;
b=document.getElementById("rate_per_photo_bill_print_id").innerHTML=doc.per_photo_price_final_private_id;
 var sum=a*b;
 var s=parseInt(b1, 10)+parseInt(b2, 10)+parseInt(b3, 10)+parseInt(b4, 10)+parseInt(b5, 10)+
 parseInt(b6, 10)+parseInt(b7, 10)+parseInt(b8, 10)+parseInt(b9, 10)+sum;
 document.getElementById("photos_bill_print_id").innerHTML=sum;
 document.getElementById("total_bill_print_id").innerHTML=s;


 var th = ['','Thousand','Million', 'Billion','Trillion'];
var dg = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine'];
 var tn = ['Ten','Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen', 'Seventeen','Eighteen','Nineteen'];
 var tw = ['Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

//function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g,'');
    if (s != parseFloat(s)) return 'not a number';
    var x = s.indexOf('.');
    if (x == -1)
        x = s.length;
    if (x > 15)
        return 'too big';
    var n = s.split(''); 
    var str = '';
    var sk = 0;
    for (var i=0;   i < x;  i++) {
        if ((x-i)%3==2) { 
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }

    if (x != s.length) {
        var y = s.length;
        str += 'point ';
        for (var i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }
    //return str.replace(/\s+/g,' ');
    document.getElementById("word_bill_print_id").innerHTML=str.replace(/\s+/g,' ');
     var db=new PouchDB('Personal_Details');
    //var personal_details= $('#personal_details').serializeObject();
    //personal_details._id= $('#number_personal_id').val();
    var a="0001";
     db.get(a,function(err,doc){
document.getElementById("name_of_prson_company_bill_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_address;
    document.getElementById("tel_of_insurance_company_bill_print_id").innerHTML=doc.personal_office_phone;
    document.getElementById("pan_no_bill_print_id").innerHTML=doc.personal_pan;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    document.getElementById("mobile_of_insurance_company_bill_print_id").innerHTML=doc.personal_mobile;
     document.getElementById("email_of_insurance_company_bill_print_id").innerHTML=doc.personal_email;
     document.getElementById("valid_upto_bill_print_id").innerHTML=doc.personal_license_validity;


     // document.getElementById("name_of_prson_company_motor_print_id").innerHTML=doc.personal_name;         
       //  document.getElementById("qualification_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_designation;
   // document.getElementById("address_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_address;
    //document.getElementById("tel_of_insurance_company_motor_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
  //  document.getElementById("mobile_of_insurance_company_motor_print_id").innerHTML=doc.personal_mobile;
    // document.getElementById("email_of_insurance_company_motor_print_id").innerHTML=doc.personal_email;
    // document.getElementById("valid_upto_motor_print_id").innerHTML=doc.personal_license_validity;
     
     document.getElementById("p_name").innerHTML=doc.personal_name;
     document.getElementById("p_bank").innerHTML=doc.personal_bank_name;
     document.getElementById("p_account").innerHTML=doc.personal_account_number;
     document.getElementById("p_micr").innerHTML=doc.personal_micr;
     document.getElementById("p_isf").innerHTML=doc.personal_ifs_code;
     
      
               



      
     // var b=doc.personal_name;
     // console.log(b);
     });

//}
 //console.log(toWords(s));
/*var db=new PouchDB('personalDetails');
      var v2=doc.dl_number_final_private_id;  
//var v2=document.getElementById("dl_number_final_private_id");


       db.get(v2,function(err,doc){

         
         document.getElementById("name_of_prson_company_bill_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_address;
    document.getElementById("tel_of_insurance_company_bill_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    document.getElementById("mobile_of_insurance_company_bill_print_id").innerHTML=doc.personal_mobile;
     document.getElementById("email_of_insurance_company_bill_print_id").innerHTML=doc.personal_email;
     document.getElementById("valid_upto_bill_print_id").innerHTML=doc.personal_license_validity;


      document.getElementById("name_of_prson_company_motor_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_address;
    document.getElementById("tel_of_insurance_company_motor_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    document.getElementById("mobile_of_insurance_company_motor_print_id").innerHTML=doc.personal_mobile;
     document.getElementById("email_of_insurance_company_motor_print_id").innerHTML=doc.personal_email;
     document.getElementById("valid_upto_motor_print_id").innerHTML=doc.personal_license_validity;
     
     document.getElementById("p_name").innerHTML=doc.personal_name;
     document.getElementById("p_bank").innerHTML=doc.personal_bank_name;
     document.getElementById("p_account").innerHTML=doc.personal_account_number;
     document.getElementById("p_micr").innerHTML=doc.personal_micr;
     document.getElementById("p_isf").innerHTML=doc.personal_ifs_code;
     
      document.getElementById("name_of_prson_motor_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_motor_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_motor_print_id").innerHTML=doc.personal_address;
    
      document.getElementById("name_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_print_id").innerHTML=doc.personal_address;
    document.getElementById("name_id").innerHTML=doc.personal_name;
               
       }); */     // var personal_details= $('#personal_details').serializeObject();
      // personal_details._id= $('#license_number_personal_id').val();
       
     //var v1=document.getElementById("pan_no_bill_print_id").value=doc.license_number_personal_id;
      
      //  console.log(doc.license_number_personal_id);
//document.getElementById("reg_print_id").innerHTML=doc._id;
 //document.getElementById("date_print_id").innerHTML=doc.report_date_final_private_id;
   //document.getElementById("license_no_motor_print_id").innerHTML=doc.dl_number_final_private_id
    

}
});