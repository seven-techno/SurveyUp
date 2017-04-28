/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"}; // This line should only be needed if it is needed to support the object's constants for older browsers
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

function dbManager() {

    if (!window.indexedDB) {

        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");

    } else {

        var db;

        var request = window.indexedDB.open("survey_database", 1);

        request.onerror = function (event) {
            // Do something with request.errorCode!
            console.log("Database error: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
            // Do something with request.result!
            db = event.target.result;

        };

        request.onupgradeneeded = function (event) {

            db = event.target.result;

            var motorSurveyTable = db.createObjectStore("motor_survey", {keyPath: "motor_id", autoIncrement: true});
            motorSurveyTable.createIndex("reportNumber", "reportNumber");
            motorSurveyTable.createIndex("surveyMode", "surveyMode"); //spot, final, reinspection
            motorSurveyTable.createIndex("formMode", "formMode"); //private, commercial, third_party
            motorSurveyTable.createIndex("reportDate", "reportDate");
            motorSurveyTable.createIndex("reportStatement", "reportStatement");
            motorSurveyTable.createIndex("companyCode", "companyCode");
            motorSurveyTable.createIndex("companyManager", "companyManager");
            motorSurveyTable.createIndex("companyName", "companyName");
            motorSurveyTable.createIndex("companyAddress", "companyAddress");
            motorSurveyTable.createIndex("policyNumber", "policyNumber");
            motorSurveyTable.createIndex("claimNumber", "claimNumber");
            motorSurveyTable.createIndex("insurerCode", "insurerCode");
            motorSurveyTable.createIndex("insurerName", "insurerName");
            motorSurveyTable.createIndex("insurerAddress", "insurerAddress");
            motorSurveyTable.createIndex("insuredName", "insuredName");
            motorSurveyTable.createIndex("insuredAddress", "insuredAddress");
            motorSurveyTable.createIndex("insuranceFromDate", "insuranceFromDate");
            motorSurveyTable.createIndex("insuranceToDate", "insuranceToDate");
            motorSurveyTable.createIndex("insuredEndorsement", "insuredEndorsement");
            motorSurveyTable.createIndex("sumInsured", "sumInsured");
            motorSurveyTable.createIndex("hpahyp", "hpahyp");

            var vehicleParticularsTable = db.createObjectStore("vehicle_particulars", {keyPath: "vehicle_id", autoIncrement: true});
            vehicleParticularsTable.createIndex("reportNumber", "reportNumber");
            vehicleParticularsTable.createIndex("vehiclRcVerification", "vehicleRcVerification");
            vehicleParticularsTable.createIndex("vehicleRegistrationNumber", "vehicleRegistrationNumber");
            vehicleParticularsTable.createIndex("vehicleRegistrationDate", "vehicleRegistrationDate");
            vehicleParticularsTable.createIndex("chassisNumber", "chassisNumber");
            vehicleParticularsTable.createIndex("engineNumber", "engineNumber");
            vehicleParticularsTable.createIndex("vehicleMake", "vehicleMake");
            vehicleParticularsTable.createIndex("vehicleModel", "vehicleModel");
            vehicleParticularsTable.createIndex("vehicleColour", "vehicleColour");
            vehicleParticularsTable.createIndex("roadTax", "raodTax");
            vehicleParticularsTable.createIndex("vehicleClass", "vehicleClass");
            vehicleParticularsTable.createIndex("vehicleCondtion", "vehicleCondition");
            vehicleParticularsTable.createIndex("odometerReading", "odometerReading");
            vehicleParticularsTable.createIndex("bodyType", "bodyType");
            vehicleParticularsTable.createIndex("unladenWeight", "unladenWeight");
            vehicleParticularsTable.createIndex("registeredLadenWeight", "registeredLadenWeight");
            vehicleParticularsTable.createIndex("fitnessCertificate", "fitnessCertificate");
            vehicleParticularsTable.createIndex("fitnessCertificateValidity", "fitnessCertificateValidity");
            vehicleParticularsTable.createIndex("rcValidity", "rcValidity");
            vehicleParticularsTable.createIndex("seatingCapacity", "seatingCapacity");

            //for commercial
            var permitParticularsTable = db.createObjectStore("permit_particulars", {keyPath: "permit_id", autoIncrement: true});
            permitParticularsTable.createIndex("reportNumber", "reportNumber");
            permitParticularsTable.createIndex("permitNumber", "permitNumber");
            permitParticularsTable.createIndex("permitVerification", "permitVerification"); //redundant
            permitParticularsTable.createIndex("permitValidity", "permitValidity");
            permitParticularsTable.createIndex("permitType", "permitType");
            permitParticularsTable.createIndex("permitPassenger", "permitPassenger");
            permitParticularsTable.createIndex("permitRoute", "permitRoute");
            //end commercial

            var driverParticularsTable = db.createObjectStore("driver_particulars", {keyPath: "license_id", autoIncrement: true});
            driverParticularsTable.createIndex("reportNumber", "reportNumber");
            driverParticularsTable.createIndex("licenseVerification", "licenseVerification");
            driverParticularsTable.createIndex("driverName", "driverName");
            driverParticularsTable.createIndex("driverAddress", "driverAddress");
            driverParticularsTable.createIndex("licenseNumber", "licenseNumber");
            driverParticularsTable.createIndex("licenseIssueDate", "licenseIssueDate");
            driverParticularsTable.createIndex("issuingAuthority", "issuingAuthority");
            driverParticularsTable.createIndex("licenseType", "licenseType");
            driverParticularsTable.createIndex("licenseEndorsement", "licenseEndorsement");

            var vehiclesTable = db.createObjectStore("vehicles_table", {keyPath: "vehicles_table_id", autoIncrement: true});
            vehiclesTable.createIndex("reportNumber", "reportNumber");
            vehiclesTable.createIndex("licenseNumber", "licenseNumber");
            vehiclesTable.createIndex("vehicleType", "vehicleType");
            vehiclesTable.createIndex("licenseFromDate", "licenseFromDate");
            vehiclesTable.createIndex("licenseToDate", "licenseToDate");
            vehiclesTable.createIndex("badgeNumber", "badgeNumber");

            // for commercial
            var tripParticularsTable = db.createObjectStore("trip_particulars", {keyPath: "trip_id", autoIncrement: true});
            tripParticularsTable.createIndex("reportNumber", "reportNumber");
            tripParticularsTable.createIndex("tripVerification", "tripVerification"); //redundant
            tripParticularsTable.createIndex("natureOfGoods", "natureOfGoods");
            tripParticularsTable.createIndex("goodsWeight", "goodsWeight");
            tripParticularsTable.createIndex("numberOfPassengers", "numberOfPassengers");
            tripParticularsTable.createIndex("transportedFrom", "transportedFrom");
            //end commercial

            var accidentParticularsTable = db.createObjectStore("accident_particulars", {keyPath: "accident_id", autoIncrement: true});
            accidentParticularsTable.createIndex("reportNumber", "reportNumber");
            accidentParticularsTable.createIndex("accidentDate", "accidentDate");
            accidentParticularsTable.createIndex("accidentTime", "accidentTime");
            accidentParticularsTable.createIndex("accidentPlace", "accidentPlace");
            accidentParticularsTable.createIndex("accidentCause", "accidentCause");
            accidentParticularsTable.createIndex("propertyDamage", "propertyDamage");
            accidentParticularsTable.createIndex("injuryDetails", "injuryDetails");
            accidentParticularsTable.createIndex("accidentReported", "accidentReported");
            accidentParticularsTable.createIndex("nameOfPoliceStation", "nameOfPoliceStation");
            accidentParticularsTable.createIndex("firDetails", "firDetails");

            var surveyDetailsTable = db.createObjectStore("survey_details", {keyPath: "survey_id", autoIncrement: true});
            surveyDetailsTable.createIndex("reportNumber", "reportNumber");
            surveyDetailsTable.createIndex("requestDate", "requestDate");
            surveyDetailsTable.createIndex("surveyPlace", "surveyPlace");

            var surveyTable = db.createObjectStore("survey_table", {keyPath: "survey_table_id", autoIncrement: true});
            surveyTable.createIndex("reportNumber", "reportNumber");
            surveyTable.createIndex("surveyDate", "surveyDate");
            surveyTable.createIndex("surveyTime", "surveyTime");

            var flagDetails = db.createObjectStore("flag_details", {keyPath: "flag_id", autoIncrement: true});
            flagDetails.createIndex("reportNumber", "reportNumber");
            flagDetails.createIndex("excelFlag", "excelFlag");
            flagDetails.createIndex("nilFlag", "nilFlag");
            flagDetails.createIndex("vatFlag", "vatFlag");
            flagDetails.createIndex("serviceFlag", "serviceFlag");
            flagDetails.createIndex("paintFlag", "paintFlag");
            flagDetails.createIndex("imt23Flag", "imt23Flag");
            flagDetails.createIndex("bodyFlag", "bodyFlag");

            //reinspection table
            var reinespectionTable = db.createObjectStore("reinspection_table", {keyPath: "reinspection_id", autoIncrement: true});
            reinespectionTable.createIndex("reportNumber", "reportNumber");
            reinespectionTable.createIndex("partName", "partName");
            reinespectionTable.createIndex("natureOfDamage", "natureOfDamage");

            //for commercial
            var fabricatedFirstTable = db.createObjectStore("fabricated_first", {keyPath: "f1_id", autoIncrement: true});
            fabricatedFirstTable.createIndex("reportNumber", "reportNumber");
            fabricatedFirstTable.createIndex("fabricatedHeader", "fabricatedHeader");
            fabricatedFirstTable.createIndex("partName", "partName");
            fabricatedFirstTable.createIndex("partMaterial", "partMaterial");
            fabricatedFirstTable.createIndex("partClaimed", "partClaimed");
            fabricatedFirstTable.createIndex("partAssessed", "partAssessed");
            fabricatedFirstTable.createIndex("natureOfDamage", "natureOfDamage");

            var fabricatedSecondTable = db.createObjectStore("fabricated_second", {keyPath: "f2_id", autoIncrement: true});
            fabricatedSecondTable.createIndex("reportNumber", "reportNumber");
            fabricatedSecondTable.createIndex("fabricatedHeader", "fabricatedHeader");
            fabricatedSecondTable.createIndex("partName", "partName");
            fabricatedSecondTable.createIndex("partMaterial", "partMaterial");
            fabricatedSecondTable.createIndex("partClaimed", "partClaimed");
            fabricatedSecondTable.createIndex("partAssessed", "partAssessed");
            fabricatedSecondTable.createIndex("natureOfDamage", "natureOfDamage");

            var fabricatedThirdTable = db.createObjectStore("fabricated_third", {keyPath: "f3_id", autoIncrement: true});
            fabricatedThirdTable.createIndex("reportNumber", "reportNumber");
            fabricatedThirdTable.createIndex("fabricatedHeader", "fabricatedHeader");
            fabricatedThirdTable.createIndex("partName", "partName");
            fabricatedThirdTable.createIndex("partMaterial", "partMaterial");
            fabricatedThirdTable.createIndex("partClaimed", "partClaimed");
            fabricatedThirdTable.createIndex("partAssessed", "partAssessed");
            fabricatedThirdTable.createIndex("natureOfDamage", "natureOfDamage");

            var fabricatedFourthTable = db.createObjectStore("fabricated_fourth", {keyPath: "f4_id", autoIncrement: true});
            fabricatedFourthTable.createIndex("reportNumber", "reportNumber");
            fabricatedFourthTable.createIndex("fabricatedHeader", "fabricatedHeader");
            fabricatedFourthTable.createIndex("partName", "partName");
            fabricatedFourthTable.createIndex("partMaterial", "partMaterial");
            fabricatedFourthTable.createIndex("partClaimed", "partClaimed");
            fabricatedFourthTable.createIndex("partAssessed", "partAssessed");
            fabricatedFourthTable.createIndex("natureOfDamage", "natureOfDamage");

            var fabricatedFifthTable = db.createObjectStore("fabricated_fifth", {keyPath: "f5_id", autoIncrement: true});
            fabricatedFifthTable.createIndex("reportNumber", "reportNumber");
            fabricatedFifthTable.createIndex("fabricatedHeader", "fabricatedHeader");
            fabricatedFifthTable.createIndex("partName", "partName");
            fabricatedFifthTable.createIndex("partMaterial", "partMaterial");
            fabricatedFifthTable.createIndex("partClaimed", "partClaimed");
            fabricatedFifthTable.createIndex("partAssessed", "partAssessed");
            fabricatedFifthTable.createIndex("natureOfDamage", "natureOfDamage");
            //end of commercial

            var damagedPartsTable = db.createObjectStore("damaged_parts", {keyPath: "damaged_table_id", autoIncrement: true});
            damagedPartsTable.createIndex("reportNumber", "reportNumber");
//            damagedPartsTable.createIndex("quantityClaimed", "quantityClaimed");
//            damagedPartsTable.createIndex("quantityAssessed", "quantityAssessed");
            damagedPartsTable.createIndex("partName", "partName");
            damagedPartsTable.createIndex("partMaterial", "partMaterial");
            damagedPartsTable.createIndex("partClaimed", "partClaimed");
            damagedPartsTable.createIndex("partAssessed", "partAssessed");
            damagedPartsTable.createIndex("natureOfDamage", "natureOfDamage");

//            var fibreTable = db.createObjectStore("fibre_table", {keyPath: "fibre_table_id", autoIncrement: true});
//            fibreTable.createIndex("reportNumber", "reportNumber");
//            fibreTable.createIndex("fabricatedHeader", "fabricatedHeader");
//            fibreTable.createIndex("partName", "partName");
//            fibreTable.createIndex("partClaimed", "partClaimed");
//            fibreTable.createIndex("partAssessed", "partAssessed");
//            fibreTable.createIndex("natureOfDamage", "natureOfDamage");
//
//            var glassTable = db.createObjectStore("glass_table", {keyPath: "glass_table_id", autoIncrement: true});
//            glassTable.createIndex("reportNumber", "reportNumber");
//            glassTable.createIndex("fabricatedHeader", "fabricatedHeader");
//            glassTable.createIndex("partName", "partName");
//            glassTable.createIndex("partClaimed", "partClaimed");
//            glassTable.createIndex("partAssessed", "partAssessed");
//            glassTable.createIndex("natureOfDamage", "natureOfDamage");
//
//            var metalTable = db.createObjectStore("metal_table", {keyPath: "metal_table_id", autoIncrement: true});
//            metalTable.createIndex("reportNumber", "reportNumber");
//            metalTable.createIndex("fabricatedHeader", "fabricatedHeader");
//            metalTable.createIndex("partName", "partName");
//            metalTable.createIndex("partClaimed", "partClaimed");
//            metalTable.createIndex("partAssessed", "partAssessed");
//            metalTable.createIndex("natureOfDamage", "natureOfDamage");
//
//            var rubberTable = db.createObjectStore("rubber_table", {keyPath: "rubber_table_id", autoIncrement: true});
//            rubberTable.createIndex("reportNumber", "reportNumber");
//            rubberTable.createIndex("fabricatedHeader", "fabricatedHeader");
//            rubberTable.createIndex("partName", "partName");
//            rubberTable.createIndex("partClaimed", "partClaimed");
//            rubberTable.createIndex("partAssessed", "partAssessed");
//            rubberTable.createIndex("natureOfDamage", "natureOfDamage");

            var deletedTable = db.createObjectStore("deleted_table", {keyPath: "deleted_table_id", autoIncrement: true});
            deletedTable.createIndex("reportNumber", "reportNumber");
//            deletedTable.createIndex("quantityClaimed", "quantityClaimed");
//            deletedTable.createIndex("quantityAssessed", "quantityAssessed");
            deletedTable.createIndex("fabricatedHeader", "fabricatedHeader");
            deletedTable.createIndex("deletedPart", "deletedPart");
            deletedTable.createIndex("deletedMaterial", "deletedMaterial");
            deletedTable.createIndex("deletedClaimed", "deletedClaimed");
            deletedTable.createIndex("deletedAssessed", "deletedAssessed");
            deletedTable.createIndex("natureOfDamage", "natureOfDamage");
            deletedTable.createIndex("deletedReason", "deletedReason");

            var repairTable = db.createObjectStore("repair_table", {keyPath: "repair_table_id", autoIncrement: true});
            repairTable.createIndex("reportNumber", "reportNumber");
//            repairTable.createIndex("quantityClaimed", "quantityClaimed");
//            repairTable.createIndex("quantityAssessed", "quantityAssessed");
            repairTable.createIndex("fabricatedHeader", "fabricatedHeader");
            repairTable.createIndex("repairedPart", "repairedPart");
            repairTable.createIndex("repairedMaterial", "repairedMaterial");
            repairTable.createIndex("repairedClaimed", "repairedClaimed");
            repairTable.createIndex("repairedAssessed", "repairedAssessed");
            repairTable.createIndex("natureOfDamage", "natureOfDamage");

            var paintingTable = db.createObjectStore("painting_table", {keyPath: "painting_table_id", autoIncrement: true});
            paintingTable.createIndex("reportNumber", "reportNumber");
            paintingTable.createIndex("fabricatedHeader", "fabricatedHeader");
            paintingTable.createIndex("paintDescription", "paintDescription");
            paintingTable.createIndex("paintClaimed", "paintClaimed");
            paintingTable.createIndex("paintAssessed", "paintAssessed");

            var paintDetails = db.createObjectStore("paint_details", {keyPath: "paint_id", autoIncrement: true});
            paintDetails.createIndex("reportNumber", "reportNumber");
            paintDetails.createIndex("scheduleMaterialPercentage", "scheduleMaterialPercentage");
            paintDetails.createIndex("scheduleLabourPercentage", "scheduleLabourPercentage");

            var imt23Table = db.createObjectStore("imt23_table", {keyPath: "imt23_id", autoIncrement: true});
            imt23Table.createIndex("reportNumber", "reportNumber");
            imt23Table.createIndex("fabricatedHeader", "fabricatedHeader");
            imt23Table.createIndex("partName", "partName");
            imt23Table.createIndex("partMaterial", "partMaterial");
            imt23Table.createIndex("partClaimed", "partClaimed");
            imt23Table.createIndex("partAssessed", "partAssessed");
            imt23Table.createIndex("natureOfDamage", "natureOfDamage");

            //for painting 75 25
//            paintingDetails.createIndex("paintLabour75", "paintLabour75");
//            paintingDetails.createIndex("paintMaterial25", "paintMaterial25");
            //for painting as schedule
//            paintingDetails.createIndex("paintVatOnMaterial", "paintVatOnMaterial");
//            paintingDetails.createIndex("paintVatTotal", "paintVatTotal");
//            paintingDetails.createIndex("paintServiceTaxOnLabour", "paintServiceTaxOnLabour");
//            paintingDetails.createIndex("paintServiceTaxLabourTotal", "paintServiceTaxLabourTotal");
//            paintingDetails.createIndex("paintSwachBharathCessOnLabour", "paintSwachBharathCessOnLabour");
//            paintingDetails.createIndex("paintSwachBharathCessTotal", "paintSwachBharathCessTotal");
//            paintingDetails.createIndex("paintKrishiKalyanCessOnLabour", "paintKrishiKalyanCessOnLabour");
//            paintingDetails.createIndex("paintKrishiKalyanCessTotal", "paintKrishiKalyanCessTotal");

            var summaryOfAssessmentTable = db.createObjectStore("summary_assessment", {keyPath: "summary_id", autoIncrement: true});
            summaryOfAssessmentTable.createIndex("reportNumber", "reportNumber");
            summaryOfAssessmentTable.createIndex("labourClaimed", "labourClaimed");
            summaryOfAssessmentTable.createIndex("partsClaimed", "partsClaimed");
            summaryOfAssessmentTable.createIndex("photosClaimed", "photosClaimed");
            summaryOfAssessmentTable.createIndex("photosAssessed", "photosAssessed");
            summaryOfAssessmentTable.createIndex("spotRepairClaimed", "spotRepairClaimed");
            summaryOfAssessmentTable.createIndex("spotRepairAssessed", "spotRepairAssessed");
            summaryOfAssessmentTable.createIndex("metalDepreciationPercentage", "metalDepreciationPercentage");
//            summaryOfAssessmentTable.createIndex("metalDepreciation", "metalDepreciation");
//            summaryOfAssessmentTable.createIndex("fibreDepreciation", "fibreDepreciation");
//            summaryOfAssessmentTable.createIndex("rubberDepreciation", "rubberDepreciation");
//            summaryOfAssessmentTable.createIndex("paintingDepreciation", "paintingDepreciation");
//            summaryOfAssessmentTable.createIndex("imt23LabourExcess", "imt23LabourExcess");
//            summaryOfAssessmentTable.createIndex("imt23PartsExcess", "imt23PartsExcess");
            summaryOfAssessmentTable.createIndex("compulsoryExcess", "compulsoryExcess");
            summaryOfAssessmentTable.createIndex("imposedExcess", "imposedExcess");
            summaryOfAssessmentTable.createIndex("voluntaryExcess", "voluntaryExcess");
            summaryOfAssessmentTable.createIndex("salvageValue", "salvageValue");
            summaryOfAssessmentTable.createIndex("liabilityInWords", "liabilityInWords");

            var surveyorObservationsTable = db.createObjectStore("surveyor_observation", {keyPath: "observation_id", autoIncrement: true});
            surveyorObservationsTable.createIndex("reportNumber", "reportNumber");
            surveyorObservationsTable.createIndex("observation", "observation");

            var spotSurveyorObservationsTable = db.createObjectStore("spot_observation", {keyPath: "spot_id", autoIncrement: true});
            spotSurveyorObservationsTable.createIndex("reportNumber", "reportNumber");
            spotSurveyorObservationsTable.createIndex("observation", "observation");

            //Bill table
            var billTable = db.createObjectStore("bill_details", {keyPath: "bill_id", autoIncrement: true});
            billTable.createIndex("reportNumber", "reportNumber");
            billTable.createIndex("spotOrPreliminarySurvey", "spotOrPreliminarySurvey");
            billTable.createIndex("finalSurvey", "finalSurvey");
            billTable.createIndex("reinspection", "reinspection");
            billTable.createIndex("opinion", "opinion");
            billTable.createIndex("billCheck", "billCheck");
            billTable.createIndex("travellingExpLocal", "travellingExpLocal");
            billTable.createIndex("placeOfSurveyLocal", "placeOfSurveyLocal");
            billTable.createIndex("distanceTravelledLocal", "distanceTravelledLocal");
            billTable.createIndex("travellingExpOutstation", "travellingExpOutstation");
            billTable.createIndex("placeOfSurveyOutstation", "placeOfSurveyOutstation");
            billTable.createIndex("distanceTravelledOutstation", "distanceTravelledOutstation");
            billTable.createIndex("photoQuantity", "photoQuantity");
            billTable.createIndex("photoRate", "photoRate");
            billTable.createIndex("outstationAllowance", "outstationAllowance");
            billTable.createIndex("postageCharges", "postageCharges");
            billTable.createIndex("billTotal", "billTotal");
            billTable.createIndex("totalInWords", "totalInWords");
            billTable.createIndex("billStatus", "billStatus");

            var insuranceCompaniesTable = db.createObjectStore("insurance_companies", {keyPath: "company_id", autoIncrement: true});
            insuranceCompaniesTable.createIndex("companyName", "companyName");
            insuranceCompaniesTable.createIndex("companyBranch", "companyBranch");
            insuranceCompaniesTable.createIndex("companyAddress", "companyAddress");
            insuranceCompaniesTable.createIndex("companyOffice", "companyOffice");
            insuranceCompaniesTable.createIndex("companyEmail", "companyEmail");
            insuranceCompaniesTable.createIndex("companyCode", "companyCode");

            var personalTable = db.createObjectStore("personal", {keyPath: "personal_id", autoIncrement: true});
            personalTable.createIndex("personalName", "personalName");
            personalTable.createIndex("personalDesignation", "personalDesignation");
            personalTable.createIndex("personalAddress", "personalAddress");
            personalTable.createIndex("personalOfficeNumber", "personalOfficeNumber");
            personalTable.createIndex("personalHomeNumber", "personalHomeNumber");
            personalTable.createIndex("personalMobile", "personalMobile");
            personalTable.createIndex("personalEmail", "personalEmail");
            personalTable.createIndex("personalLicense", "personalLicense");
            personalTable.createIndex("personalValidity", "personalValidity");
            personalTable.createIndex("personalPan", "personalPan");
            personalTable.createIndex("personalBankName", "personalBankName");
            personalTable.createIndex("personalBankBranch", "personalBankBranch");
            personalTable.createIndex("personalIfsCode", "personalIfsCode");
            personalTable.createIndex("personalMicrNumber", "personalMicrNumber");
            personalTable.createIndex("personalAccNumber", "personalAccNumber");

            db.close();

        };

    }

}

dbManager();
