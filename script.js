function tambah() {
  let input = document.getElementById("inputTugas");
  let teks = input.value;

  if (teks == "") {
    alert("Isi dulu tugasnya!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = teks;

  li.onclick = function() {
    li.classList.toggle("selesai");
  }

  let hapus = document.createElement("button");
  hapus.textContent = "Hapus";
  hapus.onclick = function() {
    li.remove();
  }

  li.appendChild(hapus);

  document.getElementById("daftar").appendChild(li);

  input.value = "";
}
