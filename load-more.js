jQuery( function( $ ) {

	var slot_num = 1;
	$( '#main' ).on( 'click', 'div.load-more a', function( e ) {
		e.preventDefault();
		var slotName = 'ajax_leaderboard_' + slot_num++;
		$( '#main .posts-wrapper' ).append( $( '<div />' ).attr( 'id', slotName ) );
		var api = new AdLayersAPI();
		api.lazyLoadAd( { slotName: slotName, format: 'sidebar' } );
	} );

	// function loadNextAd( slotName ) {
	// 	// Define the slot itself, call display() to
	// 	// register the div and refresh() to fetch ad.
	// 	googletag.cmd.push(function() {
	// 		var slot = googletag.defineSlot('/6355419/Travel/Europe/France/Paris', [728, 90], slotName).
	// 		setTargeting("test","infinitescroll").
	// 		addService(googletag.pubads());

	// 		// Display has to be called before
	// 		// refresh and after the slot div is in the page.
	// 		googletag.display(slotName);
	// 		googletag.pubads().refresh([slot]);
	// 	});
	// }

} );