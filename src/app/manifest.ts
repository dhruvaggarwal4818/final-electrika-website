import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Electrika INC | Industrial Electrical Products Distributor",
    short_name: "Electrika INC",
    description: "B2B supplier and distributor of high mast poles, octagonal poles, explosion-proof fittings, and industrial plugs & sockets.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1117",
    theme_color: "#e8933a",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
