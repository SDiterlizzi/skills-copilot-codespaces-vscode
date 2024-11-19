function skillmember() {
    var member = document.getElementById("member").value;
    var memberErr = document.getElementById("memberErr");
    var memberPattern = /^[0-9]+$/;
    if (!member.match(memberPattern)) {
        memberErr.innerHTML = "Only Numbers";
        memberErr.style.color = "red";
        return false;
    } else {
        memberErr.innerHTML = "Valid";
        memberErr.style.color = "green";
        return true;
    }
}