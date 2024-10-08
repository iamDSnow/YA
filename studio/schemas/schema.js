// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import product from './product'
import productVariant from './productVariant'
import social from './social'
import siteSettings from './siteSettings'
import hero from './hero'
import home from './home'
import header from './header'
import ingredients from './locale/ingredients'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import pic from './locale/pic'
import linkOptions from './locale/linkOptions'
import productFeatureCard from './locale/productFeatureCard'
import productCardArray from './productCardArray'
import aboutya from './aboutya'
import aboutInga from './aboutInga'
import contactya from './contactya'
import dualpicText from './dualpicText'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    category,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    social,
    siteSettings,
    pic,
    hero,
    home,
    linkOptions,
    header,
    productFeatureCard,
    productCardArray,
    ingredients,
    aboutya,
    aboutInga,
    contactya,
    dualpicText


  ])
})
