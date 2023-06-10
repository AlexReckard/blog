$(document).ready(function() {
    // Set the number of articles to show initially
    var articlesToShow = 2;

    // Hide articles beyond the initial number
    $('.article-items:gt(' + (articlesToShow - 1) + ')').hide();

    // Handle the "Load More" button click event
    $('#load-more').click(function() {
        // Select the currently hidden articles
        var $hiddenArticles = $('.article-items:hidden');

        // Show the next set of hidden articles
        $hiddenArticles.slice(0, articlesToShow).show();

        // Check if there are no more hidden articles
        if ($hiddenArticles.length === 0) {
            // Update the button text and disable the button
            $('#load-more').text('No More Content').prop('disabled', true);
        }
    });
});
