const fs = require('fs');
const path = require('path');
const replaceFrom = "New folder"
const replaceTo = "myFolders"
const preview = false
const folder = __dirname

try {
    const data = fs.readdir(folder, (err, data) => {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder, item.replaceAll(replaceFrom, replaceTo));
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log("Renamed SuccessFully...");
                })
            }
            else {
                if ("data/" + item !== newFile)
                    console.log(`${item} Will Be Renamed To ${newFile}`)
            }
        }
    })
} catch (err) {
    console.error(err);
}