(function($){
$(function(){	
	var $priceArea = $('#priceArea');

	$.getJSON('/price.json').done(function(data){

		var html = '<ul>';

		for(var product in data){
			if(data.hasOwnProperty(product)){
				for(var model in data[product]){
					if(data[product].hasOwnProperty(model) && data[product][model]){
						html += '<li>' + model + ':￥' + data[product][model] + '</li>';
					}
				}
			}
		}
		html += '</ul>';

		$priceArea.html(html);

	}).fail(function(){

		$priceArea.html('获取价格失败，请联系店主。');

	});

});
})(jQuery);
