function clearSelected(){
	$( ".sortable > li" ).each(function( index ) {
		$(this).removeClass('selected');
	});
}

function clearHighLight(){
	$( ".queue" ).each(function( index ) {
		$(this).removeClass('high-light');
	});
}