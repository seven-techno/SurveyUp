/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function loadBillPrint() {

    InrToWordConverter.Initialize();
    var pageHeaderBill = document.getElementById("page_header_bill_print_id");
    var pageFooterBill = document.getElementById("page_footer_bill_print_id");
    var pageSignatureBill = document.getElementById("page_signature_bill_print_id");
    var db;
    var request = window.indexedDB.open("survey_database", 1);
    request.onerror = function (event) {
        // Do something with request.errorCode!
        console.log("Database error: " + event.target.errorCode);
    };
    request.onsuccess = function (event) {
        // Do something with request.result!
        db = event.target.result;
        var personalTransaction = db.transaction(["personal"], "readonly");
        var personalStore = personalTransaction.objectStore("personal");
        var loadFromPersonalRequest = personalStore.get("1");
        loadFromPersonalRequest.onerror = function (event) {

        };
        loadFromPersonalRequest.onsuccess = function (event) {

            var pAddress = event.target.result.personalAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');

            pageHeaderBill.innerHTML = "<div>" +
                    "<span class='alignheader_class'><b>" + event.target.result.personalName + "</b> <font size='1'>" + event.target.result.personalDesignation + "</font></span><br>" +
                    "<div class='clear_class'></div>" +
                    "<span class='alignheader_class'><font size='1'>Insurance Surveyor & Loss Assessor</font></span><br>" +
                    "<div class='clear_class'></div>" +
                    "<span class='alignheader_class'><font size='2'>" + pAddress + "</font></span><br>" +
                    "<div class='clear_class'>" +
                    "<span>License No.: " + event.target.result.personalLicense + "</span><span class='alignheader_class'><b>Mobile: " + event.target.result.personalMobile + "</b></span><br>" +
                    "<div class='clear_class'>" +
                    "<span>Validity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: " + event.target.result.personalValidity + "<span class='alignheader_class'><b>Email: " + event.target.result.personalEmail + "</b><br>" +
                    "</div>";
            pageFooterBill.innerHTML = "<div>" +
                    "PAN: " + event.target.result.personalPan + "<br>" +
                    "Bank Account Details: " + event.target.result.personalBankName + ", " + event.target.result.personalBankBranch + "<br>" +
                    "Account No.: " + event.target.result.personalAccountNumber + "<br>" +
                    "IFS Code: " + event.target.result.personalIfsCode + "<br>" +
                    "MICR No.: " + event.target.result.personalMicrNumber + "<br>" +
                    "</div>";
            
            pageSignatureBill.innerHTML = "<div>" +
                    "<br><br><br><br>" +
                    "<span class='alignheader_class'><b>" + event.target.result.personalName + "</b> <font size='1'>" + event.target.result.personalDesignation + "</font></span><br>" +
                    "<div class='clear_class'>" +
                    "<span class='alignheader_class'><font size='1'>Insurance Surveyor & Loss Assessor</font></span><br>" +
                "<div class='clear_class'>";

        };
        var reportNo = sessionStorage.getItem('reportKey');
        var singleKey = IDBKeyRange.only(reportNo);

        var motorTransaction = db.transaction(["motor_survey"], "readonly");
        var motorStore = motorTransaction.objectStore("motor_survey").index('reportNumber').openCursor(singleKey);
        motorStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var cAddress = cursor.value.companyAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');
                var insAddress = cursor.value.insuredAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');

                document.getElementById('report_number_bill_print_id').innerHTML = cursor.value.reportNumber;
                document.getElementById('report_date_bill_print_id').innerHTML = cursor.value.reportDate;
                document.getElementById('manager_of_insurance_company_bill_print_id').innerHTML = cursor.value.companyManager;
                document.getElementById('name_of_insurance_company_bill_print_id').innerHTML = cursor.value.companyName;
                document.getElementById('address_of_insurance_company_bill_print_id').innerHTML = cAddress;
                document.getElementById('branch_code_of_insurance_company_bill_print_id').innerHTML = cursor.value.companyCode;
                document.getElementById('name_of_insured_bill_print_id').innerHTML = cursor.value.insuredName;
                document.getElementById('address_of_insured_bill_print_id').innerHTML = insAddress;
                document.getElementById('policy_number_bill_print_id').innerHTML = cursor.value.policyNumber;
                document.getElementById('claim_number_bill_print_id').innerHTML = cursor.value.claimNumber;

            }

        };

        var vehicleTransaction = db.transaction(["vehicle_particulars"], "readonly");
        var vehicleStore = vehicleTransaction.objectStore("vehicle_particulars").index("reportNumber").openCursor(singleKey);
        vehicleStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {
                
                document.getElementById('vehicle_make_and_model_bill_print_id').innerHTML = cursor.value.vehicleMake + " " + cursor.value.vehicleModel;
                document.getElementById('vehicle_registration_number_bill_print_id').innerHTML = cursor.value.vehicleRegistrationNumber;

            }

        };

        var spotBill, finalBill, reinspectionBill, opinionBill,
                checkBill, localExpenseBill, outstationExpenseBill, numberOfPhotosBill,
                ratePerPhotoBill, outstationBill, miscellaneousBill;
        var billTransaction = db.transaction(["bill_details"], 'readonly');
        var billStore = billTransaction.objectStore("bill_details").index("reportNumber").openCursor(singleKey);
        billStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                spotBill = parseFloat(cursor.value.spotOrPreliminarySurvey);
                finalBill = parseFloat(cursor.value.finalSurvey);
                reinspectionBill = parseFloat(cursor.value.reinspection);
                opinionBill = parseFloat(cursor.value.opinion);
                checkBill = parseFloat(cursor.value.billCheck);
                localExpenseBill = parseFloat(cursor.value.travellingExpLocal);
                outstationExpenseBill = parseFloat(cursor.value.travellingExpOutstation);
                numberOfPhotosBill = parseFloat(cursor.value.photoQuantity);
                ratePerPhotoBill = parseFloat(cursor.value.photoRate);
                outstationBill = parseFloat(cursor.value.outstationAllowance);
                miscellaneousBill = parseFloat(cursor.value.postageCharges);
                document.getElementById('spot_survey_bill_print_id').innerHTML = spotBill.toFixed(2);
                document.getElementById('final_survey_bill_print_id').innerHTML = finalBill.toFixed(2);
                document.getElementById('reinspection_bill_print_id').innerHTML = reinspectionBill.toFixed(2);
                document.getElementById('opinion_bill_print_id').innerHTML = opinionBill.toFixed(2);
                document.getElementById('check_bill_print_id').innerHTML = checkBill.toFixed(2);
                document.getElementById('local_expense_bill_print_id').innerHTML = localExpenseBill.toFixed(2);
                document.getElementById('local_location_bill_print_id').innerHTML = cursor.value.placeOfSurveyLocal;
                document.getElementById('local_distance_bill_print_id').innerHTML = cursor.value.distanceTravelledLocal;
                document.getElementById('outstation_expense_bill_print_id').innerHTML = outstationBill.toFixed(2);
                document.getElementById('outstation_location_bill_print_id').innerHTML = cursor.value.placeOfSurveyOutstation;
                document.getElementById('outstation_distance_bill_print_id').innerHTML = cursor.value.distanceTravelledOutstation;
                document.getElementById('number_of_photos_bill_print_id').innerHTML = cursor.value.photoQuantity;
                document.getElementById('rate_per_photo_bill_print_id').innerHTML = ratePerPhotoBill.toFixed(2);
                document.getElementById('outstation_bill_print_id').innerHTML = outstationBill.toFixed(2);
                document.getElementById('miscellaneous_bill_print_id').innerHTML = miscellaneousBill.toFixed(2);

                var photosTotal = numberOfPhotosBill * ratePerPhotoBill;
                var billTotal = spotBill + finalBill + reinspectionBill + opinionBill + checkBill + localExpenseBill + outstationExpenseBill + photosTotal + outstationBill + miscellaneousBill;
                document.getElementById('photos_bill_print_id').innerHTML = photosTotal.toFixed(2);
                document.getElementById('total_bill_print_id').innerHTML = billTotal.toFixed(2);
                document.getElementById('total_bill_in_words_print_id').innerHTML = InrToWordConverter.ConvertToWord(Math.round(billTotal * 100) / 100);

            }

        };

        db.close();

    };

}

window.onload = function () {

    loadBillPrint();

};