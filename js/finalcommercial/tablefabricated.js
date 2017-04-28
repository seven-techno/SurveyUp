/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function addRowFabricated(tableId) {

    switch (tableId) {

        case 0:

            var tableDiv = document.getElementById('fabricated_first_table');

            var rowCount = tableDiv.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "fabfirst" + rowCount;
            tableDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'ffslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_fab_first_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');
            claimed.className = "part_claimed_fab_first_class";
            claimed.className += " form-control";
            claimed.type = 'number';
            claimed.style.textAlign = "right";
            claimed.min = "0";
            claimed.max = "999999";
            claimed.value = "0";
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var amountAsPerInvoiceCell = document.createElement('div');
            amountAsPerInvoiceCell.className = 'table_cell_class';
            var amountAsPerInvoice = document.createElement('input');
            amountAsPerInvoice.className = 'part_assessed_fab_first_class';
            amountAsPerInvoice.className += ' form-control';
            amountAsPerInvoice.type = 'number';
            amountAsPerInvoice.style.textAlign = "right";
            amountAsPerInvoice.min = "0";
            amountAsPerInvoice.max = "999999";
            amountAsPerInvoice.value = "0";
            amountAsPerInvoiceCell.appendChild(amountAsPerInvoice);
            rowDiv.appendChild(amountAsPerInvoiceCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');            
            natureOfDamage.className = 'nature_of_damage_fab_first_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = "part_material_fab_first_class";
            partSelect.className += " form-control";
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_fab_first_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.className = "deleted_reason_fab_first_class";
            deletedReason.className += " form-control";
            deletedReason.rows = 3;
            deletedReason.cols = 20;
            deletedReasonCell.appendChild(deletedReason);
            rowDiv.appendChild(deletedReasonCell);

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeFabricatedRow(0, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            break;

        case 1:

            var tableDiv = document.getElementById('fabricated_second_table');

            var rowCount = tableDiv.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "fabsecond" + rowCount;
            tableDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'fsslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_fab_second_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');            
            claimed.className = "part_claimed_fab_second_class";
            claimed.className += " form-control";
            claimed.type = 'number';
            claimed.style.textAlign = "right";
            claimed.min = "0";
            claimed.max = "999999";
            claimed.value = "0";
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var amountAsPerInvoiceCell = document.createElement('div');
            amountAsPerInvoiceCell.className = 'table_cell_class';
            var amountAsPerInvoice = document.createElement('input');
            amountAsPerInvoice.className = 'part_assessed_fab_second_class';
            amountAsPerInvoice.className += ' form-control';
            amountAsPerInvoice.type = 'number';
            amountAsPerInvoice.style.textAlign = "right";
            amountAsPerInvoice.min = "0";
            amountAsPerInvoice.max = "999999";
            amountAsPerInvoice.value = "0";
            amountAsPerInvoiceCell.appendChild(amountAsPerInvoice);
            rowDiv.appendChild(amountAsPerInvoiceCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');            
            natureOfDamage.className = 'nature_of_damage_fab_second_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = "part_material_fab_second_class";
            partSelect.className += " form-control";
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_fab_second_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.className = "deleted_reason_fab_second_class";
            deletedReason.className += " form-control";            
            deletedReason.rows = 3;
            deletedReason.cols = 20;
            deletedReasonCell.appendChild(deletedReason);
            rowDiv.appendChild(deletedReasonCell);

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeFabricatedRow(1, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            break;

        case 2:

            var tableDiv = document.getElementById('fabricated_third_table');

            var rowCount = tableDiv.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "fabthird" + rowCount;
            tableDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'ftslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_fab_third_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');            
            claimed.className = "part_claimed_fab_third_class";
            claimed.className += " form-control";
            claimed.type = 'number';
            claimed.style.textAlign = "right";
            claimed.min = "0";
            claimed.max = "999999";
            claimed.value = "0";
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var amountAsPerInvoiceCell = document.createElement('div');
            amountAsPerInvoiceCell.className = 'table_cell_class';
            var amountAsPerInvoice = document.createElement('input');
            amountAsPerInvoice.className = 'part_assessed_fab_third_class';
            amountAsPerInvoice.className += ' form-control';
            amountAsPerInvoice.type = 'number';
            amountAsPerInvoice.style.textAlign = "right";
            amountAsPerInvoice.min = "0";
            amountAsPerInvoice.max = "999999";
            amountAsPerInvoice.value = "0";
            amountAsPerInvoiceCell.appendChild(amountAsPerInvoice);
            rowDiv.appendChild(amountAsPerInvoiceCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_fab_third_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = "part_material_fab_third_class";
            partSelect.className += " form-control";
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_fab_third_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.className = "deleted_reason_fab_third_class";
            deletedReason.className += " form-control";
            deletedReason.rows = 3;
            deletedReason.cols = 20;
            deletedReasonCell.appendChild(deletedReason);
            rowDiv.appendChild(deletedReasonCell);

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeFabricatedRow(2, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            break;

        case 3:

            var tableDiv = document.getElementById('fabricated_fourth_table');

            var rowCount = tableDiv.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "fabfourth" + rowCount;
            tableDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'foslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_fab_fourth_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');            
            claimed.className = "part_claimed_fab_fourth_class";
            claimed.className += " form-control";
            claimed.type = 'number';
            claimed.style.textAlign = "right";
            claimed.min = "0";
            claimed.max = "999999";
            claimed.value = "0";
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var amountAsPerInvoiceCell = document.createElement('div');
            amountAsPerInvoiceCell.className = 'table_cell_class';
            var amountAsPerInvoice = document.createElement('input');
            amountAsPerInvoice.className = 'part_assessed_fab_fourth_class';
            amountAsPerInvoice.className += ' form-control';
            amountAsPerInvoice.type = 'number';
            amountAsPerInvoice.style.textAlign = "right";
            amountAsPerInvoice.min = "0";
            amountAsPerInvoice.max = "999999";
            amountAsPerInvoice.value = "0";
            amountAsPerInvoiceCell.appendChild(amountAsPerInvoice);
            rowDiv.appendChild(amountAsPerInvoiceCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');            
            natureOfDamage.className = 'nature_of_damage_fab_fourth_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = "part_material_fab_fourth_class";
            partSelect.className += " form-control";
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_fab_fourth_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.className = "deleted_reason_fab_fourth_class";
            deletedReason.className += " form-control";
            deletedReason.rows = 3;
            deletedReason.cols = 20;
            deletedReasonCell.appendChild(deletedReason);
            rowDiv.appendChild(deletedReasonCell);

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeFabricatedRow(3, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            break;

        case 4:

            var tableDiv = document.getElementById('fabricated_fifth_table');

            var rowCount = tableDiv.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "fabfifth" + rowCount;
            tableDiv.appendChild(rowDiv);

            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'fislno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_fab_fifth_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');            
            claimed.className = "part_claimed_fab_fifth_class";
            claimed.className += " form-control";
            claimed.type = 'number';
            claimed.style.textAlign = "right";
            claimed.min = "0";
            claimed.max = "999999";
            claimed.value = "0";
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var amountAsPerInvoiceCell = document.createElement('div');
            amountAsPerInvoiceCell.className = 'table_cell_class';
            var amountAsPerInvoice = document.createElement('input');
            amountAsPerInvoice.className = 'part_assessed_fab_fifth_class';
            amountAsPerInvoice.className += ' form-control';
            amountAsPerInvoice.type = 'number';
            amountAsPerInvoice.style.textAlign = "right";
            amountAsPerInvoice.min = "0";
            amountAsPerInvoice.max = "999999";
            amountAsPerInvoice.value = "0";
            amountAsPerInvoiceCell.appendChild(amountAsPerInvoice);
            rowDiv.appendChild(amountAsPerInvoiceCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');            
            natureOfDamage.className = 'nature_of_damage_fab_fifth_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = "part_material_fab_fifth_class";
            partSelect.className += " form-control";
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_fab_fifth_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.className = "deleted_reason_fab_fifth_class";
            deletedReason.className += " form-control";
            deletedReason.rows = 3;
            deletedReason.cols = 20;
            deletedReasonCell.appendChild(deletedReason);
            rowDiv.appendChild(deletedReasonCell);

            var deleteRowCell = document.createElement('div');
            deleteRowCell.className = 'table_cell_class';
            var deleteRow = document.createElement('input');
            deleteRow.className = "btn";
            deleteRow.className += " btn-primary";
            deleteRow.type = 'button';
            deleteRow.value = 'Remove Part';
            deleteRow.onclick = function () {

                removeFabricatedRow(4, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            break;

    }

}

function showFabDeletedReason(tableId, rowId) {

    var deletedReasonHeader = document.getElementById('reason_column_' + tableId);

    deletedReasonHeader.style.display = 'block';

    var deletedReasonCell = document.getElementById('deleted_reason_cell_' + rowId);

    deletedReasonCell.style.display = 'block';

    var deletedReason = document.getElementById('deleted_reason_' + rowId);

    deletedReason.style.display = 'block';

}

function hideFabDeletedReason(tableId, rowId) {

    var deletedCheckbox = document.getElementById('deleted_checkbox_' + rowId);

    var deletedCheckboxClass = document.getElementsByClassName('deleted_checkbox_class_' + tableId);

    var count;

    var allNull;

    if (!deletedCheckbox.checked) {

        var deletedReasoncell = document.getElementById('deleted_reason_cell_' + rowId);

        deletedReasoncell.style.display = 'none';

        var deletedReason = document.getElementById('deleted_reason_' + rowId);

        deletedReason.style.display = 'none';

    }

    for (var i = 0; i < deletedCheckboxClass.length; i++) {

        if (!deletedCheckboxClass[i].checked) {

            count += 1;

        }

    }

    if (deletedCheckboxClass.length === count) {

        allNull = true;

    }

    if (allNull) {

        var deletedReasonHeader = document.getElementById('reason_column_' + tableId);

        deletedReasonHeader.style.display = 'none';

    }

}

function removeFabricatedRow(tableId, rowId) {

    var rowDiv = document.getElementById(rowId);
    rowDiv.remove(rowDiv);

    switch (tableId) {

        case 0:

            var serialNumber = document.getElementsByClassName('ffslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

        case 1:

            var serialNumber = document.getElementsByClassName('fsslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }
            
            break;

        case 2:

            var serialNumber = document.getElementsByClassName('ftslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

        case 3:

            var serialNumber = document.getElementsByClassName('foslno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

        case 4:

            var serialNumber = document.getElementsByClassName('fislno');

            for (var i = 0; i < serialNumber.length; i++) {

                serialNumber[i].innerHTML = i + 1;

            }

            break;

    }

}