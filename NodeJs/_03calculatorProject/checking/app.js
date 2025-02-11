const fs = require('fs');
console.log("1.start of script");

console.log('2 reading file synch')
const dataSync = fs.writeFileSync('user.tst','utf8')
console.log('3. synch read complete')
console.log('4.reading file asynch')
fs.writeFile('user-detail.txt', 'utf', (err, dataAsynch)=>{
    if(err) throw err;
    console.log('6.asynch')
});

console.log('5. end of script')