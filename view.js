

var model = {
  init: function() {
    this.score = 0;

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

  keyListener: function {
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

    this.gameLoop();
    
  },

  gameLoop: function() {
    setInterval(function() {
      
      //logic, validations



      //rerender
      view.clear();
      view.render();
    }, 300)
  }


}













































console.log("fuck you dylan");