
var dateDefault = ['นายกำชัย บุญศรี','นุ้ย','19','วิทยาลัยเทคนิคเชียงใหม่','ประกาศนียบัตรวิชาชีพชั้นสูง','เทคโนโลยีสารสนเทศ']

function nameClick(){
    var name = prompt("Please enter your name", dateDefault[0]);
    if(!name == ""){
        document.getElementById("name").innerHTML = name;
        dateDefault[0] = name;
    }
}

function nameheader(){
    window.location.href = "#contact";
}


function nicknameClick(){
    var nickname = prompt("Please enter your nickname", dateDefault[1]);
    if(!nickname == ""){
        document.getElementById("nickname").innerHTML = nickname;
        dateDefault[1] = nickname;
    }
}

function ageClick(){
    var age = prompt("Please enter your age", dateDefault[2]);
    if(!age == ""){
        document.getElementById("age").innerHTML = age;
        dateDefault[2] = age;
    }
}

function academyClick(){
    var academy = prompt("Please enter your academy", dateDefault[3]);
    if(!academy == ""){
        document.getElementById("academy").innerHTML = academy;
        dateDefault[3] = academy;
    }
}
function levelClick(){
    var level = prompt("Please enter your level", dateDefault[4]);
    if(!level == ""){
        document.getElementById("level").innerHTML = level;
        dateDefault[4] = level;
    }
}
function branchClick(){
    var branch = prompt("Please enter your branch", dateDefault[5]);
    if(!branch == ""){
        document.getElementById("branch").innerHTML = branch;
        dateDefault[5] = branch;
    }
}

var dataEducation = ['โรงเรียนวัดช่างเคี่ยน','สาขาวิชาเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคเชียงใหม่','สาขาวิชาเทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคเชียงใหม่'];
function secondary_educationClick(){
    var secondary = prompt("Please enter your  education", dataEducation[0]);
    if(!secondary == ""){
        document.getElementById("title-education-1").innerHTML = secondary;
        dataEducation[0] = secondary;
    }
}
function vocational_certificateClick(){
    var vocational = prompt("Please enter your  eduvocational certificate ", dataEducation[1]);
    if(!vocational == ""){
        document.getElementById("title-education-2").innerHTML = vocational;
        dataEducation[1] = vocational;
    }
}
function high_vocational_certificateClick(){
    var high_vocational = prompt("Please enter your  high eduvocational certificate ", dataEducation[2]);
    if(!high_vocational == ""){
        document.getElementById("title-education-3").innerHTML = high_vocational;
        dataEducation[2] = high_vocational;
    }
}

var dataTalent = ['มีความสามารถในการสื่อสารได้เป็นอย่างดี','มีมารยาททางสังคมและประพฤติตนเหมาะสมตามกาลเทศะ','ลำดับความสำคัญของงานแต่ละชิ้นได้ มีความสามารถในการวางแผน'];
function talent_1_Click(){
    var talent_1 = prompt("Please enter your  talent 1 ", dataTalent[0]);
    if(!talent_1 == ""){
        document.getElementById("talent_1").innerHTML = talent_1;
        dataTalent[0] = talent_1;
    }
}
function talent_2_Click(){
    var talent_2 = prompt("Please enter your  talent 2 ", dataTalent[1]);
    if(!talent_2 == ""){
        document.getElementById("talent_2").innerHTML = talent_2;
        dataTalent[1] = talent_2;
    }
}
function talent_3_Click(){
    var talent_3 = prompt("Please enter your  talent 3 ", dataTalent[2]);
    if(!talent_3 == ""){
        document.getElementById("talent_3").innerHTML = talent_3;
        dataTalent[2] = talent_3;
    }
}