var controller = {
  init: function() {
    model.init();
    view.init();
    this.getBoard();
    this.gameLoop();
  },

  getBoard: function() {
    var tiles = model.totalTiles;
    view.placeBoard(tiles);
  },

  getScore: function() {
    var score = model.score;
    view.renderScore();
  },



  gameLoop: function() {
    model.generatePiece();

    setInterval(function() {
      model.fallPiece();
      //logic, validations
      
      var button = model.keyPress;
      model.movePiece(button);
      
      model.checkForBoundary();
      model.clearLines();
      //rerender
      view.clear();
      view.render(model.currentPiece, model.grid);
      var score = model.score;
      view.renderScore(score);

    }, 200)
  }


}