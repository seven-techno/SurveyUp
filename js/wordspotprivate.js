  var url = window.location.href;
  //console.log(url);

   var a = url.split("_id=")[1];
   var a,b;    
      
  


  db.get(a,function(err,doc){
       //console.log(doc.report_date_final_private_id);
    if(!err){
   
 //document.getElementById("total_labour_assessed_print_id").innerHTML=doc.total_labour_assessed_final_private_id;
      // document.getElementById("cost_parts_assessed_print_id").innerHTML=doc.cost_of_spare_parts_assessed_final_private_id;
 document.getElementById("class_motor_private_id").value=doc.vehicle_class_final_private_id;
 document.getElementById("body_type_motor_private_id").value=doc.vehicle_body_type_final_private_id;
//document.getElementById("policy_code_bill_print_id").value=doc.policy_number_final_private_id;
//document.getElementById("license_no_bill_print_id").value=doc.dl_number_final_private_id;
document.getElementById("ins_name").innerHTML=doc.company_name_final_private_id;
document.getElementById("ins_date").innerHTML=doc.report_date_final_private_id;
document.getElementById("claim_print_id").innerHTML=doc.claim_number_code_final_private_id;
 

var str="",str1="";
   for(var key in doc.vehicle_permitted){
    
              var value=doc.vehicle_permitted[key];
              // data1 += key+ ":" +value ;
    str+="<tr><td>"+key+"</td><td>"+value.type+"</td><td>"+value.effective_from+
         "</td><td>"+value.valid_upto+"</td><td>"+value.badge_no+"</td></tr>";
                
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }
         document.getElementById("display").innerHTML=str;
         for(keyv in doc.survey_dates){
              var valuev=doc.survey_dates[keyv];
              // data1 += key+ ":" +value ;
             str1+="<tr><td>"+keyv+" visit on-</td><td>"+valuev.date+"</td><td>"+valuev.time+"</td></tr>";
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }
         document.getElementById("survey").innerHTML=str1;
   
 

 

     var db=new PouchDB('Personal_Details');
    //var personal_details= $('#personal_details').serializeObject();
    //personal_details._id= $('#number_personal_id').val();
    var a="0001";
     db.get(a,function(err,doc){
      
     //   document.getElementById("license_no_id").innerHTML=doc.personal_license_number;
    //document.getElementById("pan_no_motor_print_id").innerHTML=doc.personal_pan;

      document.getElementById("name_of_prson_company_motor_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_address;
    document.getElementById("tel_of_insurance_company_motor_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    document.getElementById("mobile_of_insurance_company_motor_print_id").innerHTML=doc.personal_mobile;
     document.getElementById("email_of_insurance_company_motor_print_id").innerHTML=doc.personal_email;
     document.getElementById("valid_upto_motor_print_id").innerHTML=doc.personal_license_validity;
     
   
     // document.getElementById("name_of_prson_motor_print_id").innerHTML=doc.personal_name;         
       //  document.getElementById("qualification_of_person_insurance_motor_print_id").innerHTML=doc.personal_designation;
    //document.getElementById("address_of_person_insurance_motor_print_id").innerHTML=doc.personal_address;
    
    //  document.getElementById("name_print_id").innerHTML=doc.personal_name;         
      //   document.getElementById("qualification_print_id").innerHTML=doc.personal_designation;
    //document.getElementById("address_print_id").innerHTML=doc.personal_address;
    document.getElementById("name_id").innerHTML=doc.personal_name;
               
     });


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
    // document.getElementById("date_company_motor_print_id").innerHTML=doc.report_date_final_private_id;
//document.getElementById("reg_motor_print_id").innerHTML=doc._id;
document.getElementById("report_number_motor_print_id").innerHTML=doc._id;
    document.getElementById("report_date_motor_print_id").innerHTML=doc.report_date_final_private_id;
    document.getElementById("branch_code_of_insurance_company_motor_print_id").innerHTML=doc.company_code_final_private_id;
    document.getElementById("manager_of_insurance_company_motor_print_id").innerHTML=doc.company_manager_final_private_id;
   document.getElementById("name_of_insurance_company_motor_print_id").innerHTML=doc.company_name_final_private_id;
    document.getElementById("address_of_insurance_company_motor_print_id").innerHTML=doc.company_address_final_private_id;
   // document.getElementById("policy_number_code_final_motor_id").value=doc.policy_number_code_final_private_id;
   //document.getElementById("policy_motor_print_id").innerHTML=doc.policy_number_code_final_private_id;
    //document.getElementById("policy_code_motor_print_id").innerHTML=doc.policy_number_final_private_id;
   // document.getElementById("claim_number_code_final_private_id").value=doc.claim_number_code_final_private_id;
   document.getElementById("claim_motor_print_id").innerHTML=doc.claim_number_final_private_id;
   // document.getElementById("insurer_code_final_private_id").value=doc.insurer_code_final_private_id;
    document.getElementById("insurers_motor_print_id").innerHTML=doc.insurer_name_final_private_id;
    document.getElementById("insurers_address_motor_print_id").innerHTML=doc.insurer_address_final_private_id;
  document.getElementById("insured_motor_print_id").innerHTML=doc.insured_name_final_private_id;
   document.getElementById("address_of_insured_motor_print_id").innerHTML=doc.insured_address_final_private_id;
document.getElementById("insurance_period_from_motor_private_id").innerHTML=doc.insurance_period_from_final_private_id;
    document.getElementById("insurance_period_to_motor_private_id").innerHTML=doc.insurance_period_to_final_private_id;
 document.getElementById("insurance_endorsement_motor_private_id").innerHTML=doc.insurance_endorsement_final_private_id;
   document.getElementById("sum_insured_motor_private_id").innerHTML=doc.sum_insured_final_private_id;
    
    document.getElementById("hpahyp_motorr_private_id").innerHTML=doc.hpahyp_final_private_id;

    document.getElementById("rc_verification_selection").innerHTML=doc.rc_verification_selection_final_private_id;
   // console.log(document.getElementById("rc_verification_selection").innerHTML=doc.rc_verification_selection_final_private_id);
    document.getElementById("registration_motor_print_id").innerHTML=doc.vehicle_registerd_number_final_private_id;
   document.getElementById("registration_date_motor_private_id").innerHTML=doc.vehicle_registration_date_final_private_id;
    document.getElementById("make_motor_print_id").innerHTML=doc.vehicle_make_final_private_id;
    document.getElementById("model_motor_print_id").innerHTML=doc.vehicle_model_final_private_id;
   document.getElementById("chassis_motor_private_id").innerHTML=doc.vehicle_chassis_number_final_private_id;
    document.getElementById("engine_motor_private_id").innerHTML=doc.vehicle_engine_number_final_private_id;
    document.getElementById("colour_motor_private_id").innerHTML=doc.vehicle_colour_final_private_id;
  // document.getElementById("road_tax_motor_private_id").value=doc.road_tax_selection_final_private_id;

    document.getElementById("road_taxx_motor_private_id").value=doc.road_tax_date_final_private_id;
 document.getElementById("body_type_motor_private_id").innerHTML=doc.vehicle_body_type_final_private_id;
   document.getElementById("class_motor_private_id").innerHTML=doc.vehicle_class_final_private_id;
   document.getElementById("vehicle_condition_selection_motor_private_id").innerHTML=doc.vehicle_condition_selection_final_private_id;
    document.getElementById("odometer_motor_private_id").innerHTML=doc.vehicle_odometer_reading_final_private_id;
    //document.getElementById("vehicle_rc_validity_final_private_id").value=doc.vehicle_rc_validity_final_private_id;
   // document.getElementById("vehicle_seating_capacity_final_private_id").value=doc.vehicle_seating_capacity_final_private_id;
   //document.getElementById("dl_verification_selection_final_private_id").value=doc.dl_verification_selection_final_private_id;
   document.getElementById("dl_number_motor_private_id").innerHTML=doc.dl_number_final_private_id;
   document.getElementById("dl_name_motor_private_id").innerHTML=doc.dl_name_final_private_id;
   document.getElementById("dl_address_motor_private_id").innerHTML=doc.dl_address_final_private_id;
   //document.getElementById("dl_issue_date_motor_private_id").innerHTML=doc.dl_issue_date_final_private_id;

 document.getElementById("dl_issuing_authority_motor_private_id").innerHTML=doc.dl_issuing_authority_final_private_id;
  document.getElementById("dl_type_motor_private_id").innerHTML=doc.dl_type_final_private_id;
document.getElementById("dl_endorsements_motor_private_id").innerHTML=doc.dl_endorsements_final_private_id;
//document.getElementById("accident_date_motor_private_id").innerHTML=doc.accident_date_final_private_id;
document.getElementById("accident_time_motor_private_id").innerHTML=doc.accident_time_final_private_id;
document.getElementById("accident_place_motor_private_id").innerHTML=doc.accident_place_final_private_id;
document.getElementById("accident_cause_motor_private_id").innerHTML=doc.accident_cause_final_private_id;
//document.getElementById("property_damage_motor_private_id").innerHTML=doc.property_damage_final_private_id;
document.getElementById("details_of_injury_motor_private_id").innerHTML=doc.details_of_injury_final_private_id;
document.getElementById("accident_reported_to_police_motor_private_id").innerHTML=doc.accident_reported_to_police_final_private_id;
document.getElementById("name_of_police_station_motor_private_id").innerHTML=doc.name_of_police_station_final_private_id;
document.getElementById("fir_details_motor_private_id").innerHTML=doc.fir_details_final_private_id;
document.getElementById("survey_request_date_motor_private_id").innerHTML=doc.survey_request_date_final_private_id;

document.getElementById("survey_place_motor_private_id").innerHTML=doc.survey_place_final_private_id;
var strp="",strc="";

  for(var i=0;i<1;i++){
for(var keyp in doc.preliminary){
  //console.log(valuep=doc.preliminary[keyp]);
              var valuep=doc.preliminary[keyp];
              // data1 += key+ ":" +value ;
  //  strp+="<tr><td>"+keyp+"</td><td>"+valuep.comments+"</td></tr>";
 //   document.getElementById("preliminary").innerHTML=strp;
  }
  
  //console.log(strp);
}

for(var j=0;j<1;j++){
for(var keyc in doc.surveyor){
  //console.log(valuep=doc.preliminary[keyp]);
              var valuec=doc.surveyor[keyc];
              // data1 += key+ ":" +value ;
    strc+="<tr><td>"+keyc+"</td><td>"+valuec.comments+"</td></tr>";
    document.getElementById("comments_table").innerHTML=strc;
  }
  
  //console.log(strc);
}


}

});