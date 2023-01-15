import { placeholderMarker } from "../constants/strings";
import axiosTemplate from "../utils/axiosTemplate";
import { getActualDate, getDayOfMonth, getMonthAndYear } from "./date";

export const extractResponses = (questions) => {
    let responses = {};
    responses["dayOfAgreement"] = getDayOfMonth(getActualDate(questions.find(question => question.key == "date")?.response));
    responses["monthOfAgreement"] = getMonthAndYear(getActualDate(questions.find(question => question.key == "date")?.response));
    questions.forEach((question, index) => {

        responses[question.key] = question.response;

    });

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

export const removeCurrentDetailsFromLocalStorage = () => {
    localStorage.removeItem("currentDetails");
}


export const loadTemplate = async (templateId, setTemplateLoading, setTemplateDetails) => {
    setTemplateLoading(true);
    const data = axiosTemplate(
        `/api/Template/getByDocId/` + templateId + "/",
        "GET",
        null,
        null
    );
    const response = await data
        .then((res) => {
            setTemplateLoading(false);
            if (res.status === 200) {
                setTemplateDetails(res.data.data);
                // return res.data;
            }
        })
        .catch((err) => {
            setTemplateLoading(false);
            setTemplateDetails(null);
        });

    return response;
};

