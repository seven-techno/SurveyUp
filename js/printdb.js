/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

function loadPrint() {
    InrToWordConverter.Initialize();
    //    var pageHeaderBill = document.getElementById("page_header_bill_print_id");
    //    var pageFooterBill = document.getElementById("page_footer_bill_print_id");
    //    var pageSignatureBill = document.getElementById("page_signature_bill_print_id");
    var pageHeader = document.getElementById("page_header_print_id");
    var pageSignature = document.getElementById("page_signature_print_id");
    var pageHeaderAnnexure = document.getElementById("page_header_annexure_print_id");
    var pageHeaderSummary = document.getElementById("page_header_summary_print_id");
    var pageSignatureSummary = document.getElementById("page_signature_summary_print_id");
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

            //            pageHeaderBill.innerHTML = "<div>" +
            //                    "<span class='aligncentre_class'><b>" + event.target.result.personalName + "</b> " + event.target.result.personalDesignation + "</span><br>" +
            //                    "<span class='aligncentre_class'>Insurance Surveyor & Loss Assessor</span><br>" +
            //                    "<span class='aligncentre_class'>" + event.target.result.personalAddress + "</span><br>" +
            //                    "License No.: " + event.target.result.personalLicense + "<b class='aligncentre_class'>Mobile: " + event.target.result.personalMobile + "</b><br>" +
            //                    "Validity: " + event.target.result.personalValidity + "<b class='aligncentre_class'>Email: " + event.target.result.personalEmail + "</b><br>" +
            //                    "</div>";
            //            pageFooterBill.innerHTML = "<div>" +
            //                    "PAN: " + event.target.result.personalPan + "<br>" +
            //                    "Bank Account Details: " + event.target.result.personalBankName + ", " + event.target.result.personalBankBranch + "<br>" +
            //                    "Account No.: " + event.target.result.personalAccountNumber + "<br>" +
            //                    "IFS Code: " + event.target.result.personalIfsCode + "<br>" +
            //                    "MICR No.: " + event.target.result.personalMicrNumber + "<br>" +
            //                    "</div>";
            //            pageSignatureBill.innerHTML = "<div>" +
            //                    "<br><br><br><br>" +
            //                    "<span class='aligncentre_class'><b>" + event.target.result.personalName + "</b> " + event.target.result.personalDesignation + "</span><br>" +
            //                    "<span class='aligncentre_class'>Insurance Surveyor & Loss Assessor</span><br>";

            var pAddress = event.target.result.personalAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');

            pageHeader.innerHTML = "<div>" +
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
            pageHeaderAnnexure.innerHTML = "<div>" +
            "<span class='alignheader_class'><b>" + event.target.result.personalName + "</b> <font size='1'>" + event.target.result.personalDesignation + "</font></span><br>" +
            "<div class='clear_class'>" +
            "<span class='alignheader_class'><font size='1'>Insurance Surveyor & Loss Assessor</font></span><br>" +
            "<div class='clear_class'>";
            pageHeaderSummary.innerHTML = "<div>" +
            "<span class='alignheader_class'><b>" + event.target.result.personalName + "</b> <font size='1'>" + event.target.result.personalDesignation + "</font></span><br>" +
            "<div class='clear_class'>" +
            "<span class='alignheader_class'><font size='1'>Insurance Surveyor & Loss Assessor</font></span><br>" +
            "<div class='clear_class'>";
            pageSignatureSummary.innerHTML = "<div>" +
            "<br><br><br><br>" +
            "<span class='alignheader_class'><b>" + event.target.result.personalName + "</b> <font size='1'>" + event.target.result.personalDesignation + "</font></span><br>" +
            "<div class='clear_class'>" +
            "<span class='alignheader_class'><font size='1'>Insurance Surveyor & Loss Assessor</font></span><br>" +
            "<div class='clear_class'>";
            pageSignature.innerHTML = "<div>" +
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
                var inAddress = cursor.value.insurerAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');
                var insAddress = cursor.value.insuredAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');

                document.getElementById('manager_of_insurance_company_print_id').innerHTML = cursor.value.companyManager;
                document.getElementById('name_of_insurance_company_print_id').innerHTML = cursor.value.companyName;
                document.getElementById('address_of_insurance_company_print_id').innerHTML = cAddress;

                document.getElementById('report_mode_print_id').innerHTML = cursor.value.surveyMode;
                document.getElementById('report_number_print_id').innerHTML = cursor.value.reportNumber;
                document.getElementById('report_date_print_id').innerHTML = cursor.value.reportDate;
                document.getElementById('policy_number_print_id').innerHTML = cursor.value.policyNumber;
                document.getElementById('claim_number_print_id').innerHTML = cursor.value.claimNumber;
                document.getElementById('insurer_company_name_print_id').innerHTML = cursor.value.insurerName;
                document.getElementById('insurer_company_address_print_id').innerHTML = inAddress;
                document.getElementById('insured_name_print_id').innerHTML = cursor.value.insuredName;
                document.getElementById('insured_address_print_id').innerHTML = insAddress;
                document.getElementById('period_of_insurance_from_print_id').innerHTML = cursor.value.insuranceFromDate;
                document.getElementById('period_of_insurance_to_print_id').innerHTML = cursor.value.insuranceToDate;
                document.getElementById('insured_endorsement_print_id').innerHTML = cursor.value.insuredEndorsement;
                document.getElementById('insured_sum_insured_print_id').innerHTML = cursor.value.sumInsured;
                document.getElementById('hpa_hyp_print_id').innerHTML = cursor.value.hpahyp;
                document.getElementById("insurance_company_address_declaration_print_id").innerHTML = cursor.value.companyName + ", " + cursor.value.companyAddress;
                document.getElementById("report_mode_annexure_print_id").innerHTML = cursor.value.surveyMode;
                document.getElementById("report_number_annexure_print_id").innerHTML = cursor.value.reportNumber;

                document.getElementById("report_number_annexure_header_print_id").innerHTML = cursor.value.reportNumber;
                document.getElementById("report_date_annexure_print_id").innerHTML = cursor.value.reportDate;
                document.getElementById("report_number_summary_print_id").innerHTML = cursor.value.reportNumber;
                document.getElementById("report_date_summary_print_id").innerHTML = cursor.value.reportDate;

                var imt23 = document.getElementsByClassName("imt23_class");

                if (cursor.value.formMode === "commercial" || cursor.value.formMode === "spotcommercial") {

                    for (var i = 0; i < imt23.length; i++) {

                        imt23[i].style.display = "block";

                    }

                } else {

                    for (var i = 0; i < imt23.length; i++) {

                        imt23[i].style.display = "none";

                    }

                }

            }

        };
        var rcStatus;
        var vehicleTransaction = db.transaction(["vehicle_particulars"], "readonly");
        var vehicleStore = vehicleTransaction.objectStore("vehicle_particulars").index("reportNumber").openCursor(singleKey);
        vehicleStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                document.getElementById('vehicle_rc_verified_print_id').innerHTML = cursor.value.vehicleRcVerification;
                document.getElementById('vehicle_registration_date_print_id').innerHTML = cursor.value.vehicleRegistrationDate;
                document.getElementById('vehicle_registration_number_print_id').innerHTML = cursor.value.vehicleRegistrationNumber;
                document.getElementById('vehicle_chassis_number_print_id').innerHTML = cursor.value.chassisNumber;
                document.getElementById('vehicle_engine_number_print_id').innerHTML = cursor.value.engineNumber;
                document.getElementById('vehicle_make_print_id').innerHTML = cursor.value.vehicleMake;
                document.getElementById('vehicle_model_print_id').innerHTML = cursor.value.vehicleModel;
                document.getElementById('vehicle_colour_print_id').innerHTML = cursor.value.vehicleColour;
                document.getElementById('vehicle_tax_paid_print_id').innerHTML = cursor.value.roadTax;
                document.getElementById('vehicle_class_print_id').innerHTML = cursor.value.vehicleClass;
                document.getElementById('vehicle_condition_print_id').innerHTML = cursor.value.vehicleCondition;
                document.getElementById('vehicle_odometer_reading_print_id').innerHTML = cursor.value.odometerReading;
                document.getElementById('vehicle_body_print_id').innerHTML = cursor.value.bodyType;
                document.getElementById('vehicle_rc_validity_print_id').innerHTML = cursor.value.rcValidity;
                document.getElementById('vehicle_unladen_weight_print_id').innerHTML = cursor.value.unladenWeight;
                document.getElementById('vehicle_registered_laden_print_id').innerHTML = cursor.value.registeredLadenWeight;
                document.getElementById('vehicle_fitness_certificate_print_id').innerHTML = cursor.value.fitnessCertificate;
                document.getElementById('vehicle_fitness_certificate_validity_print_id').innerHTML = cursor.value.fitnessCertificateValidity;
                document.getElementById('vehicle_seating_capacity_print_id').innerHTML = cursor.value.seatingCapacity;

                if (cursor.value.vehicleRcVerification === "RC not produced for verification") {

                    rcStatus = false;
                } else {

                    rcStatus = true;
                }

                //                checkVerification();

            }

        };
        var permitTransactions = db.transaction(["permit_particulars"], "readonly");
        var permitStore = permitTransactions.objectStore("permit_particulars").index("reportNumber").openCursor(singleKey);
        permitStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                document.getElementById('permit_number_print_id').innerHTML = cursor.value.permitNumber;
                document.getElementById('permit_validity_print_id').innerHTML = cursor.value.permitValidity;
                document.getElementById('permit_type_print_id').innerHTML = cursor.value.permitType;
                document.getElementById('permit_load_passenger_capacity_print_id').innerHTML = cursor.value.permitPassenger;
                document.getElementById('permit_route_print_id').innerHTML = cursor.value.permitRoute;

            }

        };
        var dlStatus;
        var driverTransaction = db.transaction(["driver_particulars"], "readonly");
        var driverStore = driverTransaction.objectStore("driver_particulars").index("reportNumber").openCursor(singleKey);
        driverStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var dAddress = cursor.value.driverAddress.replace(/(?:\r\n|\r|\n)/g, '<br/>');

                licenseVerification = cursor.value.licenseVerification;
                document.getElementById('dl_verified_print_id').innerHTML = cursor.value.licenseVerification;
                document.getElementById('driver_name_print_id').innerHTML = cursor.value.driverName;
                document.getElementById('driver_address_print_id').innerHTML = dAddress;
                document.getElementById('driver_license_number_print_id').innerHTML = cursor.value.licenseNumber;
                document.getElementById('driver_license_date_of_issue_print_id').innerHTML = cursor.value.licenseIssueDate;
                ///vehicle types need to be added
                document.getElementById('driver_license_issuing_authority_print_id').innerHTML = cursor.value.issuingAuthority;
                document.getElementById('driver_license_type_print_id').innerHTML = cursor.value.licenseType;
                document.getElementById('driver_license_endorsement_print_id').innerHTML = cursor.value.licenseEndorsement;
                if (cursor.value.licenseVerification === "DL not produced for verification") {

                    dlStatus = false;
                } else {

                    dlStatus = true;
                }

                //                checkVerification();

            }

        };
        var vehicleTable = document.getElementById("vehicle_table_print_id");
        var vehicleTableTransaction = db.transaction(["vehicles_table"], "readonly");
        var vehicleTableStore = vehicleTableTransaction.objectStore("vehicles_table").index("reportNumber").openCursor(singleKey);
        vehicleTableStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var vehicleTableRowCount = vehicleTable.childElementCount;
                var vehicleRow = document.createElement("div");
                vehicleRow.className = "table_row_class";
                var vehicleSlNoCell = document.createElement('div');
                vehicleSlNoCell.className = 'table_cell_class';
                var vehicleSlNo = document.createElement('div');
                vehicleSlNo.innerHTML = vehicleTableRowCount;
                vehicleSlNoCell.appendChild(vehicleSlNo);
                vehicleRow.appendChild(vehicleSlNoCell);
                var vehicleTypeCell = document.createElement('div');
                vehicleTypeCell.className = 'table_cell_class';
                var vehicleType = document.createElement('div');
                vehicleType.innerHTML = cursor.value.vehicleType;
                vehicleTypeCell.appendChild(vehicleType);
                vehicleRow.appendChild(vehicleTypeCell);
                var licenseFromCell = document.createElement('div');
                licenseFromCell.className = 'table_cell_class';
                var licenseFrom = document.createElement('div');
                licenseFrom.innerHTML = cursor.value.licenseFromDate;
                licenseFromCell.appendChild(licenseFrom);
                vehicleRow.appendChild(licenseFromCell);
                var licenseToCell = document.createElement('div');
                licenseToCell.className = 'table_cell_class';
                var licenseTo = document.createElement('div');
                licenseTo.innerHTML = cursor.value.licenseToDate;
                licenseToCell.appendChild(licenseTo);
                vehicleRow.appendChild(licenseToCell);
                var badgeNumberCell = document.createElement('div');
                badgeNumberCell.className = 'table_cell_class';
                var badgeNumber = document.createElement('div');
                badgeNumber.innerHTML = cursor.value.badgeNumber;
                badgeNumberCell.appendChild(badgeNumber);
                vehicleRow.appendChild(badgeNumberCell);
                vehicleTable.appendChild(vehicleRow);
                cursor.continue();
            }

        };
        var tripTransaction = db.transaction(["trip_particulars"], "readonly");
        var tripStore = tripTransaction.objectStore("trip_particulars").index("reportNumber").openCursor(singleKey);
        tripStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                document.getElementById('nature_of_goods_carried_print_id').innerHTML = cursor.value.natureOfGoods;
                document.getElementById('weight_of_goods_print_id').innerHTML = cursor.value.goodsWeight;
                document.getElementById('passengers_carried_print_id').innerHTML = cursor.value.numberOfPassengers;
                document.getElementById('transported_from_print_id').innerHTML = cursor.value.transportedFrom;
            }


        };
        var accidentTransaction = db.transaction(["accident_particulars"], "readonly");
        var accidentStore = accidentTransaction.objectStore("accident_particulars").index("reportNumber").openCursor(singleKey);
        accidentStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                document.getElementById('date_of_accident_print_id').innerHTML = cursor.value.accidentDate;
                document.getElementById('time_of_accident_print_id').innerHTML = cursor.value.accidentTime + " HRS";
                document.getElementById('place_of_accident_print_id').innerHTML = cursor.value.accidentPlace;
                document.getElementById('cause_of_accident_print_id').innerHTML = cursor.value.accidentCause;
                document.getElementById('details_of_damage_print_id').innerHTML = cursor.value.propertyDamage;
                document.getElementById('details_of_injuries_print_id').innerHTML = cursor.value.injuryDetails;
                document.getElementById('accident_reported_print_id').innerHTML = cursor.value.accidentReported;
                document.getElementById('name_of_police_station_print_id').innerHTML = cursor.value.nameOfPoliceStation;
                document.getElementById('fir_details_print_id').innerHTML = cursor.value.firDetails;
            }

        };
        var surveyTransaction = db.transaction(["survey_details"], "readonly");
        var surveyStore = surveyTransaction.objectStore("survey_details").index("reportNumber").openCursor(singleKey);
        surveyStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                document.getElementById('survey_date_request_print_id').innerHTML = cursor.value.requestDate;
                document.getElementById('place_of_survey_print_id').innerHTML = cursor.value.surveyPlace;
                document.getElementById('place_of_survey_declaration_print_id').innerHTML = cursor.value.surveyPlace;
                document.getElementById('date_of_survey_declaration_print_id').innerHTML = cursor.value.requestDate;
            }

        };
        var surveyTable = document.getElementById("survey_table_print_id");
        var surveyTableTransaction = db.transaction(["survey_table"], "readonly");
        var surveyTableStore = surveyTableTransaction.objectStore("survey_table").index("reportNumber").openCursor(singleKey);
        surveyTableStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var surveyTableRowCount = surveyTable.childElementCount;
                var surveyRow = document.createElement("div");
                //                surveyRow.className = "table_row_class";
                //                var surveySlNoCell = document.createElement('div');
                //                surveySlNoCell.className = 'table_cell_class';
                //                var surveySlNo = document.createElement('div');
                //                surveySlNo.innerHTML = surveyTableRowCount;
                //                surveySlNoCell.appendChild(surveySlNo);
                //                surveyRow.appendChild(surveySlNoCell);
                //                var surveyDateCell = document.createElement('div');
                //                surveyDateCell.className = 'table_cell_class';
                //                var surveyDate = document.createElement('div');
                //                surveyDate.innerHTML = cursor.value.surveyDate;
                //                surveyDateCell.appendChild(surveyDate);
                //                surveyRow.appendChild(surveyDateCell);
                //                var surveyTimeCell = document.createElement('div');
                //                surveyTimeCell.className = 'table_cell_class';
                //                var surveyTime = document.createElement('div');
                //                surveyTime.innerHTML = cursor.value.surveyTime + " HRS";
                //                surveyTimeCell.appendChild(surveyTime);
                //                surveyRow.appendChild(surveyTimeCell);

                surveyRow.innerHTML = "Visit " + surveyTableRowCount + " on " + cursor.value.surveyDate + " @ " + cursor.value.surveyTime + " Hrs";

                surveyTable.appendChild(surveyRow);

                cursor.continue();
            }


        };
        //        function checkVerification() {
        //
        //            var rcDlVerified = document.getElementById('rc_dl_verified_print_id');
        //            var rcVerified = document.getElementById('rc_produced_print_id');
        //            var dlVerified = document.getElementById('dl_produced_print_id');
        //            var rcDlNotVerified = document.getElementById('no_documents_produced_id');
        //            if (rcStatus && dlStatus) {
        //
        //                rcDlVerified.style.display = 'inline';
        //                rcVerified.style.display = 'none';
        //                dlVerified.style.display = 'none';
        //                rcDlNotVerified.style.display = 'none';
        //            } else if (rcStatus && !dlStatus) {
        //
        //                rcDlVerified.style.display = 'none';
        //                rcVerified.style.display = 'inline';
        //                dlVerified.style.display = 'none';
        //                rcDlNotVerified.style.display = 'none';
        //            } else if (!rcStatus && dlStatus) {
        //
        //                rcDlVerified.style.display = 'none';
        //                rcVerified.style.display = 'none';
        //                dlVerified.style.display = 'inline';
        //                rcDlNotVerified.style.display = 'none';
        //            } else if (!rcStatus && !dlStatus) {
        //
        //                rcDlVerified.style.display = 'none';
        //                rcVerified.style.display = 'none';
        //                dlVerified.style.display = 'none';
        //                rcDlNotVerified.style.display = 'inline';
        //            }
        //
        //        }

        var excelFlag, nilFlag, vatFlag, serviceFlag, paintFlag, imt23Flag;
        var flagTransaction = db.transaction("flag_details", "readonly");
        var flagStore = flagTransaction.objectStore("flag_details").index("reportNumber").get(singleKey);
        flagStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                excelFlag = cursor.excelFlag;
                nilFlag = cursor.nilFlag;
                vatFlag = cursor.vatFlag;
                serviceFlag = cursor.serviceFlag;
                paintFlag = cursor.paintFlag;
                imt23Flag = cursor.imt23Flag;
                printCalculations();
            }

        };

        //do for fabricated body
        var firstTable = document.getElementById("fabricated_first_table_print_id");
        var secondTable = document.getElementById("fabricated_second_table_print_id");
        var thirdTable = document.getElementById("fabricated_third_table_print_id");
        var fourthTable = document.getElementById("fabricated_fourth_table_print_id");
        var fifthTable = document.getElementById("fabricated_fifth_table_print_id");

        var fibreTable = document.getElementById("fibre_table_print_id");
        var glassTable = document.getElementById("glass_table_print_id");
        var metalTable = document.getElementById("metal_table_print_id");
        var rubberTable = document.getElementById("rubber_table_print_id");
        var fibreTableRowCount = 0, glassTableRowCount = 0, metalTableRowCount = 0, rubberTableRowCount = 0;
        var metalClaimed = 0, glassClaimed = 0, fibreClaimed = 0, rubberClaimed = 0;
        var metalAssessed = 0, glassAssessed = 0, fibreAssessed = 0, rubberAssessed = 0;

        var fibreTransaction = db.transaction(["damaged_parts"], "readonly");
        var fibreStore = fibreTransaction.objectStore("damaged_parts").index("reportNumber").openCursor(singleKey);
        fibreStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                fibreTableRowCount = fibreTable.childElementCount + 1;

                if (cursor.value.partMaterial === "Fibre") {

                    var fibreRow = document.createElement("div");
                    fibreRow.className = 'table_row_class';
                    var fibreSlNoCell = document.createElement('div');
                    fibreSlNoCell.className = 'table_parts_serial_cell_class';
                    var fibreSlNo = document.createElement('div');
                    fibreSlNo.className = 'fibre_serial';
                    // fibreSlNo.innerHTML = fibreTableRowCount;
                    fibreSlNoCell.appendChild(fibreSlNo);
                    fibreRow.appendChild(fibreSlNoCell);
                    var fibrePartCell = document.createElement('div');
                    fibrePartCell.className = 'table_parts_cell_class';
                    var fibrePart = document.createElement('div');
                    fibrePart.innerHTML = cursor.value.partName;
                    fibrePartCell.appendChild(fibrePart);
                    fibreRow.appendChild(fibrePartCell);
                    var fibreClaim = parseFloat(cursor.value.partClaimed);
                    var fibreAssess = parseFloat(cursor.value.partAssessed);
                    var fibreClaimedCell = document.createElement('div');
                    fibreClaimedCell.className = 'table_parts_amount_cell_class';
                    var fibreClaimedC = document.createElement('div');
                    fibreClaimedC.style.textAlign = "right";
                    fibreClaimedC.innerHTML = fibreClaim.toFixed(2);
                    fibreClaimedCell.appendChild(fibreClaimedC);
                    fibreRow.appendChild(fibreClaimedCell);
                    var fibreAssessedCell = document.createElement('div');
                    fibreAssessedCell.className = 'table_parts_amount_cell_class';
                    var fibreAssessedC = document.createElement('div');
                    fibreAssessedC.style.textAlign = "right";
                    fibreAssessedC.innerHTML = fibreAssess.toFixed(2);
                    fibreAssessedCell.appendChild(fibreAssessedC);
                    fibreRow.appendChild(fibreAssessedCell);

                    if (cursor.value.natureOfDamage !== "") {

                        var fibreNatureCell = document.createElement('div');
                        fibreNatureCell.className = 'table_parts_cell_class';
                        var fibreNature = document.createElement('div');
                        fibreNature.innerHTML = cursor.value.natureOfDamage;
                        fibreNatureCell.appendChild(fibreNature);
                        fibreRow.appendChild(fibreNatureCell);

                    }

                    fibreTable.appendChild(fibreRow);

                    fibreClaimed += fibreClaim;
                    fibreAssessed += fibreAssess;

                }

                cursor.continue();
                printCalculations();

            }

        };

        var glassTransaction = db.transaction(["damaged_parts"], "readonly");
        var glassStore = glassTransaction.objectStore("damaged_parts").index("reportNumber").openCursor(singleKey);
        glassStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                glassTableRowCount = glassTable.childElementCount + 1;

                if (cursor.value.partMaterial === "Glass") {

                    var glassRow = document.createElement("div");
                    glassRow.className = 'table_row_class';
                    var glassSlNoCell = document.createElement('div');
                    glassSlNoCell.className = 'table_parts_serial_cell_class';
                    var glassSlNo = document.createElement('div');
                    glassSlNo.className = 'glass_serial';
                    // glassSlNo.innerHTML = glassTableRowCount;
                    glassSlNoCell.appendChild(glassSlNo);
                    glassRow.appendChild(glassSlNoCell);
                    var glassPartCell = document.createElement('div');
                    glassPartCell.className = 'table_parts_cell_class';
                    var glassPart = document.createElement('div');
                    glassPart.innerHTML = cursor.value.partName;
                    glassPartCell.appendChild(glassPart);
                    glassRow.appendChild(glassPartCell);
                    var glassClaim = parseFloat(cursor.value.partClaimed);
                    var glassAssess = parseFloat(cursor.value.partAssessed);
                    var glassClaimedCell = document.createElement('div');
                    glassClaimedCell.className = 'table_parts_amount_cell_class';
                    var glassClaimedC = document.createElement('div');
                    glassClaimedC.style.textAlign = "right";
                    glassClaimedC.innerHTML = glassClaim.toFixed(2);
                    glassClaimedCell.appendChild(glassClaimedC);
                    glassRow.appendChild(glassClaimedCell);
                    var glassAssessedCell = document.createElement('div');
                    glassAssessedCell.className = 'table_parts_amount_cell_class';
                    var glassAssessedC = document.createElement('div');
                    glassAssessedC.style.textAlign = "right";
                    glassAssessedC.innerHTML = glassAssess.toFixed(2);
                    glassAssessedCell.appendChild(glassAssessedC);
                    glassRow.appendChild(glassAssessedCell);

                    if (cursor.value.natureOfDamage !== "") {

                        var glassNatureCell = document.createElement('div');
                        glassNatureCell.className = 'table_parts_cell_class';
                        var glassNature = document.createElement('div');
                        glassNature.innerHTML = cursor.value.natureOfDamage;
                        glassNatureCell.appendChild(glassNature);
                        glassRow.appendChild(glassNatureCell);

                    }

                    glassTable.appendChild(glassRow);

                    glassClaimed += glassClaim;
                    glassAssessed += glassAssess;

                }

                cursor.continue();
                printCalculations();

            }

        };

        var metalTransaction = db.transaction(["damaged_parts"], "readonly");
        var metalStore = metalTransaction.objectStore("damaged_parts").index("reportNumber").openCursor(singleKey);
        metalStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                metalTableRowCount = metalTable.childElementCount + 1;

                if (cursor.value.partMaterial === "Metal") {

                    var metalRow = document.createElement("div");
                    metalRow.className = 'table_row_class';
                    var metalSlNoCell = document.createElement('div');
                    metalSlNoCell.className = 'table_parts_serial_cell_class';
                    var metalSlNo = document.createElement('div');
                    metalSlNo.className = 'metal_serial'
                    // metalSlNo.innerHTML = metalTableRowCount;
                    metalSlNoCell.appendChild(metalSlNo);
                    metalRow.appendChild(metalSlNoCell);
                    var metalPartCell = document.createElement('div');
                    metalPartCell.className = 'table_parts_cell_class';
                    var metalPart = document.createElement('div');
                    metalPart.innerHTML = cursor.value.partName;
                    metalPartCell.appendChild(metalPart);
                    metalRow.appendChild(metalPartCell);
                    var metalClaim = parseFloat(cursor.value.partClaimed);
                    var metalAssess = parseFloat(cursor.value.partAssessed);
                    var metalClaimedCell = document.createElement('div');
                    metalClaimedCell.className = 'table_parts_amount_cell_class';
                    var metalClaimedC = document.createElement('div');
                    metalClaimedC.style.textAlign = "right";
                    metalClaimedC.innerHTML = metalClaim.toFixed(2);
                    metalClaimedCell.appendChild(metalClaimedC);
                    metalRow.appendChild(metalClaimedCell);
                    var metalAssessedCell = document.createElement('div');
                    metalAssessedCell.className = 'table_parts_amount_cell_class';
                    var metalAssessedC = document.createElement('div');
                    metalAssessedC.style.textAlign = "right";
                    metalAssessedC.innerHTML = metalAssess.toFixed(2);
                    metalAssessedCell.appendChild(metalAssessedC);
                    metalRow.appendChild(metalAssessedCell);

                    if (cursor.value.natureOfDamage !== "") {

                        var metalNatureCell = document.createElement('div');
                        metalNatureCell.className = 'table_parts_cell_class';
                        var metalNature = document.createElement('div');
                        metalNature.innerHTML = cursor.value.natureOfDamage;
                        metalNatureCell.appendChild(metalNature);
                        metalRow.appendChild(metalNatureCell);

                    }

                    metalTable.appendChild(metalRow);

                    metalClaimed += metalClaim;
                    metalAssessed += metalAssess;

                }

                cursor.continue();
                printCalculations();

            }

        };

        var rubberTransaction = db.transaction(["damaged_parts"], "readonly");
        var rubberStore = rubberTransaction.objectStore("damaged_parts").index("reportNumber").openCursor(singleKey);
        rubberStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                rubberTableRowCount = rubberTable.childElementCount + 1;

                if (cursor.value.partMaterial === "Plastic" || cursor.value.partMaterial === "Rubber") {

                    var rubberRow = document.createElement("div");
                    rubberRow.className = 'table_row_class';
                    var rubberSlNoCell = document.createElement('div');
                    rubberSlNoCell.className = 'table_parts_serial_cell_class';
                    var rubberSlNo = document.createElement('div');
                    rubberSlNo.className = 'rubber_serial';
                    // rubberSlNo.innerHTML = rubberTableRowCount;
                    rubberSlNoCell.appendChild(rubberSlNo);
                    rubberRow.appendChild(rubberSlNoCell);
                    var rubberPartCell = document.createElement('div');
                    rubberPartCell.className = 'table_parts_cell_class';
                    var rubberPart = document.createElement('div');
                    rubberPart.innerHTML = cursor.value.partName;
                    rubberPartCell.appendChild(rubberPart);
                    rubberRow.appendChild(rubberPartCell);
                    var rubberClaim = parseFloat(cursor.value.partClaimed);
                    var rubberAssess = parseFloat(cursor.value.partAssessed);
                    var rubberClaimedCell = document.createElement('div');
                    rubberClaimedCell.className = 'table_parts_amount_cell_class';
                    var rubberClaimedC = document.createElement('div');
                    rubberClaimedC.style.textAlign = "right";
                    rubberClaimedC.innerHTML = rubberClaim.toFixed(2);
                    rubberClaimedCell.appendChild(rubberClaimedC);
                    rubberRow.appendChild(rubberClaimedCell);
                    var rubberAssessedCell = document.createElement('div');
                    rubberAssessedCell.className = 'table_parts_amount_cell_class';
                    var rubberAssessedC = document.createElement('div');
                    rubberAssessedC.style.textAlign = "right";
                    rubberAssessedC.innerHTML = rubberAssess.toFixed(2);
                    rubberAssessedCell.appendChild(rubberAssessedC);
                    rubberRow.appendChild(rubberAssessedCell);

                    if (cursor.value.natureOfDamage !== "") {

                        var rubberNatureCell = document.createElement('div');
                        rubberNatureCell.className = 'table_parts_cell_class';
                        var rubberNature = document.createElement('div');
                        rubberNature.innerHTML = cursor.value.natureOfDamage;
                        rubberNatureCell.appendChild(rubberNature);
                        rubberRow.appendChild(rubberNatureCell);

                    }

                    rubberTable.appendChild(rubberRow);

                    rubberClaimed += rubberClaim;
                    rubberAssessed += rubberAssess;

                }

                cursor.continue();
                printCalculations();

            }

        };

        // cursor.continue();
        // printCalculations();

        var deletedTable = document.getElementById("deleted_table_print_id");
        var deletedClaimed = 0, deletedAssessed = 0;
        var deletedTransaction = db.transaction(["deleted_table"], "readonly");
        var deletedStore = deletedTransaction.objectStore("deleted_table").index("reportNumber").openCursor(singleKey);
        deletedStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var deletedTableRowCount = deletedTable.childElementCount + 1;
                var deletedRow = document.createElement("div");
                deletedRow.className = 'table_row_class';
                var deletedSlNoCell = document.createElement('div');
                deletedSlNoCell.className = 'table_parts_serial_cell_class';
                var deletedSlNo = document.createElement('div');
                deletedSlNo.innerHTML = deletedTableRowCount;
                deletedSlNoCell.appendChild(deletedSlNo);
                deletedRow.appendChild(deletedSlNoCell);
                var deletedPartCell = document.createElement('div');
                deletedPartCell.className = 'table_parts_cell_class';
                var deletedPart = document.createElement('div');
                deletedPart.innerHTML = cursor.value.deletedPart;
                deletedPartCell.appendChild(deletedPart);
                deletedRow.appendChild(deletedPartCell);
                var deleteClaim = parseFloat(cursor.value.deletedClaimed);
                var deleteAssess = parseFloat(cursor.value.deletedAssessed);
                var deletedClaimedCell = document.createElement('div');
                deletedClaimedCell.className = 'table_parts_amount_cell_class';
                var deletedClaimedC = document.createElement('div');
                deletedClaimedC.style.textAlign = "right";
                deletedClaimedC.innerHTML = deleteClaim.toFixed(2);
                deletedClaimedCell.appendChild(deletedClaimedC);
                deletedRow.appendChild(deletedClaimedCell);
                var deletedAssessedCell = document.createElement('div');
                deletedAssessedCell.className = 'table_parts_amount_cell_class';
                var deletedAssessedC = document.createElement('div');
                deletedAssessedC.style.textAlign = "right";
                deletedAssessedC.innerHTML = deleteAssess.toFixed(2);
                deletedAssessedCell.appendChild(deletedAssessedC);
                deletedRow.appendChild(deletedAssessedCell);

                if (cursor.value.nature !== "") {

                    var deletedNatureCell = document.createElement('div');
                    deletedNatureCell.className = 'table_parts_cell_class';
                    var deletedNature = document.createElement('div');
                    deletedNature.innerHTML = cursor.value.deletedReason;
                    deletedNatureCell.appendChild(deletedNature);
                    deletedRow.appendChild(deletedNatureCell);

                }


                deletedTable.appendChild(deletedRow);

                deletedClaimed += deleteClaim;
                deletedAssessed += deleteAssess;

                cursor.continue();
                printCalculations();
            }

        };
        var labourTable = document.getElementById("labour_table_print_id");
        var labourClaimed = 0, labourAssessed = 0;

        var labourTransaction = db.transaction(["repair_table"], "readonly");
        var labourStore = labourTransaction.objectStore("repair_table").index("reportNumber").openCursor(singleKey);
        labourStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var labourTableRowCount = labourTable.childElementCount;
                var labourRow = document.createElement("div");
                labourRow.className = 'table_row_class';
                var labourSlNoCell = document.createElement('div');
                labourSlNoCell.className = 'table_parts_serial_cell_class';
                var labourSlNo = document.createElement('div');
                labourSlNo.innerHTML = labourTableRowCount;
                labourSlNoCell.appendChild(labourSlNo);
                labourRow.appendChild(labourSlNoCell);
                var labourPartCell = document.createElement('div');
                labourPartCell.className = 'table_parts_cell_class';
                var labourPart = document.createElement('div');
                labourPart.innerHTML = cursor.value.repairedPart;
                labourPartCell.appendChild(labourPart);
                labourRow.appendChild(labourPartCell);
                var labourClaim = parseFloat(cursor.value.repairedClaimed);
                var labourAssess = parseFloat(cursor.value.repairedAssessed);
                var labourClaimedCell = document.createElement('div');
                labourClaimedCell.className = 'table_parts_amount_cell_class';
                var labourClaimedC = document.createElement('div');
                labourClaimedC.style.textAlign = "right";
                labourClaimedC.innerHTML = labourClaim.toFixed(2);
                labourClaimedCell.appendChild(labourClaimedC);
                labourRow.appendChild(labourClaimedCell);
                var labourAssessedCell = document.createElement('div');
                labourAssessedCell.className = 'table_parts_amount_cell_class';
                var labourAssessedC = document.createElement('div');
                labourAssessedC.style.textAlign = "right";
                labourAssessedC.innerHTML = labourAssess.toFixed(2);
                labourAssessedCell.appendChild(labourAssessedC);
                labourRow.appendChild(labourAssessedCell);

                if (cursor.value.natureOfDamage !== "") {

                    var labourNatureCell = document.createElement('div');
                    labourNatureCell.className = 'table_parts_cell_class';
                    var labourNature = document.createElement('div');
                    labourNature.innerHTML = cursor.value.natureOfDamage;
                    labourNatureCell.appendChild(labourNature);
                    labourRow.appendChild(labourNatureCell);

                }

                labourTable.appendChild(labourRow);

                labourClaimed += labourClaim;
                labourAssessed += labourAssess;

                cursor.continue();
                printCalculations();
            }

        };
        var paintTable = document.getElementById("painting_table_print_id");
        var paintClaimed = 0, paintAssessed = 0;
        var paintingTransaction = db.transaction(["painting_table"], "readonly");
        var paintingStore = paintingTransaction.objectStore("painting_table").index("reportNumber").openCursor(singleKey);
        paintingStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                var paintTableRowCount = paintTable.childElementCount;
                var paintRow = document.createElement("div");
                paintRow.className = 'table_row_class';
                var paintSlNoCell = document.createElement('div');
                paintSlNoCell.className = 'table_parts_serial_cell_class';
                var paintSlNo = document.createElement('div');
                paintSlNo.innerHTML = paintTableRowCount;
                paintSlNoCell.appendChild(paintSlNo);
                paintRow.appendChild(paintSlNoCell);
                var paintPartCell = document.createElement('div');
                paintPartCell.className = 'table_parts_cell_class';
                var paintPart = document.createElement('div');
                paintPart.innerHTML = cursor.value.paintDescription;
                paintPartCell.appendChild(paintPart);
                paintRow.appendChild(paintPartCell);
                var paintClaim = parseFloat(cursor.value.paintClaimed);
                var paintAssess = parseFloat(cursor.value.paintAssessed);
                var paintClaimedCell = document.createElement('div');
                paintClaimedCell.className = 'table_parts_amount_cell_class';
                var paintClaimedC = document.createElement('div');
                paintClaimedC.style.textAlign = "right";
                paintClaimedC.innerHTML = paintClaim.toFixed(2);
                paintClaimedCell.appendChild(paintClaimedC);
                paintRow.appendChild(paintClaimedCell);
                var paintAssessedCell = document.createElement('div');
                paintAssessedCell.className = 'table_parts_amount_cell_class';
                var paintAssessedC = document.createElement('div');
                paintAssessedC.style.textAlign = "right";
                paintAssessedC.innerHTML = paintAssess.toFixed(2);
                paintAssessedCell.appendChild(paintAssessedC);
                paintRow.appendChild(paintAssessedCell);
                paintTable.appendChild(paintRow);
                paintClaimed += paintClaim;
                paintAssessed += paintAssess;
                cursor.continue();
                printCalculations();

            }

        };

        var scheduleMaterial, scheduleLabour;
        var schedulePaintingTransaction = db.transaction(["paint_details"], "readonly");
        var schedulePaintingStore = schedulePaintingTransaction.objectStore("paint_details").index("reportNumber").get(singleKey);
        schedulePaintingStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                scheduleMaterial = parseFloat(cursor.scheduleMaterialPercentage) / 100;
                scheduleLabour = parseFloat(cursor.scheduleLabourPercentage) / 100;

                var material = document.getElementsByClassName("schedule_painting_material_percentage_print_class");
                var labour = document.getElementsByClassName("schedule_painting_labour_percentage_print_class");

                for (var i = 0; i < material.length; i++) {

                    material[i].innerHTML = cursor.scheduleMaterialPercentage;

                }
                for (var i = 0; i < labour.length; i++) {

                    labour[i].innerHTML = cursor.scheduleLabourPercentage;

                }
                printCalculations();
            }

        };

        var imt23PartsClaimed = 0, imt23PartsAssessed = 0, imt23PaintClaimed = 0, imt23PaintAssessed = 0, imt23LabourClaimed = 0, imt23LabourAssessed = 0;
        var imt23PartsTable = document.getElementById("imt23_parts_table_print_id");
        var imt23LabourTable = document.getElementById("imt23_labour_table_print_id");

        var imt23Transaction = db.transaction("imt23_table", "readonly");
        var imt23Store = imt23Transaction.objectStore("imt23_table");
        var imt23Index = imt23Store.index("reportNumber").openCursor(singleKey);
        imt23Index.onsuccess = function (event) {

            var cursor = event.target.result;

            if (cursor) {

                if (cursor.value.partMaterial === "Paint") {

                    switch (paintFlag) {

                        case "regular":

                            var imt23LabourTableRowCount = imt23LabourTable.childElementCount + 1;

                            imt23LabourClaim = parseFloat(cursor.value.partClaimed);
                            imt23LabourAssess = parseFloat(cursor.value.partAssessed);

                            var imt23PaintRow = document.createElement("div");
                            imt23PaintRow.className = 'table_row_class';

                            var imt23PaintSlNoCell = document.createElement('div');
                            imt23PaintSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PaintSlNo = document.createElement('div');
                            imt23PaintSlNo.innerHTML = imt23LabourTableRowCount;
                            imt23PaintSlNoCell.appendChild(imt23PaintSlNo);
                            imt23PaintRow.appendChild(imt23PaintSlNoCell);

                            var imt23PaintPartCell = document.createElement('div');
                            imt23PaintPartCell.className = 'table_parts_cell_class';
                            var imt23PaintPart = document.createElement('div');
                            imt23PaintPart.innerHTML = cursor.value.partName;
                            imt23PaintPartCell.appendChild(imt23PaintPart);
                            imt23PaintRow.appendChild(imt23PaintPartCell);

                            var imt23PaintClaimedCell = document.createElement('div');
                            imt23PaintClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintClaimedC = document.createElement('div');
                            imt23PaintClaimedC.style.textAlign = "right";
                            imt23PaintClaimedC.innerHTML = imt23LabourClaim.toFixed(2);
                            imt23PaintClaimedCell.appendChild(imt23PaintClaimedC);
                            imt23PaintRow.appendChild(imt23PaintClaimedCell);

                            var imt23PaintAssessedCell = document.createElement('div');
                            imt23PaintAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintAssessedC = document.createElement('div');
                            imt23PaintAssessedC.style.textAlign = "right";
                            imt23PaintAssessedC.innerHTML = imt23LabourAssess.toFixed(2);
                            imt23PaintAssessedCell.appendChild(imt23PaintAssessedC);
                            imt23PaintRow.appendChild(imt23PaintAssessedCell);

                            imt23LabourClaimed += imt23LabourClaim;
                            imt23LabourAssessed += imt23LabourAssess;

                            imt23LabourTable.appendChild(imt23PaintRow);

                            break;

                        case "regular_service_tax":

                            var imt23LabourTableRowCount = imt23LabourTable.childElementCount + 1;

                            imt23LabourClaim = parseFloat(cursor.value.partClaimed);
                            imt23LabourAssess = parseFloat(cursor.value.partAssessed);

                            var imt23PaintRow = document.createElement("div");
                            imt23PaintRow.className = 'table_row_class';

                            var imt23PaintSlNoCell = document.createElement('div');
                            imt23PaintSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PaintSlNo = document.createElement('div');
                            imt23PaintSlNo.innerHTML = imt23LabourTableRowCount;
                            imt23PaintSlNoCell.appendChild(imt23PaintSlNo);
                            imt23PaintRow.appendChild(imt23PaintSlNoCell);

                            var imt23PaintPartCell = document.createElement('div');
                            imt23PaintPartCell.className = 'table_parts_cell_class';
                            var imt23PaintPart = document.createElement('div');
                            imt23PaintPart.innerHTML = cursor.value.partName;
                            imt23PaintPartCell.appendChild(imt23PaintPart);
                            imt23PaintRow.appendChild(imt23PaintPartCell);

                            var imt23PaintClaimedCell = document.createElement('div');
                            imt23PaintClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintClaimedC = document.createElement('div');
                            imt23PaintClaimedC.style.textAlign = "right";
                            imt23PaintClaimedC.innerHTML = imt23LabourClaim.toFixed(2);
                            imt23PaintClaimedCell.appendChild(imt23PaintClaimedC);
                            imt23PaintRow.appendChild(imt23PaintClaimedCell);

                            var imt23PaintAssessedCell = document.createElement('div');
                            imt23PaintAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintAssessedC = document.createElement('div');
                            imt23PaintAssessedC.style.textAlign = "right";
                            imt23PaintAssessedC.innerHTML = imt23LabourAssess.toFixed(2);
                            imt23PaintAssessedCell.appendChild(imt23PaintAssessedC);
                            imt23PaintRow.appendChild(imt23PaintAssessedCell);

                            imt23LabourClaimed += imt23LabourClaim;
                            imt23LabourAssessed += imt23LabourAssess;

                            imt23LabourTable.appendChild(imt23PaintRow);

                            break;

                        case "75_25":

                            var imt23PaintClaim = parseFloat(cursor.value.partClaimed);
                            var imt23PaintAssess = parseFloat(cursor.value.partAssessed);

                            var imt237525PartClaim = imt23PaintClaim * 0.25;
                            var imt237525PartAssess = imt23PaintAssess * 0.25;
                            var imt237525LabourClaim = imt23PaintClaim * 0.75;
                            var imt237525LabourAssess = imt23PaintAssess * 0.75;

                            var imt23PartsTableRowCount = imt23PartsTable.childElementCount + 1;
                            var imt23PartsRow = document.createElement("div");
                            imt23PartsRow.className = 'table_row_class';

                            var imt23PartsSlNoCell = document.createElement('div');
                            imt23PartsSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PartsSlNo = document.createElement('div');
                            imt23PartsSlNo.innerHTML = imt23PartsTableRowCount;
                            imt23PartsSlNoCell.appendChild(imt23PartsSlNo);
                            imt23PartsRow.appendChild(imt23PartsSlNoCell);

                            var imt23PartsPartCell = document.createElement('div');
                            imt23PartsPartCell.className = 'table_parts_cell_class';
                            var imt23PartsPart = document.createElement('div');
                            imt23PartsPart.innerHTML = "25% of " + cursor.value.partName;
                            imt23PartsPartCell.appendChild(imt23PartsPart);
                            imt23PartsRow.appendChild(imt23PartsPartCell);

                            //                            var imt23PartsClaim = parseFloat(cursor.value.partClaimed);
                            //                            var imt23PartsAssess = parseFloat(cursor.value.partAssessed);

                            var imt23PartsClaimedCell = document.createElement('div');
                            imt23PartsClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PartsClaimedC = document.createElement('div');
                            imt23PartsClaimedC.style.textAlign = "right";
                            imt23PartsClaimedC.innerHTML = imt237525PartClaim.toFixed(2);
                            imt23PartsClaimedCell.appendChild(imt23PartsClaimedC);
                            imt23PartsRow.appendChild(imt23PartsClaimedCell);

                            var imt23PartsAssessedCell = document.createElement('div');
                            imt23PartsAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PartsAssessedC = document.createElement('div');
                            imt23PartsAssessedC.style.textAlign = "right";
                            imt23PartsAssessedC.innerHTML = imt237525PartAssess.toFixed(2);
                            imt23PartsAssessedCell.appendChild(imt23PartsAssessedC);
                            imt23PartsRow.appendChild(imt23PartsAssessedCell);

                            if (cursor.value.natureOfDamage !== "") {

                                var imt23PartsNatureCell = document.createElement('div');
                                imt23PartsNatureCell.className = 'table_parts_cell_class';
                                var imt23PartsNature = document.createElement('div');
                                imt23PartsNature.innerHTML = cursor.value.natureOfDamage;
                                imt23PartsNatureCell.appendChild(imt23PartsNature);
                                imt23PartsRow.appendChild(imt23PartsNatureCell);

                            }


                            imt23PartsTable.appendChild(imt23PartsRow);

                            imt23PaintClaimed += imt237525PartClaim;
                            imt23PaintAssessed += imt237525PartAssess;

                            var imt23LabourTableRowCount = imt23LabourTable.childElementCount + 1;

                            var imt23PaintRow = document.createElement("div");
                            imt23PaintRow.className = 'table_row_class';

                            var imt23PaintSlNoCell = document.createElement('div');
                            imt23PaintSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PaintSlNo = document.createElement('div');
                            imt23PaintSlNo.innerHTML = imt23LabourTableRowCount;
                            imt23PaintSlNoCell.appendChild(imt23PaintSlNo);
                            imt23PaintRow.appendChild(imt23PaintSlNoCell);

                            var imt23PaintPartCell = document.createElement('div');
                            imt23PaintPartCell.className = 'table_parts_cell_class';
                            var imt23PaintPart = document.createElement('div');
                            imt23PaintPart.innerHTML = "75% of " + cursor.value.partName;
                            imt23PaintPartCell.appendChild(imt23PaintPart);
                            imt23PaintRow.appendChild(imt23PaintPartCell);

                            var imt23PaintClaimedCell = document.createElement('div');
                            imt23PaintClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintClaimedC = document.createElement('div');
                            imt23PaintClaimedC.style.textAlign = "right";
                            imt23PaintClaimedC.innerHTML = imt237525LabourClaim.toFixed(2);
                            imt23PaintClaimedCell.appendChild(imt23PaintClaimedC);
                            imt23PaintRow.appendChild(imt23PaintClaimedCell);

                            var imt23PaintAssessedCell = document.createElement('div');
                            imt23PaintAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintAssessedC = document.createElement('div');
                            imt23PaintAssessedC.style.textAlign = "right";
                            imt23PaintAssessedC.innerHTML = imt237525LabourAssess.toFixed(2);
                            imt23PaintAssessedCell.appendChild(imt23PaintAssessedC);
                            imt23PaintRow.appendChild(imt23PaintAssessedCell);

                            imt23LabourClaimed += imt237525LabourClaim;
                            imt23LabourAssessed += imt237525LabourAssess;

                            imt23LabourTable.appendChild(imt23PaintRow);

                            break;

                        case "75_25_service_tax":

                            var imt23PaintClaim = parseFloat(cursor.value.partClaimed);
                            var imt23PaintAssess = parseFloat(cursor.value.partAssessed);

                            var imt237525PartClaim = imt23PaintClaim * 0.25;
                            var imt237525PartAssess = imt23PaintAssess * 0.25;
                            var imt237525LabourClaim = imt23PaintClaim * 0.75;
                            var imt237525LabourAssess = imt23PaintAssess * 0.75;

                            var imt23PartsTableRowCount = imt23PartsTable.childElementCount + 1;
                            var imt23PartsRow = document.createElement("div");
                            imt23PartsRow.className = 'table_row_class';

                            var imt23PartsSlNoCell = document.createElement('div');
                            imt23PartsSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PartsSlNo = document.createElement('div');
                            imt23PartsSlNo.innerHTML = imt23PartsTableRowCount;
                            imt23PartsSlNoCell.appendChild(imt23PartsSlNo);
                            imt23PartsRow.appendChild(imt23PartsSlNoCell);

                            var imt23PartsPartCell = document.createElement('div');
                            imt23PartsPartCell.className = 'table_parts_cell_class';
                            var imt23PartsPart = document.createElement('div');
                            imt23PartsPart.innerHTML = "25% of " + cursor.value.partName;
                            imt23PartsPartCell.appendChild(imt23PartsPart);
                            imt23PartsRow.appendChild(imt23PartsPartCell);

                            //                            var imt23PartsClaim = parseFloat(cursor.value.partClaimed);
                            //                            var imt23PartsAssess = parseFloat(cursor.value.partAssessed);

                            var imt23PartsClaimedCell = document.createElement('div');
                            imt23PartsClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PartsClaimedC = document.createElement('div');
                            imt23PartsClaimedC.style.textAlign = "right";
                            imt23PartsClaimedC.innerHTML = imt237525PartClaim.toFixed(2);
                            imt23PartsClaimedCell.appendChild(imt23PartsClaimedC);
                            imt23PartsRow.appendChild(imt23PartsClaimedCell);

                            var imt23PartsAssessedCell = document.createElement('div');
                            imt23PartsAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PartsAssessedC = document.createElement('div');
                            imt23PartsAssessedC.style.textAlign = "right";
                            imt23PartsAssessedC.innerHTML = imt237525PartAssess.toFixed(2);
                            imt23PartsAssessedCell.appendChild(imt23PartsAssessedC);
                            imt23PartsRow.appendChild(imt23PartsAssessedCell);

                            if (cursor.value.natureOfDamage !== "") {

                                var imt23PartsNatureCell = document.createElement('div');
                                imt23PartsNatureCell.className = 'table_parts_cell_class';
                                var imt23PartsNature = document.createElement('div');
                                imt23PartsNature.innerHTML = cursor.value.natureOfDamage;
                                imt23PartsNatureCell.appendChild(imt23PartsNature);
                                imt23PartsRow.appendChild(imt23PartsNatureCell);

                            }

                            imt23PartsTable.appendChild(imt23PartsRow);

                            imt23PaintClaimed += imt237525PartClaim;
                            imt23PaintAssessed += imt237525PartAssess;

                            var imt23LabourTableRowCount = imt23LabourTable.childElementCount + 1;

                            var imt23PaintRow = document.createElement("div");
                            imt23PaintRow.className = 'table_row_class';

                            var imt23PaintSlNoCell = document.createElement('div');
                            imt23PaintSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PaintSlNo = document.createElement('div');
                            imt23PaintSlNo.innerHTML = imt23LabourTableRowCount;
                            imt23PaintSlNoCell.appendChild(imt23PaintSlNo);
                            imt23PaintRow.appendChild(imt23PaintSlNoCell);

                            var imt23PaintPartCell = document.createElement('div');
                            imt23PaintPartCell.className = 'table_parts_cell_class';
                            var imt23PaintPart = document.createElement('div');
                            imt23PaintPart.innerHTML = "75% of " + cursor.value.partName;
                            imt23PaintPartCell.appendChild(imt23PaintPart);
                            imt23PaintRow.appendChild(imt23PaintPartCell);

                            var imt23PaintClaimedCell = document.createElement('div');
                            imt23PaintClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintClaimedC = document.createElement('div');
                            imt23PaintClaimedC.style.textAlign = "right";
                            imt23PaintClaimedC.innerHTML = imt237525LabourClaim.toFixed(2);
                            imt23PaintClaimedCell.appendChild(imt23PaintClaimedC);
                            imt23PaintRow.appendChild(imt23PaintClaimedCell);

                            var imt23PaintAssessedCell = document.createElement('div');
                            imt23PaintAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintAssessedC = document.createElement('div');
                            imt23PaintAssessedC.style.textAlign = "right";
                            imt23PaintAssessedC.innerHTML = imt237525LabourAssess.toFixed(2);
                            imt23PaintAssessedCell.appendChild(imt23PaintAssessedC);
                            imt23PaintRow.appendChild(imt23PaintAssessedCell);

                            imt23LabourClaimed += imt237525LabourClaim;
                            imt23LabourAssessed += imt237525LabourAssess;

                            imt23LabourTable.appendChild(imt23PaintRow);

                            break;

                        case "schedule":

                            var imt23PaintClaim = parseFloat(cursor.value.partClaimed);
                            var imt23PaintAssess = parseFloat(cursor.value.partAssessed);

                            var imt23SchedulePartClaim = imt23PaintClaim * scheduleMaterial;
                            var imt23SchedulePartAssess = imt23PaintAssess * scheduleMaterial;
                            var imt23ScheduleLabourClaim = imt23PaintClaim * scheduleLabour;
                            var imt23ScheduleLabourAssess = imt23PaintAssess * scheduleLabour;

                            var imt23PartsTableRowCount = imt23PartsTable.childElementCount + 1;
                            var imt23PartsRow = document.createElement("div");
                            imt23PartsRow.className = 'table_row_class';

                            var imt23PartsSlNoCell = document.createElement('div');
                            imt23PartsSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PartsSlNo = document.createElement('div');
                            imt23PartsSlNo.innerHTML = imt23PartsTableRowCount;
                            imt23PartsSlNoCell.appendChild(imt23PartsSlNo);
                            imt23PartsRow.appendChild(imt23PartsSlNoCell);

                            var imt23PartsPartCell = document.createElement('div');
                            imt23PartsPartCell.className = 'table_parts_cell_class';
                            var imt23PartsPart = document.createElement('div');
                            imt23PartsPart.innerHTML = (scheduleMaterial * 100) + "% of " + cursor.value.partName;
                            imt23PartsPartCell.appendChild(imt23PartsPart);
                            imt23PartsRow.appendChild(imt23PartsPartCell);

                            //                            var imt23PartsClaim = parseFloat(cursor.value.partClaimed);
                            //                            var imt23PartsAssess = parseFloat(cursor.value.partAssessed);

                            var imt23PartsClaimedCell = document.createElement('div');
                            imt23PartsClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PartsClaimedC = document.createElement('div');
                            imt23PartsClaimedC.style.textAlign = "right";
                            imt23PartsClaimedC.innerHTML = imt23SchedulePartClaim.toFixed(2);
                            imt23PartsClaimedCell.appendChild(imt23PartsClaimedC);
                            imt23PartsRow.appendChild(imt23PartsClaimedCell);

                            var imt23PartsAssessedCell = document.createElement('div');
                            imt23PartsAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PartsAssessedC = document.createElement('div');
                            imt23PartsAssessedC.style.textAlign = "right";
                            imt23PartsAssessedC.innerHTML = imt23SchedulePartAssess.toFixed(2);
                            imt23PartsAssessedCell.appendChild(imt23PartsAssessedC);
                            imt23PartsRow.appendChild(imt23PartsAssessedCell);

                            if (cursor.value.natureOfDamage !== "") {

                                var imt23PartsNatureCell = document.createElement('div');
                                imt23PartsNatureCell.className = 'table_parts_cell_class';
                                var imt23PartsNature = document.createElement('div');
                                imt23PartsNature.innerHTML = cursor.value.natureOfDamage;
                                imt23PartsNatureCell.appendChild(imt23PartsNature);
                                imt23PartsRow.appendChild(imt23PartsNatureCell);

                            }

                            imt23PartsTable.appendChild(imt23PartsRow);

                            imt23PaintClaimed += imt23SchedulePartClaim;
                            imt23PaintAssessed += imt23SchedulePartAssess;

                            var imt23LabourTableRowCount = imt23LabourTable.childElementCount + 1;

                            var imt23PaintRow = document.createElement("div");
                            imt23PaintRow.className = 'table_row_class';

                            var imt23PaintSlNoCell = document.createElement('div');
                            imt23PaintSlNoCell.className = 'table_parts_serial_cell_class';
                            var imt23PaintSlNo = document.createElement('div');
                            imt23PaintSlNo.innerHTML = imt23LabourTableRowCount;
                            imt23PaintSlNoCell.appendChild(imt23PaintSlNo);
                            imt23PaintRow.appendChild(imt23PaintSlNoCell);

                            var imt23PaintPartCell = document.createElement('div');
                            imt23PaintPartCell.className = 'table_parts_cell_class';
                            var imt23PaintPart = document.createElement('div');
                            imt23PaintPart.innerHTML = (scheduleLabour * 100) + "% of " + cursor.value.partName;
                            imt23PaintPartCell.appendChild(imt23PaintPart);
                            imt23PaintRow.appendChild(imt23PaintPartCell);

                            var imt23PaintClaimedCell = document.createElement('div');
                            imt23PaintClaimedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintClaimedC = document.createElement('div');
                            imt23PaintClaimedC.style.textAlign = "right";
                            imt23PaintClaimedC.innerHTML = imt23ScheduleLabourClaim.toFixed(2);
                            imt23PaintClaimedCell.appendChild(imt23PaintClaimedC);
                            imt23PaintRow.appendChild(imt23PaintClaimedCell);

                            var imt23PaintAssessedCell = document.createElement('div');
                            imt23PaintAssessedCell.className = 'table_parts_amount_cell_class';
                            var imt23PaintAssessedC = document.createElement('div');
                            imt23PaintAssessedC.style.textAlign = "right";
                            imt23PaintAssessedC.innerHTML = imt23ScheduleLabourAssess.toFixed(2);
                            imt23PaintAssessedCell.appendChild(imt23PaintAssessedC);
                            imt23PaintRow.appendChild(imt23PaintAssessedCell);

                            imt23LabourTable.appendChild(imt23PaintRow);

                            imt23LabourClaimed += imt23ScheduleLabourClaim;
                            imt23LabourAssessed += imt23ScheduleLabourAssess;

                            break;

                    }

                } else if (cursor.value.partMaterial === "Labour") {

                    var imt23LabourTableRowCount = imt23LabourTable.childElementCount + 1;
                    var imt23LabourRow = document.createElement("div");
                    imt23LabourRow.className = 'table_row_class';

                    var imt23LabourSlNoCell = document.createElement('div');
                    imt23LabourSlNoCell.className = 'table_parts_serial_cell_class';
                    var imt23LabourSlNo = document.createElement('div');
                    imt23LabourSlNo.innerHTML = imt23LabourTableRowCount;
                    imt23LabourSlNoCell.appendChild(imt23LabourSlNo);
                    imt23LabourRow.appendChild(imt23LabourSlNoCell);

                    var imt23LabourPartCell = document.createElement('div');
                    imt23LabourPartCell.className = 'table_parts_cell_class';
                    var imt23LabourPart = document.createElement('div');
                    imt23LabourPart.innerHTML = cursor.value.partName;
                    imt23LabourPartCell.appendChild(imt23LabourPart);
                    imt23LabourRow.appendChild(imt23LabourPartCell);

                    var imt23LabourClaim = parseFloat(cursor.value.partClaimed);
                    var imt23LabourAssess = parseFloat(cursor.value.partAssessed);

                    var imt23LabourClaimedCell = document.createElement('div');
                    imt23LabourClaimedCell.className = 'table_parts_amount_cell_class';
                    var imt23LabourClaimedC = document.createElement('div');
                    imt23LabourClaimedC.style.textAlign = "right";
                    imt23LabourClaimedC.innerHTML = imt23LabourClaim.toFixed(2);
                    imt23LabourClaimedCell.appendChild(imt23LabourClaimedC);
                    imt23LabourRow.appendChild(imt23LabourClaimedCell);

                    var imt23LabourAssessedCell = document.createElement('div');
                    imt23LabourAssessedCell.className = 'table_parts_amount_cell_class';
                    var imt23LabourAssessedC = document.createElement('div');
                    imt23LabourAssessedC.style.textAlign = "right";
                    imt23LabourAssessedC.innerHTML = imt23LabourAssess.toFixed(2);
                    imt23LabourAssessedCell.appendChild(imt23LabourAssessedC);
                    imt23LabourRow.appendChild(imt23LabourAssessedCell);

                    if (cursor.value.natureOfDamage !== "") {

                        var imt23LabourNatureCell = document.createElement('div');
                        imt23LabourNatureCell.className = 'table_parts_cell_class';
                        var imt23LabourNature = document.createElement('div');
                        imt23LabourNature.innerHTML = cursor.value.natureOfDamage;
                        imt23LabourNatureCell.appendChild(imt23LabourNature);
                        imt23LabourRow.appendChild(imt23LabourNatureCell);

                    }


                    imt23LabourTable.appendChild(imt23LabourRow);

                    imt23LabourClaimed += imt23LabourClaim;
                    imt23LabourAssessed += imt23LabourAssess;

                } else {

                    var imt23PartsTableRowCount = imt23PartsTable.childElementCount + 1;
                    var imt23PartsRow = document.createElement("div");
                    imt23PartsRow.className = 'table_row_class';

                    var imt23PartsSlNoCell = document.createElement('div');
                    imt23PartsSlNoCell.className = 'table_parts_serial_cell_class';
                    var imt23PartsSlNo = document.createElement('div');
                    imt23PartsSlNo.innerHTML = imt23PartsTableRowCount;
                    imt23PartsSlNoCell.appendChild(imt23PartsSlNo);
                    imt23PartsRow.appendChild(imt23PartsSlNoCell);

                    var imt23PartsPartCell = document.createElement('div');
                    imt23PartsPartCell.className = 'table_parts_cell_class';
                    var imt23PartsPart = document.createElement('div');
                    imt23PartsPart.innerHTML = cursor.value.partName;
                    imt23PartsPartCell.appendChild(imt23PartsPart);
                    imt23PartsRow.appendChild(imt23PartsPartCell);

                    var imt23PartsClaim = parseFloat(cursor.value.partClaimed);
                    var imt23PartsAssess = parseFloat(cursor.value.partAssessed);

                    var imt23PartsClaimedCell = document.createElement('div');
                    imt23PartsClaimedCell.className = 'table_parts_amount_cell_class';
                    var imt23PartsClaimedC = document.createElement('div');
                    imt23PartsClaimedC.style.textAlign = "right";
                    imt23PartsClaimedC.innerHTML = imt23PartsClaim.toFixed(2);
                    imt23PartsClaimedCell.appendChild(imt23PartsClaimedC);
                    imt23PartsRow.appendChild(imt23PartsClaimedCell);

                    var imt23PartsAssessedCell = document.createElement('div');
                    imt23PartsAssessedCell.className = 'table_parts_amount_cell_class';
                    var imt23PartsAssessedC = document.createElement('div');
                    imt23PartsAssessedC.style.textAlign = "right";
                    imt23PartsAssessedC.innerHTML = imt23PartsAssess.toFixed(2);
                    imt23PartsAssessedCell.appendChild(imt23PartsAssessedC);
                    imt23PartsRow.appendChild(imt23PartsAssessedCell);

                    if (cursor.value.natureOfDamage !== "") {

                        var imt23PartsNatureCell = document.createElement('div');
                        imt23PartsNatureCell.className = 'table_parts_cell_class';
                        var imt23PartsNature = document.createElement('div');
                        imt23PartsNature.innerHTML = cursor.value.natureOfDamage;
                        imt23PartsNatureCell.appendChild(imt23PartsNature);
                        imt23PartsRow.appendChild(imt23PartsNatureCell);

                    }


                    imt23PartsTable.appendChild(imt23PartsRow);

                    imt23PartsClaimed += imt23PartsClaim;
                    imt23PartsAssessed += imt23PartsAssess;

                }

                cursor.continue();
                printCalculations();
            }

        };

        var labourClaimedSummary = 0, partsClaimedSummary = 0, spotPhotosClaimedSummary = 0, spotPhotosAssessedSummary = 0,
        spotRepairClaimedSummary = 0, spotRepairAssessedSummary = 0,
        metalPercentageSummary = 0, compulsorySummary = 0, imposedSummary = 0,
        voluntarySummary = 0, salvageSummary = 0;
        var summaryTransaction = db.transaction(["summary_assessment"], "readonly");
        var summaryStore = summaryTransaction.objectStore("summary_assessment").index("reportNumber").openCursor(singleKey);
        summaryStore.onsuccess = function (event) {

            var cursor = event.target.result;
            if (cursor) {

                labourClaimedSummary = parseFloat(cursor.value.labourClaimed);
                partsClaimedSummary = parseFloat(cursor.value.partsClaimed);
                spotPhotosClaimedSummary = parseFloat(cursor.value.photosClaimed);
                spotPhotosAssessedSummary = parseFloat(cursor.value.photosAssessed);
                spotRepairClaimedSummary = parseFloat(cursor.value.spotRepairClaimed);
                spotRepairAssessedSummary = parseFloat(cursor.value.spotRepairAssessed);
                metalPercentageSummary = parseFloat(cursor.value.metalDepreciationPercentage) / 100;
                compulsorySummary = parseFloat(cursor.value.compulsoryExcess);
                imposedSummary = parseFloat(cursor.value.imposedExcess);
                voluntarySummary = parseFloat(cursor.value.voluntaryExcess);
                salvageSummary = parseFloat(cursor.value.salvageValue);
                document.getElementById('labour_charges_claimed_print_id').innerHTML = labourClaimedSummary.toFixed(2);
                document.getElementById('recommended_parts_claimed_print_id').innerHTML = partsClaimedSummary.toFixed(2);
                document.getElementById('spot_photo_claimed_print_id').innerHTML = spotPhotosClaimedSummary.toFixed(2);
                document.getElementById('spot_photo_assessed_print_id').innerHTML = spotPhotosAssessedSummary.toFixed(2);
                document.getElementById('spot_repair_claimed_print_id').innerHTML = spotRepairClaimedSummary.toFixed(2);
                document.getElementById('spot_repair_assessed_print_id').innerHTML = spotRepairAssessedSummary.toFixed(2);
                document.getElementById('metal_percentage_summary_print_id').innerHTML = cursor.value.metalDepreciationPercentage;
                document.getElementById('compulsory_print_id').innerHTML = compulsorySummary.toFixed(2);
                document.getElementById('imposed_print_id').innerHTML = imposedSummary.toFixed(2);
                document.getElementById('voluntary_print_id').innerHTML = voluntarySummary.toFixed(2);
                document.getElementById('salvage_value_print_id').innerHTML = salvageSummary.toFixed(2);
                printCalculations();
            }

        };

        var commentCounter = 1;
        var commentSection = document.getElementById("surveyor_comments_print_id");
        var transactionComment = db.transaction("surveyor_observation", "readwrite");
        var commentStore = transactionComment.objectStore("surveyor_observation");
        var commentIndex = commentStore.index("reportNumber").openCursor(singleKey);
        commentIndex.onsuccess = function (event) {

            var cursor = event.target.result;

            if (cursor) {

                var comment = document.createElement("div");
                comment.innerHTML = commentCounter + ". " + cursor.value.observation;
                commentSection.appendChild(comment);
                commentCounter++;
                cursor.continue();

            }

        };

        var vat = 0.145, service = 0.14, swach = 0.005, krishi = 0.000, seventyfive = 0.75, twentyfive = 0.25;
        function printCalculations() {

            var fibreClaimedTotal = 0, fibreClaimedVat = 0, fibreClaimedGrandTotal = 0, glassClaimedTotal = 0, glassClaimedVat = 0, glassClaimedGrandTotal = 0,
            metalClaimedTotal = 0, metalClaimedVat = 0, metalClaimedGrandTotal = 0, rubberClaimedTotal = 0, rubberClaimedVat = 0, rubberClaimedGrandTotal = 0;
            var fibreAssessedTotal = 0, fibreAssessedVat = 0, fibreAssessedGrandTotal = 0, glassAssessedTotal = 0, glassAssessedVat = 0, glassAssessedGrandTotal = 0,
            metalAssessedTotal = 0, metalAssessedVat = 0, metalAssessedGrandTotal = 0, rubberAssessedTotal = 0, rubberAssessedVat = 0, rubberAssessedGrandTotal = 0;
            var fibrePercentage = 0, rubberPercentage = 0, paintingPercentage = 0, imt23Percentage = 0;
            if (nilFlag === "nil") {

                fibrePercentage = 0;
                rubberPercentage = 0;
                paintingPercentage = 0;
                document.getElementById('fibre_percentage_summary_print_id').innerHTML = fibrePercentage.toFixed(2);
                document.getElementById('rubber_percentage_summary_print_id').innerHTML = rubberPercentage.toFixed(2);
                document.getElementById('painting_percentage_summary_print_id').innerHTML = paintingPercentage.toFixed(2);

            } else {

                fibrePercentage = 0.3;
                rubberPercentage = 0.5;
                paintingPercentage = 0.5;
                document.getElementById('fibre_percentage_summary_print_id').innerHTML = (fibrePercentage * 100);
                document.getElementById('rubber_percentage_summary_print_id').innerHTML = (rubberPercentage * 100);
                document.getElementById('painting_percentage_summary_print_id').innerHTML = (paintingPercentage * 100);
            }

            if (imt23Flag === "imt23_50") {

                imt23Percentage = 0.5;

                document.getElementById("imt23_parts_percentage_print_id").innerHTML = "50";
                document.getElementById("imt23_paint_percentage_print_id").innerHTML = "50";
                document.getElementById("imt23_labour_percentage_print_id").innerHTML = "50";

            } else {

                imt23Percentage = 0.25;

                document.getElementById("imt23_parts_percentage_print_id").innerHTML = "25";
                document.getElementById("imt23_paint_percentage_print_id").innerHTML = "25";
                document.getElementById("imt23_labour_percentage_print_id").innerHTML = "25";

            }

            if (fibreClaimed !== 0) {

                document.getElementById("fibre_details_print_id").style.display = "block";

                if (vatFlag === "with_vat") {

                    document.getElementById("fibre_final_table_print_id").style.display = "block";

                    fibreClaimedTotal = fibreClaimed;
                    fibreClaimedVat = fibreClaimed * vat;
                    fibreClaimedGrandTotal = fibreClaimedTotal + fibreClaimedVat;
                    fibreAssessedTotal = fibreAssessed;
                    fibreAssessedVat = fibreAssessed * vat;
                    fibreAssessedGrandTotal = fibreAssessedTotal + fibreAssessedVat;
                    document.getElementById("fibre_claimed_print_id").innerHTML = fibreClaimedTotal.toFixed(2);
                    document.getElementById("fibre_claimed_vat_print_id").innerHTML = fibreClaimedVat.toFixed(2);
                    document.getElementById("fibre_claimed_total_print_id").innerHTML = fibreClaimedGrandTotal.toFixed(2);
                    document.getElementById("fibre_assessed_print_id").innerHTML = fibreAssessedTotal.toFixed(2);
                    document.getElementById("fibre_assessed_vat_print_id").innerHTML = fibreAssessedVat.toFixed(2);
                    document.getElementById("fibre_assessed_total_print_id").innerHTML = fibreAssessedGrandTotal.toFixed(2);

                } else {

                    fibreClaimedGrandTotal = fibreClaimed;
                    fibreAssessedGrandTotal = fibreAssessed;

                    document.getElementById("fibre_claimed_total_print_id").innerHTML = fibreClaimedGrandTotal.toFixed(2);
                    document.getElementById("fibre_assessed_total_print_id").innerHTML = fibreAssessedGrandTotal.toFixed(2);

                }

            }

            if (glassClaimed !== 0) {

                document.getElementById("glass_details_print_id").style.display = "block";

                if (vatFlag === "with_vat") {

                    document.getElementById("glass_final_table_print_id").style.display = "block";

                    glassClaimedTotal = glassClaimed;
                    glassClaimedVat = glassClaimed * vat;
                    glassClaimedGrandTotal = glassClaimedTotal + glassClaimedVat;
                    glassAssessedTotal = glassAssessed;
                    glassAssessedVat = glassAssessed * vat;
                    glassAssessedGrandTotal = glassAssessedTotal + glassAssessedVat;
                    document.getElementById("glass_claimed_print_id").innerHTML = glassClaimedTotal.toFixed(2);
                    document.getElementById("glass_claimed_vat_print_id").innerHTML = glassClaimedVat.toFixed(2);
                    document.getElementById("glass_claimed_total_print_id").innerHTML = glassClaimedGrandTotal.toFixed(2);
                    document.getElementById("glass_assessed_print_id").innerHTML = glassAssessedTotal.toFixed(2);
                    document.getElementById("glass_assessed_vat_print_id").innerHTML = glassAssessedVat.toFixed(2);
                    document.getElementById("glass_assessed_total_print_id").innerHTML = glassAssessedGrandTotal.toFixed(2);

                } else {

                    glassClaimedGrandTotal = glassClaimedTotal;
                    glassAssessedGrandTotal = glassAssessedTotal;
                    document.getElementById("glass_claimed_total_print_id").innerHTML = glassClaimedGrandTotal.toFixed(2);
                    document.getElementById("glass_assessed_total_print_id").innerHTML = glassAssessedGrandTotal.toFixed(2);

                }

            }

            if (metalClaimed !== 0) {

                document.getElementById("metal_details_print_id").style.display = "block";

                if (vatFlag === "with_vat") {

                    document.getElementById("metal_final_table_print_id").style.display = "block";

                    metalClaimedTotal = metalClaimed;
                    metalClaimedVat = metalClaimed * vat;
                    metalClaimedGrandTotal = metalClaimedTotal + metalClaimedVat;
                    metalAssessedTotal = metalAssessed;
                    metalAssessedVat = metalAssessed * vat;
                    metalAssessedGrandTotal = metalAssessedTotal + metalAssessedVat;
                    document.getElementById("metal_claimed_print_id").innerHTML = metalClaimedTotal.toFixed(2);
                    document.getElementById("metal_claimed_vat_print_id").innerHTML = metalClaimedVat.toFixed(2);
                    document.getElementById("metal_claimed_total_print_id").innerHTML = metalClaimedGrandTotal.toFixed(2);
                    document.getElementById("metal_assessed_print_id").innerHTML = metalAssessedTotal.toFixed(2);
                    document.getElementById("metal_assessed_vat_print_id").innerHTML = metalAssessedVat.toFixed(2);
                    document.getElementById("metal_assessed_total_print_id").innerHTML = metalAssessedGrandTotal.toFixed(2);

                } else {

                    metalClaimedGrandTotal = metalClaimedTotal;
                    metalAssessedGrandTotal = metalAssessedTotal;
                    document.getElementById("metal_claimed_total_print_id").innerHTML = metalClaimedGrandTotal.toFixed(2);
                    document.getElementById("metal_assessed_total_print_id").innerHTML = metalAssessedGrandTotal.toFixed(2);

                }

            }

            if (rubberClaimed !== 0) {

                document.getElementById("rubber_details_print_id").style.display = "block";

                if (vatFlag === "with_vat") {

                    document.getElementById("rubber_final_table_print_id").style.display = "block";

                    rubberClaimedTotal = rubberClaimed;
                    rubberClaimedVat = rubberClaimed * vat;
                    rubberClaimedGrandTotal = rubberClaimedTotal + rubberClaimedVat;
                    rubberAssessedTotal = rubberAssessed;
                    rubberAssessedVat = rubberAssessed * vat;
                    rubberAssessedGrandTotal = rubberAssessedTotal + rubberAssessedVat;
                    document.getElementById("rubber_claimed_print_id").innerHTML = rubberClaimedTotal.toFixed(2);
                    document.getElementById("rubber_claimed_vat_print_id").innerHTML = rubberClaimedVat.toFixed(2);
                    document.getElementById("rubber_claimed_total_print_id").innerHTML = rubberClaimedGrandTotal.toFixed(2);
                    document.getElementById("rubber_assessed_print_id").innerHTML = rubberAssessedTotal.toFixed(2);
                    document.getElementById("rubber_assessed_vat_print_id").innerHTML = rubberAssessedVat.toFixed(2);
                    document.getElementById("rubber_assessed_total_print_id").innerHTML = rubberAssessedGrandTotal.toFixed(2);

                } else {

                    rubberClaimedGrandTotal = rubberClaimedTotal;
                    rubberAssessedGrandTotal = rubberAssessedTotal;
                    document.getElementById("rubber_claimed_total_print_id").innerHTML = rubberClaimedGrandTotal.toFixed(2);
                    document.getElementById("rubber_assessed_total_print_id").innerHTML = rubberAssessedGrandTotal.toFixed(2);

                }

            }

            var deletedClaimedTotal = 0, deletedClaimedVat = 0, deletedClaimedGrandTotal = 0;
            var deletedAssessedTotal = 0, deletedAssessedVat = 0, deletedAssessedGrandTotal = 0;
            if (deletedClaimed !== 0) {

                document.getElementById("deleted_details_print_id").style.display = "block";

                if (vatFlag === "with_vat") {

                    document.getElementById("deleted_final_table_print_id").style.display = "block";

                    deletedClaimedTotal = deletedClaimed;
                    deletedClaimedVat = deletedClaimed * vat;
                    deletedClaimedGrandTotal = deletedClaimedTotal + deletedClaimedVat;
                    deletedAssessedTotal = deletedAssessed;
                    deletedAssessedVat = deletedAssessed * vat;
                    deletedAssessedGrandTotal = deletedAssessedTotal + deletedAssessedVat;
                    document.getElementById("deleted_claimed_print_id").innerHTML = deletedClaimedTotal.toFixed(2);
                    document.getElementById("deleted_claimed_vat_print_id").innerHTML = deletedClaimedVat.toFixed(2);
                    document.getElementById("deleted_claimed_total_print_id").innerHTML = deletedClaimedGrandTotal.toFixed(2);
                    document.getElementById("deleted_assessed_print_id").innerHTML = deletedAssessedTotal.toFixed(2);
                    document.getElementById("deleted_assessed_vat_print_id").innerHTML = deletedAssessedVat.toFixed(2);
                    document.getElementById("deleted_assessed_total_print_id").innerHTML = deletedAssessedGrandTotal.toFixed(2);

                } else {

                    deletedClaimedGrandTotal = deletedClaimedTotal;
                    deletedAssessedGrandTotal = deletedAssessedTotal;
                    document.getElementById("deleted_claimed_total_print_id").innerHTML = deletedClaimedGrandTotal.toFixed(2);
                    document.getElementById("deleted_assessed_total_print_id").innerHTML = deletedAssessedGrandTotal.toFixed(2);

                }

            }

            var labourClaimedTotal = 0, labourClaimedService = 0, labourClaimedSwach = 0, labourClaimedKrishi = 0, labourClaimedGrandTotal = 0;
            var labourAssessedTotal = 0, labourAssessedService = 0, labourAssessedSwach = 0, labourAssessedKrishi = 0, labourAssessedGrandTotal = 0;
            if (labourClaimed !== 0) {

                document.getElementById("labour_details_print_id").style.display = "block";

                if (serviceFlag === "with_service_tax") {

                    document.getElementById("labour_final_table_print_id").style.display = "block";

                    labourClaimedTotal = labourClaimed;
                    labourClaimedService = labourClaimed * service;
                    labourClaimedSwach = labourClaimed * swach;
                    labourClaimedKrishi = labourClaimed * krishi;
                    labourClaimedGrandTotal = labourClaimedTotal + labourClaimedService + labourClaimedSwach + labourClaimedKrishi;
                    labourAssessedTotal = labourAssessed;
                    labourAssessedService = labourAssessed * service;
                    labourAssessedSwach = labourAssessed * swach;
                    labourAssessedKrishi = labourAssessed * krishi;
                    labourAssessedGrandTotal = labourAssessedTotal + labourAssessedService + labourAssessedSwach + labourAssessedKrishi;

                    document.getElementById("labour_claimed_print_id").innerHTML = labourClaimedTotal.toFixed(2);
                    document.getElementById("labour_claimed_service_print_id").innerHTML = labourClaimedService.toFixed(2);
                    document.getElementById("labour_claimed_swach_print_id").innerHTML = labourClaimedSwach.toFixed(2);
                    //                    document.getElementById("labour_claimed_krishi_print_id").innerHTML = labourClaimedKrishi.toFixed(2);
                    document.getElementById("labour_claimed_total_print_id").innerHTML = labourClaimedGrandTotal.toFixed(2);
                    document.getElementById("labour_assessed_print_id").innerHTML = labourAssessedTotal.toFixed(2);
                    document.getElementById("labour_assessed_service_print_id").innerHTML = labourAssessedService.toFixed(2);
                    document.getElementById("labour_assessed_swach_print_id").innerHTML = labourAssessedSwach.toFixed(2);
                    //                    document.getElementById("labour_assessed_krishi_print_id").innerHTML = labourAssessedKrishi.toFixed(2);
                    document.getElementById("labour_assessed_total_print_id").innerHTML = labourAssessedGrandTotal.toFixed(2);

                } else {

                    labourClaimedGrandTotal = labourClaimed;
                    labourAssessedGrandTotal = labourAssessed;
                    document.getElementById("labour_claimed_total_print_id").innerHTML = labourClaimedGrandTotal.toFixed(2);
                    document.getElementById("labour_assessed_total_print_id").innerHTML = labourAssessedGrandTotal.toFixed(2);

                }

            }

            var paintClaimedTotal = 0, paintClaimedMaterial = 0, paintClaimedMaterialVat = 0, paintClaimedMaterialTotal = 0, paintAssessedMaterialTotal = 0, paintClaimedLabour = 0, paintClaimedLabourService = 0, paintClaimedLabourSwach = 0, paintClaimedLabourKrishi = 0,
            paintClaimedGrandTotal = 0;
            var paintAssessedTotal = 0, paintAssessedMaterial = 0, paintAssessedMaterialVat = 0, paintAssessedLabour = 0, paintAssessedLabourService = 0, paintAssessedLabourSwach = 0, paintAssessedLabourKrishi = 0,
            paintAssessedGrandTotal = 0;
            var paintDepreciation = 0;
            var summaryPaintClaimedLabour = 0, summaryPaintAssessedLabour = 0;
            if (paintClaimed !== 0) {

                document.getElementById("painting_details_print_id").style.display = 'block';
                switch (paintFlag) {

                    case "regular":

                        paintClaimedGrandTotal = paintClaimed;
                        summaryPaintClaimedLabour = paintClaimedGrandTotal;
                        paintAssessedGrandTotal = paintAssessed;
                        summaryPaintAssessedLabour = paintAssessedGrandTotal;
                        paintDepreciation = 0;

                        document.getElementById("painting_claimed_total_print_id").innerHTML = paintClaimedGrandTotal.toFixed(2);
                        document.getElementById("painting_assessed_total_print_id").innerHTML = paintAssessedGrandTotal.toFixed(2);

                        break;

                    case "regular_service_tax":

                        document.getElementById("regular_with_tax_print_id").style.display = "block";

                        paintClaimedTotal = paintClaimed;
                        paintClaimedLabourService = paintClaimed * service;
                        paintClaimedLabourSwach = paintClaimed * swach;
                        paintClaimedLabourKrishi = paintClaimed * krishi;
                        paintClaimedGrandTotal = paintClaimedTotal + paintClaimedLabourService + paintClaimedLabourSwach + paintClaimedLabourKrishi;
                        summaryPaintClaimedLabour = paintClaimedGrandTotal;
                        paintAssessedTotal = paintAssessed;
                        paintAssessedLabourService = paintAssessed * service;
                        paintAssessedLabourSwach = paintAssessed * swach;
                        paintAssessedLabourKrishi = paintAssessed * krishi;
                        paintAssessedGrandTotal = paintAssessedTotal + paintAssessedLabourService + paintAssessedLabourSwach + paintAssessedLabourKrishi;
                        summaryPaintAssessedLabour = paintAssessedGrandTotal;
                        paintDepreciation = 0;

                        document.getElementById("regular_claimed_print_id").innerHTML = paintClaimedTotal.toFixed(2);
                        document.getElementById("regular_claimed_service_print_id").innerHTML = paintClaimedLabourService.toFixed(2);
                        document.getElementById("regular_claimed_swach_print_id").innerHTML = paintClaimedLabourSwach.toFixed(2);
                        //                        document.getElementById("regular_claimed_krishi_print_id").innerHTML = paintClaimedLabourKrishi.toFixed(2);
                        document.getElementById("painting_claimed_total_print_id").innerHTML = paintClaimedGrandTotal.toFixed(2);
                        document.getElementById("regular_assessed_print_id").innerHTML = paintAssessedTotal.toFixed(2);
                        document.getElementById("regular_assessed_service_print_id").innerHTML = paintAssessedLabourService.toFixed(2);
                        document.getElementById("regular_assessed_swach_print_id").innerHTML = paintAssessedLabourSwach.toFixed(2);
                        //                        document.getElementById("regular_assessed_krishi_print_id").innerHTML = paintAssessedLabourKrishi.toFixed(2);
                        document.getElementById("painting_assessed_total_print_id").innerHTML = paintAssessedGrandTotal.toFixed(2);

                        break;

                    case "75_25":

                        paintClaimedTotal = paintClaimed;
                        paintClaimedMaterial = paintClaimed * twentyfive;
                        paintClaimedMaterialTotal = paintClaimedMaterial;
                        paintClaimedLabour = paintClaimed * seventyfive;
                        summaryPaintClaimedLabour = paintClaimedLabour;
                        paintAssessedTotal = paintAssessed;
                        paintAssessedMaterial = paintAssessed * twentyfive;
                        paintAssessedMaterialTotal = paintAssessedMaterial;
                        paintAssessedLabour = paintAssessed * seventyfive;
                        summaryPaintAssessedLabour = paintAssessedLabour;
                        paintDepreciation = paintAssessedMaterial * paintingPercentage;

                        //                        document.getElementById("75_25_claimed_material_print_id").innerHTML = paintClaimedMaterial.toFixed(2);
                        document.getElementById("painting_claimed_total_print_id").innerHTML = paintClaimedLabour.toFixed(2);
                        //                        document.getElementById().innerHTML = paintClaimedLabour.toFixed(2);
                        //                        document.getElementById("75_25_assessed_material_print_id").innerHTML = paintAssessedMaterial.toFixed(2);
                        document.getElementById("painting_assessed_total_print_id").innerHTML = paintAssessedLabour.toFixed(2);
                        //                        document.getElementById().innerHTML = paintAssessedTotal.toFixed(2);

                        document.getElementById("paint_material_grand_total_print_id").style.display = "block";

                        var paintPercentClass = document.getElementsByClassName("painting_material_percentage_print_class");

                        for (var i = 0; i < paintPercentClass.length; i++) {

                            paintPercentClass[i].innerHTML = twentyfive * 100;

                        }

                        document.getElementById("paint_claimed_material_total_print_id").innerHTML = paintClaimedMaterialTotal.toFixed(2);
                        document.getElementById("paint_assessed_material_total_print_id").innerHTML = paintAssessedMaterialTotal.toFixed(2);


                        break;

                    case "75_25_service_tax":

                        document.getElementById("75_25_with_tax_print_id").style.display = "block";

                        paintClaimedTotal = paintClaimed;
                        paintClaimedMaterial = paintClaimed * twentyfive;
                        paintClaimedMaterialVat = paintClaimed * twentyfive * vat;
                        paintClaimedMaterialTotal = paintClaimedMaterial + paintClaimedMaterialVat;
                        paintClaimedLabour = paintClaimed * seventyfive;
                        paintClaimedLabourService = paintClaimed * seventyfive * service;
                        paintClaimedLabourSwach = paintClaimed * seventyfive * swach;
                        paintClaimedLabourKrishi = paintClaimed * seventyfive * krishi;
                        paintClaimedGrandTotal = paintClaimedTotal + paintClaimedMaterialVat + paintClaimedLabourService + paintClaimedLabourSwach + paintClaimedLabourKrishi;
                        summaryPaintClaimedLabour = paintClaimedLabour + paintClaimedLabourService + paintClaimedLabourSwach + paintClaimedLabourKrishi;
                        paintAssessedTotal = paintAssessed;
                        paintAssessedMaterial = paintAssessed * twentyfive;
                        paintAssessedMaterialVat = paintAssessed * twentyfive * vat;
                        paintAssessedMaterialTotal = paintAssessedMaterial + paintAssessedMaterialVat;
                        paintAssessedLabour = paintAssessed * seventyfive;
                        paintAssessedLabourService = paintAssessed * seventyfive * service;
                        paintAssessedLabourSwach = paintAssessed * seventyfive * swach;
                        paintAssessedLabourKrishi = paintAssessed * seventyfive * krishi;
                        paintAssessedGrandTotal = paintAssessedLabour + paintAssessedLabourService + paintAssessedLabourSwach + paintAssessedLabourKrishi;
                        summaryPaintAssessedLabour = paintAssessedLabour + paintAssessedLabourService + paintAssessedLabourSwach + paintAssessedLabourKrishi;
                        paintDepreciation = paintAssessedMaterialTotal * paintingPercentage;

                        //                        document.getElementById("75_25_claimed_material_tax_print_id").innerHTML = paintClaimedMaterial.toFixed(2);
                        //                        document.getElementById("75_25_claimed_vat_material_tax_print_id").innerHTML = paintClaimedMaterialVat.toFixed(2);
                        document.getElementById("75_25_claimed_labour_tax_print_id").innerHTML = paintClaimedLabour.toFixed(2);
                        document.getElementById("75_25_claimed_service_labour_tax_print_id").innerHTML = paintClaimedLabourService.toFixed(2);
                        document.getElementById("75_25_claimed_swach_labour_tax_print_id").innerHTML = paintClaimedLabourSwach.toFixed(2);
                        //                        document.getElementById("75_25_claimed_krishi_labour_tax_print_id").innerHTML = paintClaimedLabourKrishi.toFixed(2);
                        document.getElementById("painting_claimed_total_print_id").innerHTML = paintClaimedGrandTotal.toFixed(2);
                        //                        document.getElementById("75_25_assessed_material_tax_print_id").innerHTML = paintAssessedMaterial.toFixed(2);
                        //                        document.getElementById("75_25_assessed_vat_material_tax_print_id").innerHTML = paintAssessedMaterialVat.toFixed(2);
                        document.getElementById("75_25_assessed_labour_tax_print_id").innerHTML = paintAssessedLabour.toFixed(2);
                        document.getElementById("75_25_assessed_service_labour_tax_print_id").innerHTML = paintAssessedLabourService.toFixed(2);
                        document.getElementById("75_25_assessed_swach_labour_tax_print_id").innerHTML = paintAssessedLabourSwach.toFixed(2);
                        //                        document.getElementById("75_25_assessed_krishi_labour_tax_print_id").innerHTML = paintAssessedLabourKrishi.toFixed(2);
                        document.getElementById("painting_assessed_total_print_id").innerHTML = paintAssessedGrandTotal.toFixed(2);

                        document.getElementById("paint_material_print_id").style.display = "block";
                        document.getElementById("paint_material_vat_print_id").style.display = "block";
                        document.getElementById("paint_material_grand_total_print_id").style.display = "block";

                        var paintPercentClass = document.getElementsByClassName("painting_material_percentage_print_class");

                        for (var i = 0; i < paintPercentClass.length; i++) {

                            paintPercentClass[i].innerHTML = twentyfive * 100;

                        }

                        document.getElementById("paint_claimed_material_print_id").innerHTML = paintClaimedMaterial.toFixed(2);
                        document.getElementById("paint_claimed_material_vat_print_id").innerHTML = paintClaimedMaterialVat.toFixed(2);

                        document.getElementById("paint_assessed_material_print_id").innerHTML = paintAssessedMaterial.toFixed(2);
                        document.getElementById("paint_assessed_material_vat_print_id").innerHTML = paintAssessedMaterialVat.toFixed(2);

                        document.getElementById("paint_claimed_material_total_print_id").innerHTML = paintClaimedMaterialTotal.toFixed(2);
                        document.getElementById("paint_assessed_material_total_print_id").innerHTML = paintAssessedMaterialTotal.toFixed(2);

                        break;

                    case "schedule":

                        document.getElementById("schedule_print_id").style.display = "block";

                        paintClaimedTotal = paintClaimed;
                        paintClaimedMaterial = paintClaimed * scheduleMaterial;
                        paintClaimedMaterialVat = paintClaimed * scheduleMaterial * vat;
                        paintClaimedMaterialTotal = paintClaimedMaterial + paintClaimedMaterialVat;
                        paintClaimedLabour = paintClaimed * scheduleLabour;
                        paintClaimedLabourService = paintClaimed * scheduleLabour * service;
                        paintClaimedLabourSwach = paintClaimed * scheduleLabour * swach;
                        paintClaimedLabourKrishi = paintClaimed * scheduleLabour * krishi;
                        paintClaimedGrandTotal = paintClaimedTotal + paintClaimedMaterialVat + paintClaimedLabourService + paintClaimedLabourSwach + paintClaimedLabourKrishi;
                        summaryPaintClaimedLabour = paintClaimedLabour + paintClaimedLabourService + paintClaimedLabourSwach + paintClaimedLabourKrishi;
                        paintAssessedTotal = paintAssessed;
                        paintAssessedMaterial = paintAssessed * scheduleMaterial;
                        paintAssessedMaterialVat = paintAssessed * scheduleMaterial * vat;
                        paintAssessedMaterialTotal = paintAssessedMaterial + paintAssessedMaterialVat;
                        paintAssessedLabour = paintAssessed * scheduleLabour;
                        paintAssessedLabourService = paintAssessed * scheduleLabour * service;
                        paintAssessedLabourSwach = paintAssessed * scheduleLabour * swach;
                        paintAssessedLabourKrishi = paintAssessed * scheduleLabour * krishi;
                        paintAssessedGrandTotal = paintAssessedLabour + paintAssessedLabourService + paintAssessedLabourSwach + paintAssessedLabourKrishi;
                        summaryPaintAssessedLabour = paintAssessedLabour + paintAssessedLabourService + paintAssessedLabourSwach + paintAssessedLabourKrishi;
                        paintDepreciation = paintClaimedMaterialTotal * paintingPercentage;

                        document.getElementById("schedule_claimed_labour_print_id").innerHTML = paintClaimedLabour.toFixed(2);
                        document.getElementById("schedule_claimed_labour_service_print_id").innerHTML = paintClaimedLabourService.toFixed(2);
                        document.getElementById("schedule_claimed_labour_swach_print_id").innerHTML = paintClaimedLabourSwach.toFixed(2);
                        //                        document.getElementById("schedule_claimed_labour_krishi_print_id").innerHTML = paintClaimedLabourKrishi.toFixed(2);
                        document.getElementById("painting_claimed_total_print_id").innerHTML = paintClaimedGrandTotal.toFixed(2);
                        document.getElementById("schedule_assessed_labour_print_id").innerHTML = paintAssessedLabour.toFixed(2);
                        document.getElementById("schedule_assessed_labour_service_print_id").innerHTML = paintAssessedLabourService.toFixed(2);
                        document.getElementById("schedule_assessed_labour_swach_print_id").innerHTML = paintAssessedLabourSwach.toFixed(2);
                        //                        document.getElementById("schedule_assessed_labour_krishi_print_id").innerHTML = paintAssessedLabourKrishi.toFixed(2);
                        document.getElementById("painting_assessed_total_print_id").innerHTML = paintAssessedGrandTotal.toFixed(2);

                        document.getElementById("paint_material_print_id").style.display = "block";
                        document.getElementById("paint_material_vat_print_id").style.display = "block";
                        document.getElementById("paint_material_grand_total_print_id").style.display = "block";

                        var paintPercentClass = document.getElementsByClassName("painting_material_percentage_print_class");

                        for (var i = 0; i < paintPercentClass.length; i++) {

                            var scheduleMaterialPercent = scheduleMaterial * 100;

                            paintPercentClass[i].innerHTML = scheduleMaterialPercent.toFixed(2);

                        }

                        document.getElementById("paint_claimed_material_print_id").innerHTML = paintClaimedMaterial.toFixed(2);
                        document.getElementById("paint_claimed_material_vat_print_id").innerHTML = paintClaimedMaterialVat.toFixed(2);

                        document.getElementById("paint_assessed_material_print_id").innerHTML = paintAssessedMaterial.toFixed(2);
                        document.getElementById("paint_assessed_material_vat_print_id").innerHTML = paintAssessedMaterialVat.toFixed(2);

                        document.getElementById("paint_claimed_material_total_print_id").innerHTML = paintClaimedMaterialTotal.toFixed(2);
                        document.getElementById("paint_assessed_material_total_print_id").innerHTML = paintClaimedMaterialTotal.toFixed(2);

                        break;
                }

            }

            var imt23PartsClaimedTotal = 0, imt23PartsAssessedTotal = 0, imt23PartsClaimedVat = 0, imt23PartsAssessedVat = 0, imt23PartsClaimedGrandTotal = 0, imt23PartsAssessedGrandTotal = 0;
            var imt23PaintClaimedGrandTotal = 0, imt23PaintAssessedGrandTotal = 0;
            var imt23LabourClaimedTotal = 0, imt23LabourAssessedTotal = 0, imt23LabourClaimedService = 0, imt23LabourAssessedService = 0, imt23LabourAssessedSwach = 0, imt23LabourClaimedSwach = 0,
            imt23LabourClaimedKrishi = 0, imt23LabourAssessedKrishi = 0, imt23LabourClaimedGrandTotal = 0, imt23LabourAssessedGrandTotal = 0;

            if (imt23PartsClaimed !== 0) {

                document.getElementById("imt23_parts_print_id").style.display = "block";

                if (vatFlag === "with_vat") {

                    document.getElementById("imt23_parts_final_table_print_id").style.display = "block";

                    imt23PartsClaimedTotal = imt23PartsClaimed + imt23PaintClaimed;
                    imt23PartsClaimedVat = imt23PartsClaimed * vat;
                    imt23PartsClaimedGrandTotal = imt23PartsClaimed + imt23PartsClaimedVat;
                    imt23PartsAssessedTotal = imt23PartsAssessed + imt23PaintAssessed;
                    imt23PartsAssessedVat = imt23PartsAssessed * vat;
                    imt23PartsAssessedGrandTotal = imt23PartsAssessed + imt23PartsAssessedVat;

                    imt23PaintClaimedGrandTotal = imt23PaintClaimed + (imt23PaintClaimed * vat);
                    imt23PaintAssessedGrandTotal = imt23PaintAssessed + (imt23PaintAssessed * vat);

                    document.getElementById("imt23_parts_claimed_print_id").innerHTML = imt23PartsClaimedTotal.toFixed(2);
                    document.getElementById("imt23_parts_assessed_print_id").innerHTML = imt23PartsAssessedTotal.toFixed(2);
                    document.getElementById("imt23_parts_claimed_vat_print_id").innerHTML = imt23PartsClaimedVat.toFixed(2);
                    document.getElementById("imt23_parts_assessed_vat_print_id").innerHTML = imt23PartsAssessedVat.toFixed(2);
                    document.getElementById("imt23_parts_claimed_total_print_id").innerHTML = imt23PartsClaimedGrandTotal.toFixed(2);
                    document.getElementById("imt23_parts_assessed_total_print_id").innerHTML = imt23PartsAssessedGrandTotal.toFixed(2);

                } else {

                    imt23PartsClaimedGrandTotal = imt23PartsClaimed;
                    imt23PartsAssessedGrandTotal = imt23PartsAssessed;

                    imt23PaintClaimedGrandTotal = imt23PaintClaimed;
                    imt23PaintAssessedGrandTotal = imt23PaintAssessed;

                    document.getElementById("imt23_parts_claimed_total_print_id").innerHTML = imt23PartsClaimedGrandTotal.toFixed(2);
                    document.getElementById("imt23_parts_assessed_total_print_id").innerHTML = imt23PartsAssessedGrandTotal.toFixed(2);

                }

            }

            if (imt23LabourClaimed !== 0) {

                document.getElementById("imt23_labour_print_id").style.display = "block";

                if (serviceFlag === "with_service_tax") {

                    document.getElementById("imt23_labour_final_table_print_id").style.display = "block";

                    imt23LabourClaimedTotal = imt23LabourClaimed;
                    imt23LabourClaimedService = imt23LabourClaimed * service;
                    imt23LabourClaimedSwach = imt23LabourClaimed * swach;
                    imt23LabourClaimedKrishi = imt23LabourClaimed * krishi;
                    imt23LabourClaimedGrandTotal = imt23LabourClaimed + imt23LabourClaimedService + imt23LabourClaimedSwach + imt23LabourClaimedKrishi;
                    imt23LabourAssessedTotal = imt23LabourAssessed;
                    imt23LabourAssessedService = imt23LabourAssessed * service;
                    imt23LabourAssessedSwach = imt23LabourAssessed * swach;
                    imt23LabourAssessedKrishi = imt23LabourAssessed * krishi;
                    imt23LabourAssessedGrandTotal = imt23LabourAssessed + imt23LabourAssessedService + imt23LabourAssessedSwach + imt23LabourAssessedKrishi;

                    document.getElementById("imt23_labour_claimed_print_id").innerHTML = imt23LabourClaimedTotal.toFixed(2);
                    document.getElementById("imt23_labour_assessed_print_id").innerHTML = imt23LabourAssessedTotal.toFixed(2);
                    document.getElementById("imt23_labour_claimed_service_print_id").innerHTML = imt23LabourClaimedService.toFixed(2);
                    document.getElementById("imt23_labour_assessed_service_print_id").innerHTML = imt23LabourAssessedService.toFixed(2);
                    document.getElementById("imt23_labour_claimed_swach_print_id").innerHTML = imt23LabourClaimedSwach.toFixed(2);
                    document.getElementById("imt23_labour_assessed_swach_print_id").innerHTML = imt23LabourAssessedSwach.toFixed(2);
                    //                    document.getElementById("imt23_labour_claimed_krishi_print_id").innerHTML = imt23LabourClaimedKrishi.toFixed(2);
                    //                    document.getElementById("imt23_labour_assessed_krishi_print_id").innerHTML = imt23LabourAssessedKrishi.toFixed(2);
                    document.getElementById("imt23_labour_claimed_total_print_id").innerHTML = imt23LabourClaimedGrandTotal.toFixed(2);
                    document.getElementById("imt23_labour_assessed_total_print_id").innerHTML = imt23LabourAssessedGrandTotal.toFixed(2);

                } else {

                    imt23LabourClaimedGrandTotal = imt23LabourClaimed;
                    imt23LabourAssessedGrandTotal = imt23LabourAssessed;

                    document.getElementById("imt23_labour_claimed_total_print_id").innerHTML = imt23LabourClaimedGrandTotal.toFixed(2);
                    document.getElementById("imt23_labour_assessed_total_print_id").innerHTML = imt23LabourAssessedGrandTotal.toFixed(2);

                }

            }

            var summaryLabourClaimedTotal;

            if (labourClaimedSummary === 0) {

                summaryLabourClaimedTotal = labourClaimedGrandTotal + summaryPaintClaimedLabour + imt23LabourClaimedGrandTotal;

            } else {

                summaryLabourClaimedTotal = labourClaimedSummary + imt23LabourClaimedGrandTotal;

            }

            var summaryPartsClaimedTotal;

            if (partsClaimedSummary === 0) {

                summaryPartsClaimedTotal = metalClaimedGrandTotal + fibreClaimedGrandTotal + glassClaimedGrandTotal + rubberClaimedGrandTotal + paintClaimedMaterialTotal + imt23PartsClaimedGrandTotal + imt23PaintClaimedGrandTotal;

            } else {

                summaryPartsClaimedTotal = partsClaimedSummary + imt23PartsClaimedGrandTotal + imt23PaintClaimedGrandTotal;

            }

            //            var summaryLabourClaimedTotal = labourClaimedSummary + imt23LabourClaimedGrandTotal;
            var summaryLabourAssessedTotal = labourAssessedGrandTotal + summaryPaintAssessedLabour + imt23LabourAssessedGrandTotal;
            //            var summaryPartsClaimedTotal = partsClaimedSummary + imt23PartsClaimedGrandTotal;
            var summaryPartsAssessedTotal = fibreAssessedGrandTotal + metalAssessedGrandTotal + glassAssessedGrandTotal + rubberAssessedGrandTotal + paintAssessedMaterialTotal + imt23PartsAssessedGrandTotal + imt23PaintAssessedGrandTotal; // - deletedAssessedGrandTotal
            var summaryClaimedTotal = summaryLabourClaimedTotal + summaryPartsClaimedTotal + spotPhotosClaimedSummary + spotRepairClaimedSummary;
            var summaryAssessedTotal = summaryLabourAssessedTotal + summaryPartsAssessedTotal + spotPhotosAssessedSummary + spotRepairAssessedSummary;
            //depreciation
            var metalDepreciation = metalAssessedGrandTotal * metalPercentageSummary;
            var fibreDepreciation = fibreAssessedGrandTotal * fibrePercentage;
            var rubberDepreciation = rubberAssessedGrandTotal * rubberPercentage; //on material
            var imt23PartsDepreciation = imt23PartsAssessedGrandTotal * imt23Percentage;
            var imt23PaintDepreciation = imt23PaintAssessedGrandTotal * imt23Percentage;
            var imt23LabourDepreciation = imt23LabourAssessedGrandTotal * imt23Percentage;

            var depreciationTotal = summaryAssessedTotal - metalDepreciation - fibreDepreciation - rubberDepreciation - paintDepreciation - imt23PartsDepreciation - imt23LabourDepreciation - imt23PaintDepreciation;
            var policyExcess = depreciationTotal - compulsorySummary - imposedSummary - voluntarySummary;
            var salvage = policyExcess - salvageSummary;
            document.getElementById('labour_charges_claimed_print_id').innerHTML = summaryLabourClaimedTotal.toFixed(2);
            document.getElementById('labour_charges_assessed_print_id').innerHTML = summaryLabourAssessedTotal.toFixed(2);
            document.getElementById('recommended_parts_claimed_print_id').innerHTML = summaryPartsClaimedTotal.toFixed(2);
            document.getElementById('recommended_parts_assessed_print_id').innerHTML = summaryPartsAssessedTotal.toFixed(2);
            document.getElementById('claimed_total_print_id').innerHTML = summaryClaimedTotal.toFixed(2);
            document.getElementById('assessed_total_print_id').innerHTML = summaryAssessedTotal.toFixed(2);
            document.getElementById('metal_depreciation_summary_print_id').innerHTML = metalDepreciation.toFixed(2);
            document.getElementById('fibre_depreciation_summary_print_id').innerHTML = fibreDepreciation.toFixed(2);
            document.getElementById('rubber_depreciation_summary_print_id').innerHTML = rubberDepreciation.toFixed(2);
            document.getElementById('painting_depreciation_summary_print_id').innerHTML = paintDepreciation.toFixed(2);
            document.getElementById('imt23_parts_depreciation_print_id').innerHTML = imt23PartsDepreciation.toFixed(2);
            document.getElementById('imt23_paint_depreciation_print_id').innerHTML = imt23PaintDepreciation.toFixed(2);
            document.getElementById('imt23_labour_depreciation_print_id').innerHTML = imt23LabourDepreciation.toFixed(2);
            document.getElementById('depreciation_total_print_id').innerHTML = depreciationTotal.toFixed(2);
            document.getElementById('policy_excess_total_print_id').innerHTML = policyExcess.toFixed(2);
            document.getElementById('salvage_value_total_print_id').innerHTML = salvage.toFixed(2);
            document.getElementById('liability_total_print_id').innerHTML = salvage.toFixed(2);
            document.getElementById('liability_total_in_words_print_id').innerHTML = InrToWordConverter.ConvertToWord(Math.round(salvage * 100) / 100);

            var fibreSl = document.getElementsByClassName('fibre_serial');
            var glassSl = document.getElementsByClassName('glass_serial');
            var metalSl = document.getElementsByClassName('metal_serial');
            var rubberSl = document.getElementsByClassName('rubber_serial');

            var slCounter = 0;

            for (var i = 0; i < fibreSl.length; i++) {

                slCounter = i + 1;

                fibreSl[i].innerHTML = slCounter;


            }

            for (var j = 0; j < glassSl.length; j++) {

                slCounter = slCounter + 1;

                glassSl[j].innerHTML = slCounter;

            }

            for (var k = 0; k < metalSl.length; k++) {

                slCounter = slCounter + 1;

                metalSl[k].innerHTML = slCounter;

            }

            for (var l = 0; l < rubberSl.length; l++) {

                slCounter = slCounter + 1;

                rubberSl[l].innerHTML = slCounter;

            }

        }

        db.close();

    };

    var fibre = document.getElementsByClassName('fibre_serial');
    var glass = document.getElementsByClassName('glass_serial');
    var metal = document.getElementsByClassName('metal_serial');
    var rubber = document.getElementsByClassName('rubber_serial');

    for (var i = 0; i < fibre.length; i++) {

        fibre[i].innerhtml = i;

        console.log("" + i);

    }


}

window.onload = function () {
    loadPrint();
};
