export const genetareId = () => {
  const id = new Uint32Array(1);
  window.crypto.getRandomValues(id);

  return id
}

export default { genetareId }
