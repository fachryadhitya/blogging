export function createId(data) {
  const latestRecord = data[data.length - 1];
  const newId = latestRecord.id + 1;
  if (newId === NaN || newId < 0 || newId === undefined) {
    console.error("Invalid ID");
  }
  return newId;
}

export function findById(data, recordId) {
  const record = data.find((item) => item.id === parseInt(recordId));

  if (!record) {
    console.log("Record not found");
  }
  return record;
}

export function deleteById(data, recordId) {
  const index = data.findIndex(function (item) {
    return item.id === parseInt(recordId);
  });

  if (index == -1) {
    console.log("Invalid index");
  }
  data.splice(index, 1);
  return data;
}
