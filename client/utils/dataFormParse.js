exports.dataFormParse = data => {
  const formData = new FormData()
  if (data.files.length > 0) {
    data.files.map((file, index) => {
      if (!file.id) {
        formData.append(index, file)
      }
    })
  }

  const dataCount = Object.keys(data).length
  for (let index = 0; index < dataCount; index++) {
    const itemIndex = Object.keys(data)[index]
    const item =
      typeof data[itemIndex] === 'object' && data[itemIndex] !== null
        ? JSON.stringify(data[itemIndex])
        : data[itemIndex]

    if (item) {
      formData.append(itemIndex, item)
    }
  }

  return formData
}
