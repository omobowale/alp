export const getLoggedInUser = () => {
    let localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
        return JSON.parse(localStorage.getItem("user"))
    }
    return null;
}