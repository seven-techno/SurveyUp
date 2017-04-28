/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var vehicleCounter = 0, surveyCounter = 0, partsCounter = 0, commentCounter = 0,counter=0,subcount=0;

function addRow(tableId) {

    switch (tableId) {

        case 0:

            var tableDiv = document.getElementById('vehicleListsTable');
            var rowCount = tableDiv.childElementCount;
            if (rowCount > 5) {

                alert("Five Vehicles Accounted For");
            } else {

                var rowDiv = document.createElement('div');
                rowDiv.className = 'table_row_class';
                rowDiv.id = "v" + vehicleCounter;
                tableDiv.appendChild(rowDiv);
                var slNoCell = document.createElement('div');
                slNoCell.className = 'table_cell_class';
                var slNo = document.createElement('div');
                slNo.className = 'vslno';
                slNo.innerHTML = rowCount;
				slNo.id="vehicle_permitted["+rowCount+"][sl_no]";
                slNoCell.appendChild(slNo);
                rowDiv.appendChild(slNoCell);
                var selectCell = document.createElement('div');
                selectCell.className = 'table_cell_class';
                var select = document.createElement('select');
                select.className = 'license_vehicle_type_class';
                select.className += ' form-control';
				select.name="vehicle_permitted["+rowCount+"][type]";
                select.options.add(new Option("", "Select", true, true));
                select.options.add(new Option("Motor Cycle Without Gear", "Motor Cycle Without Gear", true, true));
                select.options.add(new Option("Motor Cycle With Gear", "Motor Cycle With Gear"));
                select.options.add(new Option("Light Motor Vehicle", "Light Motor Vehicle"));
                select.options.add(new Option("Medium Goods Vehicle", "Medium Goods Vehicle"));
                select.options.add(new Option("Medium Passenger Motor Vehicle", "Medium Passenger Motor Vehicle"));
                select.options.add(new Option("Heavy Goods Vehicle", "Heavy Goods Vehicle"));
                select.options.add(new Option("Heavy Passenger Motor Vehicle", "Heavy Passenger Motor Vehicle"));
                selectCell.appendChild(select);
                rowDiv.appendChild(selectCell);
                var effectiveDateCell = document.createElement('div');
                effectiveDateCell.className = 'table_cell_class';
				
                var effectiveDate = document.createElement('input');
                effectiveDate.className = "license_effective_date_class";
                effectiveDate.className += " form-control";
                effectiveDate.type = "text";
				effectiveDate.name="vehicle_permitted["+rowCount+"][effective_from]";
                effectiveDate.placeholder = "click to select date";
                effectiveDateCell.appendChild(effectiveDate);
                rowDiv.appendChild(effectiveDateCell);
                var validityDateCell = document.createElement('div');
                validityDateCell.className = 'table_cell_class';
                var validityDate = document.createElement('input');
                validityDate.className = "license_validity_date_class";
                validityDate.className += " form-control";
                validityDate.type = "text";
				validityDate.name="vehicle_permitted["+rowCount+"][valid_upto]";
                validityDate.placeholder = "click to select date";
                validityDateCell.appendChild(validityDate);
                rowDiv.appendChild(validityDateCell);
                var badgeNumberCell = document.createElement('div');
                badgeNumberCell.className = 'table_cell_class';
                var badgeNumber = document.createElement('input');
                badgeNumber.className = "license_badge_number_class";
                badgeNumber.className += " form-control";
                badgeNumber.type = 'text';
				badgeNumber.name="vehicle_permitted["+rowCount+"][badge_no]";
                badgeNumberCell.appendChild(badgeNumber);
                rowDiv.appendChild(badgeNumberCell);
                var deleteRowCell = document.createElement('div');
                deleteRowCell.className = 'table_cell_class';
                var deleteRow = document.createElement('input');
                deleteRow.className = "btn";
                deleteRow.className += " btn-primary";
                deleteRow.type = 'button';
                deleteRow.value = 'Remove Vehicle';
                deleteRow.onclick = function () {

                    removeRow(0, rowDiv.id);
                };
                deleteRowCell.appendChild(deleteRow);
                rowDiv.appendChild(deleteRowCell);
                vehicleCounter++;
            }

            break;

        case 1:
            var tableDiv = document.getElementById('surveyDatesTable');

            var rowCount = tableDiv.childElementCount;

            if (rowCount > 3) {

                alert("Three Visits Done");

            } else {

                var rowDiv = document.createElement('div');
                rowDiv.className = 'table_row_class';
                rowDiv.id = "s" + surveyCounter;
                tableDiv.appendChild(rowDiv);

                var slNoCell = document.createElement('div');
                slNoCell.className = 'table_cell_class';
                var slNo = document.createElement('div');
                slNo.className = 'sslno';
				slNo.id="survey_dates["+rowCount+"][sl_no]";
                slNo.innerHTML = rowCount;
                slNoCell.appendChild(slNo);
                rowDiv.appendChild(slNoCell);

                var surveyDateCell = document.createElement('div');
                surveyDateCell.className = 'table_cell_class';
                var surveyDate = document.createElement('input');
                surveyDate.className = "survey_date_class";
                surveyDate.className += " form-control";
                surveyDate.type = "text";
			    surveyDate.name="survey_dates["+rowCount+"][date]";
                surveyDate.placeholder = "click to select date";
                surveyDateCell.appendChild(surveyDate);
                rowDiv.appendChild(surveyDateCell);

                var surveyTimeCell = document.createElement('div');
                surveyTimeCell.className = 'table_cell_class';
                var surveyTime = document.createElement('input');
                surveyTime.className = "survey_time_class";
                surveyTime.className += " form-control";
                surveyTime.type = "time";
				surveyTime.name="survey_dates["+rowCount+"][time]";
                surveyTimeCell.appendChild(surveyTime);
                rowDiv.appendChild(surveyTimeCell);

                var deleteRowCell = document.createElement('div');
                deleteRowCell.className = 'table_cell_class';
                var deleteRow = document.createElement('input');
                deleteRow.className = "btn";
                deleteRow.className += " btn-primary";
                deleteRow.type = 'button';
                deleteRow.value = 'Remove Date';
                deleteRow.onclick = function () {

                    removeRow(1, rowDiv.id);

                };
                deleteRowCell.appendChild(deleteRow);
                rowDiv.appendChild(deleteRowCell);

                surveyCounter++;

            }
            break;

        case 2:

            var tableDiv = document.getElementById('damagedPartsTable');
            var rowCount = tableDiv.childElementCount;
            
            //var key=document.getElementById("button").accessKey;
          
            
             //console.log(key=document.getElementsByClassName("button").accessKey);
             //if(key=='p')
             //{
            
             var mainDiv=document.createElement('div');
             mainDiv.className = 'table_row_class';
             mainDiv.className = 'parentDiv';

             mainDiv.id="m" + partsCounter;
             
             tableDiv.appendChild(mainDiv);
            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class_parent';
           // mainDiv.style.display='width:100%;'
            rowDiv.id = "d" + partsCounter;
            mainDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class new_css';
            var slNo = document.createElement('div');
            slNo.className = 'dslno';
            slNo.innerHTML = rowCount;
            slNo.id="damage_parts["+rowCount+"][0][sl_no]";
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class new_css';
            var partName = document.createElement('input');
            partName.className = 'part_name_class';
            partName.className += " form-control";
            partName.name="damage_parts["+rowCount+"][0][part_name]";
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

//            var quantityClaimedCell = document.createElement('div');
//            quantityClaimedCell.className = 'table_cell_class';
//            var quantityClaimed = document.createElement('input');
//            quantityClaimed.className = 'part_quantity_claimed_class';
//            quantityClaimed.style.textAlign = 'right';
//            quantityClaimed.type = 'number';
//            quantityClaimed.min = 0;
//            quantityClaimed.max = 99;
//            quantityClaimed.value = 1;
//            quantityClaimedCell.appendChild(quantityClaimed);
//            rowDiv.appendChild(quantityClaimedCell);
//
//            var quantityAssessedCell = document.createElement('div');
//            quantityAssessedCell.className = 'table_cell_class';
//            var quantityAssessed = document.createElement('input');
//            quantityAssessed.className = 'part_quantity_assessed_class';
//            quantityAssessed.style.textAlign = 'right';
//            quantityAssessed.type = 'number';
//            quantityAssessed.min = 0;
//            quantityAssessed.max = 99;
//            quantityAssessed.value = 1;
//            quantityAssessedCell.appendChild(quantityAssessed);
//            rowDiv.appendChild(quantityAssessedCell);

//            var claimedCell = document.createElement('div');
//            claimedCell.className = 'table_cell_class';
//             claimedCell.className += ' hidden';
//            var claimed = document.createElement('input');
//            claimed.className = 'part_claimed_class';
//            claimed.className += " form-control";
//            claimed.id = 'claimed' + partsCounter;
//            claimed.style.textAlign = 'right';
//            claimed.type = 'number';
//            claimed.min = 0;
//            claimed.max = 999999;
//            claimed.value = "0";
//            claimed.onblur = function () {
//
//                vatCalculation(claimed.id);
//
//            };
//            claimedCell.appendChild(claimed);
//            rowDiv.appendChild(claimedCell);
//
//            var assessedCell = document.createElement('div');
//            assessedCell.className = 'table_cell_class';
//            assessedCell.className += ' hidden';
//            var assessed = document.createElement('input');
//            assessed.className = 'part_assessed_class';
//            assessed.className += " form-control";
//            assessed.id = 'assessed' + partsCounter;
//            assessed.style.textAlign = 'right';
//            assessed.type = 'number';
//            assessed.min = 0;
//            assessed.max = 999999;
//            assessed.value = "0";
//            assessed.onblur = function () {
//
//                vatCalculation(assessed.id);
//
//            };
//            assessedCell.appendChild(assessed);
//            rowDiv.appendChild(assessedCell);

//            var repairedCell = document.createElement('div');
//            repairedCell.className = 'table_cell_class';
//            var repaired = document.createElement('input');
//            repaired.className = 'part_repaired_class';
//            repaired.style.textAlign = 'right';
//            repaired.type = 'number';
//            repaired.min = 0;
//            repaired.max = 999999;
//            repaired.value = 0;
//            repaired.onblur = function () {
//
//                uberCalculations();
//
//            };
//            repairedCell.appendChild(repaired);
//            rowDiv.appendChild(repairedCell);

             var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class new_css';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.name= "damage_parts["+rowCount+"][0][nature_of_damage]";
            natureOfDamage.rows = 2;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

//            var partSelectCell = document.createElement('div');
//            partSelectCell.className = 'table_cell_class';
//            partSelectCell.className += ' hidden';
//            var partSelect = document.createElement('select');
//            partSelect.className = 'part_material_class';
//            partSelect.className += ' form-control';
//            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
//            partSelect.options.add(new Option("Glass", "Glass"));
//            partSelect.options.add(new Option("Metal", "Metal"));
//            partSelect.options.add(new Option("Plastic", "Plastic"));
//            partSelect.options.add(new Option("Rubber", "Rubber"));
//            partSelect.options.add(new Option("Labour", "Labour"));
//            partSelect.options.add(new Option("Paint", "Paint"));
//            partSelectCell.appendChild(partSelect);
//            rowDiv.appendChild(partSelectCell);
//
//            //show only if commercial
//            var imt23CheckboxCell = document.createElement('div');
//            imt23CheckboxCell.className = 'table_cell_class';
//            imt23CheckboxCell.className += ' imt23';
//            imt23CheckboxCell.className += ' hidden';
//            var imt23Checkbox = document.createElement('input');
//            imt23Checkbox.className = 'imt23_checkbox_class';
//            imt23Checkbox.className += ' form-control';
//            imt23Checkbox.type = 'checkbox';
//            imt23CheckboxCell.appendChild(imt23Checkbox);
//            rowDiv.appendChild(imt23CheckboxCell);

//            var deleteCheckboxCell = document.createElement('div');
//            deleteCheckboxCell.className = 'table_cell_class';
//            var deleteCheckbox = document.createElement('input');
//            deleteCheckbox.className = 'deleted_checkbox_class';
//            deleteCheckbox.type = 'checkbox';
//            deleteCheckbox.onclick = function () {
//
//                if (deleteCheckbox.checked) {
//
//                    showDeletedReason(partsCounter);
//
//                } else {
//
//                    hideDeletedReason(partsCounter);
//
//                }
//
//            };
//            deleteCheckboxCell.appendChild(deleteCheckbox);
//            rowDiv.appendChild(deleteCheckboxCell);

//            var deletedReasonCell = document.createElement('div');
//            deletedReasonCell.className = 'table_cell_class';
//            deletedReasonCell.className += ' deleted_reason_cell_class';
//            deletedReasonCell.className += ' hidden';
//            var deletedReason = document.createElement('textarea');
//            deletedReason.id = 'deleted_reason' + partsCounter;
//            deletedReason.className = 'deleted_reason_class';
//            deletedReason.className += ' form-control';
//            deletedReason.rows = 3;
//            deletedReason.cols = 20;
//            deletedReason.style.display = 'none';
//            deletedReasonCell.style.display = 'none';
//            deletedReasonCell.appendChild(deletedReason);
//            rowDiv.appendChild(deletedReasonCell);

            

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class new_css';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeeRow(2, mainDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            var addRowCell = document.createElement('div');
            addRowCell.className = 'table_cell_class new_css';
            var addRow = document.createElement('input');
            addRow.className = "btn";
            addRow.className += " btn-primary";
            addRow.type = 'button';
            addRow.value = 'Add Part';
            addRow.id='add_part';
            addRow.onclick = function () {
               // var a="";
               
                //console.log(a);
                addSubRow(rowCount);
            };
            addRowCell.appendChild(addRow);
            rowDiv.appendChild(addRowCell);
            partsCounter++;
            subcount++;
            partName.focus();

            break;


    }
}
function removeeRow(tableId,mainId){
    console.log(mainId);
    var rowDiv = document.getElementById(mainId);
rowDiv.remove(rowDiv);

var serialNumber = document.getElementsByClassName('dslno');
var parentDiv = document.getElementsByClassName('parentDiv');
console.log(serialNumber);

console.log(serialNum);

for (var i = 0; i < serialNumber.length; i++) {
    //rowDiv.id="m"+serialNumber[i].innerHTML-1;
    //console.log(rowDiv.id);
     console.log('B4 :' + serialNumber[i].innerHTML);
     var serialNum=document.getElementsByClassName('zslnom'+serialNumber[i].innerHTML);
     for(var j=0;j<serialNum.length;j++){
        serialNum[j].innerHTML = (i+1) + "." + (j+1);
        console.log(serialNum[j].innerHTML );

        }
    parentDiv[i].id="m"+i;
    serialNumber[i].innerHTML = i + 1;
    console.log('Af :' + serialNumber[i].innerHTML);
    //addRow(2);
   // rowDiv[i].onclick=addSubRow(rowDiv.id);  
    //

}   
//subcount--;
partsCounter--;

//total_sub++;
//return  parentDiv[i].id="m"+(i+1);
        //val++;
//mainId=mainId-1;
}
//rowId=rowId-1;
//}

function removeRow(tableId, rowId) {

    var rowDiv = document.getElementById(rowId);
    rowDiv.remove(rowDiv);
   //var subDiv=document.getElementById(tableId);
    switch (tableId) {

        case 0:

            var serialNumber = document.getElementsByClassName('vslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

        case 1:

            var serialNumber = document.getElementsByClassName('sslno');
            //var num=document.getElementsByClassName('zslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }
            break;

        case 2:

            var serialNumber = document.getElementsByClassName('dslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

        case 3:

            var serialNumber = document.getElementsByClassName('cslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

    }

}




function addSubRow(Count) { 

 //var count= $('c').closest('div').attr('id');
 //alert(count);
 

    //var element = document.getElementById('#add_part').parentNode;
   // alert(element.id);
     //var parent_id = $("c").parent().attr('id');
        //var rowDiv = document.getElementById(rowId);
        //rowDiv.addRow(rowDiv);
//
//alert( parent_id);
  //var Count=Count.substring(1,20);
     //Count=parseInt(Count,10);
//console.log(Count);
           //subcount=Count;
            //var rowCount=0;
            //var Count=1;
           // var tableDiv = document.getElementById(rowId);
           Count = Count - 1;
          // console.log(Count);
           console.log("m"+Count);
           //console.log(total_sub);
            var tableDiv = document.getElementById("m"+Count);
            var rowCount = tableDiv.childElementCount;
            Count = Count + 1;
           // console.log(Count);
            
            //var rowCount=1;
            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class ';
            rowDiv.id = "s" + counter;
            tableDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class new_css';
            var slNo = document.createElement('div');
            slNo.className = 'zslno'+"m"+Count;
            slNo.innerHTML = Count+"."+rowCount;
            slNo.id="damage_parts["+Count+"]["+rowCount+"][sl_no]";
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class new_css';
            var partName = document.createElement('input');
            partName.className = 'part_name_class';
            partName.className += " form-control";
            partName.name="damage_parts["+Count+"]["+rowCount+"][part_name]";
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

//            var quantityClaimedCell = document.createElement('div');
//            quantityClaimedCell.className = 'table_cell_class';
//            var quantityClaimed = document.createElement('input');
//            quantityClaimed.className = 'part_quantity_claimed_class';
//            quantityClaimed.style.textAlign = 'right';
//            quantityClaimed.type = 'number';
//            quantityClaimed.min = 0;
//            quantityClaimed.max = 99;
//            quantityClaimed.value = 1;
//            quantityClaimedCell.appendChild(quantityClaimed);
//            rowDiv.appendChild(quantityClaimedCell);
//
//            var quantityAssessedCell = document.createElement('div');
//            quantityAssessedCell.className = 'table_cell_class';
//            var quantityAssessed = document.createElement('input');
//            quantityAssessed.className = 'part_quantity_assessed_class';
//            quantityAssessed.style.textAlign = 'right';
//            quantityAssessed.type = 'number';
//            quantityAssessed.min = 0;
//            quantityAssessed.max = 99;
//            quantityAssessed.value = 1;
//            quantityAssessedCell.appendChild(quantityAssessed);
//            rowDiv.appendChild(quantityAssessedCell);

           

//            var repairedCell = document.createElement('div');
//            repairedCell.className = 'table_cell_class';
//            var repaired = document.createElement('input');
//            repaired.className = 'part_repaired_class';
//            repaired.style.textAlign = 'right';
//            repaired.type = 'number';
//            repaired.min = 0;
//            repaired.max = 999999;
//            repaired.value = 0;
//            repaired.onblur = function () {
//
//                uberCalculations();
//
//            };
//            repairedCell.appendChild(repaired);
//            rowDiv.appendChild(repairedCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class new_css';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.name= "damage_parts["+Count+"]["+rowCount+"][nature_of_damage]";
            natureOfDamage.rows = 2;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            

            //show only if commercial
           /* var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            imt23CheckboxCell.className += ' imt23';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);*/

//            var deleteCheckboxCell = document.createElement('div');
//            deleteCheckboxCell.className = 'table_cell_class';
//            var deleteCheckbox = document.createElement('input');
//            deleteCheckbox.className = 'deleted_checkbox_class';
//            deleteCheckbox.type = 'checkbox';
//            deleteCheckbox.onclick = function () {
//
//                if (deleteCheckbox.checked) {
//
//                    showDeletedReason(partsCounter);
//
//                } else {
//
//                    hideDeletedReason(partsCounter);
//
//                }
//
//            };
//            deleteCheckboxCell.appendChild(deleteCheckbox);
//            rowDiv.appendChild(deleteCheckboxCell);

            

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class new_css';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeRow(2, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            counter++;

            partName.focus();

}
