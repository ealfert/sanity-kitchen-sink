export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f3135757f237316a5a08843',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kfpk3gbg',
                  apiId: '4126f9bd-db31-4459-a805-4f9809c9a4cb'
                },
                {
                  buildHookId: '5f313575bed26838fd703c05',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mmtq322n',
                  apiId: '2a14468d-9eba-403d-becc-6d073c487db2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ealfert/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mmtq322n.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
