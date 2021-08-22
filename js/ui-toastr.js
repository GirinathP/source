var UIToastr = function () {

	return {
		//main function to initiate the module
		init: function () {
			toastr.options = {
					"closeButton" : true,
					"debug" : false,
					"positionClass" : "toast-bottom-right",
					"onclick" : null,
					"showDuration" : "500",
					"hideDuration" : "2000",
					"timeOut" : "5000",
					"extendedTimeOut" : "1000",
					"showEasing" : "swing",
					"hideEasing" : "linear",
					"showMethod" : "fadeIn",
					"hideMethod" : "fadeOut"
			}
		}

	};

}();

jQuery(document).ready(function() {    
	UIToastr.init();
});