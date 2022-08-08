const provincesAndDistrict = {
  Bangkok: [
    "Bang Bon",
    "Bang Kapi",
    "Bang Khae",
    "Bang Khen",
    "Bang Kho Laem",
    "Bang Khun Thian",
    "Bang Na",
    "Bang Phlat",
    "Bang Rak",
    "Bang Sue",
    "Bangkok Noi",
    "Bangkok Yai",
    "Bueng Kum",
    "Chatuchak",
    "Chom Thong",
    "Din Daeng",
    "Don Mueang",
    "Dusit",
    "Huai Khwang",
    "Khan Na Yao",
    "Khlong Sam Wa",
    "Khlong San",
    "Khlong Toei",
    "Lak Si",
    "Lat Krabang",
    "Lat Phrao",
    "Min Buri",
    "Nong Chok",
    "Nong Khaem",
    "Pathum Wan",
    "Phasi Charoen",
    "Phaya Thai",
    "Phra Khanong",
    "Phra Nakhon",
    "Pom Prap Sattru Phai",
    "Prawet",
    "Rat Burana",
    "Ratchathewi",
    "Sai Mai",
    "Samphanthawong",
    "Saphan Sung",
    "Sathon",
    "Suan Luang",
    "Taling Chan",
    "Thawi Watthana",
    "Thon Buri",
    "Thung Khru",
    "Wang Thonglang",
    "Watthana",
    "Yan Nawa"
  ],
  Nonthaburi: [
    "Mueang Nonthaburi",
    "Bang Kruai",
    "Bang Yai",
    "Bang Bua Thong",
    "Sai Noi",
    "Pak Kret"
  ],
  "Chiang Mai": ["a", "b", "c", "d"]
};

let selectProvince = document.getElementById("province");
let selectDistrict = document.getElementById("district");

function districtFromProvince(event) {
  let province = event.target.value;
  selectDistrict.innerHTML = "";
  for (let district of provincesAndDistrict[province]) {
    let newOption = document.createElement("option");
    newOption.value = district;
    newOption.innerHTML = district;
    selectDistrict.append(newOption);
  }
  //   alert(province);
}

for (let province in provincesAndDistrict) {
  let newOption = document.createElement("option");
  newOption.value = province;
  newOption.innerHTML = province;
  selectProvince.append(newOption);
}

selectProvince.addEventListener("change", districtFromProvince);
