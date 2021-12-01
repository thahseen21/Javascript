// import token
let withheaderpost = (arg1) => {
    // option = {
    //     headers: { 'Content-Type': 'application/json' }
    // }

    // if (token) {
    //     option = { ...option, 'Authorization': token }
    // }
    console.log(arg1)
    return function (second) {
        console.log(arg1, second)
    }

}

// api('token')('asdf/asdf', { 'username': 'potato' }, 'post')

// api(withHeader)(Post)({ 'name': 'potato' })

// api(null)(Post)({ 'username': 'potato', password: '123456' })

withheaderpost('first')('first another')
let potato = withheaderpost('second')
console.log(potato)
potato('second potato')