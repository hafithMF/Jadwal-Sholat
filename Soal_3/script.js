const getData = async () => {
  const res = await fetch(
    "https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11"
  );
  const data = res.json();
  return data;
};

getData().then((v) => {
  const data = v.data;
  const contentLokasi = document.getElementById("lokasi");
  const contentTanggal = document.getElementById("tanggal");
  contentLokasi.textContent = data.lokasi + ", " + data.daerah;
  contentTanggal.textContent = data.jadwal.tanggal;

  const sholat = data.jadwal;
  const waktuSholat = ["subuh", "dzuhur", "ashar", "maghrib", "isya"];

  waktuSholat.forEach((waktu) => {
    const element = `<button class="waktu"><h1>${sholat[waktu]}</h1></button>`;
    document.getElementById("contentsholat").innerHTML += element;
  });
});
