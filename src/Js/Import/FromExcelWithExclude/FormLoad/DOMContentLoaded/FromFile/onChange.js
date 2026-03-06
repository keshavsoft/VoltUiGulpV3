import { StartFunc as showInTable } from "./showInTable.js";

let StartFunc = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  // debugger
  if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
    reader.onload = (e) => {
      const data = e.target.result;
      // const workbook = XLSX.read(data, { type: "binary", cellDates: true, dateNF: 'YYYY-MM-DD' });
      // const workbook = XLSX.read(data, { raw: false });
      const workbook = XLSX.read(data, { type: 'binary', cellDates: true, dateNF: 'YYYY-MM-DD;@' });

      //  { cellDates: true }
      const firstSheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[firstSheetName], { raw: false });

      // const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], { header: 1, raw: false, dateNF: 'mm-dd-yy' });

      const jVarLocalNewArray = sheetData.map(element => {
        return {
          ...element,
          Date: excelDateToJSDate(element["KS-Date"]).toLocaleDateString('en-CA')
        }
      });
      console.log("sheetData : ", sheetData, jVarLocalNewArray);
      showInTable({ inData: jVarLocalNewArray });
    };

    reader.readAsBinaryString(file);
  }
};

function excelDateToJSDate(excelDate) {
  // Excel's epoch is Jan 1, 1900, but it incorrectly assumes 1900 was a leap year.
  // We start from Dec 31, 1899, which is Excel serial day 0.
  const excelEpoch = new Date(1899, 11, 31);

  // Convert the Excel day number to milliseconds.
  // Note: 86400000 is the number of milliseconds in a day (24 * 60 * 60 * 1000).
  const millisecondsPerDay = 86400000;
  const jsTimestamp = excelEpoch.getTime() + (excelDate * millisecondsPerDay);

  // Adjust for the 1900 leap year bug by subtracting one day if the date
  // is after February 28, 1900.
  // Excel date serial number 60 represents 29-Feb-1900.
  if (excelDate > 60) {
    return new Date(jsTimestamp - millisecondsPerDay);
  }

  return new Date(jsTimestamp);
}

export { StartFunc };
