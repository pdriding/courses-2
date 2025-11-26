const mockAPI = (returnValue) => (arg, cb) => {
  setTimeout(() => cb(returnValue), 2000);
};

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);

// ---------- NESTED -----------------------

const runCallbacks = () => {
  fetchSession("session-id", (session) => {
    fetchUser(session, (user) => {
      fetchUserFavorites(user, (favorites) => {
        console.log(favorites);
      });
    });
  });
};

// ---------------- FLAT ----------------

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
