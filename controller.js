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
    view.renderScore(score);
  },

  reRender: function () {
    view.clear();
      view.render(model.currentPiece, model.grid);
  },

  playerInput: function(){
    var button = model.keyPress;
    model.movePiece(button);
  },



  gameLoop: function() {
    model.generatePiece();

    thatController = this;
    setInterval(function() {
      model.fallPiece();

      //logic, validations
      thatController.playerInput();
      
      model.checkForBoundary();
      model.clearLines();
      //rerender
      thatController.reRender();
      thatController.getScore();

    }, 200)
  }


}