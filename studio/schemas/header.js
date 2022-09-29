export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: "mobileIcon",
            title: "Mobile icon",
            type: "pic",
          },
          {
            name: "logo",
            title: "Company Logo",
            type: "pic",
            description: "Company Logo Will Be Populated Throughout The Site",
          },
          {
            name: "links",
            title: "links",
            type: "array",
            of: [{ type: "linkOptions" }],
          },        
    ],
}