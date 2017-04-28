var db=new PouchDB('Personal_Details');

function updatePersonal(){
       var error_mobile_no,error_email;
       error_mobile_no=check_mobile_no();
       error_email=check_email();
       if(error_mobile_no==false && error_email==false)
       {
         var personal_details= $('#personal_details').serializeObject();
         personal_details._id= $('#number_personal_id').val();
        db.put(personal_details, function callback(error, response){
      if (!error) {
      
   
        console.log("inserted");

        return true;
      }else{
        console.log("not inserted",error);
        return false;
      }
    });
db.get(personal_details._id,function(err,doc){
if(!err)
{
  var docrec = new Object();
  docrec=$('#personal_details').serializeObject();
 docrec._id=doc._id;
 docrec._rev=doc._rev;
console.log(docrec);
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
}
else{
       return console.log(err);
}
});
document.getElementById("message").innerHTML="Informations are updated";
}
else{
  document.getElementById("message").innerHTML="Informations not updated";
}
}

function check_mobile_no(){
    var pattern=/^[0-9]*$/;
        var number_length=$("#mobile_phone_personal_id").val().length;
        if(!pattern.test($("#mobile_phone_personal_id").val()) ){
            $("#dr_error_msg").html("*Please Enter valid 10digit Number");
            $("#dr_error_msg").show();
            return error_mobile_no=true;
        }else if(number_length>10 ||number_length<10){
            $("#dr_error_msg").html("*Mobile number should be 10 digits");
            $("#dr_error_msg").show();
            return error_mobile_no=true;
        }
        else{
            $("#dr_error_msg").hide();
            return error_mobile_no=false;
            
        }
        }
function check_email(){
    var pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
    
    if(!pattern.test($("#email_personal_id").val())){
      $("#em_error_msg").html("*Invalid Email address");
      $("#em_error_msg").show();
      error_email=true;
     
      
    }else{
       $("#em_error_msg").hide();
       return error_email=false;
      
    }
  }

      