export const placeholderMarker = "_____________"

export const insertPlaceHolderMarker = (str) => {
    
        let actualValue = str
        if(actualValue === "") {
          actualValue = placeholderMarker
        }

        return actualValue;
        
      
}