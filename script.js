Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
};

//var pieces = [[2,3,4,5,6]];
var pieces = [
              [4, 5, 14, 6], 
              [14, 6, 15, 16],
              [4, 14 ,15, 16], 
              [4, 5, 6, 7],
              [4, 5, 15, 16],
              [14, 5, 15, 6],
              [14, 5, 15, 16]
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
    this.keyPress = undefined;
    this.lastElement = undefined;
  }, 

  //will handle keyPress of UPLEFTDOWNRIGHT+SPACE
  movePiece: function(keyPress) {
    if (keyPress === 40) {//down
      this.fallPiece();
    }
    else if (keyPress === 37) {
      this.currentPiece = this.currentPiece.map( function(el) {
        return el - 1;
      });
      model.keyPress = undefined;
    }
    else if (keyPress === 39) {
      this.currentPiece = this.currentPiece.map( function(el) {
        return el + 1;
      });
      model.keyPress = undefined;
    } else if (keyPress === 38) {
      model.rotate();
    }

    this.movedPiece = keyPress;
  },

  checkForBoundary: function() {
  
    //right boundary
    
    var endIndex = this.currentPiece.length - 1;
    if (Math.round(this.currentPiece[endIndex]) % 10 === 1) {
    
      this.currentPiece = this.currentPiece.map(function(el) {
        return el - 1;

      });
    }
    // left boundary
    if (this.currentPiece[0] % 10 === 0) {
      this.currentPiece = this.currentPiece.map(function(el) {
        return el + 1;
      });
    }  



  },

  checkForBottom:function() {
    var currentPiece = this.currentPiece;
    var grid = this.grid;
    for (var i = 0; i < grid.length; i++) {
      for (var j = 0; j < currentPiece.length; j++) {
        if(currentPiece[j] === grid[i]) {
          this.currentPiece = this.currentPiece.map(function(el) {
            return el - 10;
          });
          return true;
        }
      }
    }
  },

  checkForBotGrid: function() {
    var currentPiece = this.currentPiece;
    for(var i = 0; i < currentPiece.length; i++) {
      if(currentPiece[i] > 200) {
        this.currentPiece = this.currentPiece.map(function(el) {
          return el - 10;
        });
        return true
      }
    }
  },


  //handles the natural time movement of piece(glide down)
  fallPiece: function(){
    this.currentPiece = this.currentPiece.map(function(el){
      return el + 10;

    });
    if(this.checkForBotGrid() || this.checkForBottom()) {
      for(var i = 0; i < this.currentPiece.length; i ++) {
        this.grid.push(this.currentPiece[i]);
      }
      this.currentPiece = [];
      this.generatePiece();
    };
  },

  //randomly spawns piece
  generatePiece: function() {
    var pieceArr = pieces.sample();
    this.currentPiece = pieceArr;
  },



  clearLines: function() {
    this.grid = this.grid.sort();
    var counter = 1;
    var id = 0;

    for (var i = 1; i < this.grid.length; i++) {
      //if there are ten matching blocks in one row
      if (counter === 9) {
        this.grid.splice( i - 9, 10);
        for(var j = 0; j < i - 9; j ++) {
          this.grid[j] += 10;
        };
      }
      // compares each element to the element next to each other
      if ((this.grid[id] + 1) === this.grid[i]) {
        counter++;
      } else {
        counter = 1;
      }
      id++;
    }
  },

  rotate: function() {
    model.currentPiece = model.currentPiece.map(function(el){
      var lastIndex = model.currentPiece.length - 1;
      var number = 0;
      for(var i = 0; i < currentPiece.length; i++) {
        el + number;
        number -= 9;
      }
    })
  }
};

var colors = ['#ff0000', '#00ff00', '#0000ff', '#3b5998', '593001'];

var view = {
  init: function() {
    this.keyListener();
  },

  placeBoard: function(totalTiles) {
    $board = $("#container");
    for(var i = 1; i <= totalTiles; i++) {
      $tile = $("<div>").attr("id", i).addClass("tile");
      $board.append($tile);
    };
  },

  keyListener: function() {
    //thatView = this;
    $(document).on("keydown", function (e) {
      model.keyPress = e.which;
    });
  },

  render: function(piece, grid) {
    for(var i = 0; i < piece.length; i++) {
      var id = piece[i];
      $("#" + id).addClass("stone")//.css("background-color",colors.sample());
    }
    for(var i = 0; i < grid.length; i++) {
      var id = grid[i];
      $("#" + id).addClass("stone")//.css("background-color",colors.sample());
    }
  },

  clear: function() {
    $('.tile').removeClass("stone")//.css("background-color", "");
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
    model.generatePiece();

    setInterval(function() {
      model.fallPiece();
      //logic, validations
      
      var button = model.keyPress;
      model.movePiece(button);
      
      model.checkForBoundary();
      setInterval(model.checkForBoundary, 1);
      model.clearLines();
      //rerender
      view.clear();
      view.render(model.currentPiece, model.grid);
    }, 1000)
  }


}
$(document).ready(function() {
  controller.init();
})