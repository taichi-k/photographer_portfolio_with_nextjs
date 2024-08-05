export const getFilenameWithoutExtension = (fileName) => {
  return fileName.split("/").pop().split(".")[0]
}

export const getFileNamesDict = (files) => {
  let fileNamesDict = {}
  files.forEach((filePath) => {
    const [key, fileName] = getKeyAndFileNameFromFilePath(filePath)
    if (!(Object.keys(fileNamesDict).includes(key))) {
      fileNamesDict[key] = []
    }
    fileNamesDict[key].push(fileName)
  })
  return fileNamesDict;
}

export const makeFilePathWithoutPublicPrefix = (filePath) => {
  return filePath.replace("public", "")
}

export const getWorkInfoFromId = (works, id) => {
  return works.filter((work) => {
    return work["id"] == id
  })[0]
}

function getKeyAndFileNameFromFilePath(filePath) {
  const splitedFilePath = filePath.split("/")
  return [splitedFilePath[2], splitedFilePath[3]]
}