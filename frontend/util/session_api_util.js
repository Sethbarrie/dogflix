export const postUser = users => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: {users}
    })
}

export const deleteUser = userId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/users/${userId}`
    })
}

export const postSession = users => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: {users}
    })
}

export const deleteSession = () => {
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    })
}

// testing features for 
window.postUser = postUser;
window.postSession = postSession;
window.deleteUser = deleteUser;
window.deleteSession = deleteSession;