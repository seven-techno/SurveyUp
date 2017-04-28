var url = window.location.href;
  //console.log(url);
       // var aValue = localStorage.getItem("final_private");
var a = url.split("_id=")[1];
//a = a != undefined ? a : url.split("finalprivateupdate.html/")[1];
//var b = a.split("&")[0];
 //var idParameter= url.substring(url.lastIndexOf('#') + 1);;
        db.get(a,function(err,doc){
       //console.log(doc);
    if(!err){
    document.getElementById("report_number_final_private_id").value=doc._id;
    document.getElementById("report_date_final_private_id").value=doc.report_date_final_private_id;
    document.getElementById("company_code_final_private_id").value=doc.company_code_final_private_id;
    document.getElementById("company_manager_final_private_id").value=doc.company_manager_final_private_id;
    document.getElementById("company_name_final_private_id").value=doc.company_name_final_private_id;
    document.getElementById("company_address_final_private_id").value=doc.company_address_final_private_id;
    document.getElementById("policy_number_code_final_private_id").value=doc.policy_number_code_final_private_id;
    document.getElementById("policy_number_final_private_id").value=doc.policy_number_final_private_id;
    document.getElementById("claim_number_code_final_private_id").value=doc.claim_number_code_final_private_id;
    document.getElementById("claim_number_final_private_id").value=doc.claim_number_final_private_id;
    document.getElementById("insurer_code_final_private_id").value=doc.insurer_code_final_private_id;
    document.getElementById("insurer_name_final_private_id").value=doc.insurer_name_final_private_id;
    document.getElementById("insurer_address_final_private_id").value=doc.insurer_address_final_private_id;
    document.getElementById("insured_name_final_private_id").value=doc.insured_name_final_private_id;
    document.getElementById("insured_address_final_private_id").value=doc.insured_address_final_private_id;
    document.getElementById("insurance_period_from_final_private_id").value=doc.insurance_period_from_final_private_id;
    document.getElementById("insurance_period_to_final_private_id").value=doc.insurance_period_to_final_private_id;
    document.getElementById("insurance_endorsement_final_private_id").value=doc.insurance_endorsement_final_private_id;
    document.getElementById("sum_insured_final_private_id").value=doc.sum_insured_final_private_id;
    document.getElementById("hpahyp_final_private_id").value=doc.hpahyp_final_private_id;
    document.getElementById("rc_verification_selection_final_private_id").value=doc.rc_verification_selection_final_private_id;
    document.getElementById("vehicle_registerd_number_final_private_id").value=doc.vehicle_registerd_number_final_private_id;
    document.getElementById("vehicle_registration_date_final_private_id").value=doc.vehicle_registration_date_final_private_id;
    document.getElementById("vehicle_make_final_private_id").value=doc.vehicle_make_final_private_id;
    document.getElementById("vehicle_model_final_private_id").value=doc.vehicle_model_final_private_id;
    document.getElementById("vehicle_chassis_number_final_private_id").value=doc.vehicle_chassis_number_final_private_id;
    document.getElementById("vehicle_engine_number_final_private_id").value=doc.vehicle_engine_number_final_private_id;
    document.getElementById("vehicle_colour_final_private_id").value=doc.vehicle_colour_final_private_id;
    document.getElementById("vehicle_unladen_weight_final_private_id").value=doc.vehicle_unladen_weight_final_private_id;
    document.getElementById("vehicle_registered_laden_weight_final_private_id").value=doc.vehicle_registered_laden_weight_final_private_id;
    document.getElementById("vehicle_fitness_certificate_final_private_id").value=doc.vehicle_fitness_certificate_final_private_id;
    document.getElementById("vehicle_fitness_certificate_validity_final_private_id").value=doc.vehicle_fitness_certificate_validity_final_private_id;
    document.getElementById("vehicle_permit_number_final_private_id").value=doc.vehicle_permit_number_final_private_id;
    document.getElementById("vehicle_validity_final_private_id").value=doc.vehicle_validity_final_private_id;
    document.getElementById("vehicle_permit_type_final_private_id").value=doc.vehicle_permit_type_final_private_id;
    document.getElementById("vehicle_passenger_load_final_private_id").value=doc.vehicle_passenger_load_final_private_id;
    document.getElementById("vehicle_area_permitted_final_private_id").value=doc.vehicle_area_permitted_final_private_id;
    document.getElementById("nature_of_goods_carried_final_private_id").value=doc.nature_of_goods_carried_final_private_id;
document.getElementById("goods_weight_final_private_id").value=doc.goods_weight_final_private_id;
document.getElementById("number_of_passengers_final_private_id").value=doc.number_of_passengers_final_private_id;
document.getElementById("transported_from_final_private_id").value=doc.transported_from_final_private_id;
    document.getElementById("road_tax_selection_final_private_id").value=doc.road_tax_selection_final_private_id;
    document.getElementById("road_tax_date_final_private_id").value=doc.road_tax_date_final_private_id;
    document.getElementById("vehicle_body_type_final_private_id").value=doc.vehicle_body_type_final_private_id;
    document.getElementById("vehicle_class_final_private_id").value=doc.vehicle_class_final_private_id;
    document.getElementById("vehicle_condition_selection_final_private_id").value=doc.vehicle_condition_selection_final_private_id;
    document.getElementById("vehicle_odometer_reading_final_private_id").value=doc.vehicle_odometer_reading_final_private_id;
    document.getElementById("vehicle_rc_validity_final_private_id").value=doc.vehicle_rc_validity_final_private_id;
    document.getElementById("vehicle_seating_capacity_final_private_id").value=doc.vehicle_seating_capacity_final_private_id;
    document.getElementById("dl_verification_selection_final_private_id").value=doc.dl_verification_selection_final_private_id;
    document.getElementById("dl_number_final_private_id").value=doc.dl_number_final_private_id;
    document.getElementById("dl_name_final_private_id").value=doc.dl_name_final_private_id;
    document.getElementById("dl_address_final_private_id").value=doc.dl_address_final_private_id;
    document.getElementById("dl_issue_date_final_private_id").value=doc.dl_issue_date_final_private_id;
    
    document.getElementById("dl_issuing_authority_final_private_id").value=doc.dl_issuing_authority_final_private_id;
    document.getElementById("dl_type_final_private_id").value=doc.dl_type_final_private_id;
document.getElementById("dl_endorsements_final_private_id").value=doc.dl_endorsements_final_private_id;
document.getElementById("accident_date_final_private_id").value=doc.accident_date_final_private_id;
document.getElementById("accident_time_final_private_id").value=doc.accident_time_final_private_id;
document.getElementById("accident_place_final_private_id").value=doc.accident_place_final_private_id;
document.getElementById("accident_cause_final_private_id").value=doc.accident_cause_final_private_id;
document.getElementById("property_damage_final_private_id").value=doc.property_damage_final_private_id;
document.getElementById("details_of_injury_final_private_id").value=doc.details_of_injury_final_private_id;
document.getElementById("accident_reported_to_police_final_private_id").value=doc.accident_reported_to_police_final_private_id;
document.getElementById("name_of_police_station_final_private_id").value=doc.name_of_police_station_final_private_id;
document.getElementById("fir_details_final_private_id").value=doc.fir_details_final_private_id;
document.getElementById("survey_request_date_final_private_id").value=doc.survey_request_date_final_private_id;

document.getElementById("survey_place_final_private_id").value=doc.survey_place_final_private_id;
document.getElementById("schedule_painting_labour_percentage_final_private_id").value=doc.schedule_painting_labour_percentage_final_private_id;
document.getElementById("schedule_painting_material_percentage_final_private_id").value=doc.schedule_painting_material_percentage_final_private_id;
document.getElementById("total_labour_claimed_final_private_id").value=doc.total_labour_claimed_final_private_id;
document.getElementById("total_labour_assessed_final_private_id").value=doc.total_labour_assessed_final_private_id;
document.getElementById("cost_of_spare_parts_claimed_final_private_id").value=doc.cost_of_spare_parts_claimed_final_private_id;
document.getElementById("cost_of_spare_parts_assessed_final_private_id").value=doc.cost_of_spare_parts_assessed_final_private_id;

document.getElementById("spot_photo_claimed_final_private_id").value=doc.spot_photo_claimed_final_private_id;
document.getElementById("spot_photo_assessed_final_private_id").value=doc.spot_photo_assessed_final_private_id;
document.getElementById("spot_repairs_claimed_final_private_id").value=doc.spot_repairs_claimed_final_private_id;
document.getElementById("spot_repairs_assessed_final_private_id").value=doc.spot_repairs_assessed_final_private_id;
document.getElementById("metal_percentage_final_private_id").value=doc.metal_percentage_final_private_id;
document.getElementById("fibre_percentage_final_private_id").value=doc.fibre_percentage_final_private_id;
document.getElementById("plastic_percentage_final_private_id").value=doc.plastic_percentage_final_private_id;
document.getElementById("compulsory_final_private_id").value=doc.compulsory_final_private_id;
document.getElementById("imposed_final_private_id").value=doc.imposed_final_private_id;
document.getElementById("voluntary_final_private_id").value=doc.voluntary_final_private_id;
document.getElementById("salvage_value_final_private_id").value=doc.salvage_value_final_private_id;

document.getElementById("spot_survey_charges_final_private_id").value=doc.spot_survey_charges_final_private_id;
document.getElementById("final_survey_charges_final_private_id").value=doc.final_survey_charges_final_private_id;
document.getElementById("reinspection_charges_final_private_id").value=doc.reinspection_charges_final_private_id;
document.getElementById("opinion_charges_final_private_id").value=doc.opinion_charges_final_private_id;
document.getElementById("check_charges_final_private_id").value=doc.check_charges_final_private_id;
document.getElementById("local_travelling_expenses_final_private_id").value=doc.local_travelling_expenses_final_private_id;
document.getElementById("local_place_of_survey_final_private_id").value=doc.local_place_of_survey_final_private_id;
document.getElementById("local_distance_travelled_final_private_id").value=doc.local_distance_travelled_final_private_id;
document.getElementById("outstation_travelling_expenses_final_private_id").value=doc.outstation_travelling_expenses_final_private_id;
document.getElementById("outstation_place_of_survey_final_private_id").value=doc.outstation_place_of_survey_final_private_id;
document.getElementById("outstation_distance_travelled_final_private_id").value=doc.outstation_distance_travelled_final_private_id;
document.getElementById("number_of_photos_final_private_id").value=doc.number_of_photos_final_private_id;
document.getElementById("per_photo_price_final_private_id").value=doc.per_photo_price_final_private_id;
document.getElementById("outstation_allowance_final_private_id").value=doc.outstation_allowance_final_private_id;
document.getElementById("postage_charges_final_private_id").value=doc.postage_charges_final_private_id;



//var length=Object.keys(doc.vehicle_permitted).length;
    for(var i=0;i<1;i++){  
     //length-4
    for(var key in doc.vehicle_permitted){
       addRow(0);
           var val=doc.vehicle_permitted[key];

            //document.getElementById("vehicle_permitted["+key+"][sl_no]")[i].value=key;
            document.getElementsByName("vehicle_permitted["+key+"][type]")[i].value=val.type;
            document.getElementsByName("vehicle_permitted["+key+"][effective_from]")[i].value=val.effective_from;
            document.getElementsByName("vehicle_permitted["+key+"][valid_upto]")[i].value=val.valid_upto;
            document.getElementsByName("vehicle_permitted["+key+"][badge_no]")[i].value=val.badge_no;
       // console.log(document.getElementsByName("vehicle_permitted["+key+"][type]")[i].value);
           
        }

 }
//var len=Object.keys(doc.survey_dates).length;
console.log(doc.survey_dates);

    for(var j=0;j<1;j++){  
      //len-2
    for(var keyj in doc.survey_dates){
       addRow(1);
           var valj=doc.survey_dates[keyj];
          //console.log(vals.date);
            //document.getElementById("vehicle_permitted["+key+"][sl_no]")[i].value=key;
            document.getElementsByName("survey_dates["+keyj+"][date]")[j].value=valj.date;
            document.getElementsByName("survey_dates["+keyj+"][time]")[j].value=valj.time;
            
          console.log(document.getElementsByName("survey_dates["+keyj+"][date]")[j].value);
          console.log(document.getElementsByName("survey_dates["+keyj+"][time]")[j].value);
           
        }
 }
 //var leng=Object.keys(doc.damage_parts).length;
 console.log(doc.damage_parts);
     //for(var k=0;k<1;k++){
     //leng-1
    for(var keyd in doc.damage_parts){
     addRow(2);
          var vald=doc.damage_parts[keyd];
          console.log(vald);
           //document.getElementById("vehicle_permitted["+key+"][sl_no]")[i].value=key;
          /* document.getElementsByName("damage_parts["+keyd+"][part_name]")[0].value=vald.part_name;
           document.getElementsByName("damage_parts["+keyd+"][claimed]")[0].value=vald.claimed;
           document.getElementsByName("damage_parts["+keyd+"][assessed]")[0].value=vald.assessed;
           document.getElementsByName("damage_parts["+keyd+"][nature_of_damage]")[0].value=vald.nature_of_damage;
           document.getElementsByName("damage_parts["+keyd+"][value]")[0].value=vald.value;
           document.getElementsByName("damage_parts["+keyd+"][reason]")[0].value=vald.reason;*/
         
for(var keysub in doc.damage_parts[keyd]){
    
     if(keysub > 0)
      {
        addSubRow(keyd);
        //console.log(addSubRow(keyd, 'm'+keyd));
      }
          var valsub=doc.damage_parts[keyd][keysub];
          console.log(valsub);
          console.log("damage_parts["+keyd+"]["+keysub+"][part_name]");
           document.getElementsByName("damage_parts["+keyd+"]["+keysub+"][part_name]")[0].value=valsub.part_name;
           document.getElementsByName("damage_parts["+keyd+"]["+keysub+"][claimed]")[0].value=valsub.claimed;
           document.getElementsByName("damage_parts["+keyd+"]["+keysub+"][assessed]")[0].value=valsub.assessed;
           document.getElementsByName("damage_parts["+keyd+"]["+keysub+"][nature_of_damage]")[0].value=valsub.nature_of_damage;
           document.getElementsByName("damage_parts["+keyd+"]["+keysub+"][value]")[0].value=valsub.value;
           document.getElementsByName("damage_parts["+keyd+"]["+keysub+"][reason]")[0].value=valsub.reason;
      }     
         }
 //var n=Object.keys(doc.comments_table).length;
    for(var m=0;m<1;m++)
     {  
     //n-2
    for(var keyc in doc.comments_table){
       addRow(3);
           var valc=doc.comments_table[keyc];

            //document.getElementById("vehicle_permitted["+key+"][sl_no]")[m].value=key;
            document.getElementsByName("comments_table["+keyc+"][comments]")[m].value=valc.comments;
           // document.getElementsByName("comments_table["+keys+"][time]")[m].value=vals.time;
            

           
    }
 }
if(doc.excel=='normal_table'){
  document.getElementById("normal_table").checked = true;
 }
 else{
  document.getElementById("excel_table").checked = true;
 }
         //}
if(doc.parts=='vat_on_parts')
{
  document.getElementById("vat_on_parts").checked = true;
}
else{
  document.getElementById("vat_on_total").checked = true;
}
if(doc.nil=='not_nil')
{
  document.getElementById("not_nil").checked = true;
}
else{
  document.getElementById("nil").checked = true;
}
if(doc.vat=='with_vat')
{
  document.getElementById("with_vat").checked = true;
}
else{
  document.getElementById("without_vat").checked = true;
}
if(doc.labour=='with_service_tax'){
  document.getElementById("with_service_tax").checked = true;
}
else{
  document.getElementById("without_service_tax").checked = true;
}
if(doc.painting=='regular'){
  document.getElementById("regular").checked = true;
}else if(doc.painting=='regular_service_tax'){
  document.getElementById("regular_service_tax").checked = true;
}else if(doc.painting=='75_25'){
document.getElementById("75_25").checked = true;
}else if(doc.painting=='75_25_service_tax'){
document.getElementById("75_25_service_tax").checked = true;
}else{
document.getElementById("schedule").checked = true;
 }
 if(doc.imt23=='imt23_50'){
  document.getElementById("imt23_50").checked = true;
}else{
  document.getElementById("imt23_25").checked = true;
}

if(doc.nil=='nil'){
   $('#metal_percentage_final_private_id,#fibre_percentage_final_private_id,#plastic_percentage_final_private_id').attr("disabled", true);
}
/*var n=Object.keys(doc.comments_table).length;
    for(var m=0;m<n;i++)
     {  
     
    for(var keyc in doc.comments_table){
       addRow(3);
           var valc=doc.comments_table[keyc];

            //document.getElementById("vehicle_permitted["+key+"][sl_no]")[m].value=key;
            document.getElementsByName("comments_table["+keyc+"][comments]")[m].value=valc.comments;
           // document.getElementsByName("comments_table["+keys+"][time]")[m].value=vals.time;
            

           
        }
 }*/

/*var docrec = new Object();
  docrec=$('#form_final_private_id').serializeObject();
// console.log(final_private_details._rev=doc._rev);
 docrec._id=doc._id;
 docrec._rev=doc._rev;


  db.put(docrec, function callback(error, response){
    //console.log(docrec);
      if (!error) {
        console.log("updated");
        return true;
      }else{
        console.log("not updated",error);
        return false;
      }
    });*/
}
});