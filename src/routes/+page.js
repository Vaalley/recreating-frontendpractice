// src/routes/index.js

import sanityClient from "@sanity/client";

const client = sanityClient({
    projectId: "z0czbinn",
    dataset: "production",
    apiVersion: "2022-11-16",
    useCdn: false
});


export async function load() {
    const data = await client.fetch(`
        *[_type == "card"]
        `)

    if (data) {
        cards = data;
        return {
            status: 200,
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    }
}

export let cards;