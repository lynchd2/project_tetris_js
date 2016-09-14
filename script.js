

var model = {
  init: function() {
    this.score = 0;
    this.row = 20;
    this.columns = 10;
    this.totalTiles = this.row * this.columns;
    this.currentPiece;
    this.nextPieces = [];
    this.grid = [];

  }, 

  //will handle keyPress of UPLEFTDOWNRIGHT+SPACE
  movePiece: function(keyPress) {

  },

  //randomly spawns piece
  generatePiece: function() {

  },

  clearLines: function() {

  },

};

var view = {
  init: function() {
    
  },

  placeBoard: function(totalTiles) {
    $board = $("#container");
    for(var i = 1; i <= totalTiles; i++) {
      $tile = $("<div>").attr("id", i).addClass("tile");
      $board.append($tile);
    };
  },

  keyListener: function() {
    thatView = this;
    $(document).on("keydown", function (e) {
      thatView.keyPress = e.which;
    });
  },

  render: function() {
    
  },

  clear: function() {
    $('#container').empty();
  }
  

};

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



  gameLoop: function() {
    setInterval(function() {
      
      //logic, validations



      //rerender
      //view.clear();
      view.render();
    }, 2000)
  }


}
$(document).ready(function() {
  controller.init();
})