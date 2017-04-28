/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var db=new PouchDB('company_details');
function addInsuranceCompany(){
       
        //var final_private_details=new Array();
         var company_details= $('#company_details').serializeObject();
         company_details._id= $('#code-field').val();
      // alert(final_private_details.report_number_final_private_id);
       //console.log(final_private_details);
       //var db=new PouchDB('FinalPrivateDetails');
   db.put(company_details, function callback(error, response){
      if (!error) {
        console.log("inserted");

        return true;
      }else{
        console.log("not inserted",error);
        return false;
      }
    });
db.get(company_details._id,function(err,doc){
if(!err)
{
  var docrec = new Object();
  docrec=$('#company_details').serializeObject();
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
showDetails();
  clearfields();
}

});
//
//location.assign("displaytable.html");

}
function clearfields(){
  document.getElementById("name-field").value="";
  document.getElementById("branch-field").value="";
   document.getElementById("address-field").value="";
    document.getElementById("officeNumber-field").value="";
     document.getElementById("email-field").value="";
     document.getElementById("code-field").value="";
  //$("#update").on('click',function(e){
   // e.preventDefault();
   // $("#form_final_private_id").reset.click();
//});
}

function showDetails(){
       //
    
        db.allDocs({include_docs:true},function(err,docs){
           listData(docs.rows);
        });
}

function listData(data){
       //console.log('A'+ data.length);

    var str="";
    for(var i=0;i<data.length;i++){
      str+="<tr id='row'><td>"+(i+1)+"</td><td>"+data[i].doc.company_name+"</td><td>"+data[i].doc.company_branch+"</td><td>"
        +data[i].doc.company_address+"</td><td>"+data[i].doc.company_office_number+"</td><td>"
        +data[i].doc.company_email+"</td><td>"+data[i].doc._id+
        "</td><td><input type='button' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='REMOVE' id='theValue' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";

         /*str +="<tr><td>"+data[i].doc.company_name+"</td><td>"+data[i].doc.company_branch+"</td><td>"+data[i].doc.company_address+
         "</td><td>"+data[i].doc.company_office_number+
         "</td><td>"+data[i].doc.company_email+"</td><td>"+data[i].doc._id+
         "</td><td><input type='button' value='Edit' onClick='Edit(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='View' onClick='View(\""+data[i].doc._id+"\");'/>"+
         "</td><td> <input type='button' value='REMOVE' id='theValue' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";*/


    }
    document.getElementById("company_table").innerHTML=str;
   $(document).ready(function() { $('#example').DataTable(); } );
         var table = $('#example').DataTable();
 // document.getElementById("thead").style.display="block";
  //document.getElementById("thead1").style.display="block";
 // document.getElementById("report_particulars").innerHTML= str;
  //document.getElementById("vehicle_particulars").innerHTML= str1;
 /* document.getElementById("driver_particulars").innerHTML= str2;
  document.getElementById("accident_particulars").innerHTML= str3;
  document.getElementById("survey_details").innerHTML= str4;
  document.getElementById("summary_assessment").innerHTML= str5;
  document.getElementById("Annexure").innerHTML= str6;
  document.getElementById("surveyor_observations").innerHTML= str7;
  document.getElementById("professional_fee").innerHTML= str7;
  document.getElementById("travelling_expenses").innerHTML= str9;*/

   


    

}
function Edit(_id){
  //localStorage.setItem("final_private",_id);
  db.get(_id,function(err,doc){
       console.log(doc);
    if(!err){
      document.getElementById("name-field").value=doc.company_name;
  document.getElementById("branch-field").value=doc.company_branch;
   document.getElementById("address-field").value=doc.company_address;
    document.getElementById("officeNumber-field").value=doc.company_office_number;
     document.getElementById("email-field").value=doc.company_email;
     document.getElementById("code-field").value=doc._id;
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
}
});
showDetails();
  //location.assign("finalprivateupdate.html");
  //console.log("hi");
}
function View(_id){
 //localStorage.setItem("final_private",_id);
// location.assign("view.html");
}
// for(var j=0;j<100;j++)
       //{
        
        
       //}
       //console.log(data[i].doc.survey_dates);
      /* for(key in data[i].doc.survey_dates){
            var dataa="",str1="";
              var value=data[i].doc.survey_dates[key];
               dataa += key+ ":" +value ;

              console.log(value.date);
              console.log(value.time);
              //console.log(data[i].doc.vehicle_permitted);
             //console.log(str1+="<tr><td>"+data[i].value+"</td><tr>");
              //+data[i].doc.vehicle_permitted[i].effective_from+"</td><td>"+data[i].doc.vehicle_permitted[i].valid_upto+"</td><td>"+data[i].doc.vehicle_permitted[i].badge_no+"</td><td></tr>";
         }*/




/*function ConfirmDelete()
{
  var x = confirm("Are you sure you want to delete?");
  if (x)
      return true;
  else

    return false;
}*/

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
























/*function addInsuranceCompany(){
    
      var name= document.company_details.company_name.value;
      var branch=document.company_details.company_branch.value;
       var address=document.company_details.company_address.value;
       var officenum=document.company_details.company_office_number.value;
       var email=document.company_details.company_email.value;
       var code=document.company_details.company_code.value;

       var comapany_details_info={
        _id:'company_details_' + code,
        company_details_name:name,
        company_details_branch:branch,
        company_details_address:address,
        company_details_officenum:officenum,
        company_details_email:email
       };

    db.put(comapany_details_info,function callback(error,result){
    if(!error){
       clearFields();
       showDetails();
    document.getElementById("message").innerHTML="Informations are updated";
    }
    });
}

function clearFields(){
  document.company_details.company_name.value="";
  document.company_details.company_branch.value="";
  document.company_details.company_address.value="";
  document.company_details.company_office_number.value="";
  document.company_details.company_email.value="";
  document.company_details.company_code.value="";
   }

     function showDetails(){
        db.allDocs({include_docs:true},function(err,docs){
            names(docs.rows);
        });
}

function names(data){
    var str="";
    for( var i=0;i<data.length;i++){
         str +="<tr><td>"+data[i].doc.company_details_name+"</td><td>"+data[i].doc.company_details_branch+"</td><td>"+data[i].doc.company_details_address+"</td><td>"+data[i].doc.company_details_officenum+
         "</td><td>"+data[i].doc.company_details_email+"</td><td>"+data[i].doc._id+"</td><td><input type='button' value='REMOVE' id='theValue' onClick='Delete(\""+data[i].doc._id+"\");'/></td></tr>";


    }
    document.getElementById("company_table").innerHTML=str;
   
   
}
function Delete(_id){
    console.log(_id);
db.get(_id).then(function(doc) { 
return db.remove(doc._id, doc._rev);
 }).then(function (result){ 
   console.log(result);}).catch(function (err) { 
    console.log(err);});
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
}*/

     