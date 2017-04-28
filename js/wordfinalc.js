  var url = window.location.href;
  //console.log(url);

   var a = url.split("_id=")[1];
   var a,b;    // var aValue = localStorage.getItem("final_private");
      
  


  db.get(a,function(err,doc){
       //console.log(doc.report_date_final_private_id);
    if(!err){
        var metal=document.getElementById("depresiationmetal").innerHTML=doc.metal_percentage_final_private_id;
        var fibre= document.getElementById("depresiationfibre").innerHTML=doc.fibre_percentage_final_private_id;
       var plastic=  document.getElementById("depresiationplastic").innerHTML=doc.plastic_percentage_final_private_id;
       document.getElementById("dl_name_motor_private_id").innerHTML=doc.dl_name_final_private_id;
       document.getElementById("dl_address_motor_private_id").innerHTML=doc.dl_address_final_private_id;
       document.getElementById("dl_number_motor_private_id").innerHTML=doc.dl_number_final_private_id;
       document.getElementById("dl_issuing_authority_motor_private_id").innerHTML=doc.dl_issue_date_final_private_id;
       document.getElementById("total_labour_assessed_print_id").innerHTML=doc.total_labour_assessed_final_private_id;
      
       document.getElementById("cost_parts_assessed_print_id").innerHTML=doc.cost_of_spare_parts_assessed_final_private_id;
       
       document.getElementById("total_labour_print_id").innerHTML=doc.total_labour_claimed_final_private_id;
      document.getElementById("cost_parts_print_id").innerHTML=doc.cost_of_spare_parts_claimed_final_private_id;
      document.getElementById("spot_photos_print_id").innerHTML=doc.spot_photo_claimed_final_private_id;
      document.getElementById("spot_photos_assessed_print_id").innerHTML=doc.spot_photo_assessed_final_private_id
      document.getElementById("spot_repair_print_id").innerHTML=doc.spot_repairs_claimed_final_private_id;
      document.getElementById("spot_repair_assessed_print_id").innerHTML=doc.spot_repairs_assessed_final_private_id;
//document.getElementById("policy_number_bill_print_id").value=doc.policy_number_code_final_private_id;      
//document.getElementById("policy_code_motor_print_id").value=doc.policy_number_code_final_private_id;
 document.getElementById("class_motor_private_id").value=doc.vehicle_class_final_private_id;
 document.getElementById("body_type_motor_private_id").value=doc.vehicle_body_type_final_private_id;
//document.getElementById("policy_code_bill_print_id").value=doc.policy_number_final_private_id;
//document.getElementById("license_no_bill_print_id").value=doc.dl_number_final_private_id;
document.getElementById("ins_name").innerHTML=doc.company_name_final_private_id;
document.getElementById("claim_print_id").innerHTML=doc.claim_number_code_final_private_id;
document.getElementById("ins_date").innerHTML=doc.report_date_final_private_id;
  //  document.getElementById("report_number_bill_print_id").innerHTML=doc._id;
  //  document.getElementById("report_date_bill_print_id").innerHTML=doc.report_date_final_private_id;
   // document.getElementById("branch_code_of_insurance_company_bill_print_id").innerHTML=doc.company_code_final_private_id;
    //document.getElementById("manager_of_insurance_company_bill_print_id").innerHTML=doc.company_manager_final_private_id;
  // document.getElementById("name_of_insurance_company_bill_print_id").innerHTML=doc.company_name_final_private_id;
 //   document.getElementById("address_of_insurance_company_bill_print_id").innerHTML=doc.company_address_final_private_id;
   // document.getElementById("policy_number_code_final_private_id").value=doc.policy_number_code_final_private_id;
   //document.getElementById("policy_number_bill_print_id").innerHTML=doc.policy_number_code_final_private_id;
   //document.getElementById("policy_code_bill_print_id").innerHTML=doc.policy_number_final_private_id;
    //document.getElementById("claim_number_code_final_private_id").innerHTML=doc.claim_number_code_final_private_id;
   //document.getElementById("claim_number_bill_print_id").innerHTML=doc.claim_number_final_private_id;
   // document.getElementById("insurer_code_final_private_id").value=doc.insurer_code_final_private_id;
   // document.getElementById("insurer_name_final_private_id").value=doc.insurer_name_final_private_id;
   // document.getElementById("insurer_address_final_private_id").value=doc.insurer_address_final_private_id;
   //document.getElementById("name_of_insured_bill_print_id").innerHTML=doc.insured_name_final_private_id;
   //document.getElementById("address_of_insured_bill_print_id").innerHTML=doc.insured_address_final_private_id;
//document.getElementById("insurance_period_from_final_private_id").value=doc.insurance_period_from_final_private_id;
    //document.getElementById("insurance_period_to_final_private_id").value=doc.insurance_period_to_final_private_id;
 //document.getElementById("insurance_endorsement_final_private_id").value=doc.insurance_endorsement_final_private_id;
   // document.getElementById("sum_insured_final_private_id").value=doc.sum_insured_final_private_id;
    //document.getElementById("hpahyp_motorr_private_id").innerHTML=doc.hpahyp_final_private_id;

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


    // document.getElementById("rc_verification_selection_final_private_id").value=doc.rc_verification_final_private_id;
    //document.getElementById("vehicle_registration_number_bill_print_id").innerHTML=doc.vehicle_registerd_number_final_private_id;
   // document.getElementById("vehicle_registration_date_final_private_id").value=doc.vehicle_registration_date_final_private_id;
    //document.getElementById("vehicle_make_bill_print_id").innerHTML=doc.vehicle_make_final_private_id;
    //document.getElementById("vehicle_model_bill_print_id").innerHTML=doc.vehicle_model_final_private_id;
  //  document.getElementById("vehicle_chassis_number_final_private_id").value=doc.vehicle_chassis_number_final_private_id;
   // document.getElementById("vehicle_engine_number_final_private_id").value=doc.vehicle_engine_number_final_private_id;
   // document.getElementById("vehicle_colour_final_private_id").value=doc.vehicle_colour_final_private_id;
   // document.getElementById("road_tax_selection_final_private_id").value=doc.road_tax_selection_final_private_id;
    //document.getElementById("road_tax_date_final_private_id").value=doc.road_tax_date_final_private_id;
   // document.getElementById("vehicle_body_type_final_private_id").value=doc.vehicle_body_type_final_private_id;
   // document.getElementById("vehicle_class_final_private_id").value=doc.vehicle_class_final_private_id;
   // document.getElementById("vehicle_condition_selection_final_private_id").value=doc.vehicle_condition_selection_final_private_id;
    //document.getElementById("vehicle_odometer_reading_final_private_id").value=doc.vehicle_odometer_reading_final_private_id;
    //document.getElementById("valid_upto_bill_print_id").innerHTML=doc.vehicle_rc_validity_final_private_id;
   // document.getElementById("vehicle_seating_capacity_final_private_id").value=doc.vehicle_seating_capacity_final_private_id;
    //document.getElementById("dl_verification_selection_final_private_id").value=doc.dl_verification_selection_final_private_id;
      
                        
    //document.getElementById("license_no_bill_print_id").innerHTML=doc.dl_number_final_private_id;
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


//var b1=document.getElementById("spot_survey_bill_print_id").innerHTML=doc.spot_survey_charges_final_private_id;
//var b2=document.getElementById("final_survey_bill_print_id").innerHTML=doc.final_survey_charges_final_private_id;
//var b3=document.getElementById("reinspection_bill_print_id").innerHTML=doc.reinspection_charges_final_private_id;
//var b4=document.getElementById("opinion_bill_print_id").innerHTML=doc.opinion_charges_final_private_id;
//var b5=document.getElementById("check_bill_print_id").innerHTML=doc.check_charges_final_private_id;

//var b6=document.getElementById("local_expense_bill_print_id").innerHTML=doc.local_travelling_expenses_final_private_id;
//document.getElementById("local_location_bill_print_id").innerHTML=doc.local_place_of_survey_final_private_id;
//document.getElementById("local_distance_bill_print_id").innerHTML=doc.local_distance_travelled_final_private_id;
//var b7=document.getElementById("outstation_expense_bill_print_id").innerHTML=doc.outstation_travelling_expenses_final_private_id;
//document.getElementById("outstation_location_bill_print_id").innerHTML=doc.outstation_place_of_survey_final_private_id;
//document.getElementById("outstation_distance_bill_print_id").innerHTML=doc.outstation_distance_travelled_final_private_id;
//document.getElementById("number_of_photos_bill_print_id").innerHTML=doc.number_of_photos_final_private_id;
//document.getElementById("rate_per_photo_bill_print_id").innerHTML=doc.per_photo_price_final_private_id;
//var b8=document.getElementById("outstation_bill_print_id").innerHTML=doc.outstation_allowance_final_private_id;
//var b9=document.getElementById("miscellaneous_bill_print_id").innerHTML=doc.postage_charges_final_private_id;
//a=document.getElementById("number_of_photos_bill_print_id").innerHTML=doc.number_of_photos_final_private_id;
//b=document.getElementById("rate_per_photo_bill_print_id").innerHTML=doc.per_photo_price_final_private_id;
 //var sum=a*b;
 //var s=parseInt(b1, 10)+parseInt(b2, 10)+parseInt(b3, 10)+parseInt(b4, 10)+parseInt(b5, 10)+
 //parseInt(b6, 10)+parseInt(b7, 10)+parseInt(b8, 10)+parseInt(b9, 10)+sum;
 //document.getElementById("photos_bill_print_id").innerHTML=sum;
 //document.getElementById("total_bill_print_id").innerHTML=s;

/*
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
    document.getElementById("word_bill_print_id").innerHTML=str.replace(/\s+/g,' ');*/
     var db=new PouchDB('Personal_Details');
    //var personal_details= $('#personal_details').serializeObject();
    //personal_details._id= $('#number_personal_id').val();
    var a="0001";
     db.get(a,function(err,doc){
//document.getElementById("name_of_prson_company_bill_print_id").innerHTML=doc.personal_name;         
    //     document.getElementById("qualification_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_designation;
   // document.getElementById("address_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_address;
    //document.getElementById("tel_of_insurance_company_bill_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    //document.getElementById("mobile_of_insurance_company_bill_print_id").innerHTML=doc.personal_mobile;
     //document.getElementById("email_of_insurance_company_bill_print_id").innerHTML=doc.personal_email;
     //document.getElementById("valid_upto_bill_print_id").innerHTML=doc.personal_license_validity;

       document.getElementById("license_no_id").innerHTML=doc.personal_license_number;
    document.getElementById("pan_no_motor_print_id").innerHTML=doc.personal_pan;
      document.getElementById("name_of_prson_company_motor_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_address;
    document.getElementById("tel_of_insurance_company_motor_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    document.getElementById("mobile_of_insurance_company_motor_print_id").innerHTML=doc.personal_mobile;
     document.getElementById("email_of_insurance_company_motor_print_id").innerHTML=doc.personal_email;
     document.getElementById("valid_upto_motor_print_id").innerHTML=doc.personal_license_validity;
     
     //document.getElementById("p_name").innerHTML=doc.personal_name;
     //document.getElementById("p_bank").innerHTML=doc.personal_bank_name;
     //document.getElementById("p_account").innerHTML=doc.personal_account_number;
     //document.getElementById("p_micr").innerHTML=doc.personal_micr;
     //document.getElementById("p_isf").innerHTML=doc.personal_ifs_code;
     
    //  document.getElementById("name_of_prson_motor_print_id").innerHTML=doc.personal_name;         
     //    document.getElementById("qualification_of_person_insurance_motor_print_id").innerHTML=doc.personal_designation;
   // document.getElementById("address_of_person_insurance_motor_print_id").innerHTML=doc.personal_address;
    
    //  document.getElementById("name_print_id").innerHTML=doc.personal_name;         
    //     document.getElementById("qualification_print_id").innerHTML=doc.personal_designation;
  //  document.getElementById("address_print_id").innerHTML=doc.personal_address;
    document.getElementById("name_id").innerHTML=doc.personal_name;
               



      
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
  //   document.getElementById("date_company_motor_print_id").innerHTML=doc.report_date_final_private_id;
//document.getElementById("reg_motor_print_id").innerHTML=doc._id;
//document.getElementById("reg_motorr_print_id").innerHTML=doc._id;
//document.getElementById("reg_printt_id").innerHTML=doc._id;
document.getElementById("report_number_motor_print_id").innerHTML=doc._id;
//document.getElementById("date_company_motorr_print_id").innerHTML=doc.report_date_final_private_id;
//document.getElementById("date_printt_id").innerHTML=doc.report_date_final_private_id;
    document.getElementById("report_date_motor_print_id").innerHTML=doc.report_date_final_private_id;
    document.getElementById("branch_code_of_insurance_company_motor_print_id").innerHTML=doc.company_code_final_private_id;
    document.getElementById("manager_of_insurance_company_motor_print_id").innerHTML=doc.company_manager_final_private_id;
   document.getElementById("name_of_insurance_company_motor_print_id").innerHTML=doc.company_name_final_private_id;
    document.getElementById("address_of_insurance_company_motor_print_id").innerHTML=doc.company_address_final_private_id;
   // document.getElementById("policy_number_code_final_motor_id").value=doc.policy_number_code_final_private_id;
   document.getElementById("policy_motor_print_id").innerHTML=doc.policy_number_code_final_private_id;
    document.getElementById("policy_code_motor_print_id").innerHTML=doc.policy_number_final_private_id;
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

    // document.getElementById("rc_verification_selection_final_private_id").value=doc.rc_verification_final_private_id;
    document.getElementById("rc_verification_selection").innerHTML=doc.rc_verification_selection_final_private_id;
    document.getElementById("registration_motor_print_id").innerHTML=doc.vehicle_registerd_number_final_private_id;
    document.getElementById("registration_date_motor_private_id").innerHTML=doc.vehicle_registration_date_final_private_id;
    document.getElementById("make_motor_print_id").innerHTML=doc.vehicle_make_final_private_id;
    document.getElementById("model_motor_print_id").innerHTML=doc.vehicle_model_final_private_id;
    document.getElementById("chassis_motor_private_id").innerHTML=doc.vehicle_chassis_number_final_private_id;
    document.getElementById("engine_motor_private_id").innerHTML=doc.vehicle_engine_number_final_private_id;
    document.getElementById("colour_motor_private_id").innerHTML=doc.vehicle_colour_final_private_id;
    document.getElementById("road_taxx_motor").innerHTML=doc.road_tax_selection_final_private_id;

//    document.getElementById("road_taxx_motor_private_id").value=doc.road_tax_date_final_private_id;
 document.getElementById("body_type_motor_private_id").innerHTML=doc.vehicle_body_type_final_private_id;
   document.getElementById("class_motor_private_id").innerHTML=doc.vehicle_class_final_private_id;
   document.getElementById("unladen_private_id").innerHTML=doc.vehicle_unladen_weight_final_private_id;
   document.getElementById("regd_private_id").innerHTML=doc.vehicle_registered_laden_weight_final_private_id;
   document.getElementById("fitness_private_id").innerHTML=doc.vehicle_fitness_certificate_final_private_id;
   document.getElementById("validity_private_id").innerHTML=doc.vehicle_fitness_certificate_validity_final_private_id;
   document.getElementById("vehicle_condition_selection_motor_private_id").innerHTML=doc.vehicle_condition_selection_final_private_id;
    document.getElementById("odometer_motor_private_id").innerHTML=doc.vehicle_odometer_reading_final_private_id;
    //document.getElementById("vehicle_rc_validity_final_private_id").value=doc.vehicle_rc_validity_final_private_id;
   // document.getElementById("vehicle_seating_capacity_final_private_id").value=doc.vehicle_seating_capacity_final_private_id;
   //document.getElementById("dl_verification_selection_final_private_id").value=doc.dl_verification_selection_final_private_id;
  // document.getElementById("dl_number_motor_private_id").innerHTML=doc.dl_number_final_private_id;
  // document.getElementById("dl_name_motor_private_id").innerHTML=doc.dl_name_final_private_id;
   //document.getElementById("dl_address_motor_private_id").innerHTML=doc.dl_address_final_private_id;
   //document.getElementById("dl_issue_date_motor_private_id").innerHTML=doc.dl_issue_date_final_private_id;

  document.getElementById("permit_no_bill_print_id").innerHTML=doc.vehicle_permit_number_final_private_id;
  document.getElementById("permit_validity_bill_print_id").innerHTML=doc.vehicle_validity_final_private_id;
  document.getElementById("permit_type_bill_print_id").innerHTML=doc.vehicle_permit_type_final_private_id;
  document.getElementById("Passenger_load_bill_print_id").innerHTML=doc.vehicle_passenger_load_final_private_id;
  document.getElementById("route_bill_print_id").innerHTML=doc.vehicle_area_permitted_final_private_id;


//document.getElementById("name_private_id").innerHTML=doc.dl_name_final_private_id;
//document.getElementById("address_private_id").innerHTML=doc.dl_address_final_private_id;
//document.getElementById("driving_license_private_id").innerHTML=doc.dl_number_final_private_id;
//document.getElementById("issue_date_private_id").innerHTML=doc.dl_issue_date_final_private_id;
//document.getElementById("authority_private_id").innerHTML=doc.dl_issuing_authority_final_private_id;

document.getElementById("nature_goods_bill_print_id").innerHTML=doc.nature_of_goods_carried_final_private_id;
document.getElementById("no_passenger_bill_print_id").innerHTML=doc.number_of_passengers_final_private_id;
document.getElementById("transported_bill_print_id").innerHTML=doc.transported_from_final_private_id;

// document.getElementById("dl_issuing_authority_motor_private_id").innerHTML=doc.dl_issuing_authority_final_private_id;
  document.getElementById("dl_type_motor_private_id").innerHTML=doc.dl_type_final_private_id;
document.getElementById("dl_endorsements_motor_private_id").innerHTML=doc.dl_endorsements_final_private_id;
//document.getElementById("accident_date_motor_private_id").innerHTML=doc.accident_date_final_private_id;
document.getElementById("accident_time_motor_private_id").innerHTML=doc.accident_time_final_private_id;
document.getElementById("accident_place_motor_private_id").innerHTML=doc.accident_place_final_private_id;
document.getElementById("accident_cause_motor_private_id").innerHTML=doc.accident_cause_final_private_id;
document.getElementById("property_damage_motor_private_id").innerHTML=doc.property_damage_final_private_id;
document.getElementById("details_of_injury_motor_private_id").innerHTML=doc.details_of_injury_final_private_id;
document.getElementById("accident_reported_to_police_motor_private_id").innerHTML=doc.accident_reported_to_police_final_private_id;
document.getElementById("name_of_police_station_motor_private_id").innerHTML=doc.name_of_police_station_final_private_id;
document.getElementById("fir_details_motor_private_id").innerHTML=doc.fir_details_final_private_id;
document.getElementById("survey_request_date_motor_private_id").innerHTML=doc.survey_request_date_final_private_id;

document.getElementById("survey_place_motor_private_id").innerHTML=doc.survey_place_final_private_id;


/*
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
 var total=parseInt(b1, 10)+parseInt(b2, 10)+parseInt(b3, 10)+parseInt(b4, 10)+parseInt(b5, 10)+
 parseInt(b6, 10)+parseInt(b7, 10)+parseInt(b8, 10)+parseInt(b9, 10)+sum;
 document.getElementById("photos_bill_print_id").innerHTML=sum;
 document.getElementById("total_bill_print_id").innerHTML= total;
*/
var strp="",strc="";

  /*for(var i=0;i<1;i++){
for(var keyp in doc.preliminary){
  //console.log(valuep=doc.preliminary[keyp]);
              var valuep=doc.preliminary[keyp];
              // data1 += key+ ":" +value ;
    strp+="<tr><td>"+keyp+"</td><td>"+valuep.comments+"</td></tr>";
    
  }
  document.getElementById("preliminary").innerHTML=strp;
  //console.log(strp);
}*/

for(var j=0;j<1;j++){
for(var keyc in doc.comments_table){
  //console.log(valuep=doc.preliminary[keyp]);
              var valuec=doc.comments_table[keyc];
              // data1 += key+ ":" +value ;
    strc+="<tr><td>"+keyc+"</td><td>"+valuec.comments+"</td></tr>";
    
  }
  document.getElementById("comments_table").innerHTML=strc;
  //console.log(strc);
}
}
if(doc.excel=='normal_table')
{

//document.getElementById("report").innerHTML=doc._id;
 //document.getElementById("date").innerHTML=doc.report_date_final_private_id;

 var strd="", fibre="",glass="",metal="",plastic="",labour="",paint="",rubber="",total=0,sum=0,totalg=0,totalm=0,sumg=0,summ=0,totalp=0,sump=0;
 var vatfc=0,vatfa=0,vatgc=0,vatga=0,vatmc=0,vatma=0,vatpc=0,vatpa=0,gtfc=0,gtfa=0,gtgc=0,gtga=0,gtmc=0,gtma=0,gtpc=0,gtpa=0;
 
        //console.log(arr['fibre']);
 //console.log(doc.damage_parts.length);
 //for(var z=0;z<doc.damage_parts;z++){
 // console.log(doc.damage_parts[z].value);
 
    for(var keyd in doc.damage_parts){
      
              var valued=doc.damage_parts[keyd];
              //console.log(valued.claimed);
             // console.log(valued.assessed);
              // data1 += key+ ":" +value ;
    /*strd+="<tr><td>"+keyd+"</td><td>"+valued.part_name+"</td><td>"+valued.claimed+
         "</td><td>"+valued.assessed+"</td><td>"+valued.nature_of_damage+"</td><td>"
         +valued.value+"</td><td>"+valued.reason+"</td></tr>";*/

         switch(valued.value){
          case 'Fibre':
                       
            //if(arr['fibre']==0)
              /*var table= document.getElementById("gameRecordTable"); 
                       var row = document.createElement('tr');
                       var cell1 = document.createElement('td');
                       var cell2 = document.createElement('td');
                       var cell3=document.createElement('td');
                           cell1.textContent=i;
                           cell2.textContent =a;
                           cell3.textContent=b;
                           row.appendChild(cell1);
                           row.appendChild(cel
                           row.appendChild(cell3);
                           table.appendChild(row);*/

               //arr['fibre']['total1'] +=valued.claimed;
              // arr['fibre']['total2'] +=valued.assessed;
             // console.log(arr['fibre']['total2']);

             // console.log(arr['fibre']['total1'] +=valued.assessed);
             total=parseInt(total,10)+parseInt(valued.claimed,10);
             sum=parseInt(sum,10)+parseInt(valued.assessed,10);
             vatfc=total*0.145;
             vatfc=parseFloat(Math.round(vatfc * 100) / 100).toFixed(2);
             vatfa=sum*0.145;
             vatfa=parseFloat(Math.round(vatfa * 100) / 100).toFixed(2);
             gtfc=parseFloat(total,10)+parseFloat(vatfc,10);
             gtfc=parseFloat(Math.round(gtfc * 100) / 100).toFixed(2);
             gtfa=parseFloat(sum,10)+parseFloat(vatfa,10);
             gtfa=parseFloat(Math.round(gtfa * 100) / 100).toFixed(2);
            // console.log(total);
             //console.log(sum);
              fibre+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";

                          document.getElementById("total").innerHTML=total;
                          document.getElementById("sum").innerHTML=sum;
                          document.getElementById("vatfc").innerHTML=vatfc;
                          document.getElementById("vatfa").innerHTML=vatfa;
                          document.getElementById("gtfc").innerHTML=gtfc;
                          document.getElementById("gtfa").innerHTML=gtfa;
                              
                         // a=a+(a+1);
                         // b[j]=parseInt(b[j],10)+parseInt(b[j+1],10);
                         // b[j]=b[j]+b[j+1];
                           
                        break;
          case  'Glass':
                  totalg=parseInt(totalg,10)+parseInt(valued.claimed,10);
             sumg=parseInt(sumg,10)+parseInt(valued.assessed,10);
             vatgc=totalg*0.145;
             vatgc=parseFloat(Math.round(vatgc * 100) / 100).toFixed(2);
             vatga=sumg*0.145;
             vatga=parseFloat(Math.round(vatga * 100) / 100).toFixed(2);
             gtgc=parseFloat(totalg,10)+parseFloat(vatgc,10);
             gtgc=parseFloat(Math.round(gtgc * 100) / 100).toFixed(2);
             gtga=parseFloat(sumg,10)+parseFloat(vatga,10);
             gtga=parseFloat(Math.round(gtga * 100) / 100).toFixed(2);
                   glass+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                         document.getElementById("totalg").innerHTML=totalg;
                          document.getElementById("sumg").innerHTML=sumg; 
                          document.getElementById("vatgc").innerHTML=vatgc;
                          document.getElementById("vatga").innerHTML=vatga;
                          document.getElementById("gtgc").innerHTML=gtgc;
                          document.getElementById("gtga").innerHTML=gtga;    
                              //document.getElementById("glass").innerHTML=glass;
                              

                         break;
          case 'Metal' :totalm=parseInt(totalm,10)+parseInt(valued.claimed,10);
             summ=parseInt(summ,10)+parseInt(valued.assessed,10);
             vatmc=totalm*0.145;
             vatmc=parseFloat(Math.round(vatmc * 100) / 100).toFixed(2);
             vatma=summ*0.145;
             vatma=parseFloat(Math.round(vatma * 100) / 100).toFixed(2);
             gtmc=parseFloat(totalm,10)+parseFloat(vatmc,10);
             gtmc=parseFloat(Math.round(gtmc * 100) / 100).toFixed(2);
             gtma=parseFloat(summ,10)+parseFloat(vatma,10);
             gtma=parseFloat(Math.round(gtma * 100) / 100).toFixed(2);
          metal+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              //document.getElementById("metal").innerHTML=metal;
                              document.getElementById("totalm").innerHTML=totalm;
                          document.getElementById("summ").innerHTML=summ;
                          document.getElementById("vatmc").innerHTML=vatmc;
                          document.getElementById("vatma").innerHTML=vatma;
                          document.getElementById("gtmc").innerHTML=gtmc;
                          document.getElementById("gtma").innerHTML=gtma;
                      break;
          case 'Plastic':
           case 'Rubber':
           case 'Labour':
           case 'Paint':


          totalp=parseInt(totalp,10)+parseInt(valued.claimed,10);
             sump=parseInt(sump,10)+parseInt(valued.assessed,10);
             vatpc=totalp*0.145;
             vatpc=parseFloat(Math.round(vatpc * 100) / 100).toFixed(2);
             vatpa=sump*0.145;
             vatpa=parseFloat(Math.round(vatpa * 100) / 100).toFixed(2);
             gtpc=parseFloat(totalp,10)+parseFloat(vatpc,10);
             gtpc=parseFloat(Math.round(gtpc * 100) / 100).toFixed(2);
             gtpa=parseFloat(sump,10)+parseFloat(vatpa,10);
             gtpa=parseFloat(Math.round(gtpa * 100) / 100).toFixed(2);
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";

                               document.getElementById("totalp").innerHTML=totalp;
                          document.getElementById("sump").innerHTML=sump;
                          document.getElementById("vatpc").innerHTML=vatpc;
                          document.getElementById("vatpa").innerHTML=vatpa;
                          document.getElementById("gtpc").innerHTML=gtpc;
                          document.getElementById("gtpa").innerHTML=gtpa;

                             // document.getElementById("plastic").innerHTML=plastic;
                          break;
         
         /* total=parseInt(total,10)+parseInt(valued.claimed,10);
             sum=parseInt(sum,10)+parseInt(valued.assessed,10);
             console.log(total);
             console.log(sum);plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              
                              //document.getElementById("plastic").innerHTML=rubber;
                          break;
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              //document.getElementById("plastic").innerHTML=labour;
                          break;
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              
                              //document.getElementById("plastic").innerHTML=paint;
                          break;  */                              

         }
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         
//document.getElementById("fibre").innerHTML=fibre;
//document.getElementById("glass").innerHTML=glass;
//document.getElementById("metal").innerHTML=metal;
//document.getElementById("plastic").innerHTML=plastic;
}
//console.log(doc.excel=='excel_table');
 if(doc.excel=='excel_table'){
  document.getElementById("report").innerHTML=doc._id;
 document.getElementById("date").innerHTML=doc.report_date_final_private_id;

 var strd="", fibre="",glass="",metal="",plastic="",labour="",paint="",rubber="",totall=0,suml=0,totalpai=0,sumpai=0,total=0,sum=0,totalg=0,totalm=0,sumg=0,fc=0,fa=0,gc=0,ga=0,mc=0,ma=0,pc=0,pa=0,summ=0,totalp=0,sump=0;
 var vatfc=0,vatfa=0,vatgc=0,vatga=0,vatmc=0,vatma=0,vatpc=0,vatpa=0,vatlc=0,vatla=0,vatpaic=0,vatpaia=0,gtlc=0,gtla=0,gtpaia=0,gtpaic=0,gtfc=0,gtfa=0,gtgc=0,gtga=0,gtmc=0,gtma=0,gtpc=0,gtpa=0;
 
        //console.log(arr['fibre']);
 //console.log(doc.damage_parts.length);
 //for(var z=0;z<doc.damage_parts;z++){
 // console.log(doc.damage_parts[z].value);
 
    for(var keyd in doc.damage_parts){
      
              var valued=doc.damage_parts[keyd];
              //console.log(valued.claimed);
             // console.log(valued.assessed);
              // data1 += key+ ":" +value ;
    /*strd+="<tr><td>"+keyd+"</td><td>"+valued.part_name+"</td><td>"+valued.claimed+
         "</td><td>"+valued.assessed+"</td><td>"+valued.nature_of_damage+"</td><td>"
         +valued.value+"</td><td>"+valued.reason+"</td></tr>";*/

         switch(valued.value){
          case 'Fibre':
                       
            //if(arr['fibre']==0)
              /*var table= document.getElementById("gameRecordTable"); 
                       var row = document.createElement('tr');
                       var cell1 = document.createElement('td');
                       var cell2 = document.createElement('td');
                       var cell3=document.createElement('td');
                           cell1.textContent=i;
                           cell2.textContent =a;
                           cell3.textContent=b;
                           row.appendChild(cell1);
                           row.appendChild(cel
                           row.appendChild(cell3);
                           table.appendChild(row);*/

               //arr['fibre']['total1'] +=valued.claimed;
              // arr['fibre']['total2'] +=valued.assessed;
             // console.log(arr['fibre']['total2']);

             // console.log(arr['fibre']['total1'] +=valued.assessed);
             fc=parseInt(valued.claimed,10);
             fc=(fc*100)/114.5;
             total=parseInt(total,10)+fc;
             fa=parseInt(valued.assessed,10);
             fa=(fa*100)/114.5;
             sum=parseInt(sum,10)+fa;
             vatfc=total*0.145;
             vatfc=parseFloat(Math.round(vatfc * 100) / 100).toFixed(2);
             vatfa=sum*0.145;
             vatfa=parseFloat(Math.round(vatfa * 100) / 100).toFixed(2);
             gtfc=parseFloat(total,10)+parseFloat(vatfc,10);
             gtfc=parseFloat(Math.round(gtfc * 100) / 100).toFixed(2);
             gtfa=parseFloat(sum,10)+parseFloat(vatfa,10);
             gtfa=parseFloat(Math.round(gtfa * 100) / 100).toFixed(2);
            // console.log(total);
             //console.log(sum);
              fibre+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";

                          document.getElementById("total").innerHTML=total;
                          document.getElementById("sum").innerHTML=sum;
                          document.getElementById("vatfc").innerHTML=vatfc;
                          document.getElementById("vatfa").innerHTML=vatfa;
                          document.getElementById("gtfc").innerHTML=gtfc;
                          document.getElementById("gtfa").innerHTML=gtfa;
                              
                         // a=a+(a+1);
                         // b[j]=parseInt(b[j],10)+parseInt(b[j+1],10);
                         // b[j]=b[j]+b[j+1];
                           
                        break;
          case  'Glass':
          gc=parseInt(valued.claimed,10);
          gc=(gc*100)/114.5;
          ga=parseInt(valued.assessed,10);
          ga=(ga*100)/114.5;
                  totalg=parseInt(totalg,10)+gc;
             sumg=parseInt(sumg,10)+ga;
             vatgc=totalg*0.145;
             vatgc=parseFloat(Math.round(vatgc * 100) / 100).toFixed(2);
             vatga=sumg*0.145;
             vatga=parseFloat(Math.round(vatga * 100) / 100).toFixed(2);
             gtgc=parseFloat(totalg,10)+parseFloat(vatgc,10);
             gtgc=parseFloat(Math.round(gtgc * 100) / 100).toFixed(2);
             gtga=parseFloat(sumg,10)+parseFloat(vatga,10);
             gtga=parseFloat(Math.round(gtga * 100) / 100).toFixed(2);
                   glass+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                         document.getElementById("totalg").innerHTML=totalg;
                          document.getElementById("sumg").innerHTML=sumg; 
                          document.getElementById("vatgc").innerHTML=vatgc;
                          document.getElementById("vatga").innerHTML=vatga;
                          document.getElementById("gtgc").innerHTML=gtgc;
                          document.getElementById("gtga").innerHTML=gtga;    
                              //document.getElementById("glass").innerHTML=glass;
                              

                         break;
          case 'Metal' :
          mc=parseInt(valued.claimed,10);
          mc=(mc*100)/114.5;
          ma=parseInt(valued.assessed,10);
          ma=(ma*100)/114.5;
          totalm=parseInt(totalm,10)+mc;
             summ=parseInt(summ,10)+ma;
             vatmc=totalm*0.145;
             vatmc=parseFloat(Math.round(vatmc * 100) / 100).toFixed(2);
             vatma=summ*0.145;
             vatma=parseFloat(Math.round(vatma * 100) / 100).toFixed(2);
             gtmc=parseFloat(totalm,10)+parseFloat(vatmc,10);
             gtmc=parseFloat(Math.round(gtmc * 100) / 100).toFixed(2);
             gtma=parseFloat(summ,10)+parseFloat(vatma,10);
             gtma=parseFloat(Math.round(gtma * 100) / 100).toFixed(2);
          metal+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              //document.getElementById("metal").innerHTML=metal;
                              document.getElementById("totalm").innerHTML=totalm;
                          document.getElementById("summ").innerHTML=summ;
                          document.getElementById("vatmc").innerHTML=vatmc;
                          document.getElementById("vatma").innerHTML=vatma;
                          document.getElementById("gtmc").innerHTML=gtmc;
                          document.getElementById("gtma").innerHTML=gtma;
                      break;
          case 'Plastic':
           case 'Rubber':
           
         pc=parseInt(valued.claimed,10);
         pc=(pc*100)/114.5;
         pa=parseInt(valued.assessed,10);
         pa=(pa*100)/114.5;

          totalp=parseInt(totalp,10)+pc;
             sump=parseInt(sump,10)+pa;
             vatpc=totalp*0.145;
             vatpc=parseFloat(Math.round(vatpc * 100) / 100).toFixed(2);
             vatpa=sump*0.145;
             vatpa=parseFloat(Math.round(vatpa * 100) / 100).toFixed(2);
             gtpc=parseFloat(totalp,10)+parseFloat(vatpc,10);
             gtpc=parseFloat(Math.round(gtpc * 100) / 100).toFixed(2);
             gtpa=parseFloat(sump,10)+parseFloat(vatpa,10);
             gtpa=parseFloat(Math.round(gtpa * 100) / 100).toFixed(2);
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";

                               document.getElementById("totalp").innerHTML=totalp;
                          document.getElementById("sump").innerHTML=sump;
                          document.getElementById("vatpc").innerHTML=vatpc;
                          document.getElementById("vatpa").innerHTML=vatpa;
                          document.getElementById("gtpc").innerHTML=gtpc;
                          document.getElementById("gtpa").innerHTML=gtpa;

                             // document.getElementById("plastic").innerHTML=plastic;
                          break;
            case 'Labour':
            lc=parseInt(valued.claimed,10);
         lc=(lc*100)/114.5;
         la=parseInt(valued.assessed,10);
         la=(la*100)/114.5;

          totall=parseInt(totall,10)+lc;
             suml=parseInt(suml,10)+la;
             vatlc=totall*0.145;
             vatlc=parseFloat(Math.round(vatlc * 100) / 100).toFixed(2);
             vatla=sump*0.145;
             vatla=parseFloat(Math.round(vatla * 100) / 100).toFixed(2);
             gtlc=parseFloat(totall,10)+parseFloat(vatpc,10);
             gtlc=parseFloat(Math.round(gtlc * 100) / 100).toFixed(2);
             gtla=parseFloat(suml,10)+parseFloat(vatpa,10);
             gtla=parseFloat(Math.round(gtla * 100) / 100).toFixed(2);
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";

                               document.getElementById("totall").innerHTML=totall;
                          document.getElementById("suml").innerHTML=suml;
                          document.getElementById("vatlc").innerHTML=vatlc;
                          document.getElementById("vatla").innerHTML=vatla;
                          document.getElementById("gtlc").innerHTML=gtlc;
                          document.getElementById("gtla").innerHTML=gtla;

           case 'Paint':
           paic=parseInt(valued.claimed,10);
         paic=(paic*100)/114.5;
         paia=parseInt(valued.assessed,10);
         paia=(pa*100)/114.5;

          totalpai=parseInt(totalpai,10)+paic;
             sumpai=parseInt(sumpai,10)+paia;
             vatpaic=totalpai*0.145;
             vatpaic=parseFloat(Math.round(vatpaic * 100) / 100).toFixed(2);
             vatpaia=sumpai*0.145;
             vatpaia=parseFloat(Math.round(vatpaia * 100) / 100).toFixed(2);
             gtpaic=parseFloat(totalpai,10)+parseFloat(vatpaic,10);
             gtpaic=parseFloat(Math.round(gtpaic * 100) / 100).toFixed(2);
             gtpaia=parseFloat(sumpai,10)+parseFloat(vatpaia,10);
             gtpaia=parseFloat(Math.round(gtpaia * 100) / 100).toFixed(2);
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";

                               document.getElementById("totalp").innerHTML=totalpai;
                          document.getElementById("sump").innerHTML=sumpai;
                          document.getElementById("vatpc").innerHTML=vatpaic;
                          document.getElementById("vatpa").innerHTML=vatpaia;
                          document.getElementById("gtpc").innerHTML=gtpaic;
                          document.getElementById("gtpa").innerHTML=gtpaia;
         
         /* total=parseInt(total,10)+parseInt(valued.claimed,10);
             sum=parseInt(sum,10)+parseInt(valued.assessed,10);
             console.log(total);
             console.log(sum);plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              
                              //document.getElementById("plastic").innerHTML=rubber;
                          break;
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              //document.getElementById("plastic").innerHTML=labour;
                          break;
          plastic+="<tr><td>"+keyd+"</td><td>"+valued.part_name+
                              "</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td></tr>";
                              
                              //document.getElementById("plastic").innerHTML=paint;
                          break;  */                              

         }
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         
document.getElementById("fibre").innerHTML=fibre;
document.getElementById("glass").innerHTML=glass;
document.getElementById("metal").innerHTML=metal;
document.getElementById("plastic").innerHTML=plastic;
}

}






}
 var strd="",count=1,amount=0,mamount=0,rpamount=0,famount=0,gamount=0,amtvat=0,fabvat=0,metvat=0,rubvat=0,glavat=0,tamount=0,tfamount=0,tmamount=0,trpmount=0,tgamount=0;
//console.log(doc.damage_parts);
if(doc.parts=='vat_on_total')
{

for(var keyd in doc.damage_parts){
        var valued=doc.damage_parts[keyd];

        //console.log(doc.damage_parts[2].length);
       // console.log(valued.length);
       
       for(var i=0;i<valued.length;i++){
        var w=doc.damage_parts[keyd];
        console.log(w.length);
        if(i==0){
        amount=parseFloat(amount,10)+parseFloat(valued[i].assessed,10);
         amount=amount.toFixed(2);
                      amtvat=amount*0.145;
                      amtvat=parseFloat(Math.round(amtvat * 100) / 100).toFixed(2);
                      tamount=parseFloat(amount,10)+parseFloat(amtvat,10);
                       tamount=tamount.toFixed(2);
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                    }
              // console.log(tamount);
        //console.log(doc.damage_parts);
        var val=14.50;
        console.log(valued[0].value);
        console.log(valued[0].part_name);
        switch(valued[i].value){
          //int count=1;

          //console.log(valued.value=='Fibre')
        case 'Fibre': 
                     
                    
                      
                       if(i==0 && w.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>";       
                          famount=parseFloat(famount,10)+parseFloat(valued[i].assessed,10);
                        famount=famount.toFixed(2);
                      fabvat=famount*0.145;
                      fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10)+parseFloat(fabvat,10);
                       tfamount=tfamount.toFixed(2);

                          }
                       else {
                           famount=parseFloat(famount,10)+parseFloat(valued[i].assessed,10);
                           famount=famount.toFixed(2);
                         fabvat=famount*0.145;
                         fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10)+parseFloat(fabvat,10);
                       tfamount=tfamount.toFixed(2);
                         strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                      count++;
                       }
                       
                        document.getElementById("famount").innerHTML=famount;
                      document.getElementById("fabvat").innerHTML=fabvat;
                      document.getElementById("tfamount").innerHTML=tfamount;
                      
                      //console.log(tfamount);
        
                      break;

        case 'Metal': 
                      
                      //console.log(tmamount);
                      
                     if(i==0 && w.length>1 ){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                        mamount=parseFloat(mamount,10)+parseFloat(valued[i].assessed,10);
                        mamount=mamount.toFixed(2);
                      metvat=mamount*0.145;
                      metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10)+parseFloat(metvat,10);
                       tmamount=tmamount.toFixed(2);
                       }
                       else {
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                      mamount=parseFloat(mamount,10)+parseFloat(valued[i].assessed,10);
                      mamount=mamount.toFixed(2);
                      metvat=mamount*0.145;
                      metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10)+parseFloat(metvat,10);
                       tmamount=tmamount.toFixed(2);
                       }
                       
                     document.getElementById("mamount").innerHTML=mamount;
                      document.getElementById("metvat").innerHTML=metvat;
                      document.getElementById("tmamount").innerHTML=tmamount;
                      break;
        
        case 'Rubber':
        case 'Plastic':
                         
                      
                      //console.log(trpamount);
                      
                        if(i==0 && w.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";                
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
                       rpamount=parseFloat(rpamount,10)+parseFloat(valued[i].assessed,10);
                       rpamount=rpamount.toFixed(2);
                      rubvat=rpamount*0.145;
                      rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10)+parseFloat(rubvat,10);
                       trpmount=trpmount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
                      count++;
                      rpamount=parseFloat(rpamount,10)+parseFloat(valued[i].assessed,10);
                       rpamount=rpamount.toFixed(2);
                      rubvat=rpamount*0.145;
                      rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10)+parseFloat(rubvat,10);
                       trpmount=trpmount.toFixed(2);
                       }
                       
                     document.getElementById("rpamount").innerHTML=rpamount;
                      document.getElementById("rubvat").innerHTML=rubvat;
                      document.getElementById("trpamount").innerHTML=trpmount;
                     // count++;
                      break;
        case 'Glass':   
                     
                      
                      //console.log(tgamount);
                      
                        if(i==0 && w.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                      gamount=parseFloat(gamount,10)+parseFloat(valued[i].assessed,10);
                       gamount=gamount.toFixed(2);
                      glavat=gamount*0.145;
                      glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10)+parseFloat(glavat,10);
                       tgamount=tgamount.toFixed(2);
                      }
                       
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                   count++;
                       gamount=parseFloat(gamount,10)+parseFloat(valued[i].assessed,10);
                       gamount=gamount.toFixed(2);
                      glavat=gamount*0.145;
                      glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10)+parseFloat(glavat,10);
                       tgamount=tgamount.toFixed(2);
                        }
                      document.getElementById("gamount").innerHTML=gamount;
                      document.getElementById("glavat").innerHTML=glavat;
                      document.getElementById("tgamount").innerHTML=tgamount;

                      break;

}
}
//console.log(strd);
//}
}
console.log(document.getElementById("gamount").innerHTML=gamount);
                        console.log(document.getElementById("glavat").innerHTML=glavat);
                        console.log(document.getElementById("tgamount").innerHTML=tgamount);

                        

document.getElementById("parts").innerHTML=strd;

}
//console.log(document.getElementById("gamount").innerHTML=gamount);
                       // console.log(document.getElementById("glavat").innerHTML=glavat);
                        //console.log(document.getElementById("tgamount").innerHTML=tgamount);
var tot=0,fib=0,met=0,pla=0,gla=0;
//console.log(doc.damage_parts);
if(doc.parts=='vat_on_parts'){
for(var keyd in doc.damage_parts){
 
        var valued=doc.damage_parts[keyd];
        
        for(var i=0;i<valued.length;i++){
           var y=doc.damage_parts[keyd];
        console.log(y.length);
         // console.log(doc.damage_parts[2][0].length);
          if(i==0){
        tot=parseFloat(valued[i].assessed,10);
        tot=(tot*100)/114.5;
        tot=tot.toFixed(2);
        amount=parseInt(amount,10)+tot;
       // amount=amount.toFixed(2);
                      amtvat=amount*0.145;
                      amtvat=parseFloat(Math.round(amtvat * 100) / 100).toFixed(2);
                      tamount=parseFloat(amount,10)+parseFloat(amtvat,10);
                       tamount=tamount.toFixed(2);
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                    }
              // console.log(tamount);
        //console.log(doc.damage_parts);
        var val=14.50;
        console.log(valued.value);
        switch(valued[i].value){
          //int count=1;
          //console.log(valued.value=='Fibre')
        case 'Fibre': 
                     
                      
                      
                      //console.log(tfamount);
                      if(i==0 && y.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                       fab=parseFloat(valued[i].assessed,10);
                      fab=(fab*100)/114.5;
                      fab=fab.toFixed(2);
                      famount=parseInt(famount,10)+fab;
                     // famount=famount.toFixed(2);
                      fabvat=famount*0.145;
                      fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10)+parseFloat(fabvat,10);
                       tfamount=tfamount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                      count++;
                       
                      fab=parseFloat(valued[i].assessed,10);
                      fab=(fab*100)/114.5;
                      fab=fab.toFixed(2);
                      famount=parseInt(famount,10)+fab;
                      //famount=famount.toFixed(2);
                      fabvat=famount*0.145;
                      fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10)+parseFloat(fabvat,10);
                       tfamount=tfamount.toFixed(2);
                       }
                      document.getElementById("famount").innerHTML=famount;
                      document.getElementById("fabvat").innerHTML=fabvat;
                      document.getElementById("tfamount").innerHTML=tfamount;

                     // count++;
                      break;

        case 'Metal':   
                      
                      
                      //console.log(tmamount);
                    if(i==0 && y.length>1 ){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                       met=parseFloat(valued[i].assessed,10);
                      met=(met*100)/114.5;
                      met=met.toFixed(2);
                      mamount=parseInt(mamount,10)+met;
                      //mamount=mamount.toFixed(2);
                      metvat=mamount*0.145;
                      metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10)+parseFloat(metvat,10);
                       tmamount=tmamount.toFixed(2);
                       }
                       else {
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                      met=parseFloat(valued[i].assessed,10);
                      met=(met*100)/114.5;
                      met=met.toFixed(2);
                      mamount=parseInt(mamount,10)+met;
                     // mamount=mamount.toFixed(2);
                      metvat=mamount*0.145;
                      metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10)+parseFloat(metvat,10);
                       tmamount=tmamount.toFixed(2);
                       }
                     document.getElementById("mamount").innerHTML=mamount;
                      document.getElementById("metvat").innerHTML=metvat;
                      document.getElementById("tmamount").innerHTML=tmamount;
                      break;
        
        case 'Rubber':
        case 'Plastic':
                      
                      
                      //console.log(trpamount);
                     if(i==0 && y.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";                
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
                        pla=parseFloat(valued[i].assessed,10);
                      pla=(pla*100)/114.5;
                      pla=pla.toFixed(2);
                      rpamount=parseInt(rpamount,10)+pla;
                     // rpamount=rpamount.toFixed(2);
                      rubvat=rpamount*0.145;
                      rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10)+parseFloat(rubvat,10);
                      trpmount=trpmount.toFixed(2);
                     }
                     else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       pla=parseFloat(valued[i].assessed,10);
                      pla=(pla*100)/114.5;
                      pla=pla.toFixed(2);
                      rpamount=parseInt(rpamount,10)+pla;
                     // rpamount=rpamount.toFixed(2);
                      rubvat=rpamount*0.145;
                      rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10)+parseFloat(rubvat,10);
                      trpmount=trpmount.toFixed(2);

                     }
                     document.getElementById("rpamount").innerHTML=rpamount;
                      document.getElementById("rubvat").innerHTML=rubvat;
                      document.getElementById("trpamount").innerHTML=trpmount;
                      //count++;
                      break;
        case 'Glass':   
                     
                      
                      //console.log(tgamount);
                      if(i==0 && y.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td></td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                       gla=parseFloat(valued[i].assessed,10);
                     gla=(gla*100)/114.5;
                     gla=gla.toFixed(2);
                     gamount=parseInt(gamount,10)+gla;
                     //gamount=gamount.toFixed(2);
                      glavat=gamount*0.145;
                      glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10)+parseFloat(glavat,10);
                       tgamount=tgamount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                   count++;
                      gla=parseFloat(valued[i].assessed,10);
                      gla=(gla*100)/114.5;
                      gla=gla.toFixed(2);
                     gamount=parseInt(gamount,10)+gla;
                     //gamount=gamount.toFixed(2);
                      glavat=gamount*0.145;
                      glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10)+parseFloat(glavat,10);
                       tgamount=tgamount.toFixed(2);
                       }
                      document.getElementById("gamount").innerHTML=gamount;
                      document.getElementById("glavat").innerHTML=glavat;
                      document.getElementById("tgamount").innerHTML=tgamount;
                      break;

}
}

//console.log(strd);

}


document.getElementById("parts").innerHTML=strd;

}


if(doc.policy_number_code_final_private_id==""){
  document.getElementById("policy").style.display='none';
}
if(doc.claim_number_code_final_private_id==""){
  document.getElementById("claim").style.display='none';
}
if(doc.insurer_name_final_private_id ||doc.insurer_address_final_private_id ==""){
  document.getElementById("insurer").style.display='none';
}
if(doc.insured_name_final_private_id ||doc.insured_address_final_private_id ==""){
  document.getElementById("insured").style.display='none';
}
if(doc.insurance_period_from_final_private_id || doc.insurance_period_to_final_private_id==""){
  document.getElementById("insurance_period").style.display='none';
}
if(doc.insurance_endorsement_final_private_id==""){
  document.getElementById("Endorsement").style.display='none';
}

if(doc.sum_insured_final_private_id==""){
  document.getElementById("sum").style.display='none';
}
if(doc.hpahyp_final_private_id==""){
  document.getElementById("hpa").style.display='none';
}
if(doc.rc_verification_selection_final_private_id==""){
  document.getElementById("rc").style.display='none';
}
if(doc.vehicle_registerd_number_final_private_id==""){
  document.getElementById("reg").style.display='none';
}
if(doc.vehicle_registration_date_final_private_id==""){
  document.getElementById("date_reg").style.display='none';
}
if(doc.vehicle_chassis_number_final_private_id==""){
  document.getElementById("chassis").style.display='none';
}
if(doc.vehicle_engine_number_final_private_id==""){
  document.getElementById("Engine").style.display='none';
}
if(doc.vehicle_make_final_private_id==""&& doc.vehicle_model_final_private_id==""){
  document.getElementById("make").style.display='none';
}
if(doc.vehicle_body_type_final_private_id==""){
  document.getElementById("body_type").style.display='none';
}
if(doc.vehicle_class_final_private_id==""){
  document.getElementById("class").style.display='none';
}
if(doc.vehicle_unladen_weight_final_private_id==""){
  document.getElementById("unladen").style.display='none';
}
if(doc.vehicle_registered_laden_weight_final_private_id==""){
  document.getElementById("laden_w").style.display='none';
}
if(doc.vehicle_fitness_certificate_final_private_id==""){
  document.getElementById("fitness").style.display='none';
}
if(doc.vehicle_fitness_certificate_validity_final_private_id==""){
  document.getElementById("validity_id").style.display='none';
}
if(doc.vehicle_colour_final_private_id==""){
  document.getElementById("color").style.display='none';
}
if(doc.vehicle_odometer_reading_final_private_id==""){
  document.getElementById("Odometer").style.display='none';
}
if(doc.vehicle_permit_number_final_private_id==""){
  document.getElementById("permit_no").style.display='none';
}
if(doc.vehicle_validity_final_private_id==""){
  document.getElementById("permit_val").style.display='none';
}
if(doc.vehicle_permit_type_final_private_id==""){
  document.getElementById("permit_type").style.display='none';
}
if(doc.vehicle_passenger_load_final_private_id==""){
  document.getElementById("Passenger_load").style.display='none';
}
if(doc.vehicle_area_permitted_final_private_id==""){
  document.getElementById("route_area").style.display='none';
}
if(doc.road_tax_selection_final_private_id=="select"){
  document.getElementById("road_tax").style.display='none';
}
if(doc.vehicle_condition_selection_final_private_id==""){
  document.getElementById("condition").style.display='none';
}
if(doc.dl_name_final_private_id==""&& doc.dl_address_final_private_id==""){
  document.getElementById("driver_name").style.display='none';
}
if(doc.dl_number_motor_private_id==""){
  document.getElementById("dl_license").style.display='none';
}
if(doc.dl_issue_date_final_private_id==""){
  document.getElementById("dl_date").style.display='none';
}
if(doc.dl_type_final_private_id==""){
  document.getElementById("dl_type").style.display='none';
}
if(doc.dl_endorsements_final_private_id==""){
  document.getElementById("dl_endorsements").style.display='none';
}
if(doc.accident_date_final_private_id || doc.accident_time_final_private_id ==""){
  document.getElementById("acc_time").style.display='none';
}
if(doc.accident_place_final_private_id==""){
  document.getElementById("acc_place").style.display='none';
}
if(doc.accident_cause_final_private_id==""){
  document.getElementById("acc_cause").style.display='none';
}
if(doc.accident_reported_to_police_final_private_id==""){
  document.getElementById("acc_report").style.display='none';
}
if(doc.name_of_police_station_final_private_id==""){
  document.getElementById("police").style.display='none';
}
if(doc.fir_details_final_private_id==""){
  document.getElementById("fir").style.display='none';
}
if(doc.property_damage_final_private_id==""){
  document.getElementById("tp").style.display='none';
}
if(doc.details_of_injury_final_private_id==""){
  document.getElementById("injuries").style.display='none';
}
if(doc.survey_request_date_final_private_id==""){
  document.getElementById("date_request").style.display='none';
}
if(doc.survey_place_final_private_id==""){
  document.getElementById("survey_place").style.display='none';
}
if(doc.nature_of_goods_carried_final_private_id==""){
  document.getElementById("nature_goods").style.display='none';
}if(doc.number_of_passengers_final_private_id==""){
  document.getElementById("Passengers").style.display='none';
}
if(doc.transported_from_final_private_id==""){
  document.getElementById("transport").style.display='none';
}


//console.log(doc.excel=='normal_table');

if(metal==5){
  var m=tmamount*0.05;
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==10){
   var m=tmamount*0.1;
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==15){
   var m=tmamount*0.15;
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==25){
   var m=tmamount*0.25;
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==35){
   var m=tmamount*0.35;
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==40){
   var m=tmamount*0.40;
  document.getElementById("mtotal").innerHTML=m;
}else{
   var m=tmamount*0.50;
  document.getElementById("mtotal").innerHTML=m;
}


if(fibre==5){
  var f=tfamount*0.05;
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==10){
   var f=tfamount*0.1;
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==15){
   var f=tfamount*0.15;
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==25){
   var f=tfamount*0.25;
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==35){
   var f=tfamount*0.35;
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==40){
   var f=tfamount*0.40;
  document.getElementById("fabrictotal").innerHTML=f;
}else{
   var f=tfamount*0.50;
  document.getElementById("fabrictotal").innerHTML=f;
}

if(plastic==5){
  var p=trpmount*0.05;
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==10){
  var p=trpmount*0.1;
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==15){
  var p=trpmount*0.15;
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==25){
  var p=trpmount*0.25;
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==35){
  var p=trpmount*0.35;
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==40){
  var p=trpmount*0.40;
  document.getElementById("plastictotal").innerHTML=p;
}else{
  var p=trpmount*0.50;
  document.getElementById("plastictotal").innerHTML=p;
}

if(plastic==5){
  var p=tgamount*0.05;
  document.getElementById("glasstotal").innerHTML=p;
}if(plastic==10){
  var p=tgamount*0.1;
  document.getElementById("glasstotal").innerHTML=p;
}if(plastic==15){
  var p=tgamount*0.15;
  document.getElementById("glasstotal").innerHTML=p;
}if(plastic==25){
  var p=tgamount*0.25;
  document.getElementById("glasstotal").innerHTML=p;
}if(plastic==35){
  var p=tgamount*0.35;
  document.getElementById("glasstotal").innerHTML=p;
}if(plastic==40){
  var p=tgamount*0.40;
  document.getElementById("glasstotal").innerHTML=p;
}else{
  var p=tgamount*0.50;
  document.getElementById("glasstotal").innerHTML=p;
}

});
