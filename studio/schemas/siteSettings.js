import social from "./social";

export default {
    title: 'Site Settings',
    name: 'siteSettings',
    type: 'document',
    fields: [
        {
            title: 'Site Name',
            name: 'siteName',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: "cannonicalLink",
            title: "Cannonical Link",
            type: "url",
            description: "Website Domain Name",
          },
        {
            name: "logo",
            title: "Company Logo",
            type: "pic",
            description: "Company Logo Will Be Populated Throughout The Site",
          },
          {
            name: "companyName",
            title: "Company Name",
            type: "string",
            description: "Business DBA",
          },
        {
            title: 'Email',
            name: 'email',
            type: 'string'
        },
        {
            title:'Phone',
            name: 'phone',
            type: 'string'
        },
        {
          title: 'Social Links',
          name: 'socialLinks',
          type: 'array',
          of: [{type: 'social'}]
        },
        
    ]
}
