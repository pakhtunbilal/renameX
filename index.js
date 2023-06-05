const fs = require('fs');
const replacethis = "tohn";
const replacewith = "john";

try {
  const data = fs.readdir("data", (err, data)=>{
      console.log(data);
      for(let index = 0; index<data.length; index++){
        const item = data[index];
        let newfile = "data/" + item.replaceAll(replacethis,replacewith)
        fs.rename("data/" + item, newfile, ()=>{
            console.log("rename success")
            
        })
      }
  });

} catch (err) {
  console.error(err);
}
