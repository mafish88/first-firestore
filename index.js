import { addArt, getAllArt } from "./src/art.js";

await addArt({
    artist: "Van Gough",
    title: "Irises",
    media: "Oil" ,
});

await addArt({
    artist: "Da Vinci",
    title: "Last Supper",
    media: "Oil",
});
await getAllArt();