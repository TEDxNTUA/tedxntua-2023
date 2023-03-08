exports.onCreateWebpackConfig = ({
    stage,
    rules,
    loaders,
    plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.gltf$/,
                    use: [
                        `url-loader`,
                    ],
                },
                {
                    test: /\.glb$/,
                    use: [
                        `url-loader`,
                    ],
                },
            ],
        },
    })
}

const { create } = require("domain");
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/templates/DataTemplate.js`);

    const speakers = graphql(`
        query {
            allContentfulSpeakers {
              nodes {
                id
                name
                socialMediaUrl
                speciality
                bio {
                  raw
                }
                image {
                  gatsbyImageData(width: 450, height: 450)
                }
              }
            }
        }
    `)
    .then( result => {
      if (result.errors) {
          throw result.errors;
      }

      result.data.allContentfulSpeakers.nodes.forEach(node => {
          createPage({
              path: `/speakers/${node.name.toLowerCase()}/`,
              component: template,
              context: {
                  ...node,
                  type: 'speaker'
              },
          });
      });
    });

    const performers = graphql(`
      query {
        allContentfulPerformers {
          nodes {
            bio {
              raw
            }
            id
            image {
              gatsbyImageData(width: 450, height: 450)
            }
            name
            socialMediaUrl
            subtitle
          }
        }
      }
    `)
    .then( result => {
        if (result.errors) {
            throw result.errors;
        }

        result.data.allContentfulPerformers.nodes.forEach(node => {
            createPage({
                path: `/performers/${node.name.toLowerCase()}/`,
                component: template,
                context: {
                    ...node,
                    type: 'performer'
                },
            });
        });
    });

    const worksops = graphql(`
      query {
        allContentfulWorkshops {
          nodes {
            id
            name
            applicationFormUrl
            bio {
              raw
            }
            websiteUrl
            image {
              gatsbyImageData(width: 450, height: 450)
            }
            sideEventDescription {
              raw
            }
          }
        }
      }
  `)
  .then( result => {
      if (result.errors) {
          throw result.errors;
      }

      result.data.allContentfulWorkshops.nodes.forEach(node => {
          createPage({
              path: `/workshops/${node.name.toLowerCase()}/`,
              component: template,
              context: {
                  ...node,
                  type: 'workshop'
              },
          });
      });
  });
    
  return Promise.all([speakers, performers, worksops]);
}