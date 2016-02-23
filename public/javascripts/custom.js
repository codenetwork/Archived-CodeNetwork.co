$(document).ready(function() {
    // Materialize Select Initialization
    $('select').material_select();
    //$("select[required]").css({display: "inline", height: 0, padding: 0, width: 0});

    // Selecting the 'card' Payment Method displays the 'card_details' div.
    $('#payment_method').on('change', function() {
        if ( this.value == 'payment_card') {
            $("#card_details").show();
        } else {
            $("#card_details").hide();
        }
    });
});