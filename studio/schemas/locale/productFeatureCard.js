export default {
    name: 'productFeatureCard',
    title: 'Product feature card',
    type: 'object',
    fields: [
        {
            name: 'product',
            title: 'Product',
            type: 'reference',
            to: [{ type: 'product' }],
        },
        
    ],
}