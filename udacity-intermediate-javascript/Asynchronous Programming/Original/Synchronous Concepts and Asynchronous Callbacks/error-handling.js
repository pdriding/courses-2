const mockAPI = (returnValue) => (arg, success, failure) => {
  setTimeout(() => success(returnValue), 2000);
};

// const mockAPI = (returnValue) => (arg, success, failure) => {
//   setTimeout(() => failure("Request Failed"), 2000);
// };

const fetchSession = mockAPI({ id: "123765" });
const fetchUser = mockAPI({ firstname: "Bob" });
const fetchUserFavorites = mockAPI(["lions", "tigers", "bears"]);
const handleError = (error) => {
  // you can put more custom logic here
  console.log(error);
};

const runCallbacks = () => {
  fetchSession(
    "session-id",
    (session) => {
      fetchUser(
        session,
        (user) => {
          fetchUserFavorites(
            user,
            (favorites) => {
              console.log(favorites);
            },
            handleError
          );
        },
        handleError
      );
    },
    handleError
  );
};

runCallbacks();

// ----------------------
