//monkey patching
Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
};

//returns key and value
function hashSample( obj ) {
    var keys = Object.keys(obj);
    var len = keys.length;
    var rnd = Math.floor(Math.random()*len);
    var key = keys[rnd];
    return [key, obj[key]];
};

var colors = ['#ff0000', '#00ff00', '#0000ff', '#3b5998', '593001'];
var pieces = {
              
              // "rightL": [4, 5, 6, 16],
              // "leftL": [4, 14 ,5, 6], 
              "column": [4, 5, 6, 7, 8],
              // "leftS": [4, 5, 15, 16],
              // "arrow": [14, 5, 15, 16],
              // "rightS": [14, 5, 15, 6],
              // "square": [4, 14, 5, 15]
             };

var model = {
  init: function() {
    this.score = 0;
    this.row = 20;
    this.columns = 10;
    this.totalTiles = this.row * this.columns;

    // two of these is to account for rotation..
    this.rotateCounter = 0;
    this.currentPieceName = "";
    this.currentPiece = [];
    //optional
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
      model.rotate(); // ROTATEEDIT
      model.keyPress = undefined;
    }

    this.movedPiece = keyPress;
  },

  checkForBoundary: function() {
    
    //var piece = this.currentPiece.slice()
    var piece = [10,20,30,29]
    var leftest = 0;
    var rightest = 0;

    for(var i = 0; i <= piece.length; i++) {
      if (String(piece[0])[String(piece[0]).length - 1] <= String(piece[i])[String(piece[i]).length - 1]) {
        rightest = i - 1
      }
      else {
        leftest = 0;
      }
    }
    //right boundary

    //var endIndex = newPiece.length - 1;
    
    if (this.currentPiece[rightest] % 10 === 1) {
      console.log("right")
      this.currentPiece = this.currentPiece.map(function(el) {
        return el - 1;
      });
    }
    // left boundary
    if (this.currentPiece[leftest] % 10 === 0) {
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
    var pieceArr = hashSample(pieces);
    this.rotateCounter = 0;
    //key (name)
    this.currentPieceName = pieceArr[0];
    // value (array)
    this.currentPiece = pieceArr[1];
  },



  clearLines: function() {
    var counter = 0;
    var id = 1;

    for (var i = 0; i < this.grid.length; i++) {
      if ((this.grid[id] - this.grid[i]) === 1) {
        counter++;
      } else {
        counter = 1;
      }
      id++;
      //if(grid[i + 9] - grid[i] === 9) {
      if (counter === 9) {
        this.grid.splice(i - 8, 10);
        for(var j = 0; j < i - 9; j ++) {
          this.grid[j] += 10;
        };
        this.score++;
      }
      //}
      // compares each element to the element next to each other
    }
  },

  rotate: function() {
    rotationLogic.rotate(this.currentPieceName, this.currentPiece);
  }
};





