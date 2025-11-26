// In this challenge, the promise will resolve with a given data set.
// Create a promise chain of four steps to do the following

// Step 1: Return only the unread alerts, if there are none, trigger an error that says there are no unread alerts
// Step 2: If the alert is a system alert, call the printSystemAlert function on it and remove it from the list
// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no ciritical alerts, do nothing and proceed to step 4
// Step 4: Console log all other types of alerts with the message, severity, and type properties

const alerts = [
  {
    type: "system",
    severity: "critical",
    timestamp: "",
    message: "System has experienced an error and must be restarted",
    user_id: null,
    short_code: "VDN877",
    readStatus: true,
  },
  {
    type: "users",
    severity: "critical",
    timestamp: "",
    message: "Unauthorized access to the system has been logged",
    user_id: null,
    short_code: "VDN077",
    readStatus: false,
  },
  {
    type: "system",
    severity: "informational",
    timestamp: "",
    message: "There are new updates available",
    user_id: null,
    short_code: "VDN827",
    readStatus: false,
  },
  {
    type: "users",
    severity: "warning",
    timestamp: "",
    message: "Some users on this system have not updated their passwords",
    user_id: null,
    short_code: "HDN877",
    readStatus: false,
  },
];

// Function to remove an object from the array based on a condition
const removeObjectByCondition = (array, condition) => {
  return array.filter((item) => !condition(item));
};

const printSystemAlert = (alert) => {
  console.log("hello");
  console.info(
    alert,
    `This is a ${alert.severity} system wide alert: ${alert.message}`
  );
};

new Promise((resolve, reject) => {
  // your code here
  resolve(alerts);
})
  .then((data) => {
    const readMessage = data.filter((data) => data.readStatus === false);
    if (readMessage) {
      return readMessage;
    }
    throw new Error("No unread messages");
  })
  .then((data) => {
    const newData = data.filter((data) => {
      if (data.type === "system") {
        printSystemAlert(data);
      } else return data;
    });
    return newData;
  })
  .then((data) => {
    const newData = data.filter((data) => {
      if (data.severity === "critical") {
        console.error(data.message);
      } else return data;
    });
    return newData;
  })
  .then((data) => console.log(data))
  .catch((error) => {
    console.log(error);
  });

// Step 3: Create a console.error message for the critical alerts that prints the alert message, if there are no ciritical alerts, do nothing and proceed to step 4

//------------ SOLUTION -------------

new Promise((resolve, reject) => {
  resolve(alerts);
})
  .then((data) => {
    const unread = data.filter((d) => d.readStatus === false);

    if (unread.length === 0) {
      throw new Error("There are no unread alerts");
    }
    return unread;
  })
  // you can name this whatever you want, so make it descriptive!
  .then((unreadAlerts) => {
    // might be tempted to save this into a variable, but you don't have to
    return unreadAlerts.filter((alert) => {
      if (alert.type === "system") {
        printSystemAlert(alert);
      } else {
        return true;
      }
    });
  })
  .then((filteredAlerts) =>
    filteredAlerts.map((alert) => {
      if (alert.severity === "critical") {
        console.error(alert.message);
      } else {
        console.log(`${alert.severity} ${alert.type} alert: ${alert.message}`);
      }
    })
  );
