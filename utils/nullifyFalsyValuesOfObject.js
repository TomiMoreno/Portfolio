export function nullifyFalsyValuesOfObject(object) {
  const objectCopy = { ...object };
  for (const key in objectCopy) {
    if (!objectCopy[key]) {
      objectCopy[key] = null;
    }
  }
  return objectCopy;
}
