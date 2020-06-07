function ios_version() {
    // If It's An iDevice, Set It To 'OS x.x(.x)'
    if (navigator.userAgent.match(/iP(hone|ad|od)/)) {
        var ios_info = {};
        ios_info.Full_Release = (navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace(/_/g, ".");
        return (ios_info);
    } else {
        // If Not, Set It To 'An Undefiened iOS Version'
        var ios_info = {};
        ios_info.Full_Release = "An Undefiened iOS Version";
        return (ios_info);
    }
}
// Set Var iOS
var iOS = iOS_version();
// Set FullVersion From The Result From Lines 11-19
FullVersion = iOS.Full_Release;
// If It Contains 'iOS' (An Undefiened iOS Version), Just Set iOSVersion To Be Equal To FullVersion
if (FullVersion.indexOf('iOS') !== -1) {
    iOSVersion = FullVersion;
    // If Not, Replace 'OS x.x(.x)' With 'iOS x.x(x)', And Assign iOSVersion To That
} else {
    iOSVersion = FullVersion.replace("OS ", "iOS ");
}
// Log iOSVersion To Console
console.log(iOSVersion);
// Display On HTML Page
document.write("You Are On " + iOSVersion);