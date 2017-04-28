 var url = window.location.href;
  //console.log(url);

   var a = url.split("_id=")[1];
   var a,b;    // var aValue = localStorage.getItem("final_private");
      
  


  db.get(a,function(err,doc){
       //console.log(doc.report_date_final_private_id);
    if(!err){
console.log(doc);
  //var metal=doc.metal_percentage_final_private_id;
   //var fibre= doc.fibre_percentage_final_private_id;
   // var plastic=  doc.plastic_percentage_final_private_id;
    var material=doc.schedule_painting_material_percentage_final_private_id;
    var labour=doc.schedule_painting_labour_percentage_final_private_id;
    //var d = new Date();
    //var d1 = new Date();
    //var c1=new Date(d-d1);
    var d=new Date(doc.vehicle_registration_date_final_private_id);
     var d1=new Date(doc.accident_date_final_private_id);
     var diff=new Date(d-d1);
     console.log(diff);

//var diffDays = M
     //alert(DoR.getFullYear());
     //alert(DoR);
      //document.getElementById("total_labour_print_id").innerHTML=doc.total_labour_claimed_final_private_id;
      //document.getElementById("total_labour_assessed_print_id").innerHTML=doc.total_labour_assessed_final_private_id;
      //document.getElementById("cost_parts_print_id").innerHTML=doc.cost_of_spare_parts_claimed_final_private_id;
       //document.getElementById("cost_parts_assessed_print_id").innerHTML=doc.cost_of_spare_parts_assessed_final_private_id;
      document.getElementById("spot_photos_print_id").innerHTML=doc.spot_photo_claimed_final_private_id;
      document.getElementById("spot_photos_assessed_print_id").innerHTML=doc.spot_photo_assessed_final_private_id
      document.getElementById("spot_repair_print_id").innerHTML=doc.spot_repairs_claimed_final_private_id;
      document.getElementById("spot_repair_assessed_print_id").innerHTML=doc.spot_repairs_assessed_final_private_id;
      //document.getElementById("class_motor_private_id").value=doc.vehicle_class_final_private_id;
      //document.getElementById("class_motor_private_id").value=doc.vehicle_class_final_private_id;
//document.getElementById("policy_number_bill_print_id").value=doc.policy_number_code_final_private_id;      
//document.getElementById("policy_code_motor_print_id").value=doc.policy_number_code_final_private_id;
 document.getElementById("class_motor_private_id").value=doc.vehicle_class_final_private_id;
 document.getElementById("body_type_motor_private_id").value=doc.vehicle_body_type_final_private_id;
//document.getElementById("policy_code_bill_print_id").value=doc.policy_number_final_private_id;
//document.getElementById("license_no_bill_print_id").value=doc.dl_number_final_private_id;
document.getElementById("ins_name").innerHTML=doc.company_name_final_private_id;
document.getElementById("ins_date").innerHTML=doc.report_date_final_private_id;
//    document.getElementById("report_number_bill_print_id").innerHTML=doc._id;
  //  document.getElementById("report_date_bill_print_id").innerHTML=doc.report_date_final_private_id;
    //document.getElementById("branch_code_of_insurance_company_bill_print_id").innerHTML=doc.company_code_final_private_id;
    //document.getElementById("manager_of_insurance_company_bill_print_id").innerHTML=doc.company_manager_final_private_id;
  // document.getElementById("name_of_insurance_company_bill_print_id").innerHTML=doc.company_name_final_private_id;
   // document.getElementById("address_of_insurance_company_bill_print_id").innerHTML=doc.company_address_final_private_id;
   // document.getElementById("policy_number_code_final_private_id").value=doc.policy_number_code_final_private_id;
 //  document.getElementById("policy_number_bill_print_id").innerHTML=doc.policy_number_code_final_private_id;
   //document.getElementById("policy_code_bill_print_id").innerHTML=doc.policy_number_final_private_id;
   document.getElementById("claim_print_id").innerHTML=doc.claim_number_code_final_private_id;
    
   // document.getElementById("claim_number_code_bill_private_id").innerHTML=doc.claim_number_final_private_id;
  // document.getElementById("claim_number_bill_print_id").innerHTML=doc.claim_number_final_private_id;
  // claim_number_code_final_private_id
   // document.getElementById("insurer_code_final_private_id").value=doc.insurer_code_final_private_id;
   // document.getElementById("insurer_name_final_private_id").value=doc.insurer_name_final_private_id;
   // document.getElementById("insurer_address_final_private_id").value=doc.insurer_address_final_private_id;
  // document.getElementById("name_of_insured_bill_print_id").innerHTML=doc.insured_name_final_private_id;
  // document.getElementById("address_of_insured_bill_print_id").innerHTML=doc.insured_address_final_private_id;
//document.getElementById("insurance_period_from_final_private_id").value=doc.insurance_period_from_final_private_id;
    //document.getElementById("insurance_period_to_final_private_id").value=doc.insurance_period_to_final_private_id;
 //document.getElementById("insurance_endorsement_final_private_id").value=doc.insurance_endorsement_final_private_id;
   // document.getElementById("sum_insured_final_private_id").value=doc.sum_insured_final_private_id;
    //document.getElementById("hpahyp_motorr_private_id").innerHTML=doc.hpahyp_final_private_id;


    // document.getElementById("rc_verification_selection_final_private_id").value=doc.rc_verification_final_private_id;
   // document.getElementById("vehicle_registration_number_bill_print_id").innerHTML=doc.vehicle_registerd_number_final_private_id;
   // document.getElementById("vehicle_registration_date_final_private_id").value=doc.vehicle_registration_date_final_private_id;
    //document.getElementById("vehicle_make_bill_print_id").innerHTML=doc.vehicle_make_final_private_id;
   // document.getElementById("vehicle_model_bill_print_id").innerHTML=doc.vehicle_model_final_private_id;
  //  document.getElementById("vehicle_chassis_number_final_private_id").value=doc.vehicle_chassis_number_final_private_id;
   // document.getElementById("vehicle_engine_number_final_private_id").value=doc.vehicle_engine_number_final_private_id;
   // document.getElementById("vehicle_colour_final_private_id").value=doc.vehicle_colour_final_private_id;
   // document.getElementById("road_tax_selection_final_private_id").value=doc.road_tax_selection_final_private_id;
    //document.getElementById("road_tax_date_final_private_id").value=doc.road_tax_date_final_private_id;
   // document.getElementById("vehicle_body_type_final_private_id").value=doc.vehicle_body_type_final_private_id;
   // document.getElementById("vehicle_class_final_private_id").value=doc.vehicle_class_final_private_id;
   // document.getElementById("vehicle_condition_selection_final_private_id").value=doc.vehicle_condition_selection_final_private_id;
    //document.getElementById("vehicle_odometer_reading_final_private_id").value=doc.vehicle_odometer_reading_final_private_id;
  //  document.getElementById("valid_upto_bill_print_id").innerHTML=doc.vehicle_rc_validity_final_private_id;
   // document.getElementById("vehicle_seating_capacity_final_private_id").value=doc.vehicle_seating_capacity_final_private_id;
    //document.getElementById("dl_verification_selection_final_private_id").value=doc.dl_verification_selection_final_private_id;
   
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
//document.getElementById("name_of_prson_company_bill_print_id").innerHTML=doc.personal_name;         
     //    document.getElementById("qualification_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_designation;
   // document.getElementById("address_of_person_insurance_company_bill_print_id").innerHTML=doc.personal_address;
 //   document.getElementById("tel_of_insurance_company_bill_print_id").innerHTML=doc.personal_office_phone;

    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
   // document.getElementById("mobile_of_insurance_company_bill_print_id").innerHTML=doc.personal_mobile;
   //  document.getElementById("email_of_insurance_company_bill_print_id").innerHTML=doc.personal_email;
    // document.getElementById("valid_upto_bill_print_id").innerHTML=doc.personal_license_validity;


      document.getElementById("name_of_prson_company_motor_print_id").innerHTML=doc.personal_name;         
         document.getElementById("qualification_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_designation;
    document.getElementById("address_of_person_insurance_company_motor_print_id").innerHTML=doc.personal_address;
    document.getElementById("tel_of_insurance_company_motor_print_id").innerHTML=doc.personal_office_phone;
  
   document.getElementById("license_no_id").innerHTML=doc.personal_license_number;
    document.getElementById("pan_no_motor_print_id").innerHTML=doc.personal_pan;
    // document.getElementById("home_of_insurance_company_bill_print_id").innerHTML=doc.personal_home_phone;
    document.getElementById("mobile_of_insurance_company_motor_print_id").innerHTML=doc.personal_mobile;
     document.getElementById("email_of_insurance_company_motor_print_id").innerHTML=doc.personal_email;
     document.getElementById("valid_upto_motor_print_id").innerHTML=doc.personal_license_validity;
     
   //  document.getElementById("p_name").innerHTML=doc.personal_name;
     //document.getElementById("p_bank").innerHTML=doc.personal_bank_name;
     //document.getElementById("p_account").innerHTML=doc.personal_account_number;
    // document.getElementById("p_micr").innerHTML=doc.personal_micr;
    // document.getElementById("p_isf").innerHTML=doc.personal_ifs_code;
     
     // document.getElementById("name_of_prson_motor_print_id").innerHTML=doc.personal_name;         
       //  document.getElementById("qualification_of_person_insurance_motor_print_id").innerHTML=doc.personal_designation;
    //document.getElementById("address_of_person_insurance_motor_print_id").innerHTML=doc.personal_address;
    
  //    document.getElementById("name_print_id").innerHTML=doc.personal_name;         
         //document.getElementById("qualification_print_id").innerHTML=doc.personal_designation;
    //document.getElementById("address_print_id").innerHTML=doc.personal_address;
    document.getElementById("name_id").innerHTML=doc.personal_name;
               



      
     // var b=doc.personal_name;
     // console.log(b);
     });


document.getElementById("report_number_motor_print_id").innerHTML=doc._id;
//document.getElementById("report_id").innerHTML=doc._id;

    document.getElementById("report_date_motor_print_id").innerHTML=doc.report_date_final_private_id;
    document.getElementById("branch_code_of_insurance_company_motor_print_id").innerHTML=doc.company_code_final_private_id;
    document.getElementById("manager_of_insurance_company_motor_print_id").innerHTML=doc.company_manager_final_private_id;
   document.getElementById("name_of_insurance_company_motor_print_id").innerHTML=doc.company_name_final_private_id;
    document.getElementById("address_of_insurance_company_motor_print_id").innerHTML=doc.company_address_final_private_id;
   // document.getElementById("policy_number_code_final_motor_id").value=doc.policy_number_code_final_private_id;
   document.getElementById("policy_motor_print_id").innerHTML=doc.policy_number_code_final_private_id;
    //document.getElementById("policy_code_motor_print_id").innerHTML=doc.policy_number_final_private_id;
   // document.getElementById("claim_number_code_final_private_id").value=doc.claim_number_code_final_private_id;
   //document.getElementById("claim_motor_print_id").innerHTML=doc.claim_number_final_private_id;
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

  //  document.getElementById("road_taxx_motor_private_id").innerHTML=doc.road_tax_date_final_private_id;
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
document.getElementById("property_damage_motor_private_id").innerHTML=doc.property_damage_final_private_id;
document.getElementById("details_of_injury_motor_private_id").innerHTML=doc.details_of_injury_final_private_id;
document.getElementById("accident_reported_to_police_motor_private_id").innerHTML=doc.accident_reported_to_police_final_private_id;
var name_police=document.getElementById("name_of_police_station_motor_private_id").innerHTML=doc.name_of_police_station_final_private_id;
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
//ath.ceil(timeDiff / (1000 * 3600 * 24)); 
//alert(timeDiff);
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

 var strd="",strl="",count=1,lpcount=1,amount=0,mamount=0,rpamount=0,famount=0,gamount=0,amtvat=0,fabvat=0,metvat=0,samount=0,slavat=0,tsamount=0,rubvat=0,glavat=0,tamount=0,tfamount=0,tmamount=0,trpmount=0,tgamount=0;
var lpamount=0,lpramount=0,lpast=0,lprast=0,tlpamount=0,tlpramount=0,namount=0,tnamount=0,amtnvat=0,pamount=0,plavat=0,tpamount=0,strp="";
var claim_vat=0,asses_vat=0,depreciation=0;
//console.log(doc.damage_parts);
      console.log(doc.parts);
  if(doc.vat=='with_vat'){   
if(doc.parts=='vat_on_total')
{

for(var keyd in doc.damage_parts){
        var valued=doc.damage_parts[keyd];
         console.log(valued);
        //console.log(doc.damage_parts[2].length);
       // console.log(valued.length);
       
       for(var i=0;i<valued.length;i++){
           console.log(valued.length);
        var w=doc.damage_parts[keyd];
        console.log(w.length);
        if(i==0){
          if(valued[0].value!='Labour' && valued[0].value!='Paint'){
        amount=parseFloat(amount,10)+parseFloat(valued[i].claimed,10);
         amount=amount.toFixed(2);
                      amtvat=amount*0.145;
                      amtvat=parseFloat(Math.round(amtvat * 100) / 100).toFixed(2);
                      tamount=parseFloat(amount,10)+parseFloat(amtvat,10);
                       tamount=tamount.toFixed(2);
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                    }
                  }
        if( i>0 ||(i==0 && w.length<=1)){
          if(valued[0].value!='Labour' && valued[0].value!='Paint'){
        namount=parseFloat(namount,10)+parseFloat(valued[i].assessed,10);
         //namount=namount.toFixed(2);
                      amtnvat=namount*0.145;
                      amtnvat=parseFloat(Math.round(amtnvat * 100) / 100).toFixed(2);
                      tnamount=parseFloat(namount,10)+parseFloat(amtnvat,10);
                       tnamount=tnamount.toFixed(2);
                      document.getElementById("namount").innerHTML=namount;
                      document.getElementById("amtnvat").innerHTML=amtnvat;
                      document.getElementById("tnamount").innerHTML=tnamount;
                    }
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
                      +valued[i].claimed+"</td><td></td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td>"+valued[i].assessed+"<td></td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>";       
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
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
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
                      +valued[i].claimed+"</td><td></td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                        mamount=parseFloat(mamount,10)+parseFloat(valued[i].assessed,10);
                        mamount=mamount.toFixed(2);
                      metvat=mamount*0.145;
                      metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10)+parseFloat(metvat,10);
                       tmamount=tmamount.toFixed(2);
                       }
                       else {
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";                
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                       rpamount=parseFloat(rpamount,10)+parseFloat(valued[i].assessed,10);
                       rpamount=rpamount.toFixed(2);
                      rubvat=rpamount*0.145;
                      rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10)+parseFloat(rubvat,10);
                       trpmount=trpmount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                      gamount=parseFloat(gamount,10)+parseFloat(valued[i].assessed,10);
                       gamount=gamount.toFixed(2);
                      glavat=gamount*0.145;
                      glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10)+parseFloat(glavat,10);
                       tgamount=tgamount.toFixed(2);
                      }
                       
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
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
            case ''  :
                if(i==0 && w.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td></td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                       count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                      samount=parseFloat(samount,10)+parseFloat(valued[i].assessed,10);
                       samount=samount.toFixed(2);
                      slavat=samount*0.145;
                      slavat=parseFloat(Math.round(slavat * 100) / 100).toFixed(2);
                      tsamount=parseFloat(samount,10)+parseFloat(slavat,10);
                       tsamount=tsamount.toFixed(2);
                      }
                       
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                   count++;
                       samount=parseFloat(samount,10)+parseFloat(valued[i].assessed,10);
                       samount=samount.toFixed(2);
                      slavat=samount*0.145;
                      slavat=parseFloat(Math.round(slavat * 100) / 100).toFixed(2);
                      tsamount=parseFloat(samount,10)+parseFloat(slavat,10);
                       tsamount=tsamount.toFixed(2);
                        }
                      document.getElementById("samount").innerHTML=samount;
                      document.getElementById("slavat").innerHTML=slavat;
                      document.getElementById("tsamount").innerHTML=tsamount;
                
                break;
  case 'Paint' :  
                      if(i==0){
                        strp+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td></td><td></td><td></td><td></td><td></td></tr>"; 
                   count++;
                        if(doc.painting=='75_25'){
                           claim_vat=parseFloat(valued[i].claimed,10)*0.25;
                          claim_vat=claim_vat.toFixed(2);
                         asses_vat=parseFloat(valued[i].assessed,10)*0.25;
                          asses_vat=asses_vat.toFixed(2);
                          document.getElementById("percent").innerHTML='25';

                        }else if(doc.painting=='schedule'){
                          
                           claim_vat=parseFloat(valued[i].claimed,10)*(material/100);
                           claim_vat=claim_vat.toFixed(2);
                           asses_vat=parseFloat(valued[i].assessed,10)*(material/100);
                           asses_vat=asses_vat.toFixed(2);
                           document.getElementById("percent").innerHTML=material;
                        }
                      pamount=parseFloat(tamount,10)+parseFloat(claim_vat,10);
                      pamount=pamount.toFixed(2);
                      tpamount=parseFloat(tnamount,10)+parseFloat(asses_vat,10);
                      tpamount=tpamount.toFixed(2);
                }
                break;
}
}
//console.log(strd);
//}
}


                        

document.getElementById("parts").innerHTML=strd;
document.getElementById("paint").innerHTML=strp;
document.getElementById("claim_vat").innerHTML=claim_vat;
document.getElementById("asses_vat").innerHTML=asses_vat;
document.getElementById("pamount").innerHTML=pamount;
document.getElementById("tpamount").innerHTML=tpamount;


document.getElementById("famount").innerHTML=famount;
                      document.getElementById("fabvat").innerHTML=fabvat;
                      document.getElementById("tfamount").innerHTML=tfamount;
                      document.getElementById("mamount").innerHTML=mamount;
                      document.getElementById("metvat").innerHTML=metvat;
                      document.getElementById("tmamount").innerHTML=tmamount;
                      document.getElementById("rpamount").innerHTML=rpamount;
                      document.getElementById("rubvat").innerHTML=rubvat;
                      document.getElementById("trpamount").innerHTML=trpmount;
                      document.getElementById("gamount").innerHTML=gamount;
                      document.getElementById("glavat").innerHTML=glavat;
                      document.getElementById("tgamount").innerHTML=tgamount;
                      document.getElementById("samount").innerHTML=samount;
                      document.getElementById("slavat").innerHTML=slavat;
                      document.getElementById("tsamount").innerHTML=tsamount;
                      document.getElementById("namount").innerHTML=namount;
                      document.getElementById("amtnvat").innerHTML=amtnvat;
                      document.getElementById("tnamount").innerHTML=tnamount;
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                      document.getElementById("claimedcost").innerHTML=tamount;
document.getElementById("assessedcost").innerHTML=tnamount;

                      

}
//console.log(document.getElementById("gamount").innerHTML=gamount);
                       // console.log(document.getElementById("glavat").innerHTML=glavat);
                        //console.log(document.getElementById("tgamount").innerHTML=tgamount);
var tot=0,fib=0,met=0,pla=0,gla=0,sla=0;
var strpaint="" ,claimed_vat=0,assessed_vat=0,claimp_amount=0,assesp_amount=0;
//console.log(doc.damage_parts);
if(doc.parts=='vat_on_parts'){
  
  // Discard the time and time-zone information.
  //var utc1 = Date.UTC(DoR.getFullYear(), DoR.getMonth(), DoR.getDate());
  //var utc2 = Date.UTC(DoA.getFullYear(), DoA.getMonth(), DoA.getDate());

  //var res=Math.floor((utc2 - utc1) / _MS_PER_DAY);
  //console.log(res);

  //console.log(DoR);
                      //console.log(DoA);
                      
                      
                      //depreciation=
                      console.log(depreciation);
for(var keyd in doc.damage_parts){
 
        var valued=doc.damage_parts[keyd];
        
        for(var i=0;i<valued.length;i++){
           var y=doc.damage_parts[keyd];
            console.log(valued);
        console.log(y.length);
         // console.log(doc.damage_parts[2][0].length);
          if(i==0){
            if(valued[0].value!='Labour' && valued[0].value!='Paint'){
         tot=parseInt(valued[i].claimed,10);
         console.log(tot);
                      tot=(tot*100)/114.5;
                      console.log(tot);
                      //tot=tot.toFixed(2);
                      amount=parseFloat(amount,10)+tot;
                      amount=amount.toFixed(2);
                     // famount=famount.toFixed(2);
                     //console.log(amount);
                      amtvat=amount*0.145;
                      amtvat=parseFloat(Math.round(amtvat * 100) / 100).toFixed(2);
                      tamount=parseFloat(amount,10)+parseFloat(amtvat,10);
                       tamount=tamount.toFixed(2);



        
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                    }
                  }
              if( i>0 ||(i==0 && y.length<=1)){
                if(valued[0].value!='Labour' && valued[0].value!='Paint'){
                   ntot=parseInt(valued[i].assessed,10);
                   console.log(tot);
                      ntot=(ntot*100)/114.5;
                      console.log(ntot);
                      //tot=tot.toFixed(2);
                      namount=parseFloat(namount,10)+ntot;
                      namount=namount.toFixed(2);
                     // famount=famount.toFixed(2);
                     //console.log(amount);
                      amtnvat=namount*0.145;
                      amtnvat=parseFloat(Math.round(amtnvat * 100) / 100).toFixed(2);
                      tnamount=parseFloat(namount,10)+parseFloat(amtnvat,10);
                       tnamount=tnamount.toFixed(2);



        
                      document.getElementById("namount").innerHTML=namount;
                      document.getElementById("amtnvat").innerHTML=amtnvat;
                      document.getElementById("tnamount").innerHTML=tnamount;
                }

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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
                       fab=parseInt(valued[i].assessed,10);
                      fab=(fab*100)/114.5;
                      
                      famount=parseFloat(famount,10)+fab;
                      famount=famount.toFixed(2);
                     // famount=famount.toFixed(2);
                      fabvat=famount*0.145;
                      fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10)+parseFloat(fabvat,10);
                       tfamount=tfamount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       
                      fab=parseInt(valued[i].assessed,10);
                      fab=(fab*100)/114.5;
                      
                      famount=parseFloat(famount,10)+fab;
                      //fab=fab.toFixed(2);
                      famount=famount.toFixed(2);
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
                      console.log(DoR);
                      console.log(DoA);
                       
                      //console.log(tmamount);
                       if(i==0 && y.length>1 ){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                       met=parseInt(valued[i].assessed,10);
                      met=(met*100)/114.5;
                      //met=met.toFixed(2);
                      mamount=parseFloat(mamount,10)+met;
                      mamount=mamount.toFixed(2);
                      metvat=mamount*0.145;
                      metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10)+parseFloat(metvat,10);
                       tmamount=tmamount.toFixed(2);
                       }
                       else {
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                      met=parseInt(valued[i].assessed,10);
                      met=(met*100)/114.5;
                      //met=met.toFixed(2);
                      mamount=parseFloat(mamount,10)+met;
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
                     if(i==0 && y.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";                
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                        pla=parseInt(valued[i].assessed,10);
                      pla=(pla*100)/114.5;
                      //pla=pla.toFixed(2);
                      rpamount=parseFloat(rpamount,10)+pla;
                     rpamount=rpamount.toFixed(2);
                      rubvat=rpamount*0.145;
                      rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10)+parseFloat(rubvat,10);
                      trpmount=trpmount.toFixed(2);
                     }
                     else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       pla=parseInt(valued[i].assessed,10);
                      pla=(pla*100)/114.5;
                      //pla=pla.toFixed(2);
                      rpamount=parseFloat(rpamount,10)+pla;
                     rpamount=rpamount.toFixed(2);
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                       gla=parseInt(valued[i].assessed,10);
                     gla=(gla*100)/114.5;
                    // gla=gla.toFixed(2);
                     gamount=parseFloat(gamount,10)+gla;
                     gamount=gamount.toFixed(2);
                      glavat=gamount*0.145;
                      glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10)+parseFloat(glavat,10);
                       tgamount=tgamount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                   count++;
                      gla=parseInt(valued[i].assessed,10);
                      gla=(gla*100)/114.5;
                      //gla=gla.toFixed(2);
                     gamount=parseFloat(gamount,10)+gla;
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
        case '':   
                     
                      
                      //console.log(tgamount);
                      if(i==0 && y.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                       sla=parseInt(valued[i].assessed,10);
                     sla=(sla*100)/114.5;
                     //sla=sla.toFixed(2);
                     samount=parseFloat(samount,10)+sla;
                     samount=samount.toFixed(2);
                      slavat=samount*0.145;
                      slavat=parseFloat(Math.round(slavat * 100) / 100).toFixed(2);
                      tsamount=parseFloat(samount,10)+parseFloat(slavat,10);
                       tsamount=tsamount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                   count++;
                      sla=parseInt(valued[i].assessed,10);
                     sla=(sla*100)/114.5;
                    // sla=sla.toFixed(2);
                     samount=parseFloat(samount,10)+sla;
                     samount=samount.toFixed(2);
                      slavat=samount*0.145;
                      slavat=parseFloat(Math.round(slavat * 100) / 100).toFixed(2);
                      tsamount=parseFloat(samount,10)+parseFloat(slavat,10);
                       tsamount=tsamount.toFixed(2);
                       }
                      document.getElementById("samount").innerHTML=samount;
                      document.getElementById("slavat").innerHTML=slavat;
                      document.getElementById("tsamount").innerHTML=tsamount;
                      break;
case 'Paint' :  
                      if(i==0){
                        strp+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td></td><td></td><td></td><td></td><td></td></tr>"; 
                   count++;
                        if(doc.painting=='75_25'){
                           claim_vat=parseFloat(valued[i].claimed,10)*0.25;
                          claim_vat=claim_vat.toFixed(2);
                         asses_vat=parseFloat(valued[i].assessed,10)*0.25;
                          asses_vat=asses_vat.toFixed(2);
                          document.getElementById("percent").innerHTML='25';

                        }else if(doc.painting=='schedule'){
                          
                           claim_vat=parseFloat(valued[i].claimed,10)*(material/100);
                           claim_vat=claim_vat.toFixed(2);
                           asses_vat=parseFloat(valued[i].assessed,10)*(material/100);
                           asses_vat=asses_vat.toFixed(2);
                           document.getElementById("percent").innerHTML=material;
                        }
                      pamount=parseFloat(tamount,10)+parseFloat(claim_vat,10);
                      pamount=pamount.toFixed(2);
                      tpamount=parseFloat(tnamount,10)+parseFloat(asses_vat,10);
                      tpamount=tpamount.toFixed(2);
                }
                break;                      


}
}

//console.log(strd);

}


document.getElementById("parts").innerHTML=strd;
document.getElementById("famount").innerHTML=famount;
document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                      document.getElementById("fabvat").innerHTML=fabvat;
                      document.getElementById("tfamount").innerHTML=tfamount;
                      document.getElementById("mamount").innerHTML=mamount;
                      document.getElementById("metvat").innerHTML=metvat;
                      document.getElementById("tmamount").innerHTML=tmamount;
                      document.getElementById("rpamount").innerHTML=rpamount;
                      document.getElementById("rubvat").innerHTML=rubvat;
                      document.getElementById("trpamount").innerHTML=trpmount;
                      document.getElementById("gamount").innerHTML=gamount;
                      document.getElementById("glavat").innerHTML=glavat;
                      document.getElementById("tgamount").innerHTML=tgamount;
                      document.getElementById("samount").innerHTML=samount;
                      document.getElementById("slavat").innerHTML=slavat;
                      document.getElementById("tsamount").innerHTML=tsamount;
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                      document.getElementById("claimedcost").innerHTML=tamount;
                      document.getElementById("assessedcost").innerHTML=tnamount;



}

//console.log(doc.excel=='normal_table');
//console.log(tmamount);


}
if(doc.vat=='without_vat'){
  for(var keyd in doc.damage_parts){
        var valued=doc.damage_parts[keyd];
         
        //console.log(doc.damage_parts[2].length);
       // console.log(valued.length);
       
       for(var i=0;i<valued.length;i++){
           console.log(valued.length);
           console.log(valued[0].value);
        var w=doc.damage_parts[keyd];
        console.log(w.length);
        if(i==0){
          if(valued[0].value!='Labour' && valued[0].value!='Paint'){
        amount=parseFloat(amount,10)+parseFloat(valued[i].claimed,10);
         amount=amount.toFixed(2);
                      //amtvat=amount*0.145;
                      //amtvat=parseFloat(Math.round(amtvat * 100) / 100).toFixed(2);
                      tamount=parseFloat(amount,10);
                       tamount=tamount.toFixed(2);
                      document.getElementById("amount").innerHTML=amount;
                      document.getElementById("amtvat").innerHTML=amtvat;
                      document.getElementById("tamount").innerHTML=tamount;
                    }
                  }
          if( i>0 ||(i==0 && w.length<=1)){
          if(valued[0].value!='Labour' && valued[0].value!='Paint'){
        namount=parseFloat(namount,10)+parseFloat(valued[i].assessed,10);
         namount=namount.toFixed(2);
                      
                      tnamount=parseFloat(namount,10);
                       tnamount=tnamount.toFixed(2);
                      document.getElementById("namount").innerHTML=namount;
                      document.getElementById("amtnvat").innerHTML=amtnvat;
                      document.getElementById("tnamount").innerHTML=tnamount;
                    }
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>";       
                          famount=parseFloat(famount,10)+parseFloat(valued[i].assessed,10);
                        famount=famount.toFixed(2);
                      //fabvat=famount*0.145;
                      //fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10);
                       tfamount=tfamount.toFixed(2);

                          }
                       else {
                           famount=parseFloat(famount,10)+parseFloat(valued[i].assessed,10);
                           famount=famount.toFixed(2);
                         //fabvat=famount*0.145;
                         //fabvat=parseFloat(Math.round(fabvat * 100) / 100).toFixed(2);
                      tfamount=parseFloat(famount,10);
                       tfamount=tfamount.toFixed(2);
                         strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td></tr>"; 
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                        mamount=parseFloat(mamount,10)+parseFloat(valued[i].assessed,10);
                        mamount=mamount.toFixed(2);
                      //metvat=mamount*0.145;
                      //metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10);
                       tmamount=tmamount.toFixed(2);
                       }
                       else {
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                      mamount=parseFloat(mamount,10)+parseFloat(valued[i].assessed,10);
                      mamount=mamount.toFixed(2);
                      //metvat=mamount*0.145;
                      //metvat=parseFloat(Math.round(metvat * 100) / 100).toFixed(2);
                      tmamount=parseFloat(mamount,10);
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>";                
                      count++;
                       }
                       else if(i>0){
                        strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                       rpamount=parseFloat(rpamount,10)+parseFloat(valued[i].assessed,10);
                       rpamount=rpamount.toFixed(2);
                      //rubvat=rpamount*0.145;
                      //rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10);
                       trpmount=trpmount.toFixed(2);
                       }
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                      rpamount=parseFloat(rpamount,10)+parseFloat(valued[i].assessed,10);
                       rpamount=rpamount.toFixed(2);
                      //rubvat=rpamount*0.145;
                      //rubvat=parseFloat(Math.round(rubvat * 100) / 100).toFixed(2);
                      trpmount=parseFloat(rpamount,10);
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
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                      count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                      gamount=parseFloat(gamount,10)+parseFloat(valued[i].assessed,10);
                       gamount=gamount.toFixed(2);
                      //glavat=gamount*0.145;
                      //glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10);
                       tgamount=tgamount.toFixed(2);
                      }
                       
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td><td>-</td></tr>"; 
                   count++;
                       gamount=parseFloat(gamount,10)+parseFloat(valued[i].assessed,10);
                       gamount=gamount.toFixed(2);
                      //glavat=gamount*0.145;
                      //glavat=parseFloat(Math.round(glavat * 100) / 100).toFixed(2);
                      tgamount=parseFloat(gamount,10);
                       tgamount=tgamount.toFixed(2);
                        }
                      document.getElementById("gamount").innerHTML=gamount;
                      document.getElementById("glavat").innerHTML=glavat;
                      document.getElementById("tgamount").innerHTML=tgamount;

                      break;
            case ''  :
                if(i==0 && w.length>1){
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>"; 
                       count++;
                       }
                       else if(i>0){
                          strd+="<tr><td></td><td>"+valued[i].part_name+
                        "</td><td></td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                      samount=parseFloat(samount,10)+parseFloat(valued[i].assessed,10);
                       samount=samount.toFixed(2);
                      //slavat=samount*0.145;
                      //slavat=parseFloat(Math.round(slavat * 100) / 100).toFixed(2);
                      tsamount=parseFloat(samount,10);
                       tsamount=tsamount.toFixed(2);
                      }
                       
                       else{
                        strd+="<tr><td>"+count+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td><td>-</td><td>-</td><td>-</td><td>-</td><td>"+valued[i].assessed+"</td></tr>"; 
                   count++;
                       samount=parseFloat(samount,10)+parseFloat(valued[i].assessed,10);
                       samount=samount.toFixed(2);
                      //slavat=samount*0.145;
                      //slavat=parseFloat(Math.round(slavat * 100) / 100).toFixed(2);
                      tsamount=parseFloat(samount,10);
                       tsamount=tsamount.toFixed(2);
                        }
                      document.getElementById("samount").innerHTML=samount;
                      document.getElementById("slavat").innerHTML=slavat;
                      document.getElementById("tsamount").innerHTML=tsamount;
                
                break;
      

}
}
//console.log(strd);
//}
}

document.getElementById("parts").innerHTML=strd;

document.getElementById("famount").innerHTML=famount;
                      //document.getElementById("fabvat").innerHTML=fabvat;
                      document.getElementById("tfamount").innerHTML=tfamount;
                      document.getElementById("mamount").innerHTML=mamount;
                      //document.getElementById("metvat").innerHTML=metvat;
                      document.getElementById("tmamount").innerHTML=tmamount;
                      document.getElementById("rpamount").innerHTML=rpamount;
                      //document.getElementById("rubvat").innerHTML=rubvat;
                      document.getElementById("trpamount").innerHTML=trpmount;
                      document.getElementById("gamount").innerHTML=gamount;
                      //document.getElementById("glavat").innerHTML=glavat;
                      document.getElementById("tgamount").innerHTML=tgamount;
                      document.getElementById("samount").innerHTML=samount;
                      //document.getElementById("slavat").innerHTML=slavat;
                      document.getElementById("tsamount").innerHTML=tsamount;
                      if(fabvat==0 && metvat==0 && glavat==0 && slavat==0)
                      {
                        document.getElementById("vat_bill").style.display='none';
                        document.getElementById("total_amount").style.display='none';
                      }
}
if(doc.labour=='with_service_tax'){
   for(var keyl in doc.damage_parts){
 
        var valuel=doc.damage_parts[keyl];
        
        for(var i=0;i<valuel.length;i++){
           var z=doc.damage_parts[keyl];
            console.log(valuel);
        console.log(z.length);
         // console.log(doc.damage_parts[2][0].length);
          
              // console.log(tamount);
        //console.log(doc.damage_parts);
        var val=14.50;
        console.log(valuel.value);
        switch(valuel[i].value){

   case 'Labour':
       
                   if(i==0)  {
                    strl+="<tr><td>"+lpcount+"</td><td>"+valuel[i].part_name+"</td><td>"+valuel[i].claimed+"</td><td>"+valuel[i].assessed+
                    "</td></tr>";
                    lpcount++;
                    lpamount=parseFloat(lpamount,10)+parseFloat(valuel[i].claimed,10);
                    lpamount=lpamount.toFixed(2);
                    lpast=lpamount*0.15;
                    lpast=parseFloat(Math.round(lpast * 100) / 100).toFixed(2);
                    tlpamount=parseFloat(lpamount,10)+parseFloat(lpast,10);
                    tlpamount=tlpamount.toFixed(2);
                    lpramount=parseFloat(lpramount,10)+parseFloat(valuel[i].assessed,10);
                    lpramount=lpramount.toFixed(2);
                    lprast=lpramount*0.15;
                    lprast=parseFloat(Math.round(lprast * 100) / 100).toFixed(2);
                    tlpramount=parseFloat(lpramount,10)+parseFloat(lprast,10);
                    tlpramount=tlpramount.toFixed(2);

                   } 
                   break;
    case 'Paint' :       
                      if(i==0){
                        strpaint+="<tr><td>"+lpcount+"</td><td>"+valued[i].part_name+"</td><td>"
                      +valued[i].claimed+"</td><td>"+valued[i].assessed+"</td></tr>"; 
                        lpcount++;
                        if(doc.painting=='75_25'){
                           claimed_vat=parseFloat(valued[i].claimed,10)*0.75;
                          claimed_vat=claimed_vat.toFixed(2);
                         assessed_vat=parseFloat(valued[i].assessed,10)*0.75;
                          assessed_vat=assessed_vat.toFixed(2);
                          document.getElementById("percentage").innerHTML='75';

                        }else if(doc.painting=='schedule'){
                          
                           claimed_vat=parseFloat(valued[i].claimed,10)*(labour/100);
                           claimed_vat=claimed_vat.toFixed(2);
                           assessed_vat=parseFloat(valued[i].assessed,10)*(labour/100);
                           assessed_vat=assessed_vat.toFixed(2);
                           document.getElementById("percentage").innerHTML=labour;
                        }
                      claimp_amount=parseFloat(tlpamount,10)+parseFloat(claimed_vat,10);
                      claimp_amount=claimp_amount.toFixed(2);
                      assesp_amount=parseFloat(tlpramount,10)+parseFloat(assessed_vat,10);
                      assesp_amount=assesp_amount.toFixed(2);
                }
                break;                      
          }         
          }         
            }      document.getElementById("labour_parts").innerHTML=strl;
                   document.getElementById("labour_paint").innerHTML=strpaint;
                    document.getElementById("estimated").innerHTML=lpamount;
                      document.getElementById("astelab").innerHTML=lpast;
                      document.getElementById("claimed_vat").innerHTML=claimed_vat;
                      document.getElementById("assessed_vat").innerHTML=assessed_vat;
                      document.getElementById("claimp_amount").innerHTML=claimp_amount;
                      document.getElementById("assesp_amount").innerHTML=assesp_amount;
                      document.getElementById("claimed_vat").innerHTML=claimed_vat;
                      document.getElementById("testimated").innerHTML=tlpamount;
                      document.getElementById("assessed").innerHTML=lpramount;
                      document.getElementById("astalab").innerHTML=lprast;
                      document.getElementById("tassessed").innerHTML=tlpramount;  
                      document.getElementById("total_labour_print_id").innerHTML=tlpamount;
document.getElementById("total_labour_assessed_print_id").innerHTML=tlpramount;


}
var strm='',ncount=1;
if(doc.labour=='without_service_tax'){
  //console.log(doc.damage_parts[1][0].value);
for(var keyl in doc.damage_parts){
 
        var valuel=doc.damage_parts[keyl];
        
        for(var i=0;i<valuel.length;i++){
           var z=doc.damage_parts[keyl];
            console.log(valuel);
        console.log(z.length);
         // console.log(doc.damage_parts[2][0].length);
          
              // console.log(tamount);
        //console.log(doc.damage_parts);
        var val=14.50;
        console.log(valuel.value);
        if((valuel[i].value)!='Consolidated-Labour'){
        switch(valuel[i].value){

   case 'Labour':
      case 'Paint' : 
                   if(i==0)  {
                    strm+="<tr><td>"+lpcount+"</td><td>"+valuel[i].part_name+"</td><td>"+valuel[i].claimed+"</td><td>"+valuel[i].assessed+
                    "</td></tr>";
                    lpcount++;
                    lpamount=parseFloat(lpamount,10)+parseFloat(valuel[i].claimed,10);
                    lpamount=lpamount.toFixed(2);
                    //lpast=0;
                    //lpast=parseFloat(Math.round(lpast * 100) / 100).toFixed(2);
                    tlpamount=parseFloat(lpamount,10);
                    tlpamount=tlpamount.toFixed(2);
                    lpramount=parseFloat(lpramount,10)+parseFloat(valuel[i].assessed,10);
                    lpramount=lpramount.toFixed(2);
                    tlpramount=parseFloat(lpramount,10);
                    tlpramount=tlpramount.toFixed(2);
                    
                   }
                   break;

    
                   } 
                   document.getElementById("labour_parts").innerHTML=strm;
                 }
                else {
                    //var j=i;
                    //console.log(i);
                    strm="";
                       lpamount=valuel[i].claimed;
                               
                    //lpast=0;
                    //lpast=parseFloat(Math.round(lpast * 100) / 100).toFixed(2);
                    tlpamount=parseFloat(lpamount,10);
                    tlpamount=tlpamount.toFixed(2);
                    lpramount=parseFloat(lpramount,10)+parseFloat(valuel[i].assessed,10);
                    lpramount=lpramount.toFixed(2);
                    tlpramount=parseFloat(lpramount,10);
                    tlpramount=tlpramount.toFixed(2);
                    for(var keyl in doc.damage_parts){
                    console.log(doc.damage_parts);
                    var valuel=doc.damage_parts[keyl];
                    for(var j=0;j<valuel.length;j++){
                      console.log(valuel);
                      console.log(valuel[j].value);
                    switch(valuel[j].value){
                     
           case 'Labour':
           case 'Paint' : 
           case 'Consolidated-Labour':
                  var lpc=lpcount/2;
                  console.log(lpc);
                   if(ncount!=lpc){
                    strm+="<tr><td>"+ncount+"</td><td>"+valuel[j].part_name+"</td><td>}</td><td>"+valuel[j].assessed+
                    "</td></tr>";
                    ncount++;
                   }else{
                    strm+="<tr><td>"+ncount+"</td><td>"+valuel[j].part_name+"</td><td>"+lpamount+"</td><td>"+valuel[j].assessed+
                    "</td></tr>";
                    ncount++;
                   }
                   console.log(strm);
                   //c++;
                   break;
                   } 
        }
      }
      document.getElementById("labour_parts").innerHTML=strm;
      }
      console.log(strm);
      

                     


          
          }     
          }      
          //console.log(strm);
                  
                  //document.getElementById("labour_parts").innerHTML=strm;
                    document.getElementById("estimated").innerHTML=lpamount;
                      //document.getElementById("astelab").innerHTML=lpast;
                      document.getElementById("testimated").innerHTML=tlpamount;
                      document.getElementById("assessed").innerHTML=lpramount;
                      //document.getElementById("astalab").innerHTML=lprast;
                      document.getElementById("tassessed").innerHTML=tlpramount; 
                      document.getElementById("total_labour_print_id").innerHTML=tlpamount;
document.getElementById("total_labour_assessed_print_id").innerHTML=tlpramount;
                      if(lpast==0 && lprast==0){
                        document.getElementById("service_tax").style.display='none';
                        document.getElementById("total_charge").style.display='none';

                      }
                      
//console.log(tlpamount);
                      
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
if(doc.vehicle_colour_final_private_id==""){
  document.getElementById("color").style.display='none';
}
if(doc.vehicle_odometer_reading_final_private_id==""){
  document.getElementById("Odometer").style.display='none';
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
/*
if(doc.total_labour_claimed_final_private_id==""&& doc.total_labour_assessed_final_private_id==""){
  document.getElementById("total_labour").style.display='none';
}
if(doc.cost_of_spare_parts_claimed_final_private_id || doc.cost_of_spare_parts_assessed_final_private_id ==""){
  document.getElementById("cost_parts").style.display='none';
}
if(doc.spot_photo_claimed_final_private_id || doc.spot_photo_assessed_final_private_id==""){
  document.getElementById("spot_photos").style.display='none';
}
if(doc.spot_repairs_claimed_final_private_id || doc.spot_repairs_assessed_final_private_id ==""){
  document.getElementById("repair").style.display='none';
}
*/
//console.log(police);


//console.log(metal);
//console.log(fibre);
//console.log(plastic);
//console.log(metal);
/*if(metal==5){
  var m=tmamount*0.05;
      m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
  console.log(m);
}else if(metal==10){
   var m=tmamount*0.1;
   m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==15){
   var m=tmamount*0.15;
   m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==25){
   var m=tmamount*0.25;
   m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==35){
   var m=tmamount*0.35;
   m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==40){
   var m=tmamount*0.40;
   m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
}else if(metal==50){
   var m=tmamount*0.50;
   m=m.toFixed(2);
  document.getElementById("mtotal").innerHTML=m;
}else{
  document.getElementById("mtotal").innerHTML='-';
}


if(fibre==5){
  var f=tfamount*0.05;
  f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==10){
   var f=tfamount*0.1;
    f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==15){
   var f=tfamount*0.15;
    f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==25){
   var f=tfamount*0.25;
    f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==35){
   var f=tfamount*0.35;
    f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==40){
   var f=tfamount*0.40;
    f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else if(fibre==50){
   var f=tfamount*0.50;
    f=f.toFixed(2);
  document.getElementById("fabrictotal").innerHTML=f;
}else{
  document.getElementById("fabrictotal").innerHTML='-';
}

if(plastic==5){
  var p=trpmount*0.05;
   p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==10){
  var p=trpmount*0.1;
  p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==15){
  var p=trpmount*0.15;
  p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==25){
  var p=trpmount*0.25;
  p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==35){
  var p=trpmount*0.35;
  p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}if(plastic==40){
  var p=trpmount*0.40;
  p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}else if(plastic==50){
   var p=trpmount*0.50;
   p=p.toFixed(2);
  document.getElementById("plastictotal").innerHTML=p;
}else{
  document.getElementById("plastictotal").innerHTML='-';
}

if(plastic==5){
  var g=tgamount*0.05;
  g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}if(plastic==10){
  var g=tgamount*0.1;
  g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}if(plastic==15){
  var g=tgamount*0.15;
  g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}if(plastic==25){
  var g=tgamount*0.25;
  g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}if(plastic==35){
  var g=tgamount*0.35;
  g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}if(plastic==40){
  var g=tgamount*0.40;
  g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}else if(plastic==50){
   var g=tgamount*0.50;
   g=g.toFixed(2);
  document.getElementById("glasstotal").innerHTML=g;
}else{
  document.getElementById("glasstotal").innerHTML='-';
}
*/
if(doc.nil=='nil'){
   document.getElementById("deprow1").style.display='none';
   document.getElementById("deprow2").style.display='none';
   document.getElementById("deprow3").style.display='none';
}

























});
