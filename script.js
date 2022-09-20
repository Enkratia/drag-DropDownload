const dropArea = document.querySelector(".drag-area"),
  header = document.querySelector("header"),
  button = document.querySelector("button"),
  input = document.querySelector("input");

let file;

button.onclick = () => {
  input.click();
}

input.addEventListener("change", function () {
  file = this.files[0];
  dropArea.classList.add("active");
  showFile();
})

dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropArea.classList.add("active");
  header.textContent = "Release To Upload File";
})

dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active");
  header.textContent = "Drag & Drop to Upload File";
})

dropArea.addEventListener("drop", (event) => {
  file = event.dataTransfer.files[0];
  showFile();
})

function showFile() {
  let fileType = file.type;
  let validExtensions = ["image/jpg", "image/jpeg", "image/png"];

  if (validExtensions.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      let fileURL = fileReader.result;
      let imgTag = `<img src="${fileURL}" alt="">`;
      dropArea.innerHTML = imgTag;
    }
  } else {
    alert("This Is Not An Image File");
    header.textContent = "Drag & Drop to Upload File";
    dropArea.classList.remove("active");
  }
}
