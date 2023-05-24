const db = firebase.database();
const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError);

let loop1;

let kkm1 = 0;
let kkm2 = 0;
let tes = 0;

function kkmSuccess(items1) {

  kkm1 = items1.val()[0]['kkm'];
  kkm2 = items1.val()[1]['kkm'];

}

function handleError(error) {
  console.log(error);
}

/*subbab 2*/
function pengantar2() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/pengantar2.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function materi21() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/materi21.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function materi22() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/materi22.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function materi23() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/materi23.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}
function materi24() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/materi24.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}

function materi25() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/materi25.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}

function materi26() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/materi26.html';
  } else {
    isiTutor.innerHTML = 'Materi';
    $('#tutorialModal').modal('show');
  }
}

function latihan2() {
  let skor = localStorage.getItem("nkuis1");
  if (parseInt(tes) >= parseInt(kkm1)) {
    window.location.href = '../materi/latihan2.html';
  } else {
    isiTutor.innerHTML = 'Kuis';
    $('#tutorialModal').modal('show');
  }
}


/*rangkuman*/
function rangkuman() {
  let skor = localStorage.getItem("nkuis2");
  if (parseInt(tes) >= parseInt(kkm2)) {
    window.location.href = '../materi/rangkuman.html';
  } else {
    isiTutor.innerHTML = 'Rangkuman';
    $('#tutorialModal').modal('show');
  }
}

/*evaluasi*/
function evaluasi() {
  let skor = localStorage.getItem("nkuis2");
  if (parseInt(tes) >= parseInt(kkm2)) {
    window.location.href = '../materi/evaluasi.html';
  } else {
    isiTutor.innerHTML = 'Evaluasi';
    $('#tutorialModal').modal('show');
  }
}