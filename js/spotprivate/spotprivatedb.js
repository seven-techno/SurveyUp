var db= new PouchDB('sevenTech');
function updateSpotPrivate(){
/*    var report_no=document.form_final_private_id.report_number_final_private_id.value;
    var date=document.form_final_private_id.report_date_final_private_id.value;
    var company_code=document.form_final_private_id.company_code_final_private_id.value;
    var to=document.form_final_private_id.company_manager_final_private_id.value;
    var company=document.form_final_private_id.company_name_final_private_id.value;
    var address=document.form_final_private_id.company_address_final_private_id.value;
    var policy_no=document.form_final_private_id.policy_number_code_final_private_id.value;
    var cover_no=document.form_final_private_id.policy_number_final_private_id.value;
    var claim_code=document.form_final_private_id.claim_number_code_final_private_id.value;
    var claim_no=document.form_final_private_id.claim_number_final_private_id.value;
    var insurer_code=document.form_final_private_id.insurer_code_final_private_id.value;
    var insurer_name=document.form_final_private_id.insurer_name_final_private_id.value;
    var insurer_address=document.form_final_private_id.insurer_address_final_private_id.value;
    var insured_name=document.form_final_private_id.insured_name_final_private_id.value;
    var insured_address=document.form_final_private_id.insured_address_final_private_id.value;
    var insurance_from=document.form_final_private_id.insurance_period_from_final_private_id.value;
    var insurence_to=document.form_final_private_id.insurance_period_to_final_private_id.value;
    var endoresement_no=document.form_final_private_id.insurance_endorsement_final_private_id.value;
    var sum_insured=document.form_final_private_id.sum_insured_final_private_id.value;
    var hpa=document.form_final_private_id.hpahyp_final_private_id.value;

    var vehicle_rc=document.form_final_private_id.rc_verification_selection_final_private_id.value;
    var vehicle_reg_no=document.form_final_private_id.vehicle_registerd_number_final_private_id.value;
    var vehicle_registration=document.form_final_private_id.vehicle_registration_date_final_private_id.value;
    var vehicle_make=document.form_final_private_id.vehicle_make_final_private_id.value;
    var vehicle_model=document.form_final_private_id.vehicle_model_final_private_id.value;
    var vehicle_model_chassis_num=document.form_final_private_id.vehicle_chassis_number_final_private_id.value;
    var vehicle_engine_no=document.form_final_private_id.vehicle_engine_number_final_private_id.value;
    var vehicle_color=document.form_final_private_id.vehicle_colour_final_private_id.value;
    var vehicle_road_tax=document.form_final_private_id.road_tax_selection_final_private_id.value;
    var vehicle_body_type=document.form_final_private_id.vehicle_body_type_final_private_id.value;
    var vehicle_class=document.form_final_private_id.vehicle_class_final_private_id.value;
    var vehicle_condition=document.form_final_private_id.vehicle_condition_selection_final_private_id.value;
    var vehicle_odometer=document.form_final_private_id.vehicle_odometer_reading_final_private_id.value;
    var vehicle_rc_validity=document.form_final_private_id.vehicle_rc_validity_final_private_id.value;
    var vehicle_seating_capacity=document.form_final_private_id.vehicle_seating_capacity_final_private_id.value;


    var driver_dl_verified=document.form_final_private_id.dl_verification_selection_final_private_id.value;
    var driving_license_no=document.form_final_private_id.dl_number_final_private_id.value;
    var driver_name=document.form_final_private_id.dl_name_final_private_id.value;
    var driver_address=document.form_final_private_id.dl_address_final_private_id.value;
    var driver_date_issue=document.form_final_private_id.dl_issue_date_final_private_id.value;
   // var driver_type=document.form_final_private_id.vehicle_permitted[][type].value;
    //var driver_effective_from=document.form_final_private_id.vehicle_permitted[][effective_from].value;
    //var driver_valid_upto=document.form_final_private_id.vehicle_permitted[][valid_upto].value;
    //var driver_badge_no=document.form_final_private_id.vehicle_permitted[][badge_no].value;
    var driver_issuing_authority=document.form_final_private_id.dl_issuing_authority_final_private_id.value;
    var driver_license_type=document.form_final_private_id.dl_type_final_private_id.value;
    var driver_endoresment_any=document.form_final_private_id.dl_endorsements_final_private_id.value;

    var accident_date=document.form_final_private_id.accident_date_final_private_id.value;
    var accident_time=document.form_final_private_id.accident_time_final_private_id.value;
    var accident_place=document.form_final_private_id.accident_place_final_private_id.value;
    var accident_cause=document.form_final_private_id.accident_cause_final_private_id.value;
    var accident_tp_damage=document.form_final_private_id.property_damage_final_private_id.value;
    var accident_injuries=document.form_final_private_id.details_of_injury_final_private_id.value;
    var accident_reported=document.form_final_private_id.accident_reported_to_police_final_private_id.value;
    var accident_police_name=document.form_final_private_id.name_of_police_station_final_private_id.value;
    var accident_fir_details=document.form_final_private_id.fir_details_final_private_id.value;
    
    var survey_request_date=document.form_final_private_id.survey_request_date_final_private_id.value;
    //var survey_date=document.form_final_private_id.survey_dates[][date].value;
    //var survey_time=document.form_final_private_id.survey_dates[][time].value;
    var survey_place=document.form_final_private_id.survey_place_final_private_id.value;

    //var spot_observation=document.form_final_private_id.preliminary[][comments].value;
   // var surveyor_observation=document.form_final_private_id.surveyor[][comments].value;

    var professional_spot_survey=document.form_final_private_id.spot_survey_charges_final_private_id.value;
    var professional_final_survey=document.form_final_private_id.final_survey_charges_final_private_id.value;
    var professional_reinspection=document.form_final_private_id.reinspection_charges_final_private_id.value;
    var professional_opinion=document.form_final_private_id.opinion_charges_final_private_id.value;
    var professional_bill_check=document.form_final_private_id.check_charges_final_private_id.value;


    var travelling_local_expense=document.form_final_private_id.local_travelling_expenses_final_private_id.value;
    var travelling_survey_local_place=document.form_final_private_id.local_place_of_survey_final_private_id.value;
    var travelling_total_local=document.form_final_private_id.local_distance_travelled_final_private_id.value;
    var travelling_outstation_expense=document.form_final_private_id.outstation_travelling_expenses_final_private_id.value;
    var travelling_outstation_place=document.form_final_private_id.outstation_place_of_survey_final_private_id.value;
    var travelling_total_distance_outstation=document.form_final_private_id.outstation_distance_travelled_final_private_id.value;
    var travelling_photos=document.form_final_private_id.number_of_photos_final_private_id.value;
    var travelling_per_photo_price=document.form_final_private_id.per_photo_price_final_private_id.value;
    var travelling_outstation_allowance=document.form_final_private_id.outstation_allowance_final_private_id.value;
    var travelling_postage_charges=document.form_final_private_id.postage_charges_final_private_id.value;


var spotprivate_details={
    _id:report_no,
    date:date,
    company_code:company_code,
    to:to,
    company_name:company,
    company_address:address,
    policy_no:policy_no,
    cover_note_no:cover_no,
    claim_code:claim_code,
    claim_no:claim_no,
    insurer_code: insurer_code,
    insurer_name:insurer_name,
    insurer_address:insurer_address,
    insured_name:insured_name,
    insured_address:insured_address,
    period_insurance_from:insurance_from,
    period_insurance_to:insurence_to,
    endoresement_no:endoresement_no,
    sum_insured:sum_insured,
    hpa:hpa,



    vehicle_rc_verified:vehicle_rc,
    vehicle_reg_no:vehicle_reg_no,
    vehicle_date_registration:vehicle_registration,
    vehicle_make:vehicle_make,
    vehicle_model:vehicle_model,
    vehicle_chassis_no:vehicle_model_chassis_num,
    vehicle_engine_no:vehicle_engine_no,
    vehicle_color:vehicle_color,
    vehicle_road_tax:vehicle_road_tax,
    vehicle_body_type:vehicle_body_type,
    vehicle_class:vehicle_class,
    vehicle_general_condition:vehicle_condition,
    vehicle_odometer_reading:vehicle_odometer,
    vehicle_rc_validity:vehicle_rc_validity,
    vehicle_seating_capacity:vehicle_seating_capacity,



    driver_dl_verified:driver_dl_verified,
    driver_license_no:driving_license_no,
    driver_name:driver_name,
    driver_address:driver_address,
    driver_date_of_issue: driver_date_issue,
   // driver_vehicle_type:driver_type,
    //driver_vehicle_effective_from:driver_effective_from,
    //driver_vehicle_validate_upto:driver_valid_upto,
    //driver_badge_no:driver_badge_no,
    driver_issuing_authority:driver_issuing_authority,
    driver_licence_type:driver_license_type,
    driver_endoresment_any:driver_endoresment_any,



    accident_date:accident_date,
    accident_time:accident_time,
    accident_place:accident_place,
    accident_cause_damage:accident_cause,
    accident_details_tpproperty_damage:accident_tp_damage,
    accident_injuries:accident_injuries,
    accident_report_police:accident_reported,
    accident_policestation_name: accident_police_name,
    accident_fir_details:accident_fir_details,


    survey_date_request:survey_request_date,
    //survey_date:survey_date,
    //survey_time:survey_time,
    survey_place:survey_place,


    //spot_preliminary_observation:spot_observation,
    //surveyor_observation:surveyor_observation,




    professional_spot_survey:professional_spot_survey,
    professional_final_survey:professional_final_survey,
    professional_reinspection:professional_reinspection,
    professional_opinion: professional_opinion,
    professional_bill_check:professional_bill_check,


    travelling_local_expense:travelling_local_expense,
    travelling_place_survey_local:travelling_survey_local_place,
    travelling_distance_local:travelling_total_local,
    travelling_outstation_expense:travelling_outstation_expense,
    travelling_survey_place_outstation:travelling_outstation_place,
    travelling_total_distance_outstation:travelling_total_distance_outstation,
    travelling_photos:travelling_photos,
    travelling_rate_per_photos:travelling_per_photo_price,
    travelling_out_station_allowance:travelling_outstation_allowance,
    travelling_miscellaneous_postage_charge:travelling_postage_charges


};
*/
var error_company_code,error_policy_no, error_policy_code,error_claim_no, error_claim_code,error_insurer_code, error_endorsement_no, error_registration_no; 
    //var error_policy_no=true;
   //var error_drivers_liscense_no=false;   
   //var error_drivers_permit_no=true;
   //var error_drivers_liscense_no=false;   
   //var error_drivers_permit_no=false; 

        error_company_code=check_company_code();
       
       error_policy_no= check_policy_no();
       error_policy_code= check_policy_code();
       
        error_claim_no=check_claim_no();
        error_claim_code=check_claim_code();
        
        error_insurer_code=check_insurer_code();
     
        error_endorsement_no=check_endorsement_no();
       
        error_registration_no=check_registration_no();
          //console.log(a);
if(error_company_code == false && error_policy_no== false && error_policy_code== false && error_claim_no == false && error_claim_code == false && error_insurer_code == false && error_endorsement_no==false && error_registration_no==false){
document.getElementById("reinspection").disabled = false;
var data =$('#form_final_private_id').serializeObject();
console.log(data);
data._id = $('#report_number_final_private_id').val();
 db.put(data,function callback(error,result){
    if(error){
      // clearFields();
      console.log("not inserted",error);
      return false;
  }else{
    //   showDetails();

    console.log("inserted");
    return true;
  // document.getElementById("message").innerHTML="Informations are updated";
    }
    });

 db.get(data._id ).then(function(doc){
      doc[bill_amount]='';
      doc[paid_amount]='';
      doc[balance]='';
      return db.put(doc);
      }).then(function(response){console.log(doc);}).catch(function(err){});

 db.get(data._id,function(error,doc){
    if(!error){
    var docres=new Object();
    var docres=$('#form_final_private_id').serializeObject();
    //var doc._id=$('#report_number_final_private_id').val();
    docres._id=doc._id;
    docres._rev=doc._rev;
  db.put(docres,function callback(error,result){
    if(error){
      // clearFields();
      console.log("not updated",error);
      return false;
  }else{
    //   showDetailss();
    console.log("updated");
    return true;
  // document.getElementById("message").innerHTML="Informations are updated";
    }
    });
  //clearFields();
}
});
 document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";
}else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }
//location.assign("displayTable.html");
//clearFields();
}
function updateData(){
var error_company_code,error_policy_no, error_policy_code,error_claim_no, error_claim_code,error_insurer_code, error_endorsement_no, error_registration_no; 
    //var error_policy_no=true;
   //var error_drivers_liscense_no=false;   
   //var error_drivers_permit_no=true;
   //var error_drivers_liscense_no=false;   
   //var error_drivers_permit_no=false; 

        error_company_code=check_company_code();
       
       error_policy_no= check_policy_no();
       error_policy_code= check_policy_code();
       
        error_claim_no=check_claim_no();
        error_claim_code=check_claim_code();
        
        error_insurer_code=check_insurer_code();
     
        error_endorsement_no=check_endorsement_no();
       
        error_registration_no=check_registration_no();
          //console.log(a);
if(error_company_code == false && error_policy_no== false && error_policy_code== false && error_claim_no == false && error_claim_code == false && error_insurer_code == false && error_endorsement_no==false && error_registration_no==false){
document.getElementById("reinspection").disabled = false;
var data =$('#form_final_private_id').serializeObject();
console.log(data);
data._id = $('#report_number_final_private_id').val();
 db.put(data,function callback(error,result){
    if(error){
      // clearFields();
      console.log("not inserted",error);
      return false;
  }else{
    //   showDetails();
    console.log("inserted");
    return true;
  // document.getElementById("message").innerHTML="Informations are updated";
    }
    });

 db.get(data._id,function(error,doc){
    if(!error){
    var docres=new Object();
    var docres=$('#form_final_private_id').serializeObject();
    //var doc._id=$('#report_number_final_private_id').val();
    docres._id=doc._id;
    docres._rev=doc._rev;
  db.put(docres,function callback(error,result){
    if(error){
      // clearFields();
      console.log("not updated",error);
      return false;
  }else{
    //   showDetailss();
    console.log("updated");
    return true;
  // document.getElementById("message").innerHTML="Informations are updated";
    }
    });
 // clearFields();
}
});
 document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";
}else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }
//location.assign("displayTable.html");
//clearFields();
}

function clearFields(){
 $("#form_final_private_id")[0].reset();
}


/*function updateSpotPrivate(){

   // doc=$('#report_number_final_private_id').val();
    update();
}

function update(doc){
    db.get(doc._id).then(function (origDoc) {
    doc._rev = origDoc._rev;
    return db.put(doc);
  }).catch(function (err) {
    if (err.status === 409) {
      return retryUntilWritten(doc);
    } else { // new doc
      return db.put(doc);
    }
  });
}
*/
/*db.get(_id, function(err, resp) {
    if (err) {
        if (err.status = '404') { // if the document does not exist
            // do something
        }
        else {
       // do something else if document exists
       }
    }
});
}*/


   // db.get ('_id').then (function(doc) {
   //         console.log('updating');
     //       doc._rev = doc._rev;
       //     return db.put( doc );
         //   })

       // .catch( function (error) {
         //   console.log('adding');
         //   return db.post( doc );
       // })

      //  .then(function(info){
          //  console.log("id of record: " + info._id);
      //      DisplaySpotPrivate();
  //  })

   /* db.get ( db._id )
        .then (function(_doc) {
            console.log('updating');
            doc._rev = _doc._rev;
            return db.put( doc );
            })

        .catch( function (error) {
            console.log('adding');
            return db.post( doc );
        })

        .then(function(info){
            console.log("id of record: " + info.id);
            showDocs();
    })*/

    //db.get('_id').then(function(doc) {
    //  return db.put(doc); 
    //}).then(function () {
    //  return db.get('_id');
   // }).then(function (doc) {
   //   console.log(doc);
  //  });
//}

function DisplaySpotPrivate(){
   // location.assign("displayTable.html");
      db.allDocs({include_docs:true}, function(err,docs){
            //console.log (docs.rows);
            list(docs.rows);
        });
}
var str="",count=1,char="";
function list(data){
    
    // str1="",str2="",str3="",str4="",str5="";
    for( var i=0;i<data.length;i++){
        char=data[i].doc._id;
       char=char.substring(17,34);
        //console.log(char);
       if(char=='SPOT-PRIVATE')
       {
       // console.log(Object.keys(vehicleListsTable));
        //var imp=data[i].doc.vehicleListsTable;
        str+="<tr><td>"+count+"</td><td>"+data[i].doc._id+"</td><td>"
        +data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_place_final_private_id+


        /*"</td><td>"+data[i].doc.company_address_final_private_id+"</td><td>"
        +data[i].doc.policy_number_code_final_private_id+"</td><td>"+data[i].doc.policy_number_final_private_id+"</td><td>"
        +data[i].doc.claim_number_code_final_private_id+"</td><td>"+data[i].doc.claim_number_final_private_id+"</td><td>"
        +data[i].doc.insurer_code_final_private_id+"</td><td>"+data[i].doc.insurer_name_final_private_id+"</td><td>"
        +data[i].doc.insurer_address_final_private_id+"</td><td>"+data[i].doc.insured_name_final_private_id+"</td><td>"
        +data[i].doc.insured_address_final_private_id+"</td><td>"+data[i].doc.insurance_period_from_final_private_id+"</td><td>"
        +data[i].doc.insurance_period_to_final_private_id+"</td><td>"+data[i].doc.insurance_endorsement_final_private_id+
        "</td><td>"+data[i].doc.sum_insured_final_private_id+"</td><td>"+data[i].doc.hpahyp_final_private_id+
        

        "</td><td>"+data[i].doc.rc_verification_selection_final_private_id+"</td><td>"+data[i].doc.vehicle_registerd_number_final_private_id+
        "</td><td>"+data[i].doc.vehicle_registration_date_final_private_id+"</td><td>"+data[i].doc.vehicle_make_final_private_id+
        "</td><td>"+data[i].doc.vehicle_model_final_private_id+"</td><td>"+data[i].doc.vehicle_chassis_number_final_private_id+
        "</td><td>"+data[i].doc.vehicle_engine_number_final_private_id+"</td><td>"+data[i].doc.vehicle_colour_final_private_id+
        "</td><td>"+data[i].doc.road_tax_selection_final_private_id+"</td><td>"+data[i].doc.vehicle_body_type_final_private_id+
        "</td><td>"+data[i].doc.vehicle_class_final_private_id+"</td><td>"
        +data[i].doc.vehicle_condition_selection_final_private_id+"</td><td>"
        +data[i].doc.vehicle_odometer_reading_final_private_id+"</td><td>"+data[i].doc.vehicle_rc_validity_final_private_id+
        "</td><td>"+data[i].doc.vehicle_seating_capacity_final_private_id+


       "</td><td>"  +data[i].doc.dl_verification_selection_final_private_id+"</td><td>"+data[i].doc.dl_number_final_private_id+"</td><td>"
        +data[i].doc.dl_name_final_private_id+"</td><td>"+data[i].doc.dl_address_final_private_id+"</td><td>"
        +data[i].doc.dl_issue_date_final_private_id+"</td><td><table class=table table-striped table-hover table-bordered>"+
        "<tr><th>"+"Sl.No"+"</th><th>"+"Type"+"</th><th>"+"Effective from"+"</th><th>"+"valid upto"+"</th><th>"
        + "badge no"+"</th></tr>";
        for(key in data[i].doc.vehicle_permitted){
            var val=data[i].doc.vehicle_permitted[key];

            str+="<tr><td>"+key+"</td><td>"+val.type+"</td><td>"+val.effective_from+"</td><td>"+"</td><td>"+val.valid_upto+
            "</td><td>"+val.badge_no+"</td></tr>";
        }
       str+= "</table></td><td>"+data[i].doc.dl_issuing_authority_final_private_id+"</td><td>"
        +data[i].doc.dl_type_final_private_id+"</td><td>"+data[i].doc.dl_endorsements_final_private_id+
        

        "</td><td>"+data[i].doc.accident_date_final_private_id+"</td><td>"+data[i].doc.accident_time_final_private_id+"</td><td>"
        +data[i].doc.accident_place_final_private_id+"</td><td>"+data[i].doc.accident_cause_final_private_id+"</td><td>"
        +data[i].doc.property_damage_final_private_id+"</td><td>"+data[i].doc.details_of_injury_final_private_id+"</td><td>"
        +data[i].doc.accident_reported_to_police_final_private_id+"</td><td>"+data[i].doc.name_of_police_station_final_private_id+
        "</td><td>"+data[i].doc.fir_details_final_private_id+
        

        "</td><td>"+data[i].doc.survey_request_date_final_private_id+
        "</td><td><table class=table table-striped table-hover table-bordered>"+
        "<tr><th>"+"Sl.No"+"</th><th>"+"Date"+"</th><th>"+"Time"+"</th></tr>";
        for (key in data[i].doc.survey_dates){
            var val=data[i].doc.survey_dates[key];
            str+="<tr><td>"+key+"</td><td>"+val.date+"</td><td>"+val.time+"</td></tr>";
        }

       str+= "</table></td><td>"+data[i].doc.survey_place_final_private_id+
       "</td><td><table class=table table-striped table-hover table-bordered>"+
        "<tr><th>"+"Sl.No"+"</th><th>"+"comment"+"</th></tr>";
        for(key in data[i].doc.preliminary){
            var val=data[i].doc.preliminary[key];
            str+="<tr><td>"+key+"</td><td>"+val.comments+"</td></tr>";
        }




       str+= "</table></td><td><table class=table table-striped table-hover table-bordered>"+
        "<tr><th>"+"Sl.No"+"</th><th>"+"comment"+"</th></tr>";
        for(key in data[i].doc.preliminary){
            var val=data[i].doc.preliminary[key];
            str+="<tr><td>"+key+"</td><td>"+val.comments+"</td></tr>";
        }
       str+="</table></td><td>"+data[i].doc.spot_survey_charges_final_private_id+"</td><td>"
       +data[i].doc.final_survey_charges_final_private_id+"</td><td>"+data[i].doc.reinspection_charges_final_private_id+
       "</td><td>"+data[i].doc.opinion_charges_final_private_id+"</td><td>"+data[i].doc.check_charges_final_private_id+
       "</td><td>"+data[i].doc.local_travelling_expenses_final_private_id+"</td><td>"
        +data[i].doc.local_place_of_survey_final_private_id+"</td><td>"+data[i].doc.local_distance_travelled_final_private_id+
        "</td><td>"+data[i].doc.outstation_travelling_expenses_final_private_id+"</td><td>"
        +data[i].doc.outstation_place_of_survey_final_private_id+"</td><td>"
        +data[i].doc.outstation_distance_travelled_final_private_id+"</td><td>"+data[i].doc.number_of_photos_final_private_id+
        "</td><td>"+data[i].doc.per_photo_price_final_private_id+"</td><td>"+data[i].doc.outstation_allowance_final_private_id+
        "</td><td>"+data[i].doc.postage_charges_final_private_id+*/
        "</td><td><input type='button'  id='editBtn' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td><input type='button'  id='viewBtn' value='View' onClick='Report(\""+data[i].doc._id+"\");'/>"+
         "</td><td><input type='button'  id='viewBtn' value='View' onClick='Bill(\""+data[i].doc._id+"\");'/>"+
          "</td><td><input type='button' id='deleteBtn' value='Delete' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
       
      // str1+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.rc_verification_selection_final_private_id+"</td><td>"+data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"+data[i].doc.vehicle_registration_date_final_private_id+"</td><td>"+data[i].doc.vehicle_make_final_private_id+"</td><td>"+data[i].doc.vehicle_model_final_private_id+"</td><td>"+data[i].doc.vehicle_chassis_number_final_private_id+"</td><td>"+data[i].doc.vehicle_engine_number_final_private_id+"</td><td>"+data[i].doc.vehicle_colour_final_private_id+"</td><td>"+data[i].doc.road_tax_selection_final_private_id+
         //"</td><td>"+data[i].doc.vehicle_body_type_final_private_id+"</td><td>"+data[i].doc.vehicle_class_final_private_id+"</td><td>"+data[i].doc.vehicle_condition_selection_final_private_id+"</td><td>"+data[i].doc.vehicle_odometer_reading_final_private_id+"</td><td>"+data[i].doc.vehicle_rc_validity_final_private_id+"</td><td>"+data[i].doc.vehicle_seating_capacity_final_private_id+"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
       // str2+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.dl_verification_selection_final_private_id+"</td><td>"+data[i].doc.dl_number_final_private_id+"</td><td>"+data[i].doc.dl_name_final_private_id+"</td><td>"+data[i].doc.dl_address_final_private_id+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+"</td><td>"+data[i].doc.vehicleListsTable+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+"</td><td>"+data[i].doc.vehicleListsTable+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+  "</td><td>"+data[i].doc.dl_issuing_authority_final_private_id+"</td><td>"+data[i].doc.dl_type_final_private_id+"</td><td>"+data[i].doc.dl_endorsements_final_private_id+"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
       // str3+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.accident_date_final_private_id+"</td><td>"+data[i].doc.accident_time_final_private_id+"</td><td>"+data[i].doc.accident_place_final_private_id+"</td><td>"+data[i].doc.accident_cause_final_private_id+"</td><td>"+data[i].doc.property_damage_final_private_id+"</td><td>"+data[i].doc.details_of_injury_final_private_id+"</td><td>"+data[i].doc.accident_reported_to_police_final_private_id+"</td><td>"+data[i].doc.name_of_police_station_final_private_id+"</td><td>"+data[i].doc.fir_details_final_private_id+
        //"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
       // str4+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.spot_survey_charges_final_private_id+"</td><td>"
      // +data[i].doc.final_survey_charges_final_private_id+"</td><td>"+data[i].doc.reinspection_charges_final_private_id+
      // "</td><td>"+data[i].doc.opinion_charges_final_private_id+"</td><td>"+data[i].doc.check_charges_final_private_id+
      // "</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
       // str5+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.local_travelling_expenses_final_private_id+"</td><td>"
        //+data[i].doc.local_place_of_survey_final_private_id+"</td><td>"+data[i].doc.local_distance_travelled_final_private_id+
        //"</td><td>"+data[i].doc.outstation_travelling_expenses_final_private_id+"</td><td>"
        //+data[i].doc.outstation_place_of_survey_final_private_id+"</td><td>"
        //+data[i].doc.outstation_distance_travelled_final_private_id+"</td><td>"+data[i].doc.number_of_photos_final_private_id+
        //"</td><td>"+data[i].doc.per_photo_price_final_private_id+"</td><td>"+data[i].doc.outstation_allowance_final_private_id+
        //"</td><td>"+data[i].doc.postage_charges_final_private_id+
        //"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        count++;
    }
    }

    document.getElementById("survey_table").innerHTML=str;
    $(document).ready(function(){$('#example').DataTable();});
    var table=$('#example').DataTable();
   // document.getElementById("survey_vehicle_table").innerHTML=str1;
    //document.getElementById("survey_driver_table").innerHTML=str2;
    //document.getElementById("survey_accident_table").innerHTML=str3;  
    //document.getElementById("survey_professional_table").innerHTML=str4;

    //document.getElementById("survey_travelling_table").innerHTML=str5;
}

function Edit(_id){
   window.location.href = 'spotsurveyprivateupdate.html?_id=' +_id;
 // localStorage.setItem("final_private",_id);
 // location.assign("finalcommercialupdate.html");
  //console.log("hi");
}
function Report(_id){
  
   window.location.href = 'viewprivate.html?_id=' +_id;
 //localStorage.setItem("final_private",_id);
 //location.assign("viewCommercial.html");
}
function Bill(_id){
  
   window.location.href = 'viewprivatebill.html?_id=' +_id;
 //localStorage.setItem("final_private",_id);
 //location.assign("viewCommercial.html");
}
function Delete(_id){
if(confirm("Are you want to delete!!")){
db.get(_id).then(function(doc){
    //var x;
   // if (confirm("Press a button!") == true) {
      //  x = "You pressed OK!";
  //  } else {
   //     x = "You pressed Cancel!";
   // }
   // document.getElementById("survey_table").innerHTML = x;

  //alert("Are  you sure you want to delete!!!!!");
  db.remove(doc._id,doc._rev);
    //location.reload();
  
   


}).then(function(result){
  console.log(result);
}).catch(function(err){
  console.log(err);
});
$('table').on('click','input[type="button"]',function(e){
    $(this).closest('tr').remove()
});
}
return false;
}

//vehicle display

/*function display(data){
    var str1="";
    for( var i=0;i<data.length;i++){
        str1+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.rc_verification_selection_final_private_id+"</td><td>"+data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"+data[i].doc.vehicle_registration_date_final_private_id+"</td><td>"+data[i].doc.vehicle_make_final_private_id+"</td><td>"+data[i].doc.vehicle_model_final_private_id+"</td><td>"+data[i].doc.vehicle_chassis_number_final_private_id+"</td><td>"+data[i].doc.vehicle_engine_number_final_private_id+"</td><td>"+data[i].doc.vehicle_colour_final_private_id+"</td><td>"+data[i].doc.road_tax_selection_final_private_id+
        "</td><td>"+data[i].doc.vehicle_body_type_final_private_id+"</td><td>"+data[i].doc.vehicle_class_final_private_id+"</td><td>"+data[i].doc.insured_name_final_private_id+"</td><td>"+data[i].doc.vehicle_condition_selection_final_private_id+"</td><td>"+data[i].doc.insurance_period_from_final_private_id+"</td><td>"+data[i].doc.vehicle_odometer_reading_final_private_id+"</td><td>"+data[i].doc.vehicle_rc_validity_final_private_id+"</td><td>"+data[i].doc.vehicle_seating_capacity_final_private_id+"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
    }
    document.getElementById("survey_vehicle_table").innerHTML=str1;
}

function Delete(_id){

db.get(_id).then(function(doc){
  alert("Are  you sure you want to delete!!!!!");
    return db.remove(doc._id,doc._rev);


}).then(function(result){
  console.log(result);
}).catch(function(err){
  console.log(err);
});
}
*/



/*
function clearFields(){
   
}
*/
function check_company_code(){
  var pattern=/^[0-9]*$/;
  var db=new PouchDB('company_details');
  var code_length=$("#company_code_final_private_id").val().length;
    if(!pattern.test($("#company_code_final_private_id").val())){
        $("#cc_error_msg").html("*Please Enter valid company code");
          $("#cc_error_msg").show();
            return error_company_code=true;
    }else if(code_length<6){
        $("#cc_error_msg").html("*Company code should be of 6 characters");
          $("#cc_error_msg").show();
            return error_company_code=true;
    }else{
          var y=$("#company_code_final_private_id").val();
            db.get(y,function(err,doc){
              if(!err){
                var a,b;
                a= doc.company_name;
                b=doc.company_address;
                document.getElementById("company_name_final_private_id").value=a;
                document.getElementById("company_address_final_private_id").value=b;
    }
    else{
        document.getElementById("error").innerHTML="*ADD TO COMPANY DETAILS";
    }

     }); 
     $("#cc_error_msg").hide();
       return error_company_code=false; 
     }
}
        
    function check_policy_code(){
        var pattern=/^[0-9]*$/;
        var policy_length=$("#policy_number_code_final_private_id").val().length;
        if(!pattern.test($("#policy_number_code_final_private_id").val())){
            //$("#pn_error_msg").hide();
            $("#pc_error_msg").html("Please Enter valid policy code");
            $("#pc_error_msg").show();
             return error_policy_code=true;
        }else if( policy_length<4 ){
            $("#pc_error_msg").html("Policy code should be  4  characters");
            $("#pc_error_msg").show();
             return error_policy_code=true;
        }  
        else{
            $("#pc_error_msg").hide();
            return error_policy_code=false;
        }
    }
            
    
    function check_policy_no(){
       var pattern=/^[0-9]*$/;
        var cover_length=$("#policy_number_final_private_id").val().length;
        
         if(!pattern.test($("#policy_number_final_private_id").val())){
            $("#pn_error_msg").html("*Please Enter valid policy number");
            $("#pn_error_msg").show();
            return error_policy_no=true;    
        }
        else if( cover_length<6){
            $("#pn_error_msg").html("*Policy no should be  6 characters");
            $("#pn_error_msg").show();
             return error_policy_no=true;
        }
        else{
            $("#pn_error_msg").hide();
             return error_policy_no=false;
        }


    }
    function check_claim_code(){ 
        var pattern=/^[0-9]*$/;
        var claim_code_length=$("#claim_number_code_final_private_id").val().length;
        if(!pattern.test($("#claim_number_code_final_private_id").val())){
            //$("#pn_error_msg").hide();
            $("#c1_error_msg").html("*Please Enter valid claim code");
            $("#c1_error_msg").show();
             return error_claim_code=true;
        }else if(claim_code_length<4 ){
            $("#c1_error_msg").html("*Claim code should be  4  characters");
            $("#c1_error_msg").show();
             return error_claim_code=true;
        }  
        else{
            $("#c1_error_msg").hide();
            return error_claim_code=false;
        }
    }
    
    function check_claim_no(){ 
        var pattern=/^[0-9]*$/;  
        var claim_length=$("#claim_number_final_private_id").val().length;
        if(!pattern.test($("#claim_number_final_private_id").val())){
            $("#cn_error_msg").html("*Please Enter valid claim number");
            $("#cn_error_msg").show();
            return  error_claim_no=true;
        }
        else if(claim_length<6 ){
            $("#cn_error_msg").html("*Claim number should be  6  characters");
            $("#cn_error_msg").show();
            return  error_claim_no=true;
        } 
        else{
            $("#cn_error_msg").hide();
            return error_claim_no=false;
        }
    }
    
    function check_insurer_code(){
    var pattern=/^[0-9]*$/;
        var insurer_length=$("#insurer_code_final_private_id").val().length;
        if(!pattern.test($("#insurer_code_final_private_id").val()) ){
            $("#ic_error_msg").html("*Please Enter valid insurer number");
            $("#ic_error_msg").show();
            return error_insurer_code=true;
            
        }
        else if(insurer_length<6){
            $("#ic_error_msg").html("*Insurer code should be 6 characters");
            $("#ic_error_msg").show();
            return error_insurer_code=true;   
        }
        else{
            $("#ic_error_msg").hide(); 
            return error_insurer_code=false;    
        }
    }
        
        
        //var pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        
        //if(pattern.test($("#form_email").val())){
    function check_endorsement_no(){
    var pattern=/^[0-9]*$/;
        var endorsement_length=$("#insurance_endorsement_final_private_id").val().length;
        //var pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        
        //if(pattern.test($("#form_email").val())){
        if(!pattern.test($("#insurance_endorsement_final_private_id").val()) ){
            $("#en_error_msg").html("*Please Enter valid Endorsement number");
            $("#en_error_msg").show();
            return error_endorsement_no=true;
            
        }/*else if(endorsement_length>6 ||endorsement_length<6){
            $("#en_error_msg").html("*Endorsement number should be 6 characters");
            $("#en_error_msg").show();
            return error_endorsement_no=true;
        } */   
        else{
            $("#en_error_msg").hide();
            return error_endorsement_no=false;
            
        }
    }
    function check_registration_no(){
    var pattern=/^[A-za-z0-9-]*$/;
        var register_length=$("#vehicle_registerd_number_final_private_id").val().length;
        if(!pattern.test($("#vehicle_registerd_number_final_private_id").val()) ){
            $("#dr_error_msg").html("*Please Enter valid registration number");
            $("#dr_error_msg").show();
            return error_registration_no=true;
        }/*else if(register_length>6 ||register_length<6){
            $("#dr_error_msg").html("*Registration number should be 6 characters");
            $("#dr_error_msg").show();
            return error_registration_no=true;
        }*/
        else{
            $("#dr_error_msg").hide();
            return error_registration_no=false;
            
        }
        }





