type User = {
 name: string
 email: string
 address: {
  city: string
  state?: string
 }
}

function showWelcomeMessage(user: User) {
 return `Welcome ${user.name}, your e-mail ${user.email} and your city is ${user.address.city}` ;
}

const user = {
 name: 'John Doe',
 email: 'mmm@mm.com',
 address: {
  city: 'Rio de Janeiro',
  state: 'RJ'
 }
}

const message = showWelcomeMessage(user)

