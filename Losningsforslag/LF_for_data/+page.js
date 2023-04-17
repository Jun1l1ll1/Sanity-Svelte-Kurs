// START New stuff
import { createClient } from "@sanity/client";


const client = createClient({
    projectId: "24g0osd1",
    dataset: "production",
    apiVersion: "2023-04-15",
    useCdn: false,
});


export async function load({ }) {
    const data = await client.fetch(`*[_type == "icecreams"]`);
  
    if (data) {
        return {
            icecreams: data
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}
// END New stuff
 