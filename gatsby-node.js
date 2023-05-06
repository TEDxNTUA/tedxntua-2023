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
                node_locale
                matchId
                slug
              }
            }
        }
    `)
    .then( result => {
      if (result.errors) {
          throw result.errors;
      }

      const seenNodes = []
      for (const node of result.data.allContentfulSpeakers.nodes) {
        // check if node has been seen again -> meaning data
        // for both versions have been collected
        const prevNode = seenNodes.find(prevNode => prevNode.matchId === node.matchId)
        if (prevNode) {
          
          const data = {
            socialMediaUrl: node.socialMediaUrl,
            image: node.image,
            [node.node_locale]: {
              name: node.name,
              speciality: node.speciality,
              bio: node.bio,
            },
            [prevNode.node_locale]: {
              name: prevNode.name,
              speciality: prevNode.speciality,
              bio: prevNode.bio,
            }
          }
          
          const urlAddress = node.slug;
          createPage({
              path: `/speakers/${urlAddress}/`,
              component: template,
              context: {
                  ...data,
                  type: 'speaker',
                  pageName: urlAddress
              },
          });
          
          continue;
        }

        seenNodes.push(node)
      }
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
            node_locale
            matchId
            slug
          }
        }
      }
    `)
    .then( result => {
        if (result.errors) {
            throw result.errors;
        }

        const seenNodes = []
        for (const node of result.data.allContentfulPerformers.nodes) {
          // check if node has been seen again -> meaning data
          // for both versions have been collected
          const prevNode = seenNodes.find(prevNode => prevNode.matchId === node.matchId)
          if (prevNode) {
            
            const data = {
              socialMediaUrl: node.socialMediaUrl,
              image: node.image,
              [node.node_locale]: {
                name: node.name,
                subtitle: node.subtitle,
                bio: node.bio,
              },
              [prevNode.node_locale]: {
                name: prevNode.name,
                subtitle: prevNode.subtitle,
                bio: prevNode.bio,
              }
            }
            
            const urlAddress = node.slug;
            createPage({
                path: `/performers/${urlAddress}/`,
                component: template,
                context: {
                    ...data,
                    type: 'performer',
                    pageName: urlAddress
                },
            });
            
            continue;
          }
  
          seenNodes.push(node)
        }

      });

    const workshops = graphql(`
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
            node_locale
            matchId
            slug
          }
        }
      }
  `)
  .then( result => {
      if (result.errors) {
          throw result.errors;
      }

      const seenNodes = []
      for (const node of result.data.allContentfulWorkshops.nodes) {
        // check if node has been seen again -> meaning data
        // for both versions have been collected
        const prevNode = seenNodes.find(prevNode => prevNode.matchId === node.matchId)
        if (prevNode) {
          
          const data = {
            applicationFormUrl: node.applicationFormUrl,
            websiteUrl: node.websiteUrl,
            image: node.image,
            [node.node_locale]: {
              name: node.name,
              sideEventDescription: node.sideEventDescription,
              bio: node.bio,
            },
            [prevNode.node_locale]: {
              name: prevNode.name,
              sideEventDescription: prevNode.sideEventDescription,
              bio: prevNode.bio,
            }
          }
          
          const urlAddress = node.slug;
          createPage({
              path: `/workshops/${urlAddress}/`,
              component: template,
              context: {
                  ...data,
                  type: 'workshop',
                  pageName: urlAddress
              },
          });
          
          continue;
        }

        seenNodes.push(node)
      }

    });
    
  return Promise.all([speakers, performers, workshops]);
}