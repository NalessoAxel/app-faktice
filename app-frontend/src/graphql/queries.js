import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_SLUG = gql`
	query {
		releasePages {
			data {
				attributes {
					slug
				}
			}
		}
	}
`;

export const GET_SINGLE_RELEASE = gql`
	query ($slug: String) {
		releasePages(filters: { slug: { eq: $slug } }) {
			data {
				id
				attributes {
					artist
					release_description
					release_title
					release_artist_title
					cat_number
					tracks {
						track_name
						track_audio {
							data {
								attributes {
									url
								}
							}
						}
					}
					player_cover {
						data {
							attributes {
								url
							}
						}
					}
					release_cover {
						data {
							attributes {
								url
							}
						}
					}
				}
			}
		}
	}
`;

// eslint-disable-next-line import/prefer-default-export
export const GET_ALL_RELEASES_COVER_URL = gql`
	query {
		homePageImages {
			data {
				attributes {
					release_cover {
						data {
							attributes {
								url
							}
						}
					}
					release_page {
						data {
							attributes {
								slug
							}
						}
					}
				}
			}
		}
	}
`;
