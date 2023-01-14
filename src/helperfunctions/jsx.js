import { placeholderMarker } from "../constants/strings"

export const insertInput = (input, marker1) => {
  console.log("input", input)
  let actualMarker = <b>{"" + input + ""}</b>;
    if(marker1?.toLowerCase() == "underline bold"){
      actualMarker = <u><b>{"" + input + ""}</b></u>
    }
    else if(marker1?.toLowerCase() == "underline"){
      actualMarker = <u>{"" + input + ""}</u>
    }
    else if(marker1?.toLowerCase() == "bold"){
      actualMarker = <b>{"" + input + ""}</b>
    }
    else if(marker1?.toLowerCase() == "regular"){
      actualMarker = <>{"" + input + ""}</>
    }
    return input !== "" && input !== placeholderMarker ? (
        actualMarker
      ) : (
        <>{" " + input + " "}</>
      )
}