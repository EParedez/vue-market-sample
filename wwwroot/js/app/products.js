
new Vue({
    'el':'.container-fluid',
    components:{
        Element: ELEMENT
    },
    data: function () {
        return {
            products: [],
            dialogNuevoVisible: false,
            dialogBorrarVisible: false,
            dialogModificarVisible: false,
            formNuevo: {
                name:'',
                price:undefined,
                category:undefined,
                discount:undefined,
                active:undefined
            },
            rulesNuevoProducto:{
                name: [
                    { required: true, message: 'El nombre es obligatorio', trigger: 'change' },
                ],
                price:[
                    { required: true, message: 'El precio es obligatorio', trigger: 'change' },
                ],
                category:[
                    { required: true, message: 'La categoria es obligatorio', trigger: 'change' },
                ],
                
                active:[
                    { required: true, message: 'El status es obligatorio', trigger: 'change' },
                ]
            },
            form:{

            },
            formLabelWidth: 100
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
        },
        addProduct: function () {
            this.$refs['formNuevoProducto'].validate((result) => {
                 if(result){
                    console.log('es valido');
                 }   
            }) ;
        }
    }
});