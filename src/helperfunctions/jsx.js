import { placeholderMarker } from "../constants/strings"

export const insertInput = (input, marker) => {
  let actualMarker = <b>{"" + input + ""}</b>;
    if(marker?.toLowerCase() == "underline"){
      actualMarker = <u>{"" + input + ""}</u>
    }
    return input !== "" && input !== placeholderMarker ? (
        actualMarker
      ) : (
        <>{" " + input + " "}</>
      )
}