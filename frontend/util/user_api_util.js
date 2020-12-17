export const updateAutoplay = users => {
    return $.ajax({
        method: `PATCH`,
        url: `/api/users/${users.id}`,
        data: {users}
    })
}