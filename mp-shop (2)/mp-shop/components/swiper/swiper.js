Component({
    /**
     * 组件的属性列表
     */
    properties: {
        indicatorDots:{
            type:Boolean,
            value:false
        },
        autoplay:{
            type:Boolean,
            value:false
        },
        interval:{
            type:Number,
            value:5000
        },
        duration:{
            type:Number,
            value:3000
        },
        // 网络请求得到的数据
        swiperData:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
