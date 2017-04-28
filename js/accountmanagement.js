//var db= new PouchDsB('spotCommercialdb');
 var db=new PouchDB('sevenTech');



 function loadAccounts(){

    
       this.db.allDocs({include_docs:true}, function(err,docs){
            //console.log (docs.rows);
            listData(docs.rows);
           // console.log(docs.rows);
        });
      //  this.db2.allDocs({include_docs:true}, function(err,docs){
            //console.log (docs.rows);
        //    names(docs.rows);
          //  console.log(docs.rows);
       //});

}



function listData(data){
    var str="";
    for( var i=0;i<data.length;i++){
       //var balance=10-8;
       
      data[i].doc.bill_amount=parseInt(data[i].doc.spot_survey_charges_final_private_id,10)+parseInt(data[i].doc.final_survey_charges_final_private_id,10)+
                 parseInt(data[i].doc.reinspection_charges_final_private_id,10)+parseInt(data[i].doc.opinion_charges_final_private_id,10)+
                      parseInt(data[i].doc.check_charges_final_private_id,10)+parseInt(data[i].doc.local_travelling_expenses_final_private_id,10)+
                      parseInt(data[i].doc.outstation_travelling_expenses_final_private_id,10)+parseInt(data[i].doc.outstation_allowance_final_private_id,10)+
                      parseInt(data[i].doc.postage_charges_final_private_id,10)+parseInt(data[i].doc.number_of_photos_final_private_id,10)*parseInt(data[i].doc.per_photo_price_final_private_id,10);

        str+="<tr><td>"+ (i+1)+"</td><td>"+data[i].doc.policy_number_code_final_private_id+
        "</td><td>"+data[i].doc.insured_name_final_private_id+"</td><td>"
        +data[i].doc.company_name_final_private_id+"</td><td>"+data[i].doc.company_code_final_private_id+
        "</td><td>"+data[i].doc.report_date_final_private_id+"</td><td>"+data[i].doc.bill_amount+
        "</td><td><input type='text' name='paid_amount' id='\""+"id_"+data[i].doc._id+"\"' oninput='myFunction(this,\""+data[i].doc._id+"\",\""+data[i].doc.bill_amount+"\",\""+(i+1)+"\");' value=\""+data[i].doc.paid_amount+"\"></td><td id='\""+"balance_"+data[i].doc._id+"\"'>"+data[i].doc.balance+"</td></tr>";
        //data[i].doc.pai_amount=document.getElementById("paid_amount").value;
    }
   
    document.getElementById("account_table").innerHTML=str;
    $(document).ready(function() { $('#example').DataTable(); } );
         var table = $('#example').DataTable();
   // console.log(str);
}
function myFunction(x,z,bill_amount,k){
  //var i;
  var y=x.value;
  var balance=bill_amount-y;
  //var z=x.id;balance
  //console.log(z);
  //i=y;
  //var val=document.getElementById("paid_amount").value;
db.get(z,function(err,doc){
if(!err)
{
  console.log(doc);
  doc.paid_amount=y;
  console.log(doc.paid_amount);
  doc.balance=balance;
  console.log(doc.balance);
  doc.bill_amount=bill_amount;
   console.log(doc.bill_amount);
  //var docrec = new Object();
  //docrec=$('#form_final_private_id').serializeObject();
// console.log(final_private_details._rev=doc._rev);
 //docrec._id=doc._id;
 //docrec._rev=doc._rev;


  db.put(doc, function callback(error, response){
    //console.log(doc);
    //console.log("id_"+z);
      if (!error) {
        //var table=document.getElementById("example");
        var c = document.getElementById('\"'+"id_"+z+'\"');
        console.log(c);
        document.getElementById('\"'+"id_"+z+'\"').value=doc.paid_amount;
        document.getElementById('\"'+"balance_"+z+'\"').innerHTML=doc.balance;
        console.log("updated");
        return true;
      }else{
        console.log("not updated",error);
        return false;
      }
    });

}

   

});

        //var balance=bill_amount-y;
       // document.getElementById("balance").innerHTML=balance;
       
      //balance= $(this).next();
    //$(document).ready(function(){
    //$("td:nth-child(8)").html("background-color", "yellow");
}

        //console.log(val);
        //return balance;
        //console.log();

/*function myFunction(id,x){
  var value=document.getElementById("paid_amount").value;
  var balance=x-value;
  document.getElementById("balance").innerHTML=balance;

}*/

//function loadReport(){
       

/*function names(data){
    var str1="";
    for( var i=0;i<data.length;i++){
        str1+="<tr><td>"+data[i].doc._id +"</td><td>"+data[i].doc.report_number_final_private_id+
        "</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_request_date_final_private_id+"</td><td>"+data[i].doc.survey_place_final_private_id+"</td></tr>";
    }
   
    document.getElementById("report_history_table").innerHTML=str1;
    console.log(str1);
}*/

