
new Vue({
    'el':'.container-fluid',
    components:{
        Element: ELEMENT
    },
    data: function () {
        return {
            products: [],
            dialogVisible: true
        }
    },
    created: function () {
        console.log('created')
        var context = this;
        $.get('./../wwwroot/data/products.json', {}, function (datas) {
            console.log(datas)
            context.products = datas.data.products
        });
    },
    methods:  {
        handleClose: function(done) {
           console.log('close modal')
        }
    }
});