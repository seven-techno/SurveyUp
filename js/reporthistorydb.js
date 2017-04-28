//var db= new PouchDB('spotCommercialdb');
 var db=new PouchDB('sevenTech');
//this.db2=new PouchDB('spotcommercialdb');

//reinspection._id= $('#report_number_final_private_id').val();
//spotcommercial._id= $('#report_number_final_private_id').val();
//var db=new PouchDB('reinspection');
 function loadReport(){

       db.allDocs({include_docs:true}, function(err,docs){
        
            //console.log (docs.rows);
            listData(docs.rows);
           // console.log(docs.rows);
        });
       // this.db2.allDocs({include_docs:true}, function(err,docs){
            //console.log (docs.rows);
           // names(docs.rows);
           // console.log(docs.rows);
       // });

}
//<td  width="200">hello world</td></a>


var str="";
function listData(data){
    
    for( var i=0;i<data.length;i++){
      
         
        str+="<tr><td>"+ (i+1)+"</td><td><a href='#' onClick='Edit(\""+data[i].doc._id+"\");' style='text-decoration:none;color:black;'>"+data[i].doc._id+
        "</td></a><td>"+data[i].doc.vehicle_registerd_number_final_private_id+"</td><td>"
        +data[i].doc.survey_request_date_final_private_id+"</td><td>"+data[i].doc.survey_place_final_private_id+"</td></tr>";
        
  }
   
    document.getElementById("report_history_table").innerHTML=str;
    //console.log(str);
    $(document).ready(function() { $('#example').DataTable(); } );
         var table = $('#example').DataTable();

}
function Edit(_id){
    var char=_id.substring(17,34);
  //localStorage.setItem("final_private",_id);
 // window.location("finalprivateupdate.html");
 //$("#listData").change(function() { 
    switch(char)
    {
        case 'FINAL-PRIVATE':
                   window.location.href = 'finalprivateupdate.html?_id=' +_id;
                   break;
        case 'FINAL-COMMERCIAL':
                   window.location.href = 'finalcommercialupdate.html?_id=' +_id;
                   break;
        case 'SPOT-PRIVATE':
                   window.location.href = 'spotsurveyprivateupdate.html?_id=' +_id;
                   break;
        case 'SPOT-COMMERCIAL':
                   window.location.href = 'spotsurveycommercialupdate.html?_id=' +_id;
                   break;
        case 'REINSPECTION':
                   window.location.href = 'reinspectionupdate.html?_id=' +_id;
                   break;
        //default: window.location.href = 'reinspectionupdate.html?_id=' +_id;
                  //break;         
    }
   // window.location.href = 'finalprivateupdate.html?_id=' +_id;
//});
  //console.log("hi");
}
//function loadReport(){
       

/*function names(data){
    var str1="";
    for( var i=1;i<=data.length;i++){
        str1+="<tr><td>"+ i +"</td><td>"+data[i].doc.report_number_final_private_id+
        "</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_request_date_final_private_id+"</td><td>"+data[i].doc.survey_place_final_private_id+"</td></tr>";
    }
   
    document.getElementById("report_history_table").innerHTML=str1;
    console.log(str1);
}

/*function names(data){
    str="";
    for( var i=0;i<data.length;i++){
        str+="<tr><td>"+data[i].doc.report_number_final_private_id+"</td><td>"+data[i].doc.company_code_final_private_id+"</td></tr>";
    }
    document.getElementById("report_history_table").innerHTML=str;
}*/





 /* var db = new PouchDB('spotCommercialdb');
  //var db = new PouchDB('reinspectiondb');

//let options = {
  //      live: true,   
    //    retry: true,  
      //  continuous: true
      //};

//this._syncHandler = this._DB.sync(remoteDB, options);

//this.db2 = new PouchDB('spotPrivatedb');
//this._DB2.sync('localhost:5984/beer', options);
    function loadReport(){
        db.allDocs({include_docs:true}, function(err,docs){
            //console.log (docs.rows);
            names(docs.rows);
        });
}





function names(data){
    var str="";
    for( var i=0;i<data.length;i++){
        str+="<tr><td>"+ data[i].doc.report_number_final_private_id +"</td><td>"+data[i].doc.report_number_final_private_id+
        "</td><td>"+data[i].doc.survey_request_date_final_private_id+"</td><td>"
        +data[i].doc.survey_request_date_final_private_id+"</td><td>"+data[i].doc.survey_place_final_private_id+"</td></tr>";
    }
   
    document.getElementById("report_history_table").innerHTML=str;
}

*/