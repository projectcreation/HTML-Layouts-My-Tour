$('#multilevel-mainNav')
		.dropdown({
			action: 'hide'
		})
;

/*todo: добавить условие - если открыто, иначе . . . */
document.querySelector('#multilevel-mainNav').addEventListener( "click", function() {
	document.querySelector('#multilevel-mainNav__button').classList.toggle("is-active");
}, false);




$('#passengers-dropdown-id')
		.dropdown({
			on: 'hover',
			action: 'nothing'
		})
;


$('#period-dropdown-id')
		.dropdown({
			on: 'hover',
			action: 'nothing'
		})
;


$('#price-dropdown-id')
		.dropdown({
			on: 'hover',
			action: 'nothing'
		})
;


$('#interests-form__selection-dropdown--hotels-stars')
		.dropdown({
			allowAdditions: true,
			on: 'hover'
		});


$('#interests-form__selection-dropdown--hotels-rating')
		.dropdown({
			allowAdditions: true,
			on: 'hover'
		});


$('#interests-form__selection-dropdown--nutrition')
		.dropdown({
			allowAdditions: true,
			on: 'hover'
		});


$('#interests-form__selection-dropdown--locations')
		.dropdown({
			allowAdditions: true,
			on: 'hover'			
		});