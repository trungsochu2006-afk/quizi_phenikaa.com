const database = {
  ref: function () {
    return {
      set: function () {},
      push: function () {},
      on: function () {},
      off: function () {},
      once: function () {
        return Promise.resolve({ val: () => null });
      },
      update: function () {
        return Promise.resolve();
      },
    };
  },
};

const firebase = {
  database: function () {
    return database;
  },
  auth: function () {
    return {
      currentUser: null,
      onAuthStateChanged: function (callback) {
        callback(null);
      },
      signInAnonymously: function () {
        return Promise.resolve();
      },
    };
  },
  analytics: function () {},
};

console.log(".");
