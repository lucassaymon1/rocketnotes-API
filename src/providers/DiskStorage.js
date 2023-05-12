const fs = require("fs")
// fs module allows you to manipulate files
const path = require("path")
const uploadConfig = require("../configs/upload")

class DiskStorage{
  async saveFile(file){
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
      //path.resolve() will indicate the absolute path to the files to be renamed
    )

    return file
  }

  async deleteFile(file){
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file)

    try{
      await fs.promises.stat(filePath)
      //return the status of the file and if it is not ready for modification, try catch function will stop the operation before deleting the file
    }
    catch{
      return
    }
    await fs.promises.unlink(filePath)
  }
}

module.exports = DiskStorage