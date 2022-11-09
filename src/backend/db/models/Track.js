import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const TrackSchema = new mongoose.Schema(
    {
        ObjectId: {
            type: mongoose.Types.ObjectId,
            required: [true, "can't be blank"],
            default: mongoose.Types.ObjectId(),
        },
        spotify: {
            type: 'object',
            required: [],
            properties: {
                album_type: {
                    type: 'string',
                },
                artists: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [],
                        properties: {
                            external_urls: {
                                type: 'object',
                                required: [],
                                properties: {
                                    spotify: {
                                        type: 'string',
                                    },
                                },
                            },
                            href: {
                                type: 'string',
                            },
                            id: {
                                type: 'string',
                            },
                            name: {
                                type: 'string',
                            },
                            type: {
                                type: 'string',
                            },
                            uri: {
                                type: 'string',
                            },
                        },
                    },
                },
                available_markets: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
                copyrights: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [],
                        properties: {
                            text: {
                                type: 'string',
                            },
                            type: {
                                type: 'string',
                            },
                        },
                    },
                },
                external_ids: {
                    type: 'object',
                    required: [],
                    properties: {
                        upc: {
                            type: 'string',
                        },
                    },
                },
                external_urls: {
                    type: 'object',
                    required: [],
                    properties: {
                        spotify: {
                            type: 'string',
                        },
                    },
                },
                genres: {
                    type: 'array',
                    items: {
                        type: 'string',
                    },
                },
                href: {
                    type: 'string',
                },
                id: {
                    type: 'string',
                },
                images: {
                    type: 'array',
                    items: {
                        type: 'object',
                        required: [],
                        properties: {
                            height: {
                                type: 'number',
                            },
                            url: {
                                type: 'string',
                            },
                            width: {
                                type: 'number',
                            },
                        },
                    },
                },
                label: {
                    type: 'string',
                },
                name: {
                    type: 'string',
                },
                popularity: {
                    type: 'number',
                },
                release_date: {
                    type: 'string',
                },
                release_date_precision: {
                    type: 'string',
                },
                total_tracks: {
                    type: 'number',
                },
                tracks: {
                    type: 'object',
                    required: [],
                    properties: {
                        href: {
                            type: 'string',
                        },
                        items: {
                            type: 'array',
                            items: {
                                type: 'object',
                                required: [],
                                properties: {
                                    artists: {
                                        type: 'array',
                                        items: {
                                            type: 'object',
                                            required: [],
                                            properties: {
                                                external_urls: {
                                                    type: 'object',
                                                    required: [],
                                                    properties: {
                                                        spotify: {
                                                            type: 'string',
                                                        },
                                                    },
                                                },
                                                href: {
                                                    type: 'string',
                                                },
                                                id: {
                                                    type: 'string',
                                                },
                                                name: {
                                                    type: 'string',
                                                },
                                                type: {
                                                    type: 'string',
                                                },
                                                uri: {
                                                    type: 'string',
                                                },
                                            },
                                        },
                                    },
                                    available_markets: {
                                        type: 'array',
                                        items: {
                                            type: 'string',
                                        },
                                    },
                                    disc_number: {
                                        type: 'number',
                                    },
                                    duration_ms: {
                                        type: 'number',
                                    },
                                    explicit: {
                                        type: 'string',
                                    },
                                    external_urls: {
                                        type: 'object',
                                        required: [],
                                        properties: {
                                            spotify: {
                                                type: 'string',
                                            },
                                        },
                                    },
                                    href: {
                                        type: 'string',
                                    },
                                    id: {
                                        type: 'string',
                                    },
                                    is_local: {
                                        type: 'string',
                                    },
                                    name: {
                                        type: 'string',
                                    },
                                    preview_url: {
                                        type: 'string',
                                    },
                                    track_number: {
                                        type: 'number',
                                    },
                                    type: {
                                        type: 'string',
                                    },
                                    uri: {
                                        type: 'string',
                                    },
                                },
                            },
                        },
                        limit: {
                            type: 'number',
                        },
                        next: {
                            type: 'string',
                        },
                        offset: {
                            type: 'string',
                        },
                        previous: {
                            type: 'string',
                        },
                        total: {
                            type: 'number',
                        },
                    },
                },
                type: {
                    type: 'string',
                },
                uri: {
                    type: 'string',
                },
            },
        },
    },
    { timestamps: true },
    { collection: 'tracks' }
)

TrackSchema.plugin(uniqueValidator, { message: 'is already taken.' })

export const Track = mongoose.model('track', TrackSchema)
