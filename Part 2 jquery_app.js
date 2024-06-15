
  $('#movieForm').on('submit', function(event) {
    event.preventDefault();

    const titleVal = $('#title').val();
    const ratingVal = $('#rating').val();

    const addMovie= $('<div>').addClass('movieItem');
      const title = $('<div>').text('Title: ' + titleVal);
      const rating = $('<div>').text('Rating: ' + ratingVal);
      const removeButton = $('<button>').addClass('removeB').text('Remove');

    addMovie.append(title, rating, removeButton);
    $('#moviesList').append(addMovie);
  });

  $('#moviesList').on('click', '.removeB', function() {
    $(this).parent('.movieItem').remove();
  });
