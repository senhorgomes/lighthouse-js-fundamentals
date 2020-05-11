

const smartGarbage = function (trash, bins) {
  // Your code in here ...
bins = {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost
  }
  
  if (trash === "waste"){
    bins.waste += 1;
  } else if (trash === "recycling") {
    bins.recycling += 1;
  } else if (trash === "compost") {
    bins.compost += 1;
  }
  
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))