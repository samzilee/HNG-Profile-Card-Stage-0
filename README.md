# 🚀 HNG Frontend Stage 1 — Profile + Multi-Page Website

A fully responsive and accessible **multi-page website** built with **HTML, CSS, and JavaScript**, created as part of the **HNG Frontend Stage 1 Project**.  
This builds upon **Stage 0**, expanding the simple profile card into a multi-page application with **Contact Us** and **About Me** pages.

---

## 🧭 Table of Contents

- [📖 Project Overview](#-project-overview)
- [🧠 Key Features](#-key-features)
- [🧩 Technologies Used](#-technologies-used)
- [📄 Pages Description](#-pages-description)
  - [Profile Page (Stage 0)](#1-profile-page-stage0)
  - [Contact Us Page (Stage 1)](#2-contact-us-page-stage1)
  - [About Me Page (Stage 1)](#3-about-me-page-stage1)
- [🧪 Data Test IDs](#-data-test-ids)
- [🧱 Accessibility & Responsiveness](#-accessibility--responsiveness)
- [⚙️ How to Run Locally](#️-how-to-run-locally)
- [🌐 Live Demo](#-live-demo)
- [👨‍💻 Author](#-author)
- [📎 License](#-license)

---

## 📖 Project Overview

This project demonstrates:

- Mastery of **semantic HTML** and **accessible UI**.
- Creation of **validated forms** with proper ARIA associations.
- Building **responsive layouts** that adapt across devices.
- Consistent and testable structure using `data-testid` attributes for automated testing.

The project includes three pages:

1. **Profile Card** (Stage 0)
2. **Contact Us Form** (Stage 1)
3. **About Me Page** (Stage 1)

---

## 🧠 Key Features

✅ Dynamic live clock that updates every second  
✅ Fully responsive UI for mobile, tablet, desktop  
✅ Keyboard-friendly, accessible navigation  
✅ Form validation with real-time feedback  
✅ Success/error messages tied to inputs via `aria-describedby`  
✅ Semantic HTML structure across all pages  
✅ All pages use `data-testid` attributes for testing consistency

---

## 🧩 Technologies Used

| Category          | Tools / Libraries                                    |
| ----------------- | ---------------------------------------------------- |
| **Frontend**      | HTML5, CSS3, JavaScript (Vanilla)                    |
| **Deployment**    | Netlify / GitHub Pages                               |
| **Accessibility** | Semantic HTML, ARIA labels, ARIA descriptions        |
| **Validation**    | Custom JavaScript validation logic                   |
| **Testing**       | React Testing Library (data-testid attributes ready) |

---

## 📄 Pages Description

### 1️⃣ Profile Page (Stage 0)

A simple yet elegant **profile card** displaying user details and live time.

**Features**

- Profile image, name, and bio
- Dynamic time display
- Social media links (GitHub, Twitter, Instagram)
- Expandable bio and “Follow” button
- Lists of hobbies and dislikes

**Test IDs**
| Element | data-testid |
|----------|--------------|
| Profile card | `test-profile-card` |
| Name | `test-user-name` |
| Bio | `test-user-bio` |
| Current time | `test-user-time` |
| Avatar | `test-user-avatar` |
| Social links | `test-user-social-links` |
| GitHub link | `test-user-social-github` |
| Twitter link | `test-user-social-twitter` |
| Instagram link | `test-user-social-instagram` |
| Hobbies list | `test-user-hobbies` |
| Dislikes list | `test-user-dislikes` |

---

### 2️⃣ Contact Us Page (Stage 1)

An accessible form that validates user input and displays real-time error messages.

**Fields**
| Field | data-testid | Validation Rules |
|--------|--------------|-----------------|
| Full Name | `test-contact-name` | Required |
| Email | `test-contact-email` | Required & valid email format |
| Subject | `test-contact-subject` | Required |
| Message | `test-contact-message` | Required, min 10 chars |
| Submit Button | `test-contact-submit` | — |
| Error Messages | `test-contact-error-<field>` | Linked via `aria-describedby` |
| Success Message | `test-contact-success` | Shown after valid submission |

**Accessibility**

- All inputs use `<label for="">` properly.
- Error messages tied via `aria-describedby`.
- Fully keyboard accessible & focusable.

---

### 3️⃣ About Me Page (Stage 1)

A reflective page sharing personal insights.

**Required Sections**
| Section | data-testid |
|----------|--------------|
| Bio | `test-about-bio` |
| Goals in this program | `test-about-goals` |
| Areas of low confidence | `test-about-confidence` |
| Note to future self | `test-about-future-note` |
| Extra thoughts | `test-about-extra` |

**Structure**

````html
<main data-testid="test-about-page">
  <section>
    <h2>Bio</h2>
    <p>...</p>
  </section>
  <section>
    <h2>Goals in this Program</h2>
    <p>...</p>
  </section>
  ...
</main>

--- ## 🚀 How to Run Locally 1. **Clone this repository:** ```bash git clone
https://github.com/samzilee/HNG-Profile-Card-Stage-0.git
````

2. Open the project folder in your code editor.
3. Open `index.html` in your browser to view the card.
4. The current time updates every second automatically.

---

## 🌐 Live Demo

🔗 **Live Site:** [https://hng-profile-card-stage-0.netlify.app/](https://hng-profile-card-stage-0.netlify.app/)

---

## 👨‍💻 Author

**Saliu Abubakar**
Frontend Developer  
📧 Salihukoko40@gmail.com
