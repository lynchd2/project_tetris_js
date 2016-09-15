//monkey patching
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
};
var colors = ['#ff0000', '#00ff00', '#0000ff', '#3b5998', '593001'];
var pieces = {
              "leftS": [4, 5, 14, 6], 
              "rightL": [14, 6, 15, 16],
              "leftL": [4, 14 ,15, 16], 
              "square": [4, 5, 6, 7],
              "": [4, 5, 15, 16],
              "": [14, 5, 15, 6],
              "": [14, 5, 15, 16],
              "": [4, 14, 5, 15]
             };

//takes in a piece and rotates it
var rotate = function(block) {
  //first identify which one it is
  if ()
  {
    rotateColumn(block);
  }

  //square
};

var rotateColumn = function(square, how) {
  switch (how)
};



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
  }, 

  //will handle keyPress of UPLEFTDOWNRIGHT+SPACE
  movePiece: function(keyPress) {
    if (keyPress === 40) {//down
      this.fallPiece();
      model.keyPress = undefined;
    }
    else if (keyPress === 37) {
      this.currentPiece = this.currentPiece.map( function(el) {
        return el - 1;
      });
      if(model.checkForLeftRight()) {
        this.currentPiece = this.currentPiece.map( function(el) {
          return el + 1;
        });
      }
      model.keyPress = undefined;
    }
    else if (keyPress === 39) {
      this.currentPiece = this.currentPiece.map( function(el) {
        return el + 1;
      });
      if(model.checkForLeftRight()) {
        this.currentPiece = this.currentPiece.map( function(el) {
          return el - 1;
        });
      }
      model.keyPress = undefined;
    } else if (keyPress === 38) {
      model.rotate();
      model.keyPress = undefined;
    }

    this.movedPiece = keyPress;
  },

  checkForBoundary: function() {
  
    //right boundary
    
    var endIndex = this.currentPiece.length - 1;
    
    if (this.currentPiece[endIndex] % 10 === 1) {
    
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


  checkForLeftRight: function() {
    var currentPiece = this.currentPiece;
      var grid = this.grid;
      for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < currentPiece.length; j++) {
          if(currentPiece[j] === grid[i]) {
            return true;
          }
        }
      }
      return false;
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
    var counter = 0;
    var id = 0;

    for (var i = 1; i < this.grid.length; i++) {
      //if there are ten matching blocks in one row
      if (counter === 9) {
        this.grid.splice( i- 9, 10);
        for(var j = 0; j < i - 9; j ++) {
          this.grid[j] += 10;
          this.score++;
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

    // arr = [4, 5, 14, 6]
    // 6 - 9 * 0
    // 14 - 9 * 1
    // 5 - 9 * 2
    // 4 - 9 * 3
    var counter = model.currentPiece.length - 1;
    model.currentPiece = model.currentPiece.map(function(el){
      return el - (9 * counter);
      counter -= 1;
    });
  }
};





