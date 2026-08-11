const inputtugas = document.getElementById("inputtugas");

const button = document.querySelector("button");

const todolist = document.getElementById("todolist");

const history = document.getElementById("history");

button.addEventListener("click", function (event) {
    event.preventDefault();
    const tugas = inputtugas.value.trim();
    if (tugas === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }
    const li = document.createElement("li");
    li.textContent = tugas;

    const sudah = document.createElement("button");
    sudah.textContent = "sudah ";

    const untukhapus = document.createElement("button");
    untukhapus.textContent = "hapus ";
    
    untukhapus.addEventListener("click", function(event){
        li.remove();
    });

    sudah.addEventListener("click", function () {
       const historyli = document.createElement("li");
       historyli.textContent =tugas;
       history.appendChild(historyli);
       li.remove();
    });

    li.appendChild(sudah);
    li.appendChild(untukhapus)
    todolist.appendChild(li);

    inputtugas.value = "";
});
