import { dispatch } from "../../app/store";
import { setProgress } from "./templateSlice";

export const SetProgress = (form) => async () => {

    const unFilledForms = form.filter((ele) => ele.value !== "").length;
    const progress = Math.ceil((unFilledForms / form.length) * 100)
 
    dispatch(setProgress(progress))
}