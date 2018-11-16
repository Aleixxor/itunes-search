class MusicCtrl {
  constructor($http) {
    "ngInject";
    this.music = {};
  }
}

export const Music = {
  template: require("./music.html"),
  controller: MusicCtrl,
  bindings: {
    musica: "<"
  }
};
