const fs = require('fs');
const replaceFrom = "harry"
const replaceTo = "DD"
const preview = true
try {
    const data = fs.readdir("data", (err, data) => {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let newFile = "data/" + item.replaceAll(replaceFrom, replaceTo);
            if (!preview) {
                fs.rename(`data/${item}`, newFile, () => {
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