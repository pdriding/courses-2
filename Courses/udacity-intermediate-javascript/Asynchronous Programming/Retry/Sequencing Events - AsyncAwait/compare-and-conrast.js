// ---------  NESTED CALLBACKS ---------------

const mockAPI = (returnValue) => (arg, cb) => {
  setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);

const runCallbacks = () => {
  fetchSession("session-id", (session) => {
    fetchUser(session, (user) => {
      fetchUserFavorites(user, (favorites) => {
        console.log(favorites);
      });
    });
  });
};

// ------- FLAT CALLBACK ------------

const mockAPI = (returnValue) => (arg, cb) => {
  setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);

const runCallbacksFlat = () => {
  const handleFavorites = (favorites) => {
    console.log(favorites);
  };

  const handleUser = (user) => {
    fetchUserFavorites(user, handleFavorites);
  };

  const handleSession = (session) => {
    fetchUser(session, handleUser);
  };

  fetchSession("session-id", handleSession);
};

// -------------- PROMISES ---------

const mockAPI = (returnValue) => (arg, cb) => {
  setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);

const runPromises = () => {
  return fetchSession("session-id")
    .then((session) => fetchUser(session))
    .then((user) => fetchUserFavorites(user))
    .then((favorites) => console.log(favorites))
    .catch((error) => console.log("oops!"));
};

// ------------ ASYNC / AWAIT -----------

const mockAPI = (returnValue) => (arg, cb) => {
  setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);

const runAsync = async () => {
  try {
    const session = await fetchSession("session-id");
    const user = await fetchUser(session);
    const favorites = await fetchUserFavorites(user);
    console.log(favorites);
  } catch (error) {
    console.log("oops!");
  }
};
