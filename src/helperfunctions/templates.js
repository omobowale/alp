import { placeholderMarker } from "../constants/strings";
import axiosTemplate from "../utils/axiosTemplate";
import { getActualDate, getDayOfMonth, getMonthAndYear } from "./date";
import jsPDF from 'jspdf';


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
    let actualQuestions = []
    for (let question of questions) {
        let actualQuestion = {}
        for (const q in question) {
            if (q !== "ref") {
                actualQuestion[q] = question[q]
            }
        }
        actualQuestions.push(actualQuestion)
    }
    localStorage.setItem("currentDetails", JSON.stringify(actualQuestions));
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

export const getUserTemplates = async (user_id) => {
    const data = axiosTemplate(
        `/Template/${user_id}`,
        "GET",
        null,
        null
    );
    const response = await data
        .then((res) => {

            if (res.status === 200) {
                return res.data;
            }
        })
        .catch((err) => {
        });


    return response;
}

export const getAllTemplates = async () => {

    const data = axiosTemplate(
        `/Templates`,
        "GET",
        null,
        null
    );
    const response = await data
        .then((res) => {

            if (res.status === 200) {

                return res.data;
            }
        })
        .catch((err) => {
        });

    return response;
};

export const testLoadTemplate = async () => {
    const data = axiosTemplate(
        `/Templates`,
        "GET",
        null,
        null
    );

    const response = await data
        .then((res) => {
            if (res.status === 200) {
                // return res.data;
            }
        })
        .catch((err) => {
        });

    return response;

}

export const loadTemplate = async (templateId, setTemplateLoading, setTemplateDetails) => {


    setTemplateLoading(true);
    const data = axiosTemplate(
        `/Templates/` + templateId + "",
        "GET",
        null,
        null
    );

    const response = await data
        .then((res) => {
            setTemplateLoading(false);
            if (res.status === 200) {

                let newData = {
                    id: res.data.data.id,
                    cost: res.data.data.price,
                    name: res.data.data.name,
                    description: res.data.data.description,
                    label: res.data.data.label
                }

                setTemplateDetails(newData);
                return newData;
            }

            return null;
        })
        .catch((err) => {
            setTemplateLoading(false);
            setTemplateDetails(null);
            return null;
        });

    return response;
};


export const handleTemplateDownload = async (templateId, userId, email, templateName) => {


    const data = axiosTemplate(
        `/Downloads/${templateId}/${userId}`,
        "GET",
        null,
        null,
        "blob"
    );
    const response = await data
        .then((res) => {
            if (res.status === 200) {
                const blob = new Blob([res.data], { type: 'application/pdf' })
                const href = URL.createObjectURL(blob);

                // create "a" HTML element with href to file & click
                const link = document.createElement("a");
                // link.href = href;
                link.href = `https://backend.alphalex.com.ng/Downloads/${templateId}/${userId}`;
                link.setAttribute("download", templateName + ".pdf"); //or any other extension
                link.setAttribute("target", "_parent"); //or any other extension
                document.body.appendChild(link);
                link.click();

                // clean up "a" element & remove ObjectURL
                document.body.removeChild(link);
                URL.revokeObjectURL(href);
            }

            return res.data;
        })
        .catch((err) => {
            return -1;
        });

    return response;

};


export const saveTemplate = async (requestData, templateName) => {
    const data = axiosTemplate(
        `/Template/${templateName}`,
        "POST",
        requestData,
        localStorage.getItem("token")
    );
    const response = await data
        .then((res) => {
            return res
        })
        .catch((err) => {
        });

    return response;
};

export const updateTemplate = async (id, requestData) => {
    const data = axiosTemplate(
        `/api/UserTemplate/Update/${id}`,
        "PUT",
        requestData,
        localStorage.getItem("token")
    );
    const response = await data
        .then((res) => {
        })
        .catch((err) => {
        });

    return response;
};

export const loadUserTemplateResponse = (userResponse) => {

    let currentDetails = JSON.parse(localStorage.getItem("currentDetails"));
    if (currentDetails) {
        for (let detail of currentDetails) {
            if (userResponse[detail.key]) {
                detail["response"] = userResponse[detail.key]
            }
        }
    }
    localStorage.setItem("currentDetails", JSON.stringify(currentDetails))
}

export const storeUserTemplateResponse = (userResponse) => {
    localStorage.setItem("userResponse", JSON.stringify(userResponse))
    localStorage.setItem("edit", 1)
}


export const handleGeneratePdf = (reportTemplateRef, docName) => {
    const doc = new jsPDF({
        format: 'a4',
        unit: 'px',
    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.html(reportTemplateRef.current, {
        async callback(doc) {
            await doc.save(docName);
        },
    });
};

export const getAPIKeys = async () => {
    const data = axiosTemplate(
        `/Settings/getAPIKeys`,
        "GET",
        null,
        localStorage.getItem("token")
    );
    const response = await data

    return response;
};