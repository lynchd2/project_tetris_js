//monkey patch 
// kek <-- this one
// kek
// kek
// kek
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
};

var pieces = [
              [4,5,6,14], 
              [6,14,15,16],
              [8,14,15,16], 
              [4,5,6,7],
              [4,5,15,16],
              [5,6,14,15],
              [5,14,15,16]
             ];

var model = {
  init: function() {
    this.score = 0;
    this.row = 20;
    this.columns = 10;
    this.totalTiles = this.row * this.columns;
    this.currentPiece = [];
    this.nextPiece = [];
    this.grid = [];

  }, 

  //will handle keyPress of UPLEFTDOWNRIGHT+SPACE
  movePiece: function(keyPress) {

  },

  checkForBottom:function() {

  },

  checkForBotGrid: function() {

  },

  //handles the natural time movement of piece(glide down)
  fallPiece: function(){
    this.currentPiece = this.currentPiece.map(function(el){
      return el + 10;
    });
  },

  //randomly spawns piece
  generatePiece: function() {
    var pieceArr = pieces.sample;
    this.currentPiece = pieceArr;
    thatModel = this;
    pieceArr.forEach(function (el){
      thatModel.grid.push = el;
    });

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