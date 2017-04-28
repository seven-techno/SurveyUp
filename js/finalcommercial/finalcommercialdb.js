var db=new PouchDB('sevenTech');
//var final_commercial_details= $('#form_final_private_id').serializeObject();
//final_commercial_details._id= $('#report_number_final_private_id').val();

function updateFinalCommercial(){
       
var error_company_code,error_policy_no,error_permit_no, error_policy_code,error_claim_no, error_claim_code,error_insurer_code, error_endorsement_no, error_registration_no; 
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
        error_permit_no=check_permit_no();
          //console.log(a);
if(error_company_code == false &&error_permit_no==false && error_policy_no== false && error_policy_code== false && error_claim_no == false && error_claim_code == false && error_insurer_code == false && error_endorsement_no==false && error_registration_no==false){
document.getElementById('reinspection').removeAttribute('disabled');
        //var final_private_details=new Array();
         var final_commercial_details= $('#form_final_private_id').serializeObject();
         final_commercial_details._id= $('#report_number_final_private_id').val();
      // alert(final_private_details.report_number_final_private_id);
       //console.log(final_commercial_details);
       //var db=new PouchDB('FinalPrivateDetails');
   db.put(final_commercial_details, function callback(error, response){
   if (!error) {
    
    
       console.log("inserted");
       return true;

}else{
       console.log("not inserted",error);
       return false;
}



     //  console.log(final_private_details);
    //  console.log("Document created Successfully");
   //}
});
   /*db.get(final_commercial_details._id).then(function(doc){
    doc[bill_amount]='';
    doc[paid_amount]='';
    doc[balance]='';
    return db.put(doc);
  }).then(function(response){console.log(doc);}).catch(function(err){});*/
  db.get(final_commercial_details._id).then(function(doc){
    doc[bill_amount]='';
    doc[paid_amount]='';
    doc[balance]='';
    return db.put(doc);
  }).then(function(response){
    console.log(doc);}).catch(function(err){});
   
   document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";
   }else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }

//location.assign("displaytable.html");

 //  db.get(final_private_details._id,function(err,doc){
//if(!err)
//{
//console.log(doc);
//}
//else{
      // return console.log(err);
//}
  // });
//location.assign("displaytable.html");
//clearfields();
}
function updateData(){
       
var error_company_code,error_policy_no,error_permit_no, error_policy_code,error_claim_no, error_claim_code,error_insurer_code, error_endorsement_no, error_registration_no; 
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
        error_permit_no=check_permit_no();
          //console.log(a);
if(error_company_code == false &&error_permit_no==false && error_policy_no== false && error_policy_code== false && error_claim_no == false && error_claim_code == false && error_insurer_code == false && error_endorsement_no==false && error_registration_no==false){
   document.getElementById('reinspection').removeAttribute('disabled');
        //var final_private_details=new Array();
         var final_commercial_details= $('#form_final_private_id').serializeObject();
         final_commercial_details._id= $('#report_number_final_private_id').val();
      // alert(final_private_details.report_number_final_private_id);
       console.log(final_commercial_details);
       //var db=new PouchDB('FinalPrivateDetails');
 /*  db.put(final_commercial_details, function callback(error, response){
   if (!error) {
       console.log("inserted");
       return true;

}else{
       console.log("not inserted",error);
       return false;
}



     //  console.log(final_private_details);
    //  console.log("Document created Successfully");
   //}
});*/
   db.get(final_commercial_details._id,function(err,doc){
if(!err)
{
  var docrec = new Object();
  docrec=$('#form_final_private_id').serializeObject();
// console.log(final_private_details._rev=doc._rev);
 docrec._id=doc._id;
 docrec._rev=doc._rev;
///final_private_details._rev=doc._rev;
  //console.log(doc);
  // doc._id=$('#report_number_final_private_id').val();
  // console.log(doc._id);
  // doc._id=orgin+1;
  // console.log(doc._id);
   //doc=orgin;

  db.put(docrec, function callback(error, response){
    console.log(docrec);
      if (!error) {
        console.log("updated");
        return true;
      }else{
        console.log("not updated",error);
        return false;
      }
    });

  
//clearfields();

}

});
   document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";
   }else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }

//location.assign("displaytable.html");

 //  db.get(final_private_details._id,function(err,doc){
//if(!err)
//{
//console.log(doc);
//}
//else{
      // return console.log(err);
//}
  // });
//location.assign("displaytable.html");
//clearfields();
}


function displayFinalCommercial(){
       //


       db.allDocs({include_docs:true},function(err,docs){
        listData(docs.rows);
        
        
});

}
var str="",str1="",str2="",str3="",str4="",str5="",str6="",str7="",str8="",str9="",char="",count=1;
function listData(data){
  //for(var i=0;i<docs.rows.length;i++){
        //  console.log(docs.rows);
       // console.log(docs.rows[i].id);
       //console.log('A'+ data.length);
    
    for( var i=0;i<data.length;i++){
       char=data[i].doc._id;
       char=char.substring(17,34);
        //console.log(char);
       if(char=='FINAL-COMMERCIAL')
       {
         
       

      str+="<tr id='row'><td>"+count+"</td><td>"+data[i].doc._id+"</td><td>"
        +data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_place_final_private_id+"</td><td><input type='button' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='View' onClick='Report(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='View' onClick='Bill(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='REMOVE' id='theValue' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";


        /* str+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.report_date_final_private_id+"</td><td>"
        +data[i].doc.company_code_final_private_id+"</td><td>"+data[i].doc.company_manager_final_private_id+"</td><td>"
        +data[i].doc.company_name_final_private_id+"</td><td>"+data[i].doc.company_address_final_private_id+"</td><td>"
        +data[i].doc.policy_number_code_final_private_id+"</td><td>"+data[i].doc.policy_number_final_private_id+"</td><td>"
        +data[i].doc.claim_number_code_final_private_id+"</td><td>"+data[i].doc.claim_number_final_private_id+
        "</td><td>"+data[i].doc.insurer_code_final_private_id+"</td><td>"
        +data[i].doc.insurer_name_final_private_id+"</td><td>"+data[i].doc.insurer_address_final_private_id+
        "</td><td>" +data[i].doc.insured_name_final_private_id+"</td><td>"+data[i].doc.insured_address_final_private_id+
        "</td><td>"+data[i].doc.insurance_period_from_final_private_id+"</td><td>"
        +data[i].doc.insurance_period_to_final_private_id+
        "</td><td>"+data[i].doc.insurance_endorsement_final_private_id+"</td><td>"+data[i].doc.sum_insured_final_private_id+
        "</td><td>"+data[i].doc.hpahyp_final_private_id+


         "</td><td>"+data[i].doc.rc_verification_selection_final_private_id+"</td><td>"
         +data[i].doc.vehicle_registerd_number_final_private_id+
         "</td><td>"+data[i].doc.vehicle_registration_date_final_private_id+"</td><td>"
         +data[i].doc.vehicle_make_final_private_id+
         "</td><td>"+data[i].doc.vehicle_model_final_private_id+"</td><td>"
         +data[i].doc.vehicle_chassis_number_final_private_id+
         "</td><td>"+data[i].doc.vehicle_engine_number_final_private_id+
         "</td><td>"+data[i].doc.vehicle_colour_final_private_id+
         "</td><td>"+data[i].doc.road_tax_selection_final_private_id+  "</td><td>"
         +data[i].doc.road_tax_date_final_private_id+
         "</td><td>"+data[i].doc.vehicle_body_type_final_private_id+"</td><td>"
          +data[i].doc.vehicle_class_final_private_id+
         "</td><td>"+data[i].doc.vehicle_condition_selection_final_private_id+
         "</td><td>"+data[i].doc.vehicle_odometer_reading_final_private_id+
         "</td><td>"+data[i].doc.vehicle_unladen_weight_final_private_id+
         "</td><td>"+data[i].doc.vehicle_registered_laden_weight_final_private_id+
         "</td><td>"+data[i].doc.vehicle_fitness_certificate_final_private_id+
         "</td><td>"+data[i].doc.vehicle_fitness_certificate_validity_final_private_id+
         "</td><td>"+data[i].doc.vehicle_rc_validity_final_private_id+
         "</td><td>"+data[i].doc.vehicle_seating_capacity_final_private_id+



         "</td><td>"+data[i].doc.vehicle_permit_number_final_private_id+ 
         "</td><td>"+data[i].doc.vehicle_validity_final_private_id+ 
         "</td><td>"+data[i].doc.vehicle_permit_type_final_private_id+
         "</td><td>"+data[i].doc.vehicle_passenger_load_final_private_id+
         "</td><td>"+data[i].doc.vehicle_area_permitted_final_private_id+
         "</td><td>" +data[i].doc.dl_verification_selection_final_private_id+
         "</td><td>"+data[i].doc.dl_number_final_private_id+"</td><td>"
         +data[i].doc.dl_name_final_private_id+"</td><td>"+data[i].doc.dl_address_final_private_id+
         "</td><td>"+data[i].doc.dl_issue_date_final_private_id+
         "</td><td><table class='table table-striped table-hover table-bordered table-responsive'><tr><th>Sl.No</th><th>Type</th><th>Effective_from</th><th>Valid Upto</th><th>Badge No</th></tr>";
             for(key in data[i].doc.vehicle_permitted){
              var value=data[i].doc.vehicle_permitted[key];
              // data1 += key+ ":" +value ;
              str+="<tr><td>"+key+"</td><td>"+value.type+"</td><td>"+value.effective_from+"</td><td>"+value.valid_upto+"</td><td>"+value.badge_no+"</td></tr>";
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }

        str+= "</table></td><td>"+data[i].doc.dl_issuing_authority_final_private_id+
         "</td><td>"+data[i].doc.dl_type_final_private_id+"</td><td>"+data[i].doc.dl_endorsements_final_private_id+

         "</td><td>"+data[i].doc.nature_of_goods_carried_final_private_id+"</td><td>"
         +data[i].doc.goods_weight_final_private_id+"</td><td>"+data[i].doc.number_of_passengers_final_private_id+
         "</td><td>"+data[i].doc.transported_from_final_private_id+

         "</td><td>"+data[i].doc.accident_date_final_private_id+"</td><td>"+data[i].doc.accident_time_final_private_id+
          "</td><td>"+data[i].doc.accident_place_final_private_id+"</td><td>"+data[i].doc.accident_cause_final_private_id+
          "</td><td>"+data[i].doc.property_damage_final_private_id+"</td><td>"+data[i].doc.details_of_injury_final_private_id+
          "</td><td>"+data[i].doc.accident_reported_to_police_final_private_id+"</td><td>"+data[i].doc.name_of_police_station_final_private_id+
          "</td><td>"+data[i].doc.fir_details_final_private_id+

          "</td><td>"+data[i].doc.survey_request_date_final_private_i+
          "</td><td><table class='table table-striped table-hover table-bordered table-responsive'><tr><th>Sl.No</th><th>Date</th><th>Time</th></tr>";
             for(keyv in data[i].doc.survey_dates){
              var valuev=data[i].doc.survey_dates[keyv];
              // data1 += key+ ":" +value ;
              str+="<tr><td>"+keyv+"</td><td>"+valuev.date+"</td><td>"+valuev.time+"</td></tr>";
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }
     


      str+="</table></td><td>"+data[i].doc.survey_place_final_private_id+"</td><td>"+data[i].doc.schedule_painting_labour_percentage_final_private_id+
      "</td><td>"+data[i].doc.schedule_painting_material_percentage_final_private_id+
      "</td><td><table class='table table-striped table-hover table-bordered table-responsive'><tr><th>Sl.No</th><th>Part Name</th><th>Claimed</th><th>Amount as per Invoice</th><th>Nature of Damage</th><th>value</th><th>IMT23</th><th>Reason for Deletion</th></tr>";
      
      for(keyd in data[i].doc.damage_parts){
              var valued=data[i].doc.damage_parts[keyd];
              // data1 += key+ ":" +value ;
              str+="<tr><td>"+keyd+"</td><td>"+valued.part_name+"</td><td>"+valued.claimed+"</td><td>"+valued.assessed+"</td><td>"+valued.nature_of_damage+"</td><td>"+valued.value+"</td><td>"+valued.imt23+"</td><td>"+valued.reason+"</td></tr>";
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }


    str+="</table></td><td>"+data[i].doc.total_labour_claimed_final_private_id+
      "</td><td>"+data[i].doc.cost_of_spare_parts_claimed_final_private_id+
      "</td><td>"+data[i].doc.spot_photo_claimed_final_private_id+
      "</td><td>"+data[i].doc.spot_photo_assessed_final_private_id+"</td><td>"+data[i].doc.spot_repairs_claimed_final_private_id+
      "</td><td>"+data[i].doc.spot_repairs_assessed_final_private_id+
      "</td><td>"+data[i].doc.metal_percentage_final_private_id+ "</td><td>"+data[i].doc.compulsory_final_private_id+
      "</td><td>"+data[i].doc.imposed_final_private_id+"</td><td>"+data[i].doc.voluntary_final_private_id+
      "</td><td>"+data[i].doc.salvage_value_final_private_id+
      "</td><td><table class='table table-striped table-hover table-bordered table-responsive'><tr><th>Sl.No</th><th>Comments</th></tr>";
             for(keyc in data[i].doc.comments_table){
              var valuec=data[i].doc.comments_table[keyc];
              // data1 += key+ ":" +value ;
              str+="<tr><td>"+keyc+"</td><td>"+valuec.comments+"</td></tr>";
              //console.log(value)
              //console.log(data[i].doc.vehicle_permitted);
              //str3+="<tr><td>"+data[i].value+"</td><tr>";   
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }


      str+= "</table></td><td>"+data[i].doc.spot_survey_charges_final_private_id+"</td><td>"+data[i].doc.final_survey_charges_final_private_id+
      "</td><td>"+data[i].doc.reinspection_charges_final_private_id+"</td><td>"+data[i].doc.opinion_charges_final_private_id+"</td><td>"
       +data[i].doc.check_charges_final_private_id+"</td><td>"+data[i].doc.local_travelling_expenses_final_private_id+
      "</td><td>"+data[i].doc.local_place_of_survey_final_private_id+ "</td><td>"+data[i].doc.local_distance_travelled_final_private_id+
      "</td><td>"+data[i].doc.outstation_travelling_expenses_final_private_id+"</td><td>"+data[i].doc.outstation_place_of_survey_final_private_id+
      "</td><td>"+data[i].doc.outstation_distance_travelled_final_private_id+
      "</td><td>"+data[i].doc.number_of_photos_final_private_id+ "</td><td>"+data[i].doc.per_photo_price_final_private_id+
      "</td><td>"+data[i].doc.outstation_allowance_final_private_id+"</td><td>"+data[i].doc.postage_charges_final_private_id+
      "</td><td><input type='button' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='View' onClick='View(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='REMOVE' id='theValue' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";*/
         count++;
}
  }
  document.getElementById("thead").style.display="block"; 
  document.getElementById("report_particulars").innerHTML= str;
  $(document).ready(function() { $('#example').DataTable(); } );
         var table = $('#example').DataTable();
  //document.getElementById("vehicle_particulars").innerHTML= str1;
  /*document.getElementById("driver_particulars").innerHTML= str2;
  document.getElementById("accident_particulars").innerHTML= str3;
  document.getElementById("survey_details").innerHTML= str4;
  document.getElementById("summary_assessment").innerHTML= str5;
  document.getElementById("Annexure").innerHTML= str6;
  document.getElementById("surveyor_observations").innerHTML= str7;
  document.getElementById("professional_fee").innerHTML= str7;
  document.getElementById("travelling_expenses").innerHTML= str9;*/
}

function clearfields(){
  $("#form_final_private_id")[0].reset();
  //$("#update").on('click',function(e){
   // e.preventDefault();
   // $("#form_final_private_id").reset.click();
//});
}
//function Edit(_id){

//}
function Edit(_id){
   window.location.href = 'finalcommercialupdate.html?_id=' +_id;
 // localStorage.setItem("final_private",_id);
 // location.assign("finalcommercialupdate.html");
  //console.log("hi");
}
function Report(_id){
  
   window.location.href = 'viewCommercial.html?_id=' +_id;
 //localStorage.setItem("final_private",_id);
 //location.assign("viewCommercial.html");
}
function Bill(_id){
  
   window.location.href = 'viewbillfinalc.html?_id=' +_id;
 //localStorage.setItem("final_private",_id);
 //location.assign("viewCommercial.html");
}
function Delete(_id){
    //console.log(_id);
    //var url='http://sevenadmin.com/finalprivate.html';
//ConfirmDelete();
if(confirm("Are you sure! You want to delete?!!")){
db.get(_id).then(function(doc) { 
return db.remove(doc._id, doc._rev);
});
//$("#First").deleteRow();
//$(value).closest("tr").remove();
//document.getElementById("report_particulars").deleteRow(this.theValue);
 
$('table').on('click', 'input[type="button"]', function(e){
   $(this).closest('tr').remove()
});
}
return false;

//.then(function (result){
//});
// .catch(function (err) { console.log(err);});
        //{
       // console.log(doc);
    //});
   // db.get(_id,function(error,doc)
    //{
       // if(!error){
        // console.log(doc);

        //}
  //  });
   // return db.remove();
   //document.getElementById("company_table").deleteRow(0);
   //db.get('mydoc').then(function(doc) {
   // return db.remove(doc._id, doc._rev); }).then(function (result) { // handle result }).catch(function (err) { console.log(err); });
}


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
    var pattern=/^[A-Za-z0-9-]*$/;
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


    function check_permit_no(){
        var pattern=/^[0-9]*$/;
        var permit_length=$("#vehicle_permit_number_final_private_id").val().length;
        if(!pattern.test($("#vehicle_permit_number_final_private_id").val())){
            //$("#pn_error_msg").hide();
            $("#per_error_msg").html("Please Enter valid permit number");
            $("#per_error_msg").show();
             return error_permit_no=true;
        }/*else if(permit_length>6 || permit_length<6 ){
            $("#per_error_msg").html("Permit number should be  6  characters");
            $("#per_error_msg").show();
             return error_permit_no=true;
        } */ 
        else{
            $("#per_error_msg").hide();
            return error_policy_code=false;
        }
    }
            
            
    
    