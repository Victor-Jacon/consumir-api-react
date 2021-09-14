const legacyList = [
    { firstName: "John", lastName: "Coltrane", rating: 3 },
    { firstName: "Marcus", lastName: "Miller", rating: 2 },
  ];
  const list = legacyList.map((data) => ({
    name: `${data.firstName} ${data.lastName}`,
    rating: data.rating,
  }));
  
  const create = (name, rating) => {
    list.push({ name, rating });
  };
  
  const sortListBy = {
    name: (a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    },
    rating: (a, b) => {
      if (a.rating > b.rating) return 1;
      if (a.rating < b.rating) return -1;
      return 0;
    },
  };
  
  const getAll = (sort = "name") => {
    return list.sort(sortListBy[sort]);
  };