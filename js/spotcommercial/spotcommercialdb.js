var db= new PouchDB('sevenTech');
function updateSpotCommercial(){
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
document.getElementById("reinspection").disabled = false;
var data = $('#form_final_private_id').serializeObject();
data._id = $('#report_number_final_private_id').val();
 db.put(data,function callback(error,result){
    if(error){
      // clearFields();
      console.log("not inserted",error);
      return false;
  }else{
    //   showDetails();
db.get(data._id).then(function(doc){
      doc[bill_amount]='';
      doc[paid_amount]='';
      doc[balance]='';
      return db.put(doc);
      }).then(function(response){console.log(doc);}).catch(function(err){});
    console.log("inserted");
    return true;
  // document.getElementById("message").innerHTML="Informations are updated";
    }
    });

 db.get(data._id,function(err,doc){
    if(!err){
        var docresult=new Object();
        var docresult=$('#form_final_private_id').serializeObject();
        docresult._id=doc._id;
        docresult._rev=doc._rev;

        db.put(docresult,function callback(error,result){
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
        //clearFields();
    }
 });
  document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";
   }else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }
//clearFields();
//location.assign("displayTable.html");
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
document.getElementById("reinspection").disabled = false;
var data = $('#form_final_private_id').serializeObject();
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

 db.get(data._id,function(err,doc){
    if(!err){
        var docresult=new Object();
        var docresult=$('#form_final_private_id').serializeObject();
        docresult._id=doc._id;
        docresult._rev=doc._rev;

        db.put(docresult,function callback(error,result){
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
        //clearFields();
    }
 });
  document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";
   }else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }
//clearFields();
//location.assign("displayTable.html");
}

function clearFields(){
  $("#form_final_private_id")[0].reset();
 // $("#form_final_private_id > input[type=reset]").trigger('click');
 //document.getElementById("form_final_private_id").reset();
}
function DisplaySpotCommercial(){
   // location.assign("displayTable.html");
      db.allDocs({include_docs:true}, function(err,docs){
            //console.log (docs.rows);
            display(docs.rows);
        });
}
function display(data){
    var str="",count=1,char="";
    //str1="",str2="",str3="",str4="",str5="";
    for( var i=0;i<data.length;i++){
      char=data[i].doc._id;
       char=char.substring(17,34);
        //console.log(char);
       if(char=='SPOT-COMMERCIAL')
       {
         

       // console.log(Object.keys(vehicleListsTable));
        //var imp=data[i].doc.vehicleListsTable;
        str+= "<tr><td>"+count+"</td><td>"+data[i].doc._id+"</td><td>"
        +data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_place_final_private_id+

        /*data[i].doc.company_address_final_private_id+"</td><td>"
        +data[i].doc.policy_number_code_final_private_id+"</td><td>"+data[i].doc.policy_number_final_private_id+"</td><td>"
        +data[i].doc.claim_number_code_final_private_id+"</td><td>"+data[i].doc.claim_number_final_private_id+
        "</td><td>"+data[i].doc.insurer_code_final_private_id+"</td><td>"
        +data[i].doc.insurer_name_final_private_id+"</td><td>"+data[i].doc.insurer_address_final_private_id+
        "</td><td>" +data[i].doc.insured_name_final_private_id+"</td><td>"+data[i].doc.insured_address_final_private_id+
        "</td><td>"+data[i].doc.insurance_period_from_final_private_id+"</td><td>"
        +data[i].doc.insurance_period_to_final_private_id+
        "</td><td>"+data[i].doc.insurance_endorsement_final_private_id+"</td><td>"+data[i].doc.sum_insured_final_private_id+
        "</td><td>"+data[i].doc.hpahyp_final_private_id+


        "</td><td>" +data[i].doc.rc_verification_selection_final_private_id+"</td><td>"+data[i].doc.vehicle_registerd_number_final_private_id+
       "</td><td>"+data[i].doc.vehicle_registration_date_final_private_id+"</td><td>"+data[i].doc.vehicle_make_final_private_id+
       "</td><td>"+data[i].doc.vehicle_model_final_private_id+"</td><td>"+data[i].doc.vehicle_chassis_number_final_private_id+
       "</td><td>"+data[i].doc.vehicle_engine_number_final_private_id+
       "</td><td>"+data[i].doc.vehicle_colour_final_private_id+"</td><td>"+data[i].doc.road_tax_selection_final_private_id+
       "</td><td>"+data[i].doc.vehicle_body_type_final_private_id+"</td><td>"
       +data[i].doc.vehicle_class_final_private_id+"</td><td>"+data[i].doc.vehicle_condition_selection_final_private_id+
       "</td><td>"+data[i].doc.vehicle_odometer_reading_final_private_id+"</td><td>"+data[i].doc.vehicle_rc_validity_final_private_id+
       "</td><td>"+data[i].doc.vehicle_seating_capacity_final_private_id+

     

    "</td><td>"+data[i].doc.vehicle_permit_number_final_private_id+"</td><td>"+data[i].doc.vehicle_validity_final_private_id+
       "</td><td>"+data[i].doc.vehicle_permit_type_final_private_id+"</td><td>"+data[i].doc.vehicle_passenger_load_final_private_id+
       "</td><td>"+data[i].doc.vehicle_area_permitted_final_private_id+
    


       "</td><td>"+data[i].doc.dl_verification_selection_final_private_id+
       "</td><td>"+data[i].doc.dl_number_final_private_id+"</td><td>"+data[i].doc.dl_name_final_private_id+
       "</td><td>"+data[i].doc.dl_address_final_private_id+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+
       "</td><td><table class=table table-striped table-hover table-bordered>"+
         "<tr><th>"+"Sl.No"+"</th><th>"+"Type"+"</th><th>"+"Effective from"+"</th><th>"+"valid Upto"+"</th><th>"
        + "badge no"+"</th></tr>";
        for(key in data[i].doc.vehicle_permitted){
            var val=data[i].doc.vehicle_permitted[key];

            str+="<tr><td>"+key+"</td><td>"+val.type+"</td><td>"+val.effective_from+"</td><td>"+"</td><td>"+val.valid_upto+
            "</td><td>"+val.badge_no+"</td></tr>";
        }
       str+= "</table></td><td>"+data[i].doc.dl_issuing_authority_final_private_id+"</td><td>"+data[i].doc.dl_type_final_private_id+
       "</td><td>"+data[i].doc.dl_endorsements_final_private_id+



    
    "</td><td>"+data[i].doc.nature_of_goods_carried_final_private_id+"</td><td>"+data[i].doc.goods_weight_final_private_id+
       "</td><td>"+data[i].doc.number_of_passengers_final_private_id+"</td><td>"+data[i].doc.transported_from_final_private_id+


        "</td><td>"+data[i].doc.accident_date_final_private_id+"</td><td>"+data[i].doc.accident_time_final_private_id+
       "</td><td>"+data[i].doc.accident_place_final_private_id+"</td><td>"
      +data[i].doc.accident_cause_final_private_id+"</td><td>"+data[i].doc.property_damage_final_private_id+"</td><td>"
      +data[i].doc.details_of_injury_final_private_id+"</td><td>"+data[i].doc.accident_reported_to_police_final_private_id+
      "</td><td>"+data[i].doc.name_of_police_station_final_private_id+"</td><td>"+data[i].doc.fir_details_final_private_id+

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
       str+="</table></td><td>"+data[i].doc.spot_survey_charges_final_private_id+
        "</td><td>"+data[i].doc.final_survey_charges_final_private_id+"</td><td>"
        +data[i].doc.reinspection_charges_final_private_id+"</td><td>"+data[i].doc.opinion_charges_final_private_id+
        "</td><td>"+data[i].doc.check_charges_final_private_id+


        "</td><td>"+data[i].doc.local_travelling_expenses_final_private_id+
        "</td><td>"+data[i].doc.local_place_of_survey_final_private_id+"</td><td>"
        +data[i].doc.local_distance_travelled_final_private_id+"</td><td>"
        +data[i].doc.outstation_travelling_expenses_final_private_id+"</td><td>"
        +data[i].doc.outstation_place_of_survey_final_private_id+"</td><td>"
        +data[i].doc.outstation_distance_travelled_final_private_id+"</td><td>"
        +data[i].doc.number_of_photos_final_private_id+"</td><td>"+data[i].doc.per_photo_price_final_private_id+
        "</td><td>"+data[i].doc.outstation_allowance_final_private_id+
        "</td><td>"+data[i].doc.postage_charges_final_private_id+*/
       "</td><td><input type='button'  id='editBtn' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td><input type='button'  id='viewBtn' value='View' onClick='Report(\""+data[i].doc._id+"\");'/>"+
         "</td><td><input type='button'  id='viewBtn' value='View' onClick='Bill(\""+data[i].doc._id+"\");'/>"+
          "</td><td><input type='button' id='deleteBtn' value='Delete' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";

       //str1+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.rc_verification_selection_final_private_id+
      // "</td><td>"+data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"
       //+data[i].doc.vehicle_registration_date_final_private_id+"</td><td>"+data[i].doc.vehicle_make_final_private_id+
       //"</td><td>"+data[i].doc.vehicle_model_final_private_id+"</td><td>"+data[i].doc.vehicle_chassis_number_final_private_id+
      // "</td><td>"+data[i].doc.vehicle_engine_number_final_private_id+"</td><td>"+data[i].doc.vehicle_colour_final_private_id+
       //"</td><td>"+data[i].doc.road_tax_selection_final_private_id+
       //"</td><td>"+data[i].doc.vehicle_body_type_final_private_id+"</td><td>"+data[i].doc.vehicle_class_final_private_id+
       //"</td><td>"+data[i].doc.vehicle_condition_selection_final_private_id+"</td><td>"
       //+data[i].doc.vehicle_odometer_reading_final_private_id+"</td><td>"+data[i].doc.vehicle_rc_validity_final_private_id+
       //"</td><td>"+data[i].doc.vehicle_seating_capacity_final_private_id+
       //"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
      // str2+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.dl_verification_selection_final_private_id+
      // "</td><td>"+data[i].doc.dl_number_final_private_id+"</td><td>"+data[i].doc.dl_name_final_private_id+
      // "</td><td>"+data[i].doc.dl_address_final_private_id+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+
      // "</td><td>"+data[i].doc.vehicleListsTable+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+"</td><td>"
      // +data[i].doc.vehicleListsTable+"</td><td>"+data[i].doc.dl_issue_date_final_private_id+  "</td><td>"
      // +data[i].doc.dl_issuing_authority_final_private_id+"</td><td>"+data[i].doc.dl_type_final_private_id+
     //  "</td><td>"+data[i].doc.dl_endorsements_final_private_id+
      // "</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
      //  str3+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.accident_date_final_private_id+"</td><td>"
      //+data[i].doc.accident_time_final_private_id+"</td><td>"+data[i].doc.accident_place_final_private_id+"</td><td>"
      //+data[i].doc.accident_cause_final_private_id+"</td><td>"+data[i].doc.property_damage_final_private_id+"</td><td>"
      //+data[i].doc.details_of_injury_final_private_id+"</td><td>"+data[i].doc.accident_reported_to_police_final_private_id+
      //"</td><td>"+data[i].doc.name_of_police_station_final_private_id+"</td><td>"+data[i].doc.fir_details_final_private_id+
      //  "</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
       // str4+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.spot_survey_charges_final_private_id+
        //"</td><td>"+data[i].doc.final_survey_charges_final_private_id+"</td><td>"
        //+data[i].doc.reinspection_charges_final_private_id+"</td><td>"+data[i].doc.opinion_charges_final_private_id+
        //"</td><td>"+data[i].doc.check_charges_final_private_id+
        //"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        
       // str5+="<tr><td>"+data[i].doc._id+"</td><td>"+data[i].doc.local_travelling_expenses_final_private_id+
        //"</td><td>"+data[i].doc.local_place_of_survey_final_private_id+"</td><td>"
        //+data[i].doc.local_distance_travelled_final_private_id+"</td><td>"
        //+data[i].doc.outstation_travelling_expenses_final_private_id+"</td><td>"
        //+data[i].doc.outstation_place_of_survey_final_private_id+"</td><td>"
        //+data[i].doc.outstation_distance_travelled_final_private_id+"</td><td>"
        //+data[i].doc.number_of_photos_final_private_id+"</td><td>"+data[i].doc.per_photo_price_final_private_id+
        //"</td><td>"+data[i].doc.outstation_allowance_final_private_id+
        //"</td><td>"+data[i].doc.postage_charges_final_private_id+
        //"</td><td><input type='button' value='Remove' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
        count++;
      }
    }

    document.getElementById("survey_table").innerHTML=str;
    //document.getElementById("survey_vehicle_table").innerHTML=str1;
    $(document).ready(function(){$('#example').DataTable();});
    var table=$('#example').DataTable();
    //document.getElementById("survey_driver_table").innerHTML=str2;
    //document.getElementById("survey_accident_table").innerHTML=str3;  
    //document.getElementById("survey_professional_table").innerHTML=str4;
   // document.getElementById("survey_travelling_table").innerHTML=str5;
}
function Edit(_id){
 window.location.href = 'spotsurveycommercialupdate.html?_id=' +_id;
  
//location.assign("spotsurveycommercialupdate.html");
}
function Report(_id){
 //localStorage.setItem("spot_commercial",_id);
//location.assign("viewcommercial.html");
window.location.href = 'viewspotcommercial.html?_id=' +_id;
}

function Bill(_id){
 //localStorage.setItem("spot_commercial",_id);
//location.assign("viewcommercial.html");
window.location.href = 'viewspotcommercialbill.html?_id=' +_id;
}

function Delete(_id){
if(confirm("Are you want to delete!!")){
db.get(_id).then(function(doc){
    return db.remove(doc._id,doc._rev);


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

