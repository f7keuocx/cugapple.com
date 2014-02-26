(function($){
$(function(){	
	var $priceArea = $('#priceArea');

	$.getJSON('/price.json').done(function(data){

		var html = '<ul>';

		for(var product in data){
			if(product.hasOwnProperty(product)){
				for(var model in product){
					if(product.hasOwnProperty(model) && product[model]){
						html += '<li>' + model + ':￥' + product[model] + '</li>';
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
