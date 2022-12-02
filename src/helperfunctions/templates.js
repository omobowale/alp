import { placeholderMarker } from "../constants/strings";

export const extractResponses = (questions) => {
    console.log("questions", questions);
    let responses = {};
    questions.forEach((question, index) => {
        console.log("responnse" + index, question.response);

        responses[question.key] = question.response;

    });

    console.log("responses", responses);

    return responses;
};

export const saveCurrentDetails = (questions) => {
    localStorage.setItem("currentDetails", JSON.stringify(questions));
};

export const getCurrentDetails = () => {
    return JSON.parse(localStorage.getItem("currentDetails"));
}

export const insertValue = (value) => {
    if (value === placeholderMarker) {
        return ""
    }
    return value;
}