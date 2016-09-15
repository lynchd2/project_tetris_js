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
      $("#" + id).addClass("stone").css("background-color",colors.sample());
    }
    for(var i = 0; i < grid.length; i++) {
      var id = grid[i];
      $("#" + id).addClass("stone").css("background-color",colors.sample());
    }

  },

  renderScore: function(score) {
    $('#score').text(score);
  },

  clear: function() {
    $('.tile').removeClass("stone").css("background-color", "");
    $('#score').text("");
  }
  

};