document.addEventListener("DOMContentLoaded", () => {

  const nextBtn = document.getElementById("toAssignment");
  const submitBtn = document.getElementById("submitBtn");


  // ---------- NEXT BUTTON (SECTION 1 → SECTION 2) ----------
  nextBtn?.addEventListener("click", (e) => {

    e.preventDefault();

    const name = document.getElementById("userName").value.trim();
    const semester = document.getElementById("userSemester").value;
    const mood = document.querySelector('input[name="semMood"]:checked');

    let valid = true;

    if (!name) {
      document.getElementById("userNameError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("userNameError").style.display = "none";
    }

    if (!semester) {
      document.getElementById("userSemesterError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("userSemesterError").style.display = "none";
    }

    if (!mood) {
      document.getElementById("moodError").style.display = "block";
      valid = false;
    } else {
      document.getElementById("moodError").style.display = "none";
    }

    if (!valid) return;

    // Hide section 1
    document.getElementById("qMood").style.display = "none";

    // Show section 2
    document.getElementById("sectionAssignment").style.display = "block";

    // Update progress bar
    const bar = document.getElementById("progressBar");
    if (bar) {
      bar.style.width = "50%";
      bar.textContent = "50%";
    }

  });

// ---------- NEXT BUTTON (SECTION 2 → SECTION 3) ----------
const next2 = document.getElementById("toAttendance");

next2?.addEventListener("click", (e) => {

  e.preventDefault();

  const pending = document.getElementById("pending").value;
  const remember = document.getElementById("remember").value;

  if (!pending || !remember) {
    alert("Please answer all questions in this section.");
    return;
  }

  // hide section 2
  document.getElementById("sectionAssignment").style.display = "none";

  // show section 3
  document.getElementById("sectionAttendance").style.display = "block";

  // update progress bar
  const bar = document.getElementById("progressBar");
  if (bar) {
    bar.style.width = "75%";
    bar.textContent = "75%";
  }

});

// ---------- NEXT BUTTON (SECTION 3 → SECTION 4) ----------
const next3 = document.getElementById("toMental");

next3?.addEventListener("click", (e) => {

  e.preventDefault();

  const attendance = document.getElementById("attendance").value;

  if (!attendance) {
    alert("Please select your attendance.");
    return;
  }

  // Hide Attendance Section
  document.getElementById("sectionAttendance").style.display = "none";

  // Show Mental Health Section
  document.getElementById("sectionMental").style.display = "block";

  // Update progress bar
  const bar = document.getElementById("progressBar");
  if (bar) {
    bar.style.width = "100%";
    bar.textContent = "100%";
  }

});





  // ---------- FINAL SUBMIT ----------
  submitBtn?.addEventListener("click", async (e) => {

    e.preventDefault();

    const payload = {
      userName: document.getElementById("userName").value,
      userSemester: document.getElementById("userSemester").value,
      pending: document.getElementById("pending").value,
      remember: document.getElementById("remember").value,
      attendance: document.getElementById("attendance").value,
      stable: document.getElementById("stableLevel").value,
      voice: document.querySelector('input[name="voice"]:checked')?.value
    };

    console.log("Sending survey:", payload);

    try {

      const response = await fetch("/submit-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      console.log("Server response:", data);

      // Confetti animation
      if (typeof confetti === "function") {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      }

      setTimeout(() => {
        window.location.href = "thankyou.html";
      }, 2000);

    } catch (err) {

      console.error("Submission error:", err);
      alert("Failed to submit survey.");

    }

  });

});

