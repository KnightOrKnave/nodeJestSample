const sqlcon=require('./sqlcon');




function main(){
  let fromDate=Date.now();
  let toDate=Date.now();
  let id="a0s98df7a908wy";
  let statuses=["ok"];

  //get from ~ to time duration recodes
  let r1=sqlcon.getRecordsInRange(fromDate,toDate)//DateTime,DateTime
  let r2=sqlcon.getRecordsById(id);//11304030
  let r3=sqlcon.getRecordsByUser(id); //adijoe90403
  let r4=sqlcon.getRecordsByStatus(statuses);//["ready","waiting","execution","succeeded","failed"]
  let r5=sqlcon.getSucceededRecords();
  let r6=sqlcon.getFailedRecords();


  //console.log(`${r1},${r2},${r3},${r4},${r5}`);
  return `${r1},${r2},${r3},${r4},${r5}`;
}

main();

module.exports=main;