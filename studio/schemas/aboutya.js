export default {
    name: 'aboutya',
    title: 'Aboutya',
    type: 'document',
    fields: [
        {
            name: 'aboutTitle',
            title: 'About Title',
            type: 'string',
        },
        {
            name: 'subTitle',
            title: 'SubTitle',
            type: 'blockContent',
        },
        {
            name: 'cardArray',
            title: 'cardArray',
            type: 'array',
            of: [{ type: 'ingredients' }],
        },
        {
            name: 'aboutIn',
            title: 'aboutIn',
            type: 'blockContent',
        },
        
    ],
}