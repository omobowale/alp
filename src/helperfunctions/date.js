import { placeholderMarker } from "../constants/strings";

const daysOfMonthInWords = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st"
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const getDathValue = (dayOfMonth) => {
    return daysOfMonthInWords[Number(dayOfMonth) - 1]
};

export const getActualDate = (selectedDate) => {
    console.log("i got here", selectedDate);
    if (selectedDate === "") {
        return "";
    }
    try {
        let obj = {};
        let date = new Date(Date.parse(selectedDate));

        obj.month = months[date.getMonth()]

        obj.day = getDathValue(date.getDate())
        obj.year = date.getFullYear()

        return obj
    } catch (e) {
        return ""
    }
}

export const getDayOfMonth = (obj) => {
    if (obj.day) {
        return obj.day
    }
    return placeholderMarker
}

export const getMonthAndYear = (obj) => {
    if (obj.month && obj.year) {
        return obj.month + " " + obj.year
    }
    return placeholderMarker
}
