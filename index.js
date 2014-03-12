(function($){
$(function(){	
	var $priceArea = $('#priceArea');

	$.getJSON('./price.json').done(function(data,msg,xhr){

        var updateTime = moment(xhr.getResponseHeader("Last-Modified"));
        
        $('#updateTime .time').html(updateTime.format('MM-DD HH:mm'));

		var html = '<ul>';

		for(var product in data){
			if(data.hasOwnProperty(product)){
				html += '<li class="product"><h3>' + product + '</h3><ul class="modelList">';
				for(var model in data[product]){
					if(data[product].hasOwnProperty(model) && data[product][model]){
						html += '<li class="model">' + formatColor(model) + ':<span class="price">￥' + data[product][model] + '</span></li>';
					}
				}
				html += '</ul></li>'
			}
		}
		html += '</ul>';

		$priceArea.html(html);

	}).fail(function(){

		$priceArea.html('获取价格失败，请联系店主。');

	});
	
	function formatColor(str){
	    return str.replace(/white/gi,'白色')
	            .replace(/black/gi,'黑色')
	            .replace(/golden/gi,'金色')
	            .replace(/blue/gi,'蓝色')
	            .replace(/yellow/gi,'黄色')
	            .replace(/pink/gi,'粉色')
	            .replace(/green/gi,'绿色');
	}

});
})(jQuery);
