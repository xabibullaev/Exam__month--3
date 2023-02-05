// kabisa yili masala

function kabisaCheck(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year}-Yilda 366 kun bor! Bu kabisa yili`;
  } else {
    return `${year}-Yilda 365 kun bor! Bu kabisa yili emas`;
  }
}

[300, 500, 900, 2016, 2020, 2024].forEach((year) =>
  console.log(kabisaCheck(year))
);
