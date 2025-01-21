/*
 * if statement
 */
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

/*
 * nested if statement
 */
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

/*
 * switch statement
 */
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

/*
 * ternary operator
 */
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

/*
 * practice task
 */
userType = "subscriber";

switch (userType) {
    case "employee":
        console.log("Welcome employee. Dietary Services");
        break;
        
    case "member":
        console.log("Welcome member. Dietary Services, one-on-one interaction with a dietician");
        break;
        
    case "subscriber":
        console.log("Welcome subscriber. Partial Dietary Services");
        break;
        
    case "new":
        console.log("Welcome new user. Subscribe");
        break;
}
