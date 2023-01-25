export default {

    name:'testimonials',
    title:'Testimonials',
    type:'document',
    fields:[
        {
            name:'name',
            title:'name',
            type:'string'
        },
        {
            name:'comany',
            title:'Company',
            type:'string'
        },
        {
            name:'imageurl',
            title:'ImgURL',
            type:'image',
            options: {
                hotspot: true // <-- Defaults to false
              }
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]


};