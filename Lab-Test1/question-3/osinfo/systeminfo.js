var getSystemInfo = function() {
    console.log('\nCPU Architecture: ' + os.arch());
    console.log('\nHostname: ' + os.hostname());
    console.log('\nOS Name: ' + os.type());
}

var getUserInfo = function() {
    console.log('\nUser Info: ' + os.getUserInfo());
}