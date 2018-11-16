export const root = {
  name: "itunesSearch",
  redirectTo: "itunesSearch.search"
};

export const search = {
  name: "itunesSearch.search",
  url: "/search?term&page",
  component: "cSearch",
  params: {
    term: {
      dynamic: true
    }
  },
  page: {
    dynamic: true
  }
};

export const music = {
  name: "music",
  component: "cMusic",
  params: {
    term: {
      dynamic: true
    }
  },
  page: {
    dynamic: true
  }
};

export const detail = {
  name: "itunesSearch.detail",
  url: "/detail/:trackId",
  component: "cDetail",
  params: {
    trackId: {
      type: "int"
    }
  }
};
