function numberToOrdinal(n) {
  var suffix = "th";
  if (n == 0) suffix = "";
  if (n % 10 == 1 && n % 100 != 11) suffix = "st";
  if (n % 10 == 2 && n % 100 != 12) suffix = "nd";
  if (n % 10 == 3 && n % 100 != 13) suffix = "rd";
  return n + suffix;
}
