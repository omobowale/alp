import { placeholderMarker } from "../constants/strings";
import { getActualDate, getDayOfMonth, getMonthAndYear } from "./date";

export const extractResponses = (questions) => {
    console.log("questions", questions);
    let responses = {};
    responses["dayOfAgreement"] = getDayOfMonth(getActualDate(questions.find(question => question.key == "date").response));
    responses["monthOfAgreement"] = getMonthAndYear(getActualDate(questions.find(question => question.key == "date").response));
    responses["companyName"] = "TEST 1"
    responses["companyAddress"] = "TEST 2"
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