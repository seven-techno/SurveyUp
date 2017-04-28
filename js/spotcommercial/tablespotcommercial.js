/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var vehicleCounter = 0, surveyCounter = 0, partsCounter = 0, commentCounter = 0;

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
                slNo.name="vehicle_permitted["+rowCount+"][sl_no]";
                slNoCell.appendChild(slNo);
                rowDiv.appendChild(slNoCell);
                var selectCell = document.createElement('div');
                selectCell.className = 'table_cell_class';
                var select = document.createElement('select');
                select.className = 'license_vehicle_type_class';
                select.className += ' form-control';
                select.name="vehicle_permitted["+rowCount+"][type]";
                select.options.add(new Option("Select", "", true, true));
                select.options.add(new Option("Motor Cycle Without Gear", "Motor Cycle Without Gear"));
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
                 effectiveDate.name="vehicle_permitted["+rowCount+"][effective_from]";
                effectiveDate.type = "text";
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
                badgeNumber.name="vehicle_permitted["+rowCount+"][badge_no]";
                badgeNumber.type = 'text';
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
                slNo.innerHTML = rowCount;
                slNo.id="survey_dates["+rowCount+"][sl_no]";
                slNoCell.appendChild(slNo);
                rowDiv.appendChild(slNoCell);

                var surveyDateCell = document.createElement('div');
                surveyDateCell.className = 'table_cell_class';
                var surveyDate = document.createElement('input');
                surveyDate.className = "survey_date_class";
                surveyDate.className += " form-control";
                surveyDate.name="survey_dates["+rowCount+"][date]";
                surveyDate.type = "text";
                surveyDate.placeholder = "click to select date";
                surveyDateCell.appendChild(surveyDate);
                rowDiv.appendChild(surveyDateCell);

                var surveyTimeCell = document.createElement('div');
                surveyTimeCell.className = 'table_cell_class';
                var surveyTime = document.createElement('input');
                surveyTime.className = "survey_time_class";
                surveyTime.className += " form-control";
                surveyTime.name="survey_dates["+rowCount+"][time]";
                surveyTime.type = "time";
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

            var commentTable = document.getElementById('obesrvations_table_final_private_id');
            var rowCount = commentTable.childElementCount + 1;
            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "c" + commentCounter;
            commentTable.appendChild(rowDiv);
            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'cslno';
            slNo.innerHTML = rowCount;
            slNo.name="preliminary["+rowCount+"][sl_no]";
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);
            var commentsCell = document.createElement('div');
            commentsCell.className = 'table_cell_class';
            var comments = document.createElement('textarea');
            comments.id = 'deleted_reason' + partsCounter;
            comments.className = 'form-control';
            comments.className += ' spot_observation_comment_class';
            comments.name="preliminary["+rowCount+"][comments]";
            comments.rows = 3;
            comments.cols = 20;
//            deletedReason.style.display = 'none';
//            deletedReasonCell.style.display = 'none';
            commentsCell.appendChild(comments);
            rowDiv.appendChild(commentsCell);
            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Comment';
            deleteRow.onclick = function () {

                removeRow(2,rowDiv.id);
            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);
            commentCounter++;
            comments.focus();

            break;

        case 3:

            var commentTable = document.getElementById('comments_table_final_private_id');
            var rowCount = commentTable.childElementCount + 1;
            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "c" + commentCounter;
            commentTable.appendChild(rowDiv);
            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'cslno';
            slNo.innerHTML = rowCount;
            slNo.name="surveyor["+rowCount+"][sl_no]";
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);
            var commentsCell = document.createElement('div');
            commentsCell.className = 'table_cell_class';
            var comments = document.createElement('textarea');
            comments.id = 'deleted_reason' + commentCounter;
            comments.className = 'form-control';
            comments.className += ' observation_comment_class';
            comments.rows = 3;
            comments.cols = 20;
             comments.name="surveyor["+rowCount+"][comments]";
//            deletedReason.style.display = 'none';
//            deletedReasonCell.style.display = 'none';
            commentsCell.appendChild(comments);
            rowDiv.appendChild(commentsCell);
            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Comment';
            deleteRow.onclick = function () {

                removeRow(3,rowDiv.id);
            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);
            commentCounter++;
            comments.focus();
  }
}

function removeRow(tableId, rowId) {

    var rowDiv = document.getElementById(rowId);
    rowDiv.remove(rowDiv);

    switch (tableId) {

        case 0:

            var serialNumber = document.getElementsByClassName('vslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

        case 1:

            var serialNumber = document.getElementsByClassName('sslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }
            break;

        case 2:

            var serialNumber = document.getElementsByClassName('cslno');

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

