
function getUserDetails(id,getUserSubjects){
    console.log("getting user details by userId", id);//API CALL
    getUserSubjects({userroll: "678"})
};
function getUserSubjects(userRoll, getUserMarks){
    console.log("getting user subjects by roll number", userRoll); //API CALL
    getUserMarks({subid: "en-1"})
}
function getUserMarks(userSubId){
    console.log("getting user marks with subid", userSubId)
}
getUserDetails("123", function(userRoll){
    getUserSubjects(userRoll, function(userSubId){
        getUserMarks(userSubId)
    })
});

console.log("testing");

setTimeout(() => {
    console.log("hello")
}, 2000);
console.log("final console")