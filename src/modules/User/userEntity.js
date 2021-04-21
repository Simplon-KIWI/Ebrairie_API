class UserEntity {
  constructor({ id, lastname, firstname, email, password, role }) {
    this.id = id;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  validateReader() {
    if (!this.email) return false;
    else return true;
  }

  validateAdmin() {
    if (!this.email || !this.password) return false;
    if (!this.role || this.role !== 'admin') return false;
    else return true;
  }
}

export default UserEntity;
