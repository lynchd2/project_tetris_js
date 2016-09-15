var rotationLogic = {

  // var pieces = {
  //             // "rightL": [4, 5, 14, 6], 
  //             "rightL": [14, 6, 15, 16],
  //             "leftL": [4, 14 ,15, 16], 
  //             "column": [4, 5, 6, 7],
  //             "leftS": [4, 5, 15, 16],
  //             "arrow": [14, 5, 15, 16],
  //             "rightS": [14, 5, 15, 6],
  //             "square": [4, 14, 5, 15]
  //            };

  //takes in a key"Name", value[Array]
  rotate : function(pieceName, piece) {
    //first identify which one it is
    console.log(pieceName);
    switch(pieceName) {
      case "rightL":
        this.rotateRightL(piece, model.rotateCounter);
        break;
      case "leftL":
        this.rotateLeftL(piece, model.rotateCounter);
        break;
      case "column":
        this.rotateColumn(piece, model.rotateCounter);
        break;
      case "leftS":
        this.rotateLeftS(piece, model.rotateCounter);
        break;
      case "rightS":
        this.rotateRightS(piece, model.rotateCounter);
        break;
      case "arrow":
        this.rotateArrow(piece, model.rotateCounter);
        break;
      default:
        break
    };
    model.rotateCounter++;

    if (model.rotateCounter > 3) {
      model.rotateCounter -= 3;
    }
  },

  rotateLeftS: function(piece, counter) {
    // model.currentPiece[1] is pivot and [2] doesn't move

    switch(counter) {
      case 0:
        model.currentPiece[0] -= 8;
        model.currentPiece[3] -= 10;
        break;
      case 1:
        model.currentPiece[0] += 8;
        model.currentPiece[3] += 10;
        break;
      case 2:
        model.currentPiece[0] -= 8;
        model.currentPiece[3] -= 10;
        break;
      case 3:
        model.currentPiece[0] += 8;
        model.currentPiece[3] += 10;
        break;
      default:
        break;
    }
  },

  rotateRightS: function(piece, counter) {
    // model.currentPiece[1] is pivot and [2] doesn't move

    switch(counter) {
      case 0:
        model.currentPiece[0] -= 10;
        model.currentPiece[3] -= 12;
        break;
      case 1:
        model.currentPiece[0] += 10;
        model.currentPiece[3] += 12;
        break;
      case 2:
        model.currentPiece[0] -= 10;
        model.currentPiece[3] -= 12;
        break;
      case 3:
        model.currentPiece[0] += 10;
        model.currentPiece[3] += 12;
        break;
      default:
        break;
    }
  },

  rotateColumn: function(piece, counter) {
    // model.currentPiece[2] is pivot

    switch(counter) {
      case 0:
        model.currentPiece[0] -= 18;
        model.currentPiece[1] -= 9;
        model.currentPiece[3] += 9;
        break;
      case 1:
        model.currentPiece[0] += 18;
        model.currentPiece[1] += 9;
        model.currentPiece[3] -= 9;
        break;
      case 2:
        model.currentPiece[0] -= 18;
        model.currentPiece[1] -= 9;
        model.currentPiece[3] += 9;
        break;
      case 3:
        model.currentPiece[0] += 18;
        model.currentPiece[1] += 9;
        model.currentPiece[3] -= 9;
        break;
      default:
        break;
    }
  },

  rotateLeftL: function(piece, counter) {
    // model.currentPiece[2] is pivot

    switch(counter) {
      case 0:
        model.currentPiece[0] -= 9;
        model.currentPiece[1] -= 20;
        model.currentPiece[3] += 9;
        break;
      case 1:
        model.currentPiece[0] += 11;
        model.currentPiece[1] += 2;
        model.currentPiece[3] -= 11;
        break;
      case 2:
        model.currentPiece[0] +=  9;
        model.currentPiece[1] += 20;
        model.currentPiece[3] -= 9;
        break;
      case 3:
        model.currentPiece[0] -= 11;
        model.currentPiece[1] -= 2;
        model.currentPiece[3] += 11;
        break;
      default:
        break;
    }
  },

  rotateRightL: function(piece, counter) {
    // model.currentPiece[1] is pivot

    switch(counter) {
      case 0:
        model.currentPiece[0] -= 9;
        model.currentPiece[2] += 9;
        model.currentPiece[3] -= 2;
        break;
      case 1:
        model.currentPiece[0] += 11;
        model.currentPiece[2] -= 11;
        model.currentPiece[3] -= 20;
        break;
      case 2:
        model.currentPiece[0] += 9;
        model.currentPiece[2] -= 9;
        model.currentPiece[3] += 2;
        break;
      case 3:
        model.currentPiece[0] -= 11;
        model.currentPiece[2] += 11;
        model.currentPiece[3] += 20;
        break;
      default:
        break;
    }
  },

// "arrow": [14, 5, 15, 6],
  rotateArrow: function(piece, counter) {
    console.log(counter);
    // model.currentPiece[2] is pivot
    switch(counter) {
      case 0:
        model.currentPiece[0] -= 9;
        model.currentPiece[1] += 11;
        model.currentPiece[3] += 9;
        break;
      case 1:
        model.currentPiece[0] += 11;
        model.currentPiece[1] += 9;
        model.currentPiece[3] -= 11;
        break;
      case 2:
        model.currentPiece[0] += 9;
        model.currentPiece[1] -= 11;
        model.currentPiece[3] -= 9;
        break;
      case 3:
        model.currentPiece[0] -= 11;
        model.currentPiece[1] -= 9;
        model.currentPiece[3] += 11;
        break;
      default:
        break;
    }
  },


};