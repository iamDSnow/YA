export default {
    name: 'productCardArray',
    title: 'Product card array',
    type: 'document',
    fields: [
        {
            name: 'staticPic',
            title: 'Static Pic',
            type: 'pic',
        },
        {
            name: 'productFeatureOneTitle',
            title: 'Product Feature One Title',
            type: 'string',
          },
          {
            name: 'productFeatureOneSlug',
            title: 'Product Feature One Slug',
            type: 'slug',
            options: {
              source: 'productFeatureOneTitle',
              maxLength: 96
            }
          },
        {
            name: 'productFeatureOneImage',
            title: 'Product Feature One',
            type: 'pic',
        },
        {
            name: 'productFeatureOnePrice',
            title: 'Product Feature One Price',
            type: 'number',
          },
          {
            name: 'productFeatureTwoTitle',
            title: 'Product Feature Two Title',
            type: 'string',
          },
          {
            name: 'productFeatureTwoSlug',
            title: 'Product Feature Two Slug',
            type: 'slug',
            options: {
              source: 'productFeatureTwoTitle',
              maxLength: 96
            }
          },
        {
            name: 'productFeatureTwoImage',
            title: 'Product Feature Two Image',
            type: 'pic',
        },  {
            name: 'productFeatureTwoPrice',
            title: 'Product Feature Two Price',
            type: 'number',
          },
       

        
    ],
}