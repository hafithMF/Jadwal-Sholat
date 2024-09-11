fetch("https://api.myquran.com/v2/sholat/jadwal/1204/2024-09-11")
  .then((response) => response.json()) 
  .then((data) => {
    console.log(data.data.jadwal);
  })
  .catch((error) => console.error("Error fetching data:", error));
