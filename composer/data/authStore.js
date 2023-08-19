import { observable } from "mobx";

/**
 * A mobx store that contains data about the currently authenticated user such as the user's
 * primary role, name, and uniqueId. This store is mostly used for workflows that require
 * user permissions to be applied, such as conditionally displaying the scriptlet tool for
 * admin users
 */
class AuthStore {
  /**
   * Refers to the currently authenticated user (e.g., the user that is currently logged)
   * into Vision. This object primarily contains data from Vision's User.java object, but
   * since User.java contains circular dependencies (i.e., it references itself) it cannot
   * be serialized and thus a custom object is built. See UserController.java and
   * GetUserResponse.java for more information
   */
  @observable user;

  constructor() {
    this.user = null;
  }

  setUser(user) {
    this.user = user;
  }
}

export default AuthStore;
