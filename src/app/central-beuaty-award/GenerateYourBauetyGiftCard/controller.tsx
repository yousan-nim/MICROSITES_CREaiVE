import { PostAPI_Type } from "./type";

export async function PostImgAPI(imageSrc: PostAPI_Type) {
  try {
    const result = await fetch(
      "https://campaign.creaive.ai/centrall/uploadBase64",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          img_upload: imageSrc,
        }),
      }
    );
    console.log(result, "res");
  } catch (e) {
    console.log(e);
  }
}
