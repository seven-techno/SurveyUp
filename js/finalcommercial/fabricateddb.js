/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function updateFabricated(db, reportNo) {

    var key = IDBKeyRange.only(reportNo);

    var firstTransaction = db.transaction("fabricated_first", "readwrite");
    var firstStore = firstTransaction.objectStore("fabricated_first");
    var firstIndex = firstStore.index("reportNumber").openCursor(key);

    var secondTransaction = db.transaction("fabricated_second", "readwrite");
    var secondStore = secondTransaction.objectStore("fabricated_second");
    var secondIndex = secondStore.index("reportNumber").openCursor(key);

    var thirdTransaction = db.transaction("fabricated_third", "readwrite");
    var thirdStore = thirdTransaction.objectStore("fabricated_third");
    var thirdIndex = thirdStore.index("reportNumber").openCursor(key);

    var fourthTransaction = db.transaction("fabricated_fourth", "readwrite");
    var fourthStore = fourthTransaction.objectStore("fabricated_fourth");
    var fourthIndex = fourthStore.index("reportNumber").openCursor(key);

    var fifthTransaction = db.transaction("fabricated_fifth", "readwrite");
    var fifthStore = fifthTransaction.objectStore("fabricated_fifth");
    var fifthIndex = fifthStore.index("reportNumber").openCursor(key);

    var repairTransaction = db.transaction(["repair_table"], "readwrite");
    var repairStore = repairTransaction.objectStore("repair_table");
    var repairIndex = repairStore.index('reportNumber').openCursor(key);

    var paintingTransaction = db.transaction(["painting_table"], "readwrite");
    var paintingStore = paintingTransaction.objectStore("painting_table");
    var paintingIndex = paintingStore.index('reportNumber').openCursor(key);

    var deletedTransaction = db.transaction(["deleted_table"], "readwrite");
    var deletedStore = deletedTransaction.objectStore("deleted_table");
    var deletedIndex = deletedStore.index('reportNumber').openCursor(key);

    var imt23Transaction = db.transaction(["imt23_table"], "readwrite");
    var imt23Store = imt23Transaction.objectStore("imt23_table");
    var imt23Index = imt23Store.index('reportNumber').openCursor(key);

    var firstText = document.getElementById("fabricated_first_final_private_id");
    var firstPartName = document.getElementsByClassName("part_name_fab_first_class");
    var firstClaimed = document.getElementsByClassName("part_claimed_fab_first_class");
    var firstAssessed = document.getElementsByClassName("part_assessed_fab_first_class");
    var firstDamaged = document.getElementsByClassName("nature_of_damage_fab_first_class");
    var firstMaterial = document.getElementsByClassName("part_material_fab_first_class");
    var firstImt23 = document.getElementsByClassName("imt23_checkbox_fab_first_class");
    var firstDeleted = document.getElementsByClassName("deleted_reason_fab_first_class");

    var secondText = document.getElementById("fabricated_second_final_private_id");
    var secondPartName = document.getElementsByClassName("part_name_fab_second_class");
    var secondClaimed = document.getElementsByClassName("part_claimed_fab_second_class");
    var secondAssessed = document.getElementsByClassName("part_assessed_fab_second_class");
    var secondDamaged = document.getElementsByClassName("nature_of_damage_fab_second_class");
    var secondMaterial = document.getElementsByClassName("part_material_fab_second_class");
    var secondImt23 = document.getElementsByClassName("imt23_checkbox_fab_second_class");
    var secondDeleted = document.getElementsByClassName("deleted_reason_fab_second_class");

    var thirdText = document.getElementById("fabricated_third_final_private_id");
    var thirdPartName = document.getElementsByClassName("part_name_fab_third_class");
    var thirdClaimed = document.getElementsByClassName("part_claimed_fab_third_class");
    var thirdAssessed = document.getElementsByClassName("part_assessed_fab_third_class");
    var thirdDamaged = document.getElementsByClassName("nature_of_damage_fab_third_class");
    var thirdMaterial = document.getElementsByClassName("part_material_fab_third_class");
    var thirdImt23 = document.getElementsByClassName("imt23_checkbox_fab_third_class");
    var thirdDeleted = document.getElementsByClassName("deleted_reason_fab_third_class");

    var fourthText = document.getElementById("fabricated_fourth_final_private_id");
    var fourthPartName = document.getElementsByClassName("part_name_fab_fourth_class");
    var fourthClaimed = document.getElementsByClassName("part_claimed_fab_fourth_class");
    var fourthAssessed = document.getElementsByClassName("part_assessed_fab_fourth_class");
    var fourthDamaged = document.getElementsByClassName("nature_of_damage_fab_fourth_class");
    var fourthMaterial = document.getElementsByClassName("part_material_fab_fourth_class");
    var fourthImt23 = document.getElementsByClassName("imt23_checkbox_fab_fourth_class");
    var fourthDeleted = document.getElementsByClassName("deleted_reason_fab_fourth_class");

    var fifthText = document.getElementById("fabricated_fifth_final_private_id");
    var fifthPartName = document.getElementsByClassName("part_name_fab_fifth_class");
    var fifthClaimed = document.getElementsByClassName("part_claimed_fab_fifth_class");
    var fifthAssessed = document.getElementsByClassName("part_assessed_fab_fifth_class");
    var fifthDamaged = document.getElementsByClassName("nature_of_damage_fab_fifth_class");
    var fifthMaterial = document.getElementsByClassName("part_material_fab_fifth_class");
    var fifthImt23 = document.getElementsByClassName("imt23_checkbox_fab_fifth_class");
    var fifthDeleted = document.getElementsByClassName("deleted_reason_fab_fifth_class");

    firstIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            firstStore.delete(cursor.value.f1_id);

            cursor.continue();

        } else {

            if (firstText.value !== "") {

                for (var i = 0; i < firstPartName.length; i++) {


                    if (firstMaterial[i].options[firstMaterial[i].selectedIndex].value !== "Labour" && firstMaterial[i].options[firstMaterial[i].selectedIndex].value !== "Paint" && firstDeleted.value === "" && !firstImt23[i].checked ) {
                        firstStore.add({reportNumber: reportNo,
                            fabricatedHeader: firstText.value,
                            partName: firstPartName[i].value,
                            partMaterial: firstMaterial[i].options[firstMaterial[i].selectedIndex].value,
                            partClaimed: firstClaimed[i].value,
                            partAssessed: firstAssessed[i].value,
                            natureOfDamage: firstDamaged[i].value});

                    }

                }

            }

        }

    };

    secondIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            secondStore.delete(cursor.value.f2_id);

            cursor.continue();

        } else {

            if (secondText.value !== "") {

                for (var i = 0; i < secondPartName.length; i++) {

                    if (secondMaterial[i].options[secondMaterial[i].selectedIndex].value !== "Labour" && secondMaterial[i].options[secondMaterial[i].selectedIndex].value !== "Paint" &&
                            secondDeleted[i].value === "" && !secondImt23[i].checked) {

                        secondStore.add({reportNumber: reportNo,
                            fabricatedHeader: secondText.value,
                            partName: secondPartName[i].value,
                            partMaterial: secondMaterial[i].options[secondMaterial[i].selectedIndex].value,
                            partClaimed: secondClaimed[i].value,
                            partAssessed: secondAssessed[i].value,
                            natureOfDamage: secondDamaged[i].value});

                    }

                }

            }

        }

    };

    thirdIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            thirdStore.delete(cursor.value.f3_id);

            cursor.continue();

        } else {

            if (thirdText.value !== "") {

                for (var i = 0; i < thirdPartName.length; i++) {

                    if (thirdMaterial[i].options[thirdMaterial[i].selectedIndex].value !== "Labour" && thirdMaterial[i].options[thirdMaterial[i].selectedIndex].value !== "Paint" &&
                            thirdDeleted[i].value === "" && !thirdImt23[i].checked) {

                        thirdStore.add({reportNumber: reportNo,
                            fabricatedHeader: thirdText.value,
                            partName: thirdPartName[i].value,
                            partMaterial: thirdMaterial[i].options[thirdMaterial[i].selectedIndex].value,
                            partClaimed: thirdClaimed[i].value,
                            partAssessed: thirdAssessed[i].value,
                            natureOfDamage: thirdDamaged[i].value});

                    }

                }

            }

        }

    };

    fourthIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            fourthStore.delete(cursor.value.f4_id);

            cursor.continue();

        } else {

            if (fourthText.value !== "") {

                for (var i = 0; i < fourthPartName.length; i++) {

                    if (fourthMaterial[i].options[fourthMaterial[i].selectedIndex].value !== "Labour" && fourthMaterial[i].options[fourthMaterial[i].selectedIndex].value !== "Paint" &&
                            fourthDeleted[i].value === "" && !fourthImt23[i].checked) {

                        fourthStore.add({reportNumber: reportNo,
                            fabricatedHeader: fourthText.value,
                            partName: fourthPartName[i].value,
                            partMaterial: fourthMaterial[i].options[fourthMaterial[i].selectedIndex].value,
                            partClaimed: fourthClaimed[i].value,
                            partAssessed: fourthAssessed[i].value,
                            natureOfDamage: fourthDamaged[i].value});

                    }

                }

            }

        }

    };

    fifthIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            fifthStore.delete(cursor.value.f5_id);

            cursor.continue();

        } else {

            if (fifthText.value !== "") {

                for (var i = 0; i < fifthPartName.length; i++) {

                    if (fifthMaterial[i].options[fifthMaterial[i].selectedIndex].value !== "Labour" && fifthMaterial[i].options[fifthMaterial[i].selectedIndex].value !== "Paint" &&
                            fifthDeleted[i].value === "" && !fifthImt23[i].checked) {

                        fifthStore.add({reportNumber: reportNo,
                            fabricatedHeader: fifthText.value,
                            partName: fifthPartName[i].value,
                            partMaterial: fifthMaterial[i].options[fifthMaterial[i].selectedIndex].value,
                            partClaimed: fifthClaimed[i].value,
                            partAssessed: fifthAssessed[i].value,
                            natureOfDamage: fifthDamaged[i].value});

                    }

                }

            }

        }

    };

    repairIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            repairStore.delete(cursor.value.repair_table_id);

            cursor.continue();

        } else {

            if (firstText.value !== "") {

                for (var i = 0; i < firstPartName.length; i++) {

                    if (firstMaterial[i].options[firstMaterial[i].selectedIndex].value === "Labour" && firstDeleted[i].value === "" && !firstImt23[i].checked) {

                        repairStore.add({reportNumber: reportNo,
                            fabricatedHeader: firstText.value,
                            repairedName: firstPartName[i].value,
                            repairedClaimed: firstClaimed[i].value,
                            repairedAssessed: firstAssessed[i].value,
                            natureOfDamage: firstDamaged[i].value});

                    }

                }

            }

            if (secondText.value !== "") {

                for (var i = 0; i < secondPartName.length; i++) {

                    if (secondMaterial[i].options[secondMaterial[i].selectedIndex].value === "Labour" && secondDeleted[i].value === "" && !secondImt23[i].checked) {

                        repairStore.add({reportNumber: reportNo,
                            fabricatedHeader: secondText.value,
                            repairedName: secondPartName[i].value,
                            repairedClaimed: secondClaimed[i].value,
                            repairedAssessed: secondAssessed[i].value,
                            natureOfDamage: secondDamaged[i].value});

                    }

                }

            }

            if (thirdText.value !== "") {

                for (var i = 0; i < thirdPartName.length; i++) {

                    if (thirdMaterial[i].options[thirdMaterial[i].selectedIndex].value === "Labour" && thirdDeleted[i].value === "" && !thirdImt23[i].checked) {

                        repairStore.add({reportNumber: reportNo,
                            fabricatedHeader: thirdText.value,
                            repairedName: thirdPartName[i].value,
                            repairedClaimed: thirdClaimed[i].value,
                            repairedAssessed: thirdAssessed[i].value,
                            natureOfDamage: thirdDamaged[i].value});

                    }

                }

            }

            if (fourthText.value !== "") {

                for (var i = 0; i < fourthPartName.length; i++) {

                    if (fourthMaterial[i].options[fourthMaterial[i].selectedIndex].value === "Labour" && fourthDeleted[i].value === "" && !fourthImt23[i].checked) {

                        repairStore.add({reportNumber: reportNo,
                            fabricatedHeader: fourthText.value,
                            repairedName: fourthPartName[i].value,
                            repairedClaimed: fourthClaimed[i].value,
                            repairedAssessed: fourthAssessed[i].value,
                            natureOfDamage: fourthDamaged[i].value});

                    }

                }

            }

            if (fifthText.value !== "") {

                for (var i = 0; i < fifthPartName.length; i++) {

                    if (fifthMaterial[i].options[fifthMaterial[i].selectedIndex].value === "Labour" && fifthDeleted[i].value === "" && !fifthImt23[i].checked) {

                        repairStore.add({reportNumber: reportNo,
                            fabricatedHeader: fifthText.value,
                            repairedName: fifthPartName[i].value,
                            repairedClaimed: fifthClaimed[i].value,
                            repairedAssessed: fifthAssessed[i].value,
                            natureOfDamage: fifthDamaged[i].value});

                    }

                }

            }

        }

    };

    paintingIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            paintingStore.delete(cursor.value.painting_table_id);

            cursor.continue();

        } else {

            if (firstText.value !== "") {

                for (var i = 0; i < firstPartName.length; i++) {

                    if (firstMaterial[i].options[firstMaterial[i].selectedIndex].value === "Paint" && firstDeleted[i].value === "" && !firstImt23[i].checked) {

                        paintingStore.add({reportNumber: reportNo,
                            fabricatedHeader: firstText.value,
                            paintDescription: firstPartName[i].value,
                            paintClaimed: firstClaimed[i].value,
                            paintAssessed: firstAssessed[i].value});

                    }

                }

            }

            if (secondText.value !== "") {

                for (var i = 0; i < secondPartName.length; i++) {

                    if (secondMaterial[i].options[secondMaterial[i].selectedIndex].value === "Paint" && secondDeleted[i].value === "" && !secondImt23[i].checked) {

                        paintingStore.add({reportNumber: reportNo,
                            fabricatedHeader: secondText.value,
                            paintDescription: secondPartName[i].value,
                            paintClaimed: secondClaimed[i].value,
                            paintAssessed: secondAssessed[i].value});

                    }

                }

            }

            if (thirdText.value !== "") {

                for (var i = 0; i < thirdPartName.length; i++) {

                    if (thirdMaterial[i].options[thirdMaterial[i].selectedIndex].value === "Paint" && thirdDeleted[i].value === "" && !thirdImt23[i].checked) {

                        paintingStore.add({reportNumber: reportNo,
                            fabricatedHeader: thirdText.value,
                            paintDescription: thirdPartName[i].value,
                            paintClaimed: thirdClaimed[i].value,
                            paintAssessed: thirdAssessed[i].value});

                    }

                }

            }

            if (fourthText.value !== "") {

                for (var i = 0; i < fourthPartName.length; i++) {

                    if (fourthMaterial[i].options[fourthMaterial[i].selectedIndex].value === "Paint" && fourthDeleted[i].value === "" && !fourthImt23[i].checked) {

                        paintingStore.add({reportNumber: reportNo,
                            fabricatedHeader: fourthText.value,
                            paintDescription: fourthPartName[i].value,
                            paintClaimed: fourthClaimed[i].value,
                            paintAssessed: fourthAssessed[i].value});

                    }

                }

            }

            if (fifthText.value !== "") {

                for (var i = 0; i < fifthPartName.length; i++) {

                    if (fifthMaterial[i].options[fifthMaterial[i].selectedIndex].value === "Paint" && fifthDeleted[i].value === "" && !fifthImt23[i].checked) {

                        paintingStore.add({reportNumber: reportNo,
                            fabricatedHeader: fifthText.value,
                            paintDescription: fifthPartName[i].value,
                            paintClaimed: fifthClaimed[i].value,
                            paintAssessed: fifthAssessed[i].value});

                    }

                }

            }

        }

    };

    deletedIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            deletedStore.delete(cursor.value.deleted_table_id);

            cursor.continue();

        } else {

            if (firstText.value !== "") {

                for (var i = 0; i < firstPartName.length; i++) {

                    if (firstDeleted[i].value !== "" && !firstImt23[i].checked) {

                        deletedStore.add({reportNumber: reportNo,
                            fabricatedHeader: firstText.value,
                            deletedPart: firstPartName[i].value,
                            deletedClaimed: firstClaimed[i].value,
                            deletedAssessed: firstAssessed[i].value,
                            deletedReason: firstDeleted[i].value});

                    }

                }

            }

            if (secondText.value !== "") {

                for (var i = 0; i < secondPartName.length; i++) {

                    if (secondDeleted[i].value !== "" && !secondImt23[i].checked) {

                        deletedStore.add({reportNumber: reportNo,
                            fabricatedHeader: secondText.value,
                            deletedPart: secondPartName[i].value,
                            deletedClaimed: secondClaimed[i].value,
                            deletedAssessed: secondAssessed[i].value,
                            deletedReason: secondDeleted[i].value});

                    }

                }

            }

            if (thirdText.value !== "") {

                for (var i = 0; i < thirdPartName.length; i++) {

                    if (thirdDeleted[i].value !== "" && !thirdImt23[i].checked) {

                        deletedStore.add({reportNumber: reportNo,
                            fabricatedHeader: thirdText.value,
                            deletedPart: thirdPartName[i].value,
                            deletedClaimed: thirdClaimed[i].value,
                            deletedAssessed: thirdAssessed[i].value,
                            deletedReason: thirdDeleted[i].value});

                    }

                }

            }

            if (fourthText.value !== "") {

                for (var i = 0; i < fourthPartName.length; i++) {

                    if (fourthDeleted[i].value !== "" && !fourthImt23[i].checked) {

                        deletedStore.add({reportNumber: reportNo,
                            fabricatedHeader: fourthText.value,
                            deletedPart: fourthPartName[i].value,
                            deletedClaimed: fourthClaimed[i].value,
                            deletedAssessed: fourthAssessed[i].value,
                            deletedReason: fourthDeleted[i].value});

                    }

                }

            }

            if (fifthText.value !== "") {

                for (var i = 0; i < fifthPartName.length; i++) {

                    if (fifthDeleted[i].value !== "" && !fifthImt23[i].checked) {

                        deletedStore.add({reportNumber: reportNo,
                            fabricatedHeader: fifthText.value,
                            deletedPart: fifthPartName[i].value,
                            deletedClaimed: fifthClaimed[i].value,
                            deletedAssessed: fifthAssessed[i].value,
                            deletedReason: fifthDeleted[i].value});

                    }

                }

            }

        }

    };

    imt23Index.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            imt23Store.delete(cursor.value.imt23_id);

            cursor.continue();

        } else {

            if (firstText.value !== "") {

                for (var i = 0; i < firstPartName.length; i++) {

                    if (firstDeleted[i].value === "" && firstImt23[i].checked) {

                        imt23Store.add({reportNumber: reportNo,
                            fabricatedHeader: firstText.value,
                            partName: firstPartName[i].value,
                            partClaimed: firstClaimed[i].value,
                            partAssessed: firstAssessed[i].value,
                            partMaterial: firstMaterial[i].options[firstMaterial[i].selectedIndex].value,
                            natureOfDamage: firstDamaged[i].value});

                    }

                }

            }

            if (secondText.value !== "") {

                for (var i = 0; i < secondPartName.length; i++) {

                    if (secondDeleted[i].value === "" && secondImt23[i].checked) {

                        imt23Store.add({reportNumber: reportNo,
                            fabricatedHeader: secondText.value,
                            partName: secondPartName[i].value,
                            partClaimed: secondClaimed[i].value,
                            partAssessed: secondAssessed[i].value,
                            partMaterial: secondMaterial[i].options[secondMaterial[i].selectedIndex].value,
                            natureOfDamage: secondDamaged[i].value});

                    }

                }

            }

            if (thirdText.value !== "") {

                for (var i = 0; i < thirdPartName.length; i++) {

                    if (thirdDeleted[i].value === "" && thirdImt23[i].checked) {

                        imt23Store.add({reportNumber: reportNo,
                            fabricatedHeader: thirdText.value,
                            partName: thirdPartName[i].value,
                            partClaimed: thirdClaimed[i].value,
                            partAssessed: thirdAssessed[i].value,
                            partMaterial: thirdMaterial[i].options[thirdMaterial[i].selectedIndex].value,
                            natureOfDamage: thirdDamaged[i].value});

                    }

                }

            }

            if (fourthText.value !== "") {

                for (var i = 0; i < fourthPartName.length; i++) {

                    if (fourthDeleted[i].value === "" && fourthImt23[i].checked) {

                        imt23Store.add({reportNumber: reportNo,
                            fabricatedHeader: fourthText.value,
                            partName: fourthPartName[i].value,
                            partClaimed: fourthClaimed[i].value,
                            partAssessed: fourthAssessed[i].value,
                            partMaterial: fourthMaterial[i].options[fourthMaterial[i].selectedIndex].value,
                            natureOfDamage: fourthDamaged[i].value});

                    }

                }

            }

            if (fifthText.value !== "") {

                for (var i = 0; i < fifthPartName.length; i++) {

                    if (fifthDeleted[i].value === "" && fifthImt23[i].checked) {

                        imt23Store.add({reportNumber: reportNo,
                            fabricatedHeader: fifthText.value,
                            partName: fifthPartName[i].value,
                            partClaimed: fifthClaimed[i].value,
                            partAssessed: fifthAssessed[i].value,
                            partMaterial: fifthMaterial[i].options[fifthMaterial[i].selectedIndex].value,
                            natureOfDamage: fifthDamaged[i].value});

                    }

                }

            }

        }

    };

}

function loadFabricated(db, reportNo) {

    var key = IDBKeyRange.only(reportNo);

    var firstTable = document.getElementById("fabricated_first_table");
    var secondTable = document.getElementById("fabricated_second_table");
    var thirdTable = document.getElementById("fabricated_third_table");
    var fourthTable = document.getElementById("fabricated_fourth_table");
    var fifthTable = document.getElementById("fabricated_fifth_table");

    var firstText = document.getElementById("fabricated_first_final_private_id");
    var secondText = document.getElementById("fabricated_second_final_private_id");
    var thirdText = document.getElementById("fabricated_third_final_private_id");
    var fourthText = document.getElementById("fabricated_fourth_final_private_id");
    var fifthText = document.getElementById("fabricated_fifth_final_private_id");

    var firstTransaction = db.transaction("fabricated_first", "readwrite");
    var firstStore = firstTransaction.objectStore("fabricated_first");
    var firstIndex = firstStore.index("reportNumber").openCursor(key);

    firstIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            firstText.value = cursor.value.fabricatedHeader;

            loadTable(db, cursor.value.fabricatedHeader, firstTable, cursor);

        }

    };

    var secondTransaction = db.transaction("fabricated_second", "readwrite");
    var secondStore = secondTransaction.objectStore("fabricated_second");
    var secondIndex = secondStore.index("reportNumber").openCursor(key);

    secondIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            secondText.value = cursor.value.fabricatedHeader;

            loadTable(db, cursor.value.fabricatedHeader, secondTable, cursor);

        }

    };

    var thirdTransaction = db.transaction("fabricated_third", "readwrite");
    var thirdStore = thirdTransaction.objectStore("fabricated_third");
    var thirdIndex = thirdStore.index("reportNumber").openCursor(key);

    thirdIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            thirdText.value = cursor.value.fabricatedHeader;

            loadTable(db, cursor.value.fabricatedHeader, thirdTable, cursor);

        }

    };

    var fourthTransaction = db.transaction("fabricated_fourth", "readwrite");
    var fourthStore = fourthTransaction.objectStore("fabricated_fourth");
    var fourthIndex = fourthStore.index("reportNumber").openCursor(key);

    fourthIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            fourthText.value = cursor.value.fabricatedHeader;

            loadTable(cursor.value.fabricatedHeader, fourthTable, cursor);

        }

    };

    var fifthTransaction = db.transaction("fabricated_fifth", "readwrite");
    var fifthStore = fifthTransaction.objectStore("fabricated_fifth");
    var fifthIndex = fifthStore.index("reportNumber").openCursor(key);

    fifthIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            fifthText.value = cursor.value.fabricatedHeader;

            loadTable(cursor.value.fabricatedHeader, fifthTable, cursor);

        }

    };

}

function loadTable(db, fabricatedHeader, table, cursor) {

    var fabKey = IDBKeyRange.only(fabricatedHeader);

    if (cursor) {

        var rowCount = table.childElementCount;

        var rowDiv = document.createElement('div');
        rowDiv.className = 'table_row_class';
        rowDiv.id = "d" + rowCount;

        var slNoCell = document.createElement('div');
        slNoCell.className = 'table_cell_class';
        var slNo = document.createElement('div');
        slNo.className = 'dslno';
        slNo.innerHTML = rowCount;
        slNoCell.appendChild(slNo);
        rowDiv.appendChild(slNoCell);

        var partNameCell = document.createElement('div');
        partNameCell.className = 'table_cell_class';
        var partName = document.createElement('input');
        partName.className = 'part_name_class';
        partName.className += ' form-control';
        partName.type = 'text';
        partName.value = cursor.value.partName;
        partNameCell.appendChild(partName);
        rowDiv.appendChild(partNameCell);

        var claimedCell = document.createElement('div');
        claimedCell.className = 'table_cell_class';
        var claimed = document.createElement('input');
        claimed.className = 'part_claimed_class';
        claimed.className += ' form-control';
        claimed.id = 'claimed' + rowCount;
        claimed.style.textAlign = 'right';
        claimed.type = 'number';
        claimed.min = 0;
        claimed.max = 999999;
        claimed.value = cursor.value.partClaimed;
        claimed.onblur = function () {

            vatCalculation(claimed.id);

        };
        claimedCell.appendChild(claimed);
        rowDiv.appendChild(claimedCell);

        var assessedCell = document.createElement('div');
        assessedCell.className = 'table_cell_class';
        var assessed = document.createElement('input');
        assessed.className = 'part_assessed_class';
        assessed.className += ' form-control';
        assessed.id = 'assessed' + rowCount;
        assessed.style.textAlign = 'right';
        assessed.type = 'number';
        assessed.min = 0;
        assessed.max = 999999;
        assessed.value = cursor.value.partAssessed;
        assessed.onblur = function () {

            vatCalculation(assessed.id);

        };
        assessedCell.appendChild(assessed);
        rowDiv.appendChild(assessedCell);

        var natureOfDamagedCell = document.createElement('div');
        natureOfDamagedCell.className = 'table_cell_class';
        var natureOfDamage = document.createElement('textarea');
        natureOfDamage.className = 'nature_of_damage_class';
        natureOfDamage.className += ' form-control';
        natureOfDamage.rows = 3;
        natureOfDamage.cols = 20;
        natureOfDamage.value = cursor.value.natureOfDamage;
        natureOfDamagedCell.appendChild(natureOfDamage);
        rowDiv.appendChild(natureOfDamagedCell);

        var partSelectCell = document.createElement('div');
        partSelectCell.className = 'table_cell_class';
        var partSelect = document.createElement('select');
        partSelect.className = 'part_material_class';
        partSelect.className += ' form-control';
        partSelect.options.add(new Option("Fibre", "Fibre", true, true));
        partSelect.options.add(new Option("Glass", "Glass"));
        partSelect.options.add(new Option("Metal", "Metal"));
        partSelect.options.add(new Option("Plastic", "Plastic"));
        partSelect.options.add(new Option("Rubber", "Rubber"));
        partSelect.options.add(new Option("Labour", "Labour"));
        partSelect.options.add(new Option("Paint", "Paint"));
        partSelect.value = cursor.value.partMaterial;
        partSelectCell.appendChild(partSelect);
        rowDiv.appendChild(partSelectCell);

        //show only if commercial
        var imt23CheckboxCell = document.createElement('div');
        imt23CheckboxCell.className = 'table_cell_class';
        imt23CheckboxCell.className += ' imt23';
        var imt23Checkbox = document.createElement('input');
        imt23Checkbox.className = 'imt23_checkbox_class';
        imt23Checkbox.className += ' form-control';
        imt23Checkbox.type = 'checkbox';
        imt23Checkbox.checked = cursor.value.partImt23;
        imt23CheckboxCell.appendChild(imt23Checkbox);
        rowDiv.appendChild(imt23CheckboxCell);

        var deletedReasonCell = document.createElement('div');
        deletedReasonCell.className = 'table_cell_class';
        deletedReasonCell.className += ' deleted_reason_cell_class';
        var deletedReason = document.createElement('textarea');
        deletedReason.id = 'deleted_reason' + rowCount;
        deletedReason.className = 'deleted_reason_class';
        deletedReason.className += ' form-control';
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

            removeRow(2, rowDiv.id);

        };
        deleteRowCell.appendChild(deleteRow);
        rowDiv.appendChild(deleteRowCell);

        table.appendChild(rowDiv);

        cursor.continue();

    }

    var deletedTransaction = db.transaction(["deleted_table"], "readwrite");
    var deletedStore = deletedTransaction.objectStore("deleted_table");
    var deletedIndex = deletedStore.index('fabricatedHeader').openCursor(fabKey);

    deletedIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            var rowCount = table.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "d" + rowCount;


            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'dslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partName.value = cursor.value.deletedPart;
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');
            claimed.className = 'part_claimed_class';
            claimed.className += ' form-control';
            claimed.id = 'claimed' + rowCount;
            claimed.style.textAlign = 'right';
            claimed.type = 'number';
            claimed.min = 0;
            claimed.max = 999999;
            claimed.value = cursor.value.deletedClaimed;
            claimed.onblur = function () {

                vatCalculation(claimed.id);

            };
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var assessedCell = document.createElement('div');
            assessedCell.className = 'table_cell_class';
            var assessed = document.createElement('input');
            assessed.className = 'part_assessed_class';
            assessed.className += "form-control";
            assessed.id = 'assessed' + rowCount;
            assessed.style.textAlign = 'right';
            assessed.type = 'number';
            assessed.min = 0;
            assessed.max = 999999;
            assessed.value = cursor.value.deletedAssessed;
            assessed.onblur = function () {

                vatCalculation(assessed.id);

            };
            assessedCell.appendChild(assessed);
            rowDiv.appendChild(assessedCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_class';
            natureOfDamage.className += 'form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamage.value = cursor.value.natureOfDamage;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = 'part_material_class';
            partSelect.className += ' form-control';
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelect.value = cursor.value.deletedMaterial;
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            imt23CheckboxCell.className += ' imt23';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            deletedReasonCell.className += ' deleted_reason_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.id = 'deleted_reason' + rowCount;
            deletedReason.className = 'deleted_reason_class';
            deletedReason.className += ' form-control';
            deletedReason.rows = 3;
            deletedReason.cols = 20;
            deletedReason.value = cursor.value.deletedReason;
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

                removeRow(2, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            table.appendChild(rowDiv);

            cursor.continue();

        }

    };

    var repairTransaction = db.transaction(["repair_table"], "readwrite");
    var repairStore = repairTransaction.objectStore("repair_table");
    var repairIndex = repairStore.index('fabricatedHeader').openCursor(fabKey);

    repairIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            var rowCount = table.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "d" + rowCount;


            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'dslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partName.value = cursor.value.repairedPart;
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');
            claimed.className = 'part_claimed_class';
            claimed.className += ' form-control';
            claimed.id = 'claimed' + rowCount;
            claimed.style.textAlign = 'right';
            claimed.type = 'number';
            claimed.min = 0;
            claimed.max = 999999;
            claimed.value = cursor.value.repairedClaimed;
            claimed.onblur = function () {

                vatCalculation(claimed.id);

            };
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var assessedCell = document.createElement('div');
            assessedCell.className = 'table_cell_class';
            var assessed = document.createElement('input');
            assessed.className = 'part_assessed_class';
            assessed.className += ' form-control';
            assessed.id = 'assessed' + rowCount;
            assessed.style.textAlign = 'right';
            assessed.type = 'number';
            assessed.min = 0;
            assessed.max = 999999;
            assessed.value = cursor.value.repairedAssessed;
            assessed.onblur = function () {

                vatCalculation(assessed.id);

            };
            assessedCell.appendChild(assessed);
            rowDiv.appendChild(assessedCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_class';
            natureOfDamage.className += 'form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamage.value = cursor.value.natureOfDamage;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = 'part_material_class';
            partSelect.className += ' form-control';
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelect.value = cursor.value.repairedMaterial;
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            imt23CheckboxCell.className += ' imt23';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_class';
            imt23Checkbox.className += ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            deletedReasonCell.className += ' deleted_reason_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.id = 'deleted_reason' + rowCount;
            deletedReason.className = 'deleted_reason_class';
            deletedReason.className += ' form-control';
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

                removeRow(2, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            table.appendChild(rowDiv);

            cursor.continue();

        }


    };

    var paintingTransaction = db.transaction(["painting_table"], "readwrite");
    var paintingStore = paintingTransaction.objectStore("painting_table");
    var paintingIndex = paintingStore.index('fabricatedHeader').openCursor(fabKey);

    paintingIndex.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            var rowCount = table.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "d" + rowCount;


            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'dslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partName.value = cursor.value.paintDescription;
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');
            claimed.className = 'part_claimed_class';
            claimed.className += ' form-control';
            claimed.id = 'claimed' + rowCount;
            claimed.style.textAlign = 'right';
            claimed.type = 'number';
            claimed.min = 0;
            claimed.max = 999999;
            claimed.value = cursor.value.paintClaimed;
            claimed.onblur = function () {

                vatCalculation(claimed.id);

            };
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var assessedCell = document.createElement('div');
            assessedCell.className = 'table_cell_class';
            var assessed = document.createElement('input');
            assessed.className = 'part_assessed_class';
            assessed.className += ' form-control';
            assessed.id = 'assessed' + rowCount;
            assessed.style.textAlign = 'right';
            assessed.type = 'number';
            assessed.min = 0;
            assessed.max = 999999;
            assessed.value = cursor.value.paintAssessed;
            assessed.onblur = function () {

                vatCalculation(assessed.id);

            };
            assessedCell.appendChild(assessed);
            rowDiv.appendChild(assessedCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = 'part_material_class';
            partSelect.className += ' form-control';
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelect.value = "Paint";
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            imt23CheckboxCell.className += ' imt23';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_class';
            imt23Checkbox.className = ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23Checkbox.checked = cursor.value.partImt23;
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            deletedReasonCell.className += ' deleted_reason_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.id = 'deleted_reason' + rowCount;
            deletedReason.className = 'deleted_reason_class';
            deletedReason.className += ' form-control';
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

                removeRow(2, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            table.appendChild(rowDiv);

            cursor.continue();

        }

    };

    var imt23Transaction = db.transaction(["imt23_table"], "readwrite");
    var imt23Store = imt23Transaction.objectStore("imt23_table");
    var imt23Index = imt23Store.index('fabricatedHeader').openCursor(fabKey);

    imt23Index.onsuccess = function (event) {

        var cursor = event.target.result;

        if (cursor) {

            var rowCount = table.childElementCount;

            var rowDiv = document.createElement('div');
            rowDiv.className = 'table_row_class';
            rowDiv.id = "d" + rowCount;


            var slNoCell = document.createElement('div');
            slNoCell.className = 'table_cell_class';
            var slNo = document.createElement('div');
            slNo.className = 'dslno';
            slNo.innerHTML = rowCount;
            slNoCell.appendChild(slNo);
            rowDiv.appendChild(slNoCell);

            var partNameCell = document.createElement('div');
            partNameCell.className = 'table_cell_class';
            var partName = document.createElement('input');
            partName.className = 'part_name_class';
            partName.className += ' form-control';
            partName.type = 'text';
            partName.value = cursor.value.partName;
            partNameCell.appendChild(partName);
            rowDiv.appendChild(partNameCell);

            var claimedCell = document.createElement('div');
            claimedCell.className = 'table_cell_class';
            var claimed = document.createElement('input');
            claimed.className = 'part_claimed_class';
            claimed.className += ' form-control';
            claimed.id = 'claimed' + rowCount;
            claimed.style.textAlign = 'right';
            claimed.type = 'number';
            claimed.min = 0;
            claimed.max = 999999;
            claimed.value = cursor.value.partClaimed;
            claimed.onblur = function () {

                vatCalculation(claimed.id);

            };
            claimedCell.appendChild(claimed);
            rowDiv.appendChild(claimedCell);

            var assessedCell = document.createElement('div');
            assessedCell.className = 'table_cell_class';
            var assessed = document.createElement('input');
            assessed.className = 'part_assessed_class';
            assessed.className += ' form-control';
            assessed.id = 'assessed' + rowCount;
            assessed.style.textAlign = 'right';
            assessed.type = 'number';
            assessed.min = 0;
            assessed.max = 999999;
            assessed.value = cursor.value.partAssessed;
            assessed.onblur = function () {

                vatCalculation(assessed.id);

            };
            assessedCell.appendChild(assessed);
            rowDiv.appendChild(assessedCell);

            var natureOfDamagedCell = document.createElement('div');
            natureOfDamagedCell.className = 'table_cell_class';
            var natureOfDamage = document.createElement('textarea');
            natureOfDamage.className = 'nature_of_damage_class';
            natureOfDamage.className += ' form-control';
            natureOfDamage.rows = 3;
            natureOfDamage.cols = 20;
            natureOfDamage.value = cursor.value.natureOfDamage;
            natureOfDamagedCell.appendChild(natureOfDamage);
            rowDiv.appendChild(natureOfDamagedCell);

            var partSelectCell = document.createElement('div');
            partSelectCell.className = 'table_cell_class';
            var partSelect = document.createElement('select');
            partSelect.className = 'part_material_class';
            partSelect.className += ' form-control';
            partSelect.options.add(new Option("Fibre", "Fibre", true, true));
            partSelect.options.add(new Option("Glass", "Glass"));
            partSelect.options.add(new Option("Metal", "Metal"));
            partSelect.options.add(new Option("Plastic", "Plastic"));
            partSelect.options.add(new Option("Rubber", "Rubber"));
            partSelect.options.add(new Option("Labour", "Labour"));
            partSelect.options.add(new Option("Paint", "Paint"));
            partSelect.value = cursor.value.partMaterial;
            partSelectCell.appendChild(partSelect);
            rowDiv.appendChild(partSelectCell);

            //show only if commercial
            var imt23CheckboxCell = document.createElement('div');
            imt23CheckboxCell.className = 'table_cell_class';
            imt23CheckboxCell.className += ' imt23';
            var imt23Checkbox = document.createElement('input');
            imt23Checkbox.className = 'imt23_checkbox_class';
            imt23Checkbox.className = ' form-control';
            imt23Checkbox.type = 'checkbox';
            imt23Checkbox.checked = true;
            imt23CheckboxCell.appendChild(imt23Checkbox);
            rowDiv.appendChild(imt23CheckboxCell);

            var deletedReasonCell = document.createElement('div');
            deletedReasonCell.className = 'table_cell_class';
            deletedReasonCell.className += ' deleted_reason_cell_class';
            var deletedReason = document.createElement('textarea');
            deletedReason.id = 'deleted_reason' + rowCount;
            deletedReason.className = 'deleted_reason_class';
            deletedReason.className += ' form-control';
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

                removeRow(2, rowDiv.id);

            };
            deleteRowCell.appendChild(deleteRow);
            rowDiv.appendChild(deleteRowCell);

            table.appendChild(rowDiv);

            cursor.continue();

        }

    };

}
