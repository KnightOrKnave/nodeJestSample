const main = require("../main");
const sqlcon = require("../sqlcon");

jest.mock("../sqlcon", () => ({
  getRecordsInRange: () => {
    return "r10";
  },
  getRecordsById:(id)=>{
    return "r20";
  },
  getRecordsByUser:()=>{
    return "r30";
  },
  getRecordsByStatus:()=>{
    return "r40"
  },
  getSucceededRecords:()=>{
    return "r50";
  },
  getFailedRecords:()=>{
    return "r60";
  },
}));

test("main case", () => {
  expect(main()).toBe("r1,r2,r3,r4,r5");
});
