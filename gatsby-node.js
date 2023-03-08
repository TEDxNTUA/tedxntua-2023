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
    const template = path.resolve(`src/templates/DataPage.js`);

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
          const urlAddress = node.name.toLowerCase().replace(/ /g, '-');
          createPage({
              path: `/speakers/${urlAddress}/`,
              component: template,
              context: {
                  ...node,
                  type: 'speaker',
                  pageName: urlAddress
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
            const urlAddress = node.name.toLowerCase().replace(/ /g, '-');
            createPage({
                path: `/performers/${urlAddress}/`,
                component: template,
                context: {
                    ...node,
                    type: 'performer',
                    pageName: urlAddress
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
          const urlAddress = node.name.toLowerCase().replace(/ /g, '-');
          createPage({
              path: `/workshops/${urlAddress}/`,
              component: template,
              context: {
                  ...node,
                  type: 'workshop',
                  pageName: urlAddress
              },
          });
      });
  });
    
  return Promise.all([speakers, performers, worksops]);
}