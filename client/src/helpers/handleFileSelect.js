
export const handleFileSelect = async (e) => {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reader.abort();
      reject(new DOMException("Problem parsing input file."));
    };

    reader.onload = () => {
      resolve(reader.result);
    };
    const fileList = e.target.files;
    const file = fileList.item(fileList.length - 1);
    reader.readAsText(file);
  });
};
