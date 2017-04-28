
var db=new PouchDB('sevenTech');
function updateFinalPrivate(){
  //document.getElementById("reinspection").disabled = false;
var error_company_code,error_policy_no, error_policy_code,error_claim_no, error_claim_code,error_insurer_code, error_endorsement_no, error_registration_no; 
    
        error_company_code=check_company_code();
       
       //error_policy_no= check_policy_no();
       error_policy_code= check_policy_code();
       
        //error_claim_no=check_claim_no();
        error_claim_code=check_claim_code();
        
        error_insurer_code=check_insurer_code();
     
        error_endorsement_no=check_endorsement_no();
       
        error_registration_no=check_registration_no();
if(error_company_code == false && error_policy_code== false && error_claim_code == false && error_insurer_code == false && error_endorsement_no==false && error_registration_no==false){
            document.getElementById('reinspection').removeAttribute('disabled');
            
            var final_private_details= $('#form_final_private_id').serializeObject();
         final_private_details._id= $('#report_number_final_private_id').val();

   db.put(final_private_details, function callback(error, response){
      if (!error) {
      db.get(final_private_details._id).then(function(doc){
      doc[bill_amount]='';
      doc[paid_amount]='';
      doc[balance]='';
      return db.put(doc);
      }).then(function(response){console.log(doc);}).catch(function(err){});
      console.log("inserted");

        return true;
      }else{
        console.log("not inserted",error);
        return false;
      }
    });
   



db.get(final_private_details._id,function(err,doc){
if(!err)
{

  var docrec = new Object();
  docrec=$('#form_final_private_id').serializeObject();
// console.log(final_private_details._rev=doc._rev);
 docrec._id=doc._id;
 docrec._rev=doc._rev;


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

  clearfields();

}

});

document.getElementById("message").innerHTML="*SUCCESSFUL INSERTION";

}else{
           // return false;
            document.getElementById("message").innerHTML="*UNSUCCESSFUL INSERTION";
            //return false;
        
        }
    


//clearfields();

}
function updateData(){

var error_company_code,error_policy_no, error_policy_code,error_claim_no, error_claim_code,error_insurer_code, error_endorsement_no, error_registration_no; 

        error_company_code=check_company_code();
       
       //error_policy_no= check_policy_no();
       error_policy_code= check_policy_code();
       
        //error_claim_no=check_claim_no();
        error_claim_code=check_claim_code();
        
        error_insurer_code=check_insurer_code();
     
        error_endorsement_no=check_endorsement_no();
       
        error_registration_no=check_registration_no();
          //console.log(a);
if(error_company_code == false &&  error_policy_code== false && error_claim_code == false && error_insurer_code == false && error_endorsement_no==false && error_registration_no==false){
           document.getElementById("reinspection").disabled = false;

            var final_private_details= $('#form_final_private_id').serializeObject();
         final_private_details._id= $('#report_number_final_private_id').val();

      


   db.put(final_private_details, function callback(error, response){
      if (!error) {

        console.log("inserted");

        return true;
      }else{
        console.log("not inserted",error);
        return false;
      }
    });
   

   
db.get(final_private_details._id,function(err,doc){
if(!err)
{


  var docrec = new Object();
  docrec=$('#form_final_private_id').serializeObject();
// console.log(final_private_details._rev=doc._rev);
 docrec._id=doc._id;
 docrec._rev=doc._rev;


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
    


//clearfields();

}

function clearfields(){
  $("#form_final_private_id")[0].reset();
  
}
function displayFinalPrivate(){
       
        db.allDocs({include_docs:true},function(err,docs){
           listData(docs.rows);
        });

       
}
var str="",str1="",str2="",str3="",str4="",str5="",str6="",str7="",str8="",str9="",count=1;
function listData(data){
       //console.log('A'+ data.length);

    
    for(var i=0;i<data.length;i++){
      char=data[i].doc._id;
       char=char.substring(17,34);
        //console.log(char);
       if(char=='FINAL-PRIVATE')
       {
       str+="<tr id='row'><td>"+count+"</td><td>"+data[i].doc._id+"</td><td>"
        +data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_place_final_private_id+"</td><td><input type='button' id='listData' href='' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='View' onClick='Report(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='View' onClick='Bill(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='Delete' id='theValue' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";
 count++;
  } 
 
}
  document.getElementById("thead").style.display="block";
  document.getElementById("report_particulars").innerHTML= str;



  $(document).ready(function() { $('#example').DataTable(); } );
         var table = $('#example').DataTable();
}   
function Edit(_id){
  window.location.href = 'finalprivateupdate.html?_id=' +_id;
}
function Report(_id){
 window.location.href = 'view.html?_id=' +_id;
}
function Bill(_id){
 window.location.href = 'viewbill.html?_id=' +_id;
}
function Delete(_id){
    if(confirm("Are you sure! You want to delete?!!")){
      db.get(_id).then(function(doc) { 
      return db.remove(doc._id, doc._rev);
    });
 
    $('table').on('click', 'input[type="button"]', function(e){
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
        }/*else if( policy_length<4 ){
            $("#pc_error_msg").html("Policy code should be  4  characters");
            $("#pc_error_msg").show();
             return error_policy_code=true;
        }  */
        else{
            $("#pc_error_msg").hide();
            return error_policy_code=false;
        }
    }
            
    
  /*  function check_policy_no(){
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


    }*/
    function check_claim_code(){ 
        var pattern=/^[0-9]*$/;
        var claim_code_length=$("#claim_number_code_final_private_id").val().length;
        if(!pattern.test($("#claim_number_code_final_private_id").val())){
            //$("#pn_error_msg").hide();
            $("#c1_error_msg").html("*Please Enter valid claim code");
            $("#c1_error_msg").show();
             return error_claim_code=true;
        }/*else if(claim_code_length<4 ){
            $("#c1_error_msg").html("*Claim code should be  4  characters");
            $("#c1_error_msg").show();
             return error_claim_code=true;
        }  */
        else{
            $("#c1_error_msg").hide();
            return error_claim_code=false;
        }
    }
    
    /*function check_claim_no(){ 
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
    }*/
    
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



