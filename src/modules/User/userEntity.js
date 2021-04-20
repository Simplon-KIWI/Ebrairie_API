class UserEntity {
  constructor({ id, lastname, firstname, email, password, role }) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  validate() {
    if (!this.email || !this.password) return false;
    else return true;
  }
}

export default UserEntity;