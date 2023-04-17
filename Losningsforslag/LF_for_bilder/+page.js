import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";


const client = createClient({
    projectId: "24g0osd1",
    dataset: "production",
    apiVersion: "2023-04-15",
    useCdn: false,
});


export async function load({ }) {
    const data = await client.fetch(`*[_type == "icecreams"]`);
    // START New stuff
    const imgBuilder = imageUrlBuilder(client);
  
    if (data) {
        return {
            icecreams: data,
            builder: imgBuilder
            // END New stuff
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}

  

 