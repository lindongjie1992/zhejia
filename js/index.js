$.fn.extend({
    banner : function(){
        this.each(function(){
            if($(this).data('init')){
                return;
            }
            $(this).data('init',true); //表示已经实例化过了
        });
    }
})

$('.banner').banner();