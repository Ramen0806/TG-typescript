//JavaScript code


// async function getUsers(userId){
//     const resp = await $.ajax({
//         url: `/users/${userId}`,
//         dataType: "json"
//     });


//     return {
//         id: +resp.id,
//         name:resp.name,
//         birthDate: new Date(resp.birthDate)
//     }
// }

// getUsers(1).then((user) => {
//     user.id = '1234', //error 
//     user.birthDate = "08/06/2001" //error
// })

// getUsers("2").then((user) => {
//     console.log('User:', JSON.stringify(user))
// })

//Fix

/**
 * 
 * @param {number} userId 
 * @returns user object
 */

async function getUsers(userId){
    const resp = await $.ajax({
        url: `/users/${userId}`,
        dataType: "json"
    });


    return {
        id: +resp.id,
        name:resp.name,
        birthDate: new Date(resp.birthDate)
    }
}

getUsers(1).then((user) => {
    user.id = 1234, 
    user.birthDate = new Date("08/06/2001") 
})

getUsers(2).then((user) => {
    console.log('User:', JSON.stringify(user))
})
