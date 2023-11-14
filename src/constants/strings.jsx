export const placeholderMarker = "_____________"
export const TEST_PUBLIC_KEY  = "pk_test_c7e41457f29c358f48dc4fcc9bc1cbd6c9fee09b"

export const insertPlaceHolderMarker = (str) => {
    
        let actualValue = str
        if(actualValue === "") {
          actualValue = placeholderMarker
        }

        return actualValue;
        
      
}

export const VAT = 0.05

